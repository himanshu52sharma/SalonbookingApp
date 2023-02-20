import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Settings, Button, TouchableHighlight, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Settings1 = ({ navigation }) => {
  const [type, setType] = useState('Languages');
  
  return (
    <View style={[styles.container]}>
      <View style={[styles.topview]}>
        <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
          onPress={() => {
            navigation.navigate('Mainpage')
          }}/>
        <Text style={[styles.formHead]}>Settings</Text>
      </View>
      <ScrollView>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => setType('Languages')  }
            style={{
              ...styles.btn,
              backgroundColor: type === 'Languages' ? '#111' : '#f4f4f4',
            }}>
             

            <Text
              style={{
                ...styles.btnText,
                color: type === 'Languages' ? '#fff' : '#111',
              }}>
              {('Languages')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('Addresses') && {Languages} }
            style={{
              ...styles.btn,
              backgroundColor: type === 'Addresses' ? '#111' : '#f4f4f4',
            }}>
            <Text
              style={{
                ...styles.btnText,
                color: type === 'Addresses' ? '#fff' : '#111',
              }}>
              {('Addresses')}
            </Text>
          </TouchableOpacity>
        </View>
        { type === 'Languages' && 
    <View style={[styles.saloncard, styles.elevation]}>
        <View style={[styles.suggestionview]}
        onPress={() => navigation.navigate('Settings1')}>
        <Fontisto name="radio-btn-active" size={24} color="#99B83C" style={[styles.icon1, { flex: 1 , marginHorizontal:15 }]}/>
        <Text style={{ fontWeight: 'bold', flex: 9 }}>English</Text>
      </View>
      </View>}
      { type === 'Addresses' && <View style={[styles.suggestionview1]}>
         <Text style={{fontWeight:'bold'}}>No Data Found!</Text>
      </View>}
      </ScrollView>
    </View>
  )
}

export default Settings1
const CARD_WIDTH1 = Dimensions.get('window').width * 0.9
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  formHead: {
    fontSize: 17,
    color: '#111111',
    marginLeft: 100,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  // button: {
  //     alignItems: 'center',
  //     // backgroundColor: '#DDDDDD',
  //     padding: 10
  //   },
  topview: {
    flexDirection: 'row',
    paddingVertical: 15
  },
  gohomeicon: {
    marginLeft: 10
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderColor: '#f4f4f4',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    backgroundColor: '#444444',
    alignItems: 'center',
    height: 45,
    width: 110,
  },
  btnText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  suggestionview:{
    flexDirection:'row',
    // justifyContent:'space-around',
    // alignItems:'center',
    // marginVertical:5,
    borderRadius: 10,
    width:'90%',
    alignSelf: 'center',
    paddingVertical:20,
    // top:10,
    borderColor:'lightgray',
    zIndex:100,
    borderWidth:0,
    backgroundColor:'#ffffff'
  },
  icon1:{
    color:'black',
    fontSize:20,
    // marginRight:20
},
suggestionview1:{
  justifyContent:'center',
  alignItems:'center',
  marginVertical:5,
  paddingVertical:10,
  top:10,

},
saloncard:{
  alignItems:'center',
   width: CARD_WIDTH1,
   // height: CARD_HEIGHT1,
   justifyContent: 'center',
  //  alignItems: 'center',
   backgroundColor: '#ffffff',
   margin: 20,
   borderRadius: 10
 },
 elevation: {  
  shadowOffset: {width: -2, height: 7},  
  shadowColor: '#ffffff',  
  shadowOpacity: 0,  
  shadowRadius: 3, 
  elevation: 5,     
},  
});