import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Notificationpage = ({ navigation }) => {
  return (
    <View style={[styles.container]}>
    <View style={[styles.topview]}>
      <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
        onPress={() => {
          navigation.navigate('Mainpage')
        }
        }
      />
      <Text style={[styles.formHead]}>Notifications</Text>
    </View>
    <ScrollView>
   
    <View style={[styles.suggestionview]}>
        <View>
      <Text style={[styles.suggestiontext]}>Incoming Notifications</Text>
      <Text style={{fontSize:12, top:5}}>Swipe item left to delete it.</Text>
      </View>
      <TouchableOpacity style={{backgroundColor:'#111111',paddingVertical:4, paddingHorizontal: 8, borderRadius:5}}
    onPress={() => navigation.navigate('Categories')}>                       
    <Text style={{color:'#ffffff',fontSize:12}}>Clear All</Text>
    </TouchableOpacity>
    </View>
    <View style={{justifyContent:'space-between',alignItems:'center',}}>
    <Text style={{marginTop:120}}>Notification List is Empty</Text>
    </View>
</ScrollView>
  </View>
  )
}

export default Notificationpage

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
    txt1: {
      fontSize: 20,
      color: '#111111',
      marginTop: 20,
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
    },
    topview: {
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
      fontSize: 17,
      fontWeight: 'bold',
      color: '#444444'
    },
    suggestionview: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
      borderRadius: 10,
      width: '90%',
      alignSelf: 'center',
      paddingVertical: 10,
      top: 10,
      borderColor: 'lightgray',
      zIndex: 100,
      borderWidth: 0,
      backgroundColor: '#ffffff'
    },

  });