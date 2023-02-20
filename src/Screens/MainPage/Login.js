import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import {useDispatch,useSelector} from 'react-redux';
import {CommonActions, useFocusEffect} from '@react-navigation/native';


// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Login = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    return (
        <View>
            <View style={[styles.container]}>
                <View style={[styles.topview]}>
                    <AntDesign name="left" size={24} color="#ffffff" style={[styles.gohomeicon]}
                        onPress={() => {
                            navigation.navigate('Mainpage')
                        }
                        }
                    />
                    <Text style={[styles.formHead]}>Login</Text>
                </View>
                <View style={{ paddingBottom: 100, paddingTop: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111111', borderRadius: 10, }}>
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: '900' }}>Zylu</Text>
                    <Text style={{ color: 'white', fontSize: 14, top: 4 }}>Login or Signup to book your appointment</Text>
                </View>
                <View style={[styles.c1]}>
                    <Image style={[styles.profilepic]} source={require('../../../assets/india.png')} />
                </View>
                <View style={[styles.numberview]}>
                    <Text style={{ left: 20, top: 8, bottom: 10 }}>Phone Number</Text>
                    <View style={[styles.searchview]}>
                        <Image style={{ width: 30, height: 30, marginLeft: 20, marginRight: 10 }} source={require('../../../assets/india.png')} />
                        <Text style={{ fontWeight: 'bold', marginRight: 5 }}>+91</Text>
                        <TextInput style={[styles.searchbar]} keyboardType = 'numeric' placeholder="223 665 7896" />
                    </View>
                </View>
                <View style={[styles.suggestionview]}>
                    <View>
                        <Text style={[styles.suggestiontext]}>By using the service, you agree to the</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>Terms and Privacy Policy</Text>
                        </View>

                    </View>
                </View>
                <TouchableOpacity style={[styles.btn, styles.elevation]}
                    onPress={() => { checked ? navigation.navigate('Categories') : alert('You need to accept Terms and Privacy Policy') }}>
                    <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f8f8',
    },
    formHead: {
        fontSize: 17,
        color: '#ffffff',
        marginLeft: 125,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    txt1: {
        fontSize: 20,
        color: '#111111',
        marginTop: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    topview: {
        backgroundColor: '#111111',
        flexDirection: 'row',
        paddingVertical: 15
    },
    gohomeicon: {
        marginLeft: 10
    },
    icon3: {
        color: '#111111',
        fontSize: 20,
        marginLeft: 15,
    },
    suggestiontext: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#444444'
    },
    suggestionview: {
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        // borderRadius: 10,
        // width: '100%',
        alignSelf: 'center',
        paddingVertical: 10,
        // top: 10,
        // borderColor: 'lightgray',
        zIndex: 100,
        borderWidth: 0,
        backgroundColor: '#f8f8f8'
    },
    c1: {
        width: '100%',
        alignItems: 'center',
        //   height:1,
        //   backgroundColor:'gray',
        //   marginVertical:20
    },
    profilepic: {
        width: 100,
        height: 100,
        borderColor: '#ffffff',
        borderWidth: 5,
        backgroundColor: '#111111',
        borderRadius: 10,
        marginTop: -50,
    },
    searchbar: {
        // width: '70%',
        backgroundColor: 'white',
        borderRadius: 10,
        // top: -5,
        fontSize: 10,
        // paddingVertical: 10,
        paddingHorizontal: 0,
        // marginTop: 5,
        fontSize: 14,
        // marginLeft:-20,
        alignSelf: 'center',
    },
    searchview: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        // width: '90%',
        // alignSelf: 'center',
        paddingVertical: 10,
        // top: 0,
        // borderColor: 'lightgray',
        // zIndex: 100,
        // borderWidth: 1,
        // backgroundColor: '#ffffff'
    },
    icon3: {
        color: '#111111',
        fontSize: 20,
        marginLeft: 15,
    },
    numberview: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'flex-start',
        // borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 10,
        top: 10,
        // borderColor: 'lightgray',
        zIndex: 100,
        // flex:1,
        // borderWidth: 1,
        backgroundColor: '#ffffff'
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 10,
        backgroundColor: '#111111'
    },
    elevation: {
        shadowOffset: { width: 10, height: 0 },
        shadowColor: '#ffffff',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 3,
    },
});