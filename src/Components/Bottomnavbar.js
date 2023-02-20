import { Linking, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Bottomnavbar = ({navigation, page}) => {
  // console.log(page)
  return (
    <View style={[styles.container]}>
      {
        page === 'Mainpage'?
        <MaterialCommunityIcons name="home-outline" size={24} color="black" style={[styles.activeicon1]}
       onPress={() => navigation.navigate('Mainpage')}/>
       :
       <MaterialCommunityIcons name="home-outline" size={24} color="#99B83C" style={[styles.icon1]}
       onPress={() => navigation.navigate('Mainpage')}/>
      }


      {
        page === 'Location'?
        <Ionicons name="location-outline" size={24} color="black" style={[styles.activeicon1]}
       onPress={() => navigation.navigate('Location')}/>
       :
       <Ionicons name="location-outline" size={24} color="#99B83C" style={[styles.icon1]}
       onPress={() => navigation.navigate('Location')}/>
      }

      {
        page === 'Notificationpage'?
        <Icon name="whatsapp" size={24} color="black" style={[styles.activeicon1]}
        onPress={() => {
          Linking.openURL(
            'http://api.whatsapp.com/send?phone=916263678561'
          );
        }}/>
       :
       <Icon name="whatsapp" size={24} color="#99B83C" style={[styles.icon1]}
       onPress={() => {
        Linking.openURL(
          'http://api.whatsapp.com/send?phone=916263678561'
        );
      }}/>
      }

      {
        page === 'Notificationpage'?
        <Icon name="user-o" size={24} color="black" style={[styles.activeicon1]}
       onPress={() => navigation.navigate('My_Userprofile')}/>
       :
       <Icon name="user-o" size={24} color="#99B83C" style={[styles.icon1]}
       onPress={() => navigation.navigate('My_Userprofile')}/>
      }
      

    </View>
  )
}

export default Bottomnavbar

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'#ffffff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        position:'absolute',
        bottom:0,
        width:'100%',
        zIndex:100,
        borderTopWidth:0,
        paddingVertical:10,
        alignItems:'center',
    },
    icon1:{
        color:'black',
        fontSize:25,
    },
    activeicon1:{
      backgroundColor:'white',
      fontSize:25,
      borderRadius:50,
      padding:10,

    }
})