import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RadioButton} from 'react-native-paper';

const Paymentpage = ({ navigation,route}) => {
  const {data,note,date,time} = route.params
  const [type, setType] = useState('Languages');
  // console.log('data',data,);
  // console.log('time',time);
  const [image, setImage] = useState(null);
  const [gst, setGst] = useState(parseInt(data.data.Price) * 18/100);
  // console.log('gdtprice',gst);
  const [totalprice, setTotalprice] = useState(parseInt(data.data.Price) + parseInt(gst));
  // console.log('totalprice',totalprice);

  // const [type, setType] = useState('Imagnotexist');
  
  


  return (
    <View style={[styles.container]}>
      <View style={[styles.topview]}>
        <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
          onPress={() => {
            navigation.navigate('Mainpage')
          }}/>
        <Text style={[styles.formHead]}>Checkout</Text>
      </View>
      <ScrollView>
      <View style={{marginTop:30}} >
          <View style={[styles.searchview]}>
            <MaterialIcons name="credit-card" size={25} color="#111111" style={{ marginLeft: 18,marginTop:0,marginRight: 30 }} />
            <View>
            <Text style={{color:"#111111",fontSize:18, fontWeight:'bold'}}>Payment Option</Text>
            <Text style={{color:"#666666",fontSize:13, }}>Select your preferred payment mode</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => setType('Languages')  }
         style={{...styles.numberview,
          backgroundColor: type === 'Languages' ? '#111' : '#f4f4f4',}}
         >
          <View style={[styles.searchview]}>
          <RadioButton
              color={'#fff'}
              value="5"
              status={type === 'Languages' ? 'checked' : 'unchecked'}
              // onPress={() => setChecked('5')}
            />
            <View style={{width:'60%'}}>
            <Text style={{color:"#111111",fontSize:13, fontWeight:'bold',color: type === 'Languages' ? '#fff' : '#111',}}>Pay now</Text>
            <Text style={{color:"#111111",fontSize:13,color: type === 'Languages' ? '#fff' : '#111', }}>Pay now online using variety of payment options </Text>
            </View>
            <View style={{width:60, height:60,backgroundColor:'#f1ffff',alignItems:'center',borderRadius:10}}>
      <Image source={require('../../../assets/razorpay1.png')} style={{width:45, height:45}}/>
        </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => setType('Services')  }
         style={{...styles.numberview,
          backgroundColor: type === 'Services' ? '#111' : '#f4f4f4',}}
         >
          {/* <Text style={{ marginLeft:25,fontSize:13}}>Booking At</Text> */}
          <View style={[styles.searchview]}>
          <RadioButton
              color={'#fff'}
              value="5"
              status={type === 'Services' ? 'checked' : 'unchecked'}
              // onPress={() => setChecked('5')}
            />
            <View style={{width:'60%'}}>
            <Text style={{color:"#111111",fontSize:13, fontWeight:'bold',color: type === 'Services' ? '#fff' : '#111',}}>Pay later</Text>
            <Text style={{color:"#111111",fontSize:13,color: type === 'Services' ? '#fff' : '#111', }}>Pay later after the service</Text>
            </View>
            <View style={{backgroundColor:'#f1ffff',alignItems:'center',borderRadius:20}}>
      <Image source={require('../../../assets/storeimage1.jpg')} style={{width:60, height:60,borderRadius:12}}/>
        </View>
          </View>
        </TouchableOpacity>

        {/* <View style={[styles.numberview]}>
          <Text style={{ left: 20, top: 8, bottom: 10,fontSize:13,color:"#666666" }}>{data.data.saloonname}</Text>
          <View style={[styles.searchview]}>
            <Ionicons name="location-outline" size={24} color="#111111" style={{ marginHorizontal: 20 }} />
            <Text style={{marginTop:0,fontSize:13,width:'70%',fontWeight:'bold',color:"#444444"}}>{data.data.saloonaddress}</Text>
          </View>
        </View> */}

      {/* {note  && <View style = {[styles.numberview]}>
        <Text style={{ marginLeft:25,fontSize:13,color:"#444444"}}>A Hint for the Provider</Text>
        <View style={[styles.searchview]}>
          <Feather name="calendar" size={24} color="#111111" style={{ marginHorizontal: 20,marginTop:0 }} />
          <View>
          <Text style={{marginTop:0,marginVertical:0, fontWeight:'bold',color:"#444444"}}>{note}</Text>
          </View>
        </View>
      </View>} */}

      </ScrollView>

      <View style={[styles.searchview1]}>
      <View style={[styles.searchview2]}>

        <View style={{ marginVertical: 20,width:'25%' }}>
        <Image source={{ uri: `data:image/png;base64,${data.data.saloon_logo}` }} style={{ width: 80, height: 70,marginLeft: 10,borderRadius: 10 }} />
        </View>
        <View style={[styles.searchview3]}>
      <View style={{ flexDirection: 'row', marginVertical: 0,alignItems:'center',justifyContent:'space-between',width:'90%' }}>
            <Text style={{  fontSize: 14,color: '#111111',fontWeight: 'bold' }}>{data.data.saloonname}</Text>
            {/* <Text style={{ fontWeight: 'bold', marginTop: 0, fontSize: 17,color: '#111111' }}>{'\u20B9'}{data.data.Price}.00</Text> */}
          </View>
          <View style={[styles.hr80]}></View>
          <View style={{ flexDirection: 'row', marginVertical: 0,alignItems:'center',justifyContent:'space-between',width:'90%' }}>
            <Text style={{  fontSize: 13,color: '#111111' }}>Subtotal</Text>
            <Text style={{ fontWeight: 'bold', marginTop: 0, fontSize: 17,color: '#111111' }}>{'\u20B9'}{data.data.Price}</Text>
          </View>
      <View style={[styles.hr80]}></View>
          <View style={{ flexDirection: 'row', marginVertical: 0,alignItems:'center',justifyContent:'space-between',width:'90%' }}>
            <Text style={{  fontSize: 13,color: '#111111' }}>GST (18.0%)</Text>
            <Text style={{ fontWeight: 'bold', marginTop: 0, fontSize: 15,color: '#111111' }}>{gst}.0</Text>
          </View>
          <View style={[styles.hr80]}></View>
          <View style={{ flexDirection: 'row', marginBottom: 20,alignItems:'center',justifyContent:'space-between',width:'90%' }}>
            <Text style={{  fontSize: 13,color: '#111111' }}>Total Amount</Text>
            <Text style={{ fontWeight: '900', marginTop: 0, fontSize: 18,color: '#111111' }}>{'\u20B9'}{totalprice}.00</Text>
          </View>
          </View>
          </View>

      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={[styles.elevation, { backgroundColor: '#111111', paddingVertical: 10, paddingHorizontal:130, borderRadius: 10, marginHorizontal: 10, }]}
          onPress={() => {type === 'Services' ? navigation.navigate('Bookingsuccessful',{data:data,note:note,date:date,time:time}):navigation.navigate('Paymentgateway',{data:data,note:note,date:date,time:time})}}>
                    {/* onPress={() => { checked ? navigation.navigate('Categories') : alert('You need to accept Terms and Privacy Policy') }}> */}

          <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Confirm</Text>
        </TouchableOpacity>
        </View>
       </View>
    </View>
  )}

