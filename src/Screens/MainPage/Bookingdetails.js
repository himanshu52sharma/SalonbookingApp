import { Dimensions, Image, ImageBackground, Linking, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SwiperFlatList from 'react-native-swiper-flatlist';


const Bookingdetails = ({ navigation,route }) => {
    const {data,note,date,time} = route.params
  const [gst, setGst] = useState(parseInt(data.data.Price) * 18/100);
  const [totalprice, setTotalprice] = useState(parseInt(data.data.Price) + parseInt(gst));

  const [type, setType] = useState('Languages');
//   console.log('dada',data.saloon_services);
   const openMap= () => {
    console.log('open directions')
   let f = Platform.select({
        ios: () => {
            Linking.openURL('http://maps.apple.com/maps?daddr=267. Julien Motorway,Pune, Maharashtra, India, 411045');
        },
        android: () => {
            console.log('ANDROID')
            Linking.openURL(`http://maps.google.com/maps?daddr=${data.location}`).catch(err => console.error('An error occurred', err));;
        }
    })
    f();
  };
  return (
    <View style={[styles.container]}>
      {/* <View style={[styles.topview]}>
        <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
          onPress={() => {
            navigation.navigate('Mainpage')
          }
          }
        />
        <Text style={[styles.formHead]}>Categories</Text>
      </View> */}
      <StatusBar hidden={true}/>
      <ScrollView showsVerticalScrollIndicator={false}>
      {/* <SwiperFlatList autoplay
          autoplayDelay={2}
          keyExtractor={(item, index) => `key-${index}`}
          autoplayLoop
          // index={2}
          showPagination
          data={data?.Product_Images}
          renderItem={({ item}) => (
            <View style={[styles.child]}>
              <ImageBackground source={{ uri: `data:image/png;base64,${item}` }} style={[styles.image]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
                    onPress={() => { navigation.navigate('Mainpage') }} />
                </View>
              </ImageBackground>
            </View>
          )}
        /> */}
        <View>
        <ImageBackground source={{ uri: `data:image/png;base64,${data.data.address_image}` }} style={[styles.image]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
                    onPress={() => { navigation.navigate('Mainpage') }} />
                </View>
              </ImageBackground>
        </View>


      {/* <SwiperFlatList autoplay autoplayDelay={3} autoplayLoop index={0} showPagination
      data={data.multiple_image}
      renderItem={({ item }) => (
      <View style={[styles.child]}>
      <ImageBackground source={{ uri: `data:image/png;base64,${item}` }} style={[styles.image]}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
          onPress={() => {navigation.navigate('Mainpage')}}/>
        </View>
        </ImageBackground>
      </View>

     )}
    /> */}
        
    <View style={[styles.cardStyle,styles.elevation]}>
    
      <View style={{flex:2,margin:15}}>
        <Text style={{ fontWeight: "700", marginVertical: 7, marginLeft: 10,color:'#444444',fontSize: 17}}>{data.data.saloonname}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../../../assets/identity-card.png')} style={{ height: 17, width: 17, marginLeft: 10, marginRight: 5, marginTop:5 }} />
          <Text style={{ marginTop: 5, fontSize: 13,color:'#666666' }}>{data.data.saloonname}</Text>
        </View>
        {/* <View style={[styles.hr80]}></View> */}
        
        <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
          <Ionicons name="location-outline" size={17} color="#111111" style={{ marginTop: 0, marginLeft: 10, marginRight: 5 }} />
          <Text style={{ marginTop: 0, fontSize: 13,color:'#666666' }}>{data.data.saloonaddress}gole ka mandir gwalior madhya pradesh india china</Text>
        </View>
        </View>

        <View style={{ borderRadius: 20, flex:1,margin:20 }}>
        <View style={{ marginLeft: 10, backgroundColor: '#cccccc', paddingVertical: 35, paddingHorizontal: 0, alignItems: 'center',borderRadius:10  }}>
          <Text style={{ color: '#111111', fontWeight:'bold',fontSize: 12 }}>{time.slot_start_time}</Text>
          <Text style={{ color: '#111111', fontWeight:'900',fontSize: 18 }}>{date.date}</Text>
          <Text style={{ color: '#111111', fontWeight:'bold',fontSize: 12 }}>{date.month}</Text>
        </View>
      </View>
    </View>
    

 
        <View>
        <View style={[styles.cardStyle1,styles.elevation,{marginTop:20}]}>
    {/* <Image source={require('../../../assets/skinimage1.jpg')} style={{height:height*0.2,width:width*0.6,borderRadius:10}}/> */}
    <View style={{flexDirection:'row', marginVertical:10,alignItems:'center',flex:1}}>
     <View style={{flex:2,marginLeft:20}}>
    <Text style={{fontWeight:"700",fontSize:16,marginTop:0,color: '#444444'}}>Contact Salon</Text>
    </View>
    <TouchableOpacity style={{marginLeft:10 ,backgroundColor:'#dddddd',paddingVertical:8, paddingHorizontal: 8, borderRadius:10,alignItems:'center',}}
      onPress={() => {Linking.openURL(`tel:${data.Contact_no}`)}}>
    <AntDesign name="mobile1" size={26} color="#111111" style={{fontSize:22,marginHorizontal:1,marginTop:3}}/>
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft:10 ,backgroundColor:'#dddddd',paddingVertical:8, paddingHorizontal: 8, borderRadius:10,alignItems:'center',marginRight:20}}
     onPress={() => {
      Linking.openURL(
        `http://api.whatsapp.com/send?phone=${"91"+data.Contact_no}`
      );
    }}>
    <Ionicons name="logo-whatsapp" size={24} color="#111111" style={{fontSize:22,marginHorizontal:1,marginTop:3}}/>
    </TouchableOpacity>
    </View>  
    </View>

    <View style={[styles.cardStyle1,styles.elevation]}>
    <View style={{flexDirection:'row', marginVertical:10,marginLeft:20}}>
     <Text style={{fontWeight:"700",fontSize:16,marginTop:0,flex:0.9,color: '#444444'}}>Booking Details</Text>
  <View style={{marginLeft:0}}>
    <Text style={{color:'#111111',fontSize:16,fontWeight:"700"}}>#12366432</Text>
  </View>
    </View>
    
    <View>
    <View style={[styles.hr80]}></View>
    <View style={{flexDirection:'row', marginVertical:10,marginLeft:20,alignItems:'center'}}>
     <Text style={{fontSize:12,marginTop:0,flex:0.9,color: '#444444'}}>Status</Text>
  <View style={{marginLeft:0 ,backgroundColor:'#dddddd',paddingVertical:4, paddingHorizontal: 15, borderRadius:5}}>
    <Text style={{color:'#111111',opacity:1,fontSize:13,fontWeight:"bold"}}>Pending Confirmation</Text>
  </View>
    </View>
    <View style={[styles.hr80]}></View>
    <View style={{flexDirection:'row', marginVertical:10,marginLeft:20,alignItems:'center'}}>
     <Text style={{fontSize:12,marginTop:0,flex:0.9,color: '#444444'}}>Payment Status</Text>
  <View style={{marginLeft:0 ,backgroundColor:'#dddddd',paddingVertical:4, paddingHorizontal: 15, borderRadius:5}}>
    <Text style={{color:'#111111',opacity:1,fontSize:13,fontWeight:"bold"}}>Pending</Text>
  </View>
    </View>
    <View style={[styles.hr80]}></View>
    <View style={{flexDirection:'row', marginVertical:10,marginLeft:20,alignItems:'center'}}>
     <Text style={{fontSize:12,marginTop:0,flex:0.9,color: '#444444'}}>Payment Method</Text>
  <View style={{marginLeft:0 ,backgroundColor:'#dddddd',paddingVertical:4, paddingHorizontal: 15, borderRadius:5}}>
    <Text style={{color:'#111111',opacity:1,fontSize:13,fontWeight:"bold"}}>Pay later</Text>
  </View>
    </View>
    <View style={[styles.hr80]}></View>
    <View style={{flexDirection:'row', marginVertical:5,marginLeft:20,alignItems:'center',marginBottom:15}}>
     <Text style={{fontSize:12,marginTop:0,flex:0.9,color: '#444444'}}>Booking Notes</Text>
  {/* <View style={{marginLeft:0 ,backgroundColor:'#dddddd',paddingVertical:4, paddingHorizontal: 15, borderRadius:5}}>
    <Text style={{color:'#111111',opacity:1,fontSize:13,fontWeight:"bold"}}>Pending Confirmation</Text>
  </View> */}
    </View>
    </View>
   </View>

   <View style={[styles.cardStyle1,styles.elevation]}>
    <View style={{flexDirection:'row', marginVertical:10,marginLeft:20}}>
     <Text style={{fontWeight:"700",fontSize:16,marginTop:0,flex:0.9,color: '#444444'}}>Booking Date & Time</Text>
     <View style={{marginLeft:0 ,backgroundColor:'#dddddd',paddingVertical:4, paddingHorizontal: 15, borderRadius:5}}>
    <Text style={{color:'#111111',opacity:1,fontSize:13,fontWeight:"bold"}}>00:00</Text>
  </View>
    </View>
    
    <View>
    <View style={[styles.hr80]}></View>
    <View style={{flexDirection:'row', marginVertical:10,marginLeft:20}}>
    <Text style={{fontSize:12,marginTop:0,flex:0.9,color: '#444444'}}>Booking At</Text>
  {/* <View style={{marginLeft:0 ,backgroundColor:'#dddddd',paddingVertical:4, paddingHorizontal: 10, borderRadius:10,opacity:0.7}}> */}
    <Text style={{color:'#111111',opacity:1,fontSize:12}}>{date.date},{date.month} {new Date().getFullYear()} {time.slot_start_time}</Text>
  {/* </View> */}
    </View>
    </View>
   </View>
   <View style={[styles.cardStyle1,styles.elevation]}>
    <View style={{flexDirection:'row', marginVertical:10,marginLeft:20}}>
     <Text style={{fontWeight:"700",fontSize:16,marginTop:0,flex:0.9,color: '#444444'}}>Pricing</Text>
    </View>
    
    <View>
    <View style={[styles.hr80]}></View>
    <View style={{ flexDirection: 'row',marginLeft:20, marginVertical: 7,alignItems:'center',justifyContent:'space-between',width:'90%' }}>
            <View style={{width: '50%',}}>
            <Text style={{  fontSize: 13,color: '#111111' }}>{data.data.Product_Name}</Text>
            <Text style={{  fontSize: 11,color: '#111111' }}>{data.data.saloonname}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', marginTop: 0, fontSize: 17,color: '#444444' }}>{'\u20B9'}{data.data.Price}.00</Text>
          </View>
          <View style={[styles.hr80]}></View>
    <View style={{ flexDirection: 'row',marginLeft:20, marginVertical: 7,alignItems:'center',justifyContent:'space-between',width:'90%' }}>
            <Text style={{  fontSize: 13,color: '#111111' }}>Subtotal</Text>
            <Text style={{ fontWeight: 'bold', marginTop: 0, fontSize: 17,color: '#444444' }}>{'\u20B9'}{data.data.Price}.00</Text>
          </View>
          <View style={[styles.hr80]}></View>
    <View style={{ flexDirection: 'row',marginLeft:20, marginVertical: 7,alignItems:'center',justifyContent:'space-between',width:'90%' }}>
            <Text style={{  fontSize: 13,color: '#111111' }}>GST (18.0%)</Text>
            <Text style={{ fontWeight: 'bold', marginTop: 0, fontSize: 15,color: '#111111' }}>{gst}.0</Text>
          </View>
          <View style={[styles.hr80]}></View>
    <View style={{ flexDirection: 'row',marginLeft:20, marginVertical: 7,alignItems:'center',justifyContent:'space-between',width:'90%' }}>
            <Text style={{  fontSize: 13,color: '#111111' }}>Total Amount</Text>
            <Text style={{ fontWeight: '900', marginTop: 0, fontSize: 17,color: '#111111' }}>{'\u20B9'}{totalprice}.00</Text>
          </View>
          
    </View>
   </View>
   <View style={[styles.searchview1]}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={[styles.elevation, { backgroundColor: '#111111', paddingVertical: 10, paddingHorizontal:135, borderRadius: 10, marginHorizontal: 10, }]}
          onPress={() => navigation.navigate('Bookingsuccessful',{data:data,note:note,date:date,time:time})}>
          <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Cancel</Text>
        </TouchableOpacity>
        </View>
       </View>
   
    

    </View>

  </ScrollView>
    </View>
  )
}

export default Bookingdetails
const { width,height } = Dimensions.get('window');
const CARD_WIDTH = Dimensions.get('window').width * 0.9

const styles = StyleSheet.create({
  
  container: { flex: 0.4, backgroundColor: 'white' },
    child: { width, justifyContent: 'center'},
    image: { height:260, width:'100%'},
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fafafa',
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
    marginLeft: 10,
    position:'absolute',
    top:20,
  },
  searchbar: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    top: -5,
    fontSize: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 10,
    fontSize: 18,
    alignSelf: 'center',
  },
  searchview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 13,
    top: 0,
    borderColor: 'lightgray',
    zIndex: 100,
    // borderWidth: 1,
    backgroundColor: '#fafafa'
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
  suggestiontext1: {
    fontSize: 14,
    fontWeight: '700',
    color: '#666666'
  },
  suggestionview6: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 12,
    top: 10,
    borderColor: 'lightgray',
    zIndex: 100,
    borderWidth: 0,
    backgroundColor: '#efe2fa'
  },
  cardStyle: {
    width: CARD_WIDTH,
    // height: CARD_HEIGHT,
    // alignItems:'flex-start',
    // justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    marginTop:-40,
    borderRadius: 10,
    flexDirection: 'row',
flex:1
  },
  cardStyle1: {
    width: CARD_WIDTH,
    // height: CARD_HEIGHT,
    // alignItems:'flex-start',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    marginBottom:25,
    borderRadius: 10
  },
  elevation: {  
    shadowOffset: {width: -2, height: 7},  
    shadowColor: '#fafafa',  
    shadowOpacity: 0.2,  
    shadowRadius: 3, 
    elevation: 2,     
  },
  hr80:{
    width:'90%',
    height:1,
    backgroundColor:'#dddddd',
    marginVertical:5,
    marginLeft:17
},  
searchview1: {
  flexDirection: 'row',
  justifyContent: 'center',
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
icon4:{
    color:'#e7cb65',
    fontSize:15,
    marginLeft:3,
  },
icon5:{
    color:'#e7cb65',
    fontSize:24,
    marginLeft:3,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:15
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
    width: 95,
  },
  btnText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  suggestionview1:{
    justifyContent:'center',
    alignItems:'center',
    marginVertical:5,
    paddingVertical:10,
    top:10,
  
  },
  catogoryview:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:5,
    borderRadius: 10,
    width:'90%',
    alignSelf: 'center',
    paddingVertical:10,
    top:10,
    borderColor:'lightgray',
    zIndex:100,
    borderWidth:0,
    backgroundColor:'#ffffff',
    flexWrap:'wrap'
  },
})

