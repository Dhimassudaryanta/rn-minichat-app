import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddChat = ({ navigation }) => {

    const [name, setName] = useState('');

    const onSubmitHandler = async () => {
        const response = await AsyncStorage.getItem('user');


        // console.log(JSON.parse(response));

        // console.log(parse[parse.length - 1].id)

        // const id = parse[parse.length - 1].id + 1
        const id = Math.floor(Math.random() * (9999 - 1 + 1) + 12);
        console.log(id)

        if (response) {
            const parse = JSON.parse(response);
            var someArray = [...JSON.parse(response), { id: id, name: name }]
            console.log(someArray)

            await AsyncStorage.setItem('user', JSON.stringify(someArray))
            navigation.navigate('Home')
        }
        else if (!response) {
            const parse = JSON.parse(response);
            var someArray = [{ id: id, name: name }]
            console.log(someArray)

            await AsyncStorage.setItem('user', JSON.stringify(someArray))
            navigation.navigate('Home')
        }

        // var arr1 = [{ id: 1, name: 'Dhimas' }, 2, 3]
        // var obj = 4
        // var newData = [...arr1] // [1,2,3,4]
        // console.log(newData);
        // await AsyncStorage.setItem('user', JSON.stringify(someArray))
    }

    useEffect(() => {
        hehe()
    }, [])

    const hehe = async () => {
        const response = await AsyncStorage.getItem('user')
        console.log(response)
    }

    return (
        <View style={styles.screen}>
            <View style={{
                // borderColor: 'black',
                // borderWidth: 1,
                width: '90%',
                alignItems: 'center'
            }}>
                <View style={{
                    borderWidth: 1,
                    borderColor: '#939393',
                    borderRadius: 100,
                    height: 100,
                    width: 100,
                    backgroundColor: '#939393',
                    marginTop: Dimensions.get('window').height * 2 / 10
                }}>

                </View>
                <View style={{
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <Text style={{
                        fontSize: Dimensions.get('window').height / 50,
                        color: 'black',
                        fontWeight: '300',
                        marginTop: 20
                    }}>Add chat with new user</Text>
                    <TextInput
                        placeholder="Input new username"
                        onChangeText={(text) => setName(text)}
                        style={{
                            borderWidth: 0.5,
                            borderRadius: Dimensions.get('window').height / 35,
                            borderColor: 'black',
                            width: '70%',
                            // height: 35,
                            marginTop: 10,
                            textAlign: 'center'
                        }}
                    ></TextInput>
                </View>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: '#939393',
                    height: 35,
                    borderRadius: 50,
                    width: '70%',
                    backgroundColor: '#939393',
                    marginTop: Dimensions.get('window').height * 1 / 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                    onPress={() => onSubmitHandler()}
                >
                    <Text style={{
                        color: 'white'
                    }}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    }
})

export default AddChat;