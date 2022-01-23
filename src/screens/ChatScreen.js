import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import HeaderComponent from '../components/Header.component';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

// launchImageLibrary(options?, callback)

// // You can also use as a promise without 'callback':
// const result = await launchImageLibrary(options?);

const ChatScreen = ({ route }) => {

    const { item } = route.params;

    const [text, setText] = useState('');
    const [responseImage, setResponse] = useState('');

    const [chat, setChat] = useState('');

    // console.log(response.assets[0].base64);

    useEffect(() => {

        // restart();
        getData();

    }, [])


    const getData = async () => {
        const response = await AsyncStorage.getItem('chat');
        // console.log('wkwkw')
        console.log(response)

        if (response) {
            const parseGet = JSON.parse(response);


            const find = parseGet.data.find(element => element.userid === item.id)
            setChat(find);
        }
        else {

        }
    }

    const restart = async () => {
        await AsyncStorage.setItem('chat', '')
    }

    const onSubmitHandler = async () => {



        if (text) {
            // console.log(text)
            const response = await AsyncStorage.getItem('chat');
            const hehe = moment();
            if (!response) {

                const someArray = { data: [{ userid: item.id, data: [{ id: 1, chat: text, date: hehe, key: Math.floor(Math.random() * 1030) + 1 - 2 + 3 }, { id: 3, chat: 'Hi, this is auto generated text', date: hehe, key: Math.floor(Math.random() * 1030) + 1 - 2 + 3 }] }] }
                console.log(someArray);

                const submit = await AsyncStorage.setItem('chat', JSON.stringify(someArray))
                const response2 = await AsyncStorage.getItem('chat');
                const parseGet = JSON.parse(response2);

                const find2 = parseGet.data.find(element => element.userid === item.id)

                setChat(find2);
                setText('');

                //BATAS

                // const response = await AsyncStorage.getItem('chat');
                // setChat(JSON.parse(response));
                // setText('');
            }
            else if (response) {
                const parse = JSON.parse(response);
                const find = parse.data.find(element => element.userid === item.id)

                const hehe = moment();

                if (find) {
                    console.log('ada nih')

                    console.log(response);

                    const found = parse.data.find(element => element.userid === item.id);
                    const someArray = [...found.data, { id: 1, chat: text, date: hehe, key: Math.floor(Math.random() * 100) + 1 }, { id: 3, chat: 'Hi, this is auto generated text', date: hehe, key: Math.floor(Math.random() * 1030) + 1 - 2 + 3 }]



                    const user = await AsyncStorage.getItem('user');
                    const parseUser = JSON.parse(user);
                    const newUser = parseUser.find(x => x.id === item.id);
                    newUser["date"] = hehe;
                    console.log(newUser);
                    const filterUser = parseUser.filter(element => element.id != item.id)
                    console.log(filterUser)
                    filterUser.unshift(newUser)

                    console.log(filterUser)
                    await AsyncStorage.setItem('user', JSON.stringify(filterUser))





                    //BATAS



                    const someArray3 = [...parse.data.filter(element => element.userid != item.id), { data: someArray, userid: item.id }]

                    const someArray4 = { data: someArray3 }
                    console.log(someArray4)

                    await AsyncStorage.setItem('chat', JSON.stringify(someArray4))
                    const response2 = await AsyncStorage.getItem('chat');

                    const parseGet = JSON.parse(response2);

                    const find2 = parseGet.data.find(element => element.userid === item.id)

                    setChat(find2);
                    setText('');


                }
                else if (!find) {
                    // const someArray = [...found.data, { id: 1, chat: text, date: hehe }, { id: 3, chat: 'Hi, this is auto generated text', date: hehe }]

                    console.log(parse)
                    const someArray = [...parse.data, { userid: item.id, data: [{ id: 1, chat: text, date: hehe, key: Math.floor(Math.random() * 100) + 1 }, { id: 3, chat: 'Hi, this is auto generated text', date: hehe, key: Math.floor(Math.random() * 1030) + 1 - 2 + 3 }] }]
                    console.log(someArray);

                    console.log(parse)
                    const someArray2 = { data: someArray }
                    console.log('ini some array 2')
                    console.log(someArray2)
                    console.log(someArray2.data[0])
                    console.log(someArray2.data[1])

                    //USER

                    const user = await AsyncStorage.getItem('user');
                    const parseUser = JSON.parse(user);
                    const newUser = parseUser.find(x => x.id === item.id);
                    newUser["date"] = hehe;
                    console.log(newUser);
                    const filterUser = parseUser.filter(element => element.id != item.id)
                    console.log(filterUser)
                    filterUser.unshift(newUser)

                    console.log(filterUser)
                    await AsyncStorage.setItem('user', JSON.stringify(filterUser))

                    //BATAS USER



                    await AsyncStorage.setItem('chat', JSON.stringify(someArray2))
                    const response2 = await AsyncStorage.getItem('chat');
                    const parseGet = JSON.parse(response2);
                    const find2 = parseGet.data.find(element => element.userid === item.id)
                    // // console.log(parseGet.data.find(element => element.userid === item.id))

                    setChat(find2);
                    setText('');

                }
            }



        }

        // else if (responseImage) {
        //     // console.log(text)
        //     const response = await AsyncStorage.getItem('chat');
        //     const hehe = moment();
        //     if (!response) {

        //         const someArray = { data: [{ userid: item.id, data: [{ id: 1, tipe: 'gambar', chat: responseImage.assets[0].base64, date: hehe, key: Math.floor(Math.random() * 1030) + 1 - 2 + 3 }, { id: 3, chat: 'Hi, this is auto generated text', date: hehe, key: Math.floor(Math.random() * 1030) + 1 - 2 + 3 }] }] }
        //         console.log(someArray);

        //         const submit = await AsyncStorage.setItem('chat', JSON.stringify(someArray))
        //         const response2 = await AsyncStorage.getItem('chat');
        //         const parseGet = JSON.parse(response2);

        //         const find2 = parseGet.data.find(element => element.userid === item.id)

        //         setChat(find2);
        //         setResponse('');

        //         //BATAS

        //         // const response = await AsyncStorage.getItem('chat');
        //         // setChat(JSON.parse(response));
        //         // setText('');
        //     }
        //     else if (response) {
        //         const parse = JSON.parse(response);
        //         const find = parse.data.find(element => element.userid === item.id)

        //         const hehe = moment();

        //         if (find) {
        //             console.log('ada nih')


        //             const found = parse.data.find(element => element.userid === item.id);
        //             // const someArray = [...found.data, { id: 1, chat: text, date: hehe }, { id: 3, chat: 'Hi, this is auto generated text', date: hehe }]
        //             const someArray = [...found.data, { id: 1, tipe: 'gambar', chat: responseImage.assets[0].base64, date: hehe, key: Math.floor(Math.random() * 100) + 1 }, { id: 3, chat: 'Hi, this is auto generated text', date: hehe, key: Math.floor(Math.random() * 1030) + 1 - 2 + 3 }]



        //             const user = await AsyncStorage.getItem('user');
        //             const parseUser = JSON.parse(user);
        //             const newUser = parseUser.find(x => x.id === item.id);
        //             newUser["date"] = hehe;
        //             console.log(newUser);
        //             const filterUser = parseUser.filter(element => element.id != item.id)
        //             console.log(filterUser)
        //             filterUser.unshift(newUser)

        //             console.log(filterUser)
        //             await AsyncStorage.setItem('user', JSON.stringify(filterUser))





        //             //BATAS



        //             const someArray3 = [...parse.data.filter(element => element.userid != item.id), { data: someArray, userid: item.id }]

        //             const someArray4 = { data: someArray3 }
        //             console.log(someArray4)

        //             await AsyncStorage.setItem('chat', JSON.stringify(someArray4))
        //             const response2 = await AsyncStorage.getItem('chat');

        //             const parseGet = JSON.parse(response2);

        //             const find2 = parseGet.data.find(element => element.userid === item.id)

        //             setChat(find2);
        //             setResponse('');


        //         }
        //         else if (!find) {
        //             // const someArray = [...found.data, { id: 1, chat: text, date: hehe }, { id: 3, chat: 'Hi, this is auto generated text', date: hehe }]

        //             console.log(parse)
        //             const someArray = [...parse.data, { userid: item.id, data: [{ id: 1, tipe: 'gambar', chat: responseImage.assets[0].base64, date: hehe, key: Math.floor(Math.random() * 100) + 1 }, { id: 3, chat: 'Hi, this is auto generated text', date: hehe, key: Math.floor(Math.random() * 1030) + 1 - 2 + 3 }] }]
        //             console.log(someArray);

        //             console.log(parse)
        //             const someArray2 = { data: someArray }
        //             console.log('ini some array 2')
        //             console.log(someArray2)
        //             console.log(someArray2.data[0])
        //             console.log(someArray2.data[1])

        //             //USER

        //             const user = await AsyncStorage.getItem('user');
        //             const parseUser = JSON.parse(user);
        //             const newUser = parseUser.find(x => x.id === item.id);
        //             newUser["date"] = hehe;
        //             console.log(newUser);
        //             const filterUser = parseUser.filter(element => element.id != item.id)
        //             console.log(filterUser)
        //             filterUser.unshift(newUser)

        //             console.log(filterUser)
        //             await AsyncStorage.setItem('user', JSON.stringify(filterUser))

        //             //BATAS USER



        //             await AsyncStorage.setItem('chat', JSON.stringify(someArray2))
        //             const response2 = await AsyncStorage.getItem('chat');
        //             const parseGet = JSON.parse(response2);
        //             const find2 = parseGet.data.find(element => element.userid === item.id)
        //             // // console.log(parseGet.data.find(element => element.userid === item.id))

        //             setChat(find2);
        //             setResponse('');

        //         }
        //     }



        // }

    }

    // console.log(chat.data)
    // console.log(chat.data.find(element => element.userid === item.id))

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <View>
                <HeaderComponent
                    title={item.name}
                    chat={true}
                >
                </HeaderComponent>
            </View>
            <View style={{
                height: Dimensions.get('window').height * 82 / 100,
                // bottom: 50
                // borderColor: 'black',
                // borderWidth: 1
            }}>
                {chat ?
                    <FlatList
                        data={chat.data}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) =>
                            <View style={{
                                // borderWidth: 1,
                                // borderColor: 'black',
                                height: 40,
                                alignItems: item.id === 1 ? 'flex-end' : 'flex-start'
                            }}>

                                {/* {response ?
                                    <View style={{
                                        // borderColor: 'black',
                                        // borderWidth: 1
                                        // height: 200
                                    }}>
                                        <Image style={{
                                            width: 100, height: 50,
                                            borderWidth: 1,
                                            borderColor: 'red'
                                        }}
                                            resizeMode='contain'
                                            source={{
                                                uri: `data:image/gif;base64,${response.assets[0].base64}`
                                            }}
                                        />
                                        <Text>wkwk</Text>
                                    </View>
                                    : null
                                } */}


                                <View style={{
                                    // borderWidth: 1,
                                    // borderColor: 'grey',
                                    height: '100%',
                                    backgroundColor: item.id === 1 ? '#87ceeb' : '#ccc',
                                    borderRadius: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center'

                                }}>
                                    <Text style={{
                                        color: item.id === 1 ? 'white' : 'black',
                                        margin: 10,

                                    }}>{item.chat}</Text>

                                </View>
                                <View style={{

                                }}>
                                    <Text style={{
                                        color: '#ccc',
                                        paddingHorizontal: 5,
                                    }}>
                                        {moment(item.date).format('HH:mm:ss')}
                                    </Text>
                                </View>

                            </View>
                        }
                    >

                    </FlatList>
                    : null
                }
            </View>
            <View style={{
                flexDirection: 'row',
                width: '100%',
                // borderColor: 'black',
                // borderWidth: 1,
                justifyContent: 'center',
                paddingTop: Dimensions.get('window').height * 1 / 100
            }}>
                <View style={{
                    flexDirection: 'row',
                    width: '90%',
                    height: Dimensions.get('window').height * 6 / 100
                }}>
                    <View style={{
                        // borderWidth: 1,
                        // borderColor: 'black',
                        paddingLeft: 10,
                        borderRadius: 20,
                        backgroundColor: '#ccc',
                        // marginHorizontal: Dimensions.get('window').width * 1 / 10,
                        flexDirection: 'row',

                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '80%'
                    }}>
                        <View style={{
                            width: '80%',
                        }}>
                            <TextInput
                                placeholder='Type text here'
                                value={text}
                                onChangeText={(text) => setText(text)}
                                style={{
                                    // borderColor: '#939393',
                                    // borderWidth: 1,

                                    width: '100%'
                                }}>
                            </TextInput>
                        </View>
                        <TouchableOpacity style={{
                            height: '100%',
                            width: '20%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                            onPress={() => launchImageLibrary(
                                {
                                    mediaType: 'photo',
                                    includeBase64: true
                                },
                                setResponse)
                            }
                        >
                            <Image style={{
                                width: '70%',
                                height: '70%'
                            }}
                                resizeMode='contain'
                                source={require('../../assets/imagepicker.png')}
                            >

                            </Image>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => onSubmitHandler()}
                        style={{
                            width: '20%',
                            height: '100%',
                            // borderWidth: 1,
                            // borderColor: 'black',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Image style={{
                            width: '80%',
                            height: '80%'
                        }}
                            source={require('../../assets/send.png')}
                            resizeMode='contain'
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default ChatScreen;
