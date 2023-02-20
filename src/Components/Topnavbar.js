import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import logo from '../../assets/logo.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Topnavbar = ({ navigation, page }) => {
  // console.log(page)
  return (
    <View style={[styles.container]}>
     <Icon name="bars" size={24} color="#111111" style={[styles.icon3]}
     onPress={()=>navigation.openDrawer()}
     />
     <Text style={[styles.text]}>Zylu</Text>
     <MaterialIcons name="notifications-none" size={24} color="#99B83C" style={[styles.icon1]}
     onPress={()=>navigation.navigate('Notificationpage')
    } />
     {/* {
      page === 'Mainpage' &&
      <MaterialIcons name="notifications-none" size={24} color="#99B83C" style={[styles.icon1]}
     onPress={()=>navigation.navigate('All_chats')
    } />
     } */}

     {/* {
       page === 'My_Userprofile' &&
     <MaterialIcons name="home" size={24} color="#99B83C" style={[styles.icon1]}
     onPress={()=>navigation.navigate('All_chats')
    } />
     } */}
    </View>
    
  )
}

export default Topnavbar

const styles = StyleSheet.create({
    container:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       width:'100%',
       paddingVertical:10,
       position:'absolute',
       top:0,
       zIndex:100,
       backgroundColor:'#ffffff'
    },
logo2:{
    height:30,
    resizeMode:'contain',
    width:100,
},
icon1:{
    color:'#111111',
    fontSize:30,
    marginRight:25,
},
icon3:{
  color:'#111111',
  fontSize:30,
  marginLeft:15,
},
icon2:{
  color:'white',
  fontSize:25,
  marginRight:5,
},
text:{
  color:'#111111',
  fontSize:17,
  fontWeight:'800'
}
})