import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Bookings = ({ navigation,route }) => {
  const {data,note,date,time} = route.params
    // console.log('data',data);

  return (
    <View style={[styles.container]}>
    <View style={[styles.topview]}>
      <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
        onPress={() => {
          navigation.navigate('Mainpage')
        }
        }
      />
      <Text style={[styles.formHead]}>Bookings</Text>
    </View>
    <ScrollView>
    <View style={{justifyContent:'space-between',alignItems:'center',}}>
    <Text style={{marginTop:70, fontWeight:'bold', color:'#111111'}}>No Bookings Found!</Text>
    </View>
    {
      data && <TouchableOpacity style={[styles.cardStyle1,]}
      onPress={() => navigation.navigate('Bookingdetails',{data:data,note:note,date:date,time:time})}>
      <View style={{ borderRadius: 20 }}>
        <Image source={{ uri: `data:image/png;base64,${data.data.saloon_logo}` }} style={{ height: height * 0.11, width: width * 0.22, marginLeft: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
        <View style={{ marginLeft: 10, backgroundColor: '#cccccc', paddingVertical: 3, paddingHorizontal: 10, alignItems: 'center', }}>
          <Text style={{ color: '#444444', opacity: 1,fontSize: 12 }}>pending</Text>
        </View>
        <View style={{ marginLeft: 10, backgroundColor: '#111111', paddingVertical: 3, paddingHorizontal: 10, alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
          <Text style={{ color: '#ffffff', fontWeight:'bold',fontSize: 12 }}>{time.slot_start_time}</Text>
          <Text style={{ color: '#ffffff', fontWeight:'900',fontSize: 18 }}>{date.date}</Text>
          <Text style={{ color: '#ffffff', fontWeight:'bold',fontSize: 12 }}>{date.month}</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: "700", marginVertical: 7, marginLeft: 10,color:'#444444'}}>{data.data.saloonname}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }}>
          <Image source={require('../../../assets/identity-card.png')} style={{ height: 17, width: 17, marginLeft: 10, marginRight: 5, marginTop:5 }} />
          <Text style={{ marginTop: 5, fontSize: 13,color:'#666666' }}>{data.data.saloonname}</Text>
        </View>
        <View style={[styles.hr80]}></View>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '70%' }}>
          <Ionicons name="location-outline" size={17} color="#111111" style={{ marginTop: 0, marginLeft: 10, marginRight: 5 }} />
          <Text style={{ marginTop: 0, fontSize: 13,color:'#666666' }}>{data.data.saloonaddress}gole ka mandir gwalior madhya pradesh india china</Text>
        </View>
        <View style={[styles.hr80]}></View>

          <View style={{ flexDirection: 'row', marginLeft: 10, borderColor: "#dddddd",  justifyContent: 'space-between',alignItems: 'center' }}>
            <Text style={{ fontSize: 14,color:'#444444'}}>Total</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold',color:'#444444', marginRight: 35 }}>{'\u20B9'}{data.data.Price}.00</Text>

          </View>

          {/* <View style={{flexDirection:'row', marginHorizontal:10,borderColor:"#dddddd",borderWidth:1,borderRadius:20,width:'33%',paddingVertical:3,justifyContent:'center'}}>
<Text style={{fontSize:10,}}>Hair Color</Text>
</View> */}
        </View>
    </TouchableOpacity>
    }
</ScrollView>
  </View>
  )
}

export default Bookings
const { width, height } = Dimensions.get('window');
const CARD_WIDTH = Dimensions.get('window').width * 0.9
const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
    },
    hr80: {
      width: '80%',
      height: 1,
      backgroundColor: '#dddddd',
      marginVertical: 10,
      marginLeft: 17
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
    cardStyle1: {
      flexDirection: 'row',
      width: CARD_WIDTH,
      // height: CARD_HEIGHT,
      alignItems: 'flex-start',
      // justifyContent: 'center',
      backgroundColor: '#ffffff',
      elevation: 2,
      marginLeft: 15,
      paddingVertical: 20,
      marginBottom: 10,
      borderRadius: 10
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