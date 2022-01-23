import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';


const HeaderComponent = ({ title, onClick, chat }) => {
    return (
        <View style={{
            // borderWidth: 1,
            // borderColor: '#ccc',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            height: Dimensions.get('window').height * 8 / 100,
            justifyContent: 'center'
        }}>
            <View style={{
                margin: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                // height: Dimensions.get('window').height / 25
                // borderColor: 'black',
                // borderWidth: 1,

            }}>
                <View style={{
                    width: '85%',
                    // alignItems: 'center',
                    justifyContent: 'center'

                }}>
                    <Text style={{
                        color: 'black',
                        fontWeight: 'bold',
                        // width: '85%',
                        fontSize: Dimensions.get('window').height / 35
                    }}>{title}</Text>
                </View>
                {!chat ?
                    <TouchableOpacity
                        onPress={() => onClick()}
                        style={{
                            width: '15%',
                            // borderColor: 'black',
                            // borderWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Image
                            source={require('../../assets/plus.png')}
                            style={{
                                height: '80%',
                                width: '80%',
                                // borderWidth: 1,
                                // borderColor: 'black'
                            }}
                            resizeMode='contain'
                        >
                        </Image>

                    </TouchableOpacity>
                    : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default HeaderComponent;