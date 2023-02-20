import { Dimensions, Image, ImageBackground, Linking, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SwiperFlatList from 'react-native-swiper-flatlist';


const Salondetails = ({ navigation,route }) => {
  const data = route.params
  const [type, setType] = useState('Languages');
  const [pdata, setPdata] = useState([]);
  // console.log('dada',data.saloon_services);
  const [schedule, setSchedule] = useState([])
  console.log("schedule",schedule);

  const getProductData = async () => {
    var body = {
      id: data.id
    }
    try {
      const response = await fetch(
        "http://saloon.rootstechnology.in/pcapi/saloon_detail.php",
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8' },
          body: JSON.stringify(body),
        },
      );
      const pData = await response.json();
      // console.log("data cat",pData);
      setPdata(pData.Addondata);
      setSchedule(pData.Addondata.schedule)

    }
    catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getProductData()
  }, [data])

  // console.log('pdata',pdata.category);

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
      <SwiperFlatList autoplay
          autoplayDelay={2}
          keyExtractor={(item, index) => `key-${index}`}
          autoplayLoop
          // index={2}
          showPagination
          data={pdata?.multiple_image}
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
        />


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
    <View style={{flexDirection:'row', marginVertical:10,alignItems:'center'}}>
    <Text style={{fontWeight:"700",fontSize:16,marginTop:0,marginBottom:-5,marginLeft:20,flex:0.9,color: '#444444'}}>{pdata.name}</Text>
    <View style={{marginLeft:20 ,backgroundColor:'#dddddd',marginTop:18, paddingHorizontal: 5, borderRadius:10,alignItems:'center',}}>
    <Ionicons name="share-social" size={24} color="#111111" style={{fontSize:15,marginHorizontal:1,marginTop:3}}/>
    </View>
    </View>    
    <View style={{flexDirection:'row',marginTop:-5, marginBottom:10}}>
    <View style={{flexDirection:'row', marginVertical:0,alignItems:'center'}}>
  <Icon name="star-o" size={24} color="#e7cb65" style={[styles.icon4,{marginLeft:25}]}/>
  <Icon name="star-o" size={24} color="#e7cb65" style={[styles.icon4]}/>
  <Icon name="star-o" size={24} color="#e7cb65" style={[styles.icon4]}/>
  <Icon name="star-o" size={24} color="#e7cb65" style={[styles.icon4]}/>
  <Icon name="star-o" size={24} color="#e7cb65" style={[styles.icon4,{marginRight:0}]}/>
  <Text style={{marginLeft:10,color: '#666666'}}>Reviews(0)</Text>
  <Text style={{fontSize:12,marginLeft:70,color: '#666666'}}>0.00km</Text>
    </View>
    </View>
    </View>
    
    <View style={styles.btnContainer}>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
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
              {('Details')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('Services') && {Languages} }
            style={{
              ...styles.btn,
              backgroundColor: type === 'Services' ? '#111' : '#f4f4f4',
            }}>
            <Text
              style={{
                ...styles.btnText,
                color: type === 'Services' ? '#fff' : '#111',
              }}>
              {('Services')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('Galleries') && {Languages} }
            style={{
              ...styles.btn,
              backgroundColor: type === 'Galleries' ? '#111' : '#f4f4f4',
            }}>
            <Text
              style={{
                ...styles.btnText,
                color: type === 'Galleries' ? '#fff' : '#111',
              }}>
              {('Galleries')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('Reviews') && {Languages} }
            style={{
              ...styles.btn,
              backgroundColor: type === 'Reviews' ? '#111' : '#f4f4f4',
            }}>
            <Text
              style={{
                ...styles.btnText,
                color: type === 'Reviews' ? '#fff' : '#111',
              }}>
              {('Reviews')}
            </Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
        { type === 'Languages' && 
        <View>
    <View style={[styles.cardStyle1,styles.elevation]}>
    <View style={{flexDirection:'row', marginVertical:10}}>
    <Text style={{fontWeight:"700",fontSize:16,marginTop:0,marginBottom:-5,marginLeft:15,color: '#444444'}}>Description</Text>
    </View>
    <View style={[styles.hr80]}></View>    
    <View style={{marginHorizontal:15,width:width*0.77}}>
      <Text style={{fontWeight:'bold',fontSize:12,color: '#555555'}}>{pdata.description}</Text>
    </View>
    </View>
    <View style={[styles.cardStyle1,styles.elevation]}>
    {/* <Image source={require('../../../assets/skinimage1.jpg')} style={{height:height*0.2,width:width*0.6,borderRadius:10}}/> */}
    <View style={{flexDirection:'row', marginVertical:10,alignItems:'center'}}>
     <View style={{flex:0,marginLeft:20}}>
    <Text style={{fontWeight:"700",fontSize:16,marginTop:0,color: '#444444'}}>Contact us</Text>
    <Text style={{fontSize:13,color: '#666665'}}>if you have any question!</Text>
    </View>
    <TouchableOpacity style={{marginLeft:10 ,backgroundColor:'#dddddd',paddingVertical:8, paddingHorizontal: 8, borderRadius:10,alignItems:'center',}}
      onPress={() => {Linking.openURL(`tel:${pdata.Contact_no}`)}}>
    <AntDesign name="mobile1" size={26} color="#111111" style={{fontSize:22,marginHorizontal:1,marginTop:3}}/>
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft:10 ,backgroundColor:'#dddddd',paddingVertical:8, paddingHorizontal: 8, borderRadius:10,alignItems:'center',}}
       onPress={() => {Linking.openURL(`tel:${pdata.Contact_no}`)}}>
    <Ionicons name="call-outline" size={24} color="#111111" style={{fontSize:22,marginHorizontal:1,marginTop:3}}/>
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft:10 ,backgroundColor:'#dddddd',paddingVertical:8, paddingHorizontal: 8, borderRadius:10,alignItems:'center',}}
     onPress={() => {
      Linking.openURL(
        `http://api.whatsapp.com/send?phone=${"91"+pdata.Contact_no}`
      );
    }}>
    <Ionicons name="logo-whatsapp" size={24} color="#111111" style={{fontSize:22,marginHorizontal:1,marginTop:3}}/>
    </TouchableOpacity>
    </View>  
    </View>
    <View style={[styles.cardStyle1,styles.elevation]}>
    <Image source={{ uri: `data:image/png;base64,${pdata.address_image}`}} style={{height:height*0.2,width:width*0.9,borderRadius:10}}/>
    <View style={{flexDirection:'row', marginVertical:10,alignItems:'center'}}>
     <View style={{flex:0,marginLeft:20,width:'70%'}}>
    <Text style={{fontWeight:"700",fontSize:16,marginTop:0,color: '#444444'}}>Location</Text>
    <Text style={{fontSize:13,flex:1,color: '#666666'}}>{pdata.location}</Text>
    </View>
    <TouchableOpacity style={{marginLeft:10 ,backgroundColor:'#dddddd',paddingVertical:10, paddingHorizontal: 10, borderRadius:10,alignItems:'center',}}
    onPress={() =>  openMap()} > 
    <Image source={require('../../../assets/traffic-sign.png')} style={{height:25,width:25,borderRadius:10}}/>
    </TouchableOpacity>
    </View>  
    </View>
    <View style={[styles.cardStyle1,styles.elevation]}>
    <View style={{flexDirection:'row', marginVertical:10,marginLeft:20}}>
     <Text style={{fontWeight:"700",fontSize:16,marginTop:0,flex:0.9,color: '#444444'}}>Availability</Text>
  <View style={{marginLeft:0 ,backgroundColor:'#6dd26f',paddingVertical:4, paddingHorizontal: 10, borderRadius:10,opacity:0.3}}>
    <Text style={{color:'green',opacity:1}}>{pdata.availabilty}</Text>
  </View>
    </View>
    
 {  schedule? <View >
    {
                            schedule.map(
                                item => {
                                    return (  
  <View>
    <View style={[styles.hr80]}></View>
    <View style={{flexDirection:'row', marginVertical:10,marginLeft:20}}>
     <Text style={{fontWeight:"700",fontSize:14,marginTop:0,flex:0.9,color: '#444444'}}>{item.day}</Text>
  <View style={{marginLeft:0 ,backgroundColor:'#dddddd',paddingVertical:4, paddingHorizontal: 10, borderRadius:10,opacity:0.7}}>
    <Text style={{color:'#111111',opacity:1,fontSize:12}}>{item.opening_time} - {item.close_time}</Text>
  </View>
    </View>
    </View>
                    )}
             )}
    </View>:null}
    </View>

    

    </View>}
      { type === 'Services' && <View style={[styles.suggestionview1]}>
      <View style={[styles.catogoryview]}>
      {
        
        pdata.category.map(item => {
        return(
    <TouchableOpacity style={{backgroundColor:'#FDF5E6', width:width*0.2,height:height*0.15, borderRadius:10, alignItems:'center',marginBottom:20, }}
   onPress={() => navigation.navigate('Saloncategory',{
    data:item ,
    id:data.id
   })}>
  <Image source={{uri:`data:image/png;base64,${item.categry_image}`}} style={{width:30,height:30,marginVertical:15}}/>
      <Text style={{fontSize:12 ,top:0,color: '#444444'}}>{item.category_name}</Text>
      {/* <Text style={{fontSize:12 ,top:0}}>Offers</Text> */}
      </TouchableOpacity>
      )}
        )}
   
  </View> 
      </View>}
      { type === 'Reviews' && <View style={[styles.cardStyle1,styles.elevation]}>
    <View style={{flexDirection:'row', marginVertical:10,marginLeft:20}}>
     <Text style={{fontWeight:"700",fontSize:16,marginTop:0,flex:0.9,color: '#444444'}}>Reviews & Ratings</Text>
    </View>
    <View style={[styles.hr80]}></View>  
    <View style={{ marginVertical:10,justifyContent:'center',alignItems:'center'}}>
     <Text style={{fontWeight:"0",fontSize:26,color: '#444444'}}>0.0</Text>
     <View style={{flexDirection:'row', marginVertical:0}}>
  <Icon name="star-o" size={24} color="#e7cb65" style={[styles.icon5,{marginLeft:0}]}/>
  <Icon name="star-o" size={24} color="#e7cb65" style={[styles.icon5]}/>
  <Icon name="star-o" size={24} color="#e7cb65" style={[styles.icon5]}/>
  <Icon name="star-o" size={24} color="#e7cb65" style={[styles.icon5]}/>
  <Icon name="star-o" size={24} color="#e7cb65" style={[styles.icon5,{marginRight:0}]}/>
    </View>
    <Text>Reviews(0)</Text>
    </View>  
    <View style={[styles.hr80]}></View>  
    <View style={{justifyContent:'center',alignItems:'center', paddingVertical:5,marginBottom:10}}>
     <Text style={{fontWeight:"700",fontSize:14,marginTop:0,flex:0.9,color: '#777777'}}>No Reviews Found!</Text>
    </View>
    
    </View>}
        
    

    <View style={[styles.cardStyle1,styles.elevation]}>
    {/* <Image source={require('../../../assets/skinimage1.jpg')} style={{height:height*0.2,width:width*0.6,borderRadius:10}}/> */}

    </View>

      <View style={[styles.searchview]}>

      </View>
 
  </ScrollView>
    </View>
  )
}

export default Salondetails
const { width,height } = Dimensions.get('window');
const CARD_WIDTH = Dimensions.get('window').width * 0.9

const styles = StyleSheet.create({
  
  container: { flex: 0.4, backgroundColor: 'white' },
    child: { width, justifyContent: 'center'},
    image: { height:210, width:'100%'},
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
    alignItems:'flex-start',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    marginTop:-40,
    borderRadius: 10
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
    justifyContent:'space-around',
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

