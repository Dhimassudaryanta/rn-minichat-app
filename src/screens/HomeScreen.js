import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, FlatList, Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native';
import HeaderComponent from "../components/Header.component";
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from "moment";

const HomeScreen = ({ navigation }) => {

    const [newUser, setNewUser] = useState('');

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getUser();
            // The screen is focused
            // Call any action
        });
        getUser()
        // restart()
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;


    }, [])

    const getUser = async () => {
        const response = await AsyncStorage.getItem('user')
        const parse = JSON.parse(response);
        console.log(parse)
        setNewUser(parse);
    }

    const onClickHandler = () => {
        navigation.navigate('AddChat')
    }
    const onNextHandler = (item) => {
        navigation.navigate('ChatScreen', { item })
    }
    const restart = async () => {
        await AsyncStorage.setItem('user', '')
    }

    return (
        <View style={styles.screen}>
            <StatusBar
                // backgroundColor={'white'}
                // translucent
                backgroundColor="white"
                barStyle="dark-content"
            >
            </StatusBar>
            <HeaderComponent
                title='Mini Chat'
                onClick={onClickHandler}
            >
            </HeaderComponent>
            <View style={{
                // borderWidth: 1,
                // borderColor: 'black',
                height: 500,
                alignItems: 'center',
            }}>
                <View style={{

                    width: '95%'
                }}>
                    <FlatList
                        data={newUser}
                        renderItem={({ item }) =>
                            <View style={{
                                // borderColor: 'black',
                                // borderWidth: 1,
                                height: Dimensions.get('window').height / 8,
                                flexDirection: 'row',
                                // paddingTop: Dimensions.get('window').height * 1.5 / 100,
                                // paddingHorizontal: Dimensions.get('window').height * 1.5 / 100,
                                borderBottomColor: '#ccc',
                                borderBottomWidth: 1

                            }}>
                                <View style={{
                                    width: '20%',
                                    justifyContent: 'center'
                                }}>
                                    <ImageBackground style={{
                                        // borderWidth: 1,
                                        // borderColor: '#939393',
                                        borderRadius: Dimensions.get('window').height / 12,
                                        height: Dimensions.get('window').height / 12,
                                        width: Dimensions.get('window').height / 12,
                                        backgroundColor: '#939393',
                                        alignItems: 'center',
                                        justifyContent: 'center',


                                    }}>
                                        <Text style={{
                                            color: 'black',
                                            fontWeight: '800',
                                            fontSize: 25
                                        }}>{item.name.match(/\b\w/g).join('')}</Text>
                                    </ImageBackground>
                                </View>
                                <View style={{
                                    width: '65%',
                                    // borderColor: 'black',
                                    // borderWidth: 1,
                                    paddingHorizontal: 10,
                                    paddingTop: 15,
                                }}>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 16,
                                        color: 'black'
                                    }}>{item.name}</Text>
                                    {
                                        item.date ?
                                            <Text style={{
                                                fontWeight: 'bold',
                                                paddingTop: 12,
                                                fontSize: 14,
                                                color: 'grey'
                                            }}>{moment(item.date).format('HH:mm')}</Text> :
                                            null
                                    }

                                </View>


                                <TouchableOpacity
                                    onPress={() => onNextHandler(item)}
                                    style={{
                                        // borderWidth: 1,
                                        // borderColor: 'black',
                                        justifyContent: 'center',
                                        width: '15%',
                                        alignItems: 'center'

                                    }}>
                                    <Image style={{
                                        width: 20,
                                    }}
                                        source={require('../../assets/rightarrow.png')}
                                        resizeMode="contain"
                                    >

                                    </Image>
                                </TouchableOpacity>
                            </View>
                        }
                    >

                    </FlatList>
                </View>
            </View >

        </View >
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
        flex: 1
    }
})

export default HomeScreen;