export default Paymentpage

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8f8',
  },
  formHead: {
    fontSize: 17,
    color: '#111111',
    // marginLeft: 120,
    flex:0.9,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center'
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
  hr80: {
    width: '90%',
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 10,
    marginLeft: 1
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
    backgroundColor: '#f8f8f8'
  },
  suggestionview1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 20,
    top: 10,
    zIndex: 100,
    borderWidth: 0,
    backgroundColor: '#111111'
  },
  numberview: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    // paddingVertical: 10,
    // top: 10,
    marginVertical:7,
    zIndex: 100,
    // flex:1,
    // borderWidth: 1,
    backgroundColor: '#ffffff'
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
    paddingVertical: 10,
  },
  searchview1: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
    // alignSelf: 'center',
    paddingVertical: 20,
    // top: 0,
    // borderColor: 'lightgray',
    // zIndex: 100,
    // borderWidth: 1,
    backgroundColor: '#ffffff'
  },
  searchview2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#ffffff'
  },
  searchview3: {
    alignItems: 'center',
    borderRadius: 10,
    width: '75%',
    backgroundColor: '#ffffff',
    marginRight: 5,
  },
  imageview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  c1: {
    flexDirection:'row',
    width: '100%',
    alignItems: 'center',
    //   height:1,
    //   backgroundColor:'gray',
      marginTop:0
},
Bookservicepic: {
    width: 30,
    height: 30,
    // borderRadius: 20,
    // marginLeft: 20,
},
profilepic: {
    width: 15,
    height: 15,
    // borderRadius: 20,
    // marginLeft: 20,
},
profilepic1: {
  width: 100,
  height: 100,
  borderRadius: 10,
  // marginLeft: 20,
},
fileview: {
  alignItems: 'center',
  justifyContent:'center',
  width: 42,
  height: 42,
  borderRadius: 10,
  marginLeft: 20,
  backgroundColor:'#f1f1f1'
},
});