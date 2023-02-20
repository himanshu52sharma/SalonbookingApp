import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Bookingsuccessful = ({ navigation,route }) => {
  const {data,note,date,time} = route.params
    //  console.log('data',data);
  return (
    <View style={[styles.container]}>
    <View style={[styles.topview]}>
      {/* <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
        onPress={() => {
          navigation.navigate('Mainpage')
        }
        }
      /> */}
      <Text style={[styles.formHead]}>Booking Successful</Text>
    </View>
    <ScrollView>
    <View style={{justifyContent:'space-between',alignItems:'center',}}>
        <View style={{marginTop:60}}>
      <Image source={require('../../../assets/bookingsuccessfulimage.jpg')} style={{width:120,height:120}}/>
        </View>
    <Text style={{marginTop:30, fontWeight:'bold', color:'#111111', fontSize: 16}}>Thank you!</Text>
    <Text style={{marginTop:10,marginBottom:10, color:'#666666', fontSize: 20}}>Pay at Store for service(s)</Text>
    <View style={{backgroundColor: '#daa520', alignItems:'center', borderRadius: 10,paddingHorizontal:20,}}>
    <Text style={{ color:'#666666', fontSize: 20}}>We received your appointment!</Text>
    <Text style={{ color:'#666666', fontSize: 20}}>We will confirm your time slot</Text>
    <Text style={{ color:'#666666', fontSize: 20}}>at the earlist</Text>
    </View>
    </View>
</ScrollView>
<View style={[styles.searchview1]}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={[styles.elevation, { backgroundColor: '#111111', paddingVertical: 10, paddingHorizontal:115, borderRadius: 10, marginHorizontal: 10, }]}
          onPress={() => navigation.navigate('Bookings',{data:data,note:note,date:date,time:time})}>
          <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>My Bookings</Text>
        </TouchableOpacity>
        </View>
       </View>
  </View>
  )
}

export default Bookingsuccessful

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#f8f8f8',
    },
    formHead: {
      fontSize: 17,
      color: '#111111',
    //   marginLeft: 85,
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
      alignItems:'center',
      justifyContent:'center',
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
    searchview1: {
        alignItems: 'center',
        borderRadius: 10,
        width: '100%',
        // alignSelf: 'center',
        paddingVertical: 20,
        backgroundColor: '#ffffff',
        elevation:5
      },

  });