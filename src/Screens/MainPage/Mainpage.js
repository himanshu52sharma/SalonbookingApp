import { StyleSheet, Text, View, StatusBar, AsyncStorage, Dimensions, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Topnavbar from '../../Components/Topnavbar'
// import FollowersRandomPost from '../../Components/FollowersRandomPost'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {AuthContext} from "./Navigation"
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Offerscard from './offerscard';
import { useSelector } from 'react-redux';
import Salonslider from './Salonslider';

const Mainpage = ({ navigation, route }) => {
  const location = route.params
  const user = useSelector(state => state.user);
  const [regionChangeProgress, setRegionChangeProgress] = React.useState(false);

  const [adata, setAdata] = useState([]);
  const [cdata, setCdata] = useState([]);
  const [sdata, setSdata] = useState([]);
  const [pdata, setPdata] = useState([]);

  const [skin, setSkin] = useState([]);
  const [valuepackages, setValuepackages] = useState([]);
  const [haircolor, setHaircolor] = useState([]);
  const [massage, setMassage] = useState([]);
  const [specialoffers, setSpecialoffers] = useState([]);

  const [search, setSearch] = useState('');

  // console.log(search);

// const [userdata, setUserdata] = useState(null)
    // useEffect(() => {
    //     AsyncStorage.getItem('user')
    // .then(data => {
    //     //console.log('async userdata', data);
    //     setUserdata(JSON.parse(data))
    // })
    // .catch(err => alert(err))
    // },[])
    // console.log('userdata',userdata);
    const getUserData = async () =>{
          try{
            const response = await fetch(
              "http://saloon.rootstechnology.in/pcapi/p_cat_list.php"
            );
            const myData = await response.json();
            // console.log("hgduytgdu",myData.Catlist);
            setAdata(myData.Catlist);
          }
          catch(error){
            console.log(error);
          }
    };

    const getSalonData = async () =>{
      try{
        const response = await fetch(
          "http://saloon.rootstechnology.in/pcapi/saloonlist_2.php"
        );
        const sData = await response.json();
        // console.log("hsalondata",sData);
        setSdata(sData.Addondata);
      }
      catch(error){
        console.log(error);
      }
};
const getProductData = async () =>{
  try{
    const response = await fetch(
      "http://saloon.rootstechnology.in/pcapi/product_category_wise.php"
    );
    const pData = await response.json();
    // console.log("hsalondata",sData);
    setPdata(pData.Addondata);
  }
  catch(error){
    console.log(error);
  }
};
    useEffect(() => {
      getUserData();
    },[])

 
    useEffect(() => {
      getSalonData();
    },[])
    useEffect(() => {
      getProductData();
    },[])

    useEffect(() => {
      // console.log("sdata",sdata);
      setSpecialoffers(pdata.filter(item => item.Product_Category == 'Special Offers'))
      setSkin(pdata.filter(item => item.Product_Category == 'Skin'))
      setValuepackages(pdata.filter(item => item.Product_Category === 'Value Packages'))
      setHaircolor(pdata.filter(item => item.Product_Category === 'Hair Color'))
      setMassage(pdata.filter(item => item.Product_Category === 'Massage'))
      // console.log("skin",skin);
    },[pdata])

    // console.log('date3s', new Date().toLocaleTimeString().replace(new Date().toLocaleTimeString()));
   

    // console.log('age',age);
    // console.log('salondata',sdata);
    const openGeolocationpage = () =>{
      // console.log(item);
      navigation.navigate('Geolocation');
      setRegionChangeProgress(true);
    }
      return (
    
    <View style={[styles.containerFull]}>
      <StatusBar/>
      <Topnavbar navigation={navigation} page={"Mainpage"}/>
    
      <Bottomnavbar navigation={navigation} page={"Mainpage"}/>
      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#fafafa', alignContent:'space-between'}}>
      <View style={styles.container}>
    <SwiperFlatList autoplay autoplayDelay={3} autoplayLoop index={1} showPagination>
      <View style={[styles.child]}>
      <Image source={require('../../../assets/image1.jpg')} style={[styles.image]}/>
      </View>
      <View style={[styles.child]}>
      <Image source={require('../../../assets/image2.jpg')} style={[styles.image]}/>
      </View>
    </SwiperFlatList>
  </View>
  <View style={[styles.searchview]}>
  <Icon name="search" size={24} color="#111111" style={[styles.icon3]}/>
  <TextInput style={[styles.searchbar]} placeholder="Search for salon service..." 
  onChangeText={(text) => { setSearch(text)} }/>
  </View>
  {search != '' && <View style={[styles.searchresultouter]}>
    {/* <Text>You Typrd Something</Text> */}
    <FlatList style={[styles.searchresultinner]}
    data={adata}
    renderItem={({item}) => {
      if (item.cat_name.toLowerCase().includes(search.toLowerCase())){
        return(
      <View style={[styles.searchresult]}>
        <Text style={[styles.searchresulttext]}>{item.cat_name}</Text>
      </View>
        )
      }
    }} />
    </View>} 
  <TouchableWithoutFeedback style={[styles.locationview]}
      onPress={() =>  openGeolocationpage()} >                       
  <Ionicons name="location-outline" size={24} color="#111111" style={[styles.icon1]}/>
  <Text style={[styles.locationtext]}> {regionChangeProgress ? location : 'Please Choose Your Address '}</Text>
  <MaterialIcons name="my-location" size={24} color="#111111" style={[styles.icon1]}
  />
  </TouchableWithoutFeedback>

  <Salonslider data={sdata} navigation={navigation}/>

  <View style={[styles.suggestionview]}>
  <Text style={[styles.suggestiontext]}>Categories</Text>
  <TouchableOpacity style={{backgroundColor:'#efefef',paddingVertical:8, paddingHorizontal: 15, borderRadius:30}}
    onPress={() => navigation.navigate('Categories')}>                       
    <Text style={{color: '#444444'}}>View All</Text>
    </TouchableOpacity>
  </View>
  <View style={[styles.catogoryview]}>
  {
        
        adata.map((item) => {
        return(
    <TouchableWithoutFeedback style={{backgroundColor:'#FDF5E6', width:width*0.2,height:height*0.15, borderRadius:10, alignItems:'center',marginBottom:20 }}
   onPress={() => navigation.navigate('Categorydetails',{
    item
   })}>
  <Image source={{uri:`data:image/png;base64,${item.cat_img}`}} style={{width:30,height:30,marginVertical:15}}/>
      <Text style={{fontSize:12 ,top:0,color: '#444444'}}>{item.cat_name}</Text>
      {/* <Text style={{fontSize:12 ,top:0}}>Offers</Text> */}
      </TouchableWithoutFeedback>
      )}
        )}

  </View>

                <Offerscard  data={pdata} navigation={navigation}/>






  </ScrollView>
      {/* <FollowersRandomPost/> */}
    </View>
  )
}

export default Mainpage
const { width,height } = Dimensions.get('window');
const CARD_WIDTH1 = Dimensions.get('window').width * 0.7
const CARD_HEIGHT1 = Dimensions.get('window').height * 0.5
const CARD_WIDTH = Dimensions.get('window').width * 0.6
const CARD_HEIGHT = Dimensions.get('window').height * 0.4

const styles = StyleSheet.create({
    container: { flex: 0.4, backgroundColor: 'white' },
    child: { width, justifyContent: 'center' },
    image: { height:210, width:'100%'},
  containerFull:{
      width:'100%',
      height:'100%',
      backgroundColor:'#ffffff',
      paddingVertical:50,
  },
  logo1:{
      height:70,
      resizeMode:'contain',
      marginBottom:20,
      backgroundColor:'black',
  },
  goback:{
      flexDirection:'row',
      position:'absolute',
      top:50,
      left:20,
      alignItems:'center'
  },
  searchbar: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    top:-5,
    fontSize:10,
    paddingVertical:10,
    paddingHorizontal: 15,
    marginTop: 10,
    fontSize: 18,
    alignSelf: 'center',
},
searchview:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  borderRadius: 10,
  width:'90%',
  alignSelf: 'center',
  paddingVertical:0,
  top:-5,
  borderColor:'lightgray',
  zIndex:100,
  borderWidth:1,
  backgroundColor:'#ffffff'
},
icon3:{
  color:'#111111',
  fontSize:20,
  marginLeft:15,
},
icon4:{
  color:'#e7cb65',
  fontSize:15,
  marginLeft:5,
},
locationview:{
  flexDirection:'row',
  // justifyContent:'space-between',
  alignItems:'center',
  borderRadius: 10,
  width:'90%',
  alignSelf: 'center',
  paddingVertical:10,
  top:10,
  borderColor:'lightgray',
  zIndex:100,
  borderWidth:0,
  backgroundColor:'#fafafa'
},
locationtext:{
  marginLeft:10,
  marginRight:0,
  flex:0.95,
  color: '#444444'
},
suggestiontext:{
  fontSize:17,
  fontWeight:'bold',
  color:'#444444'
},
suggestionview:{
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
  backgroundColor:'#fafafa'
},
saloncard:{
 alignItems:'center',
  width: CARD_WIDTH1,
  // height: CARD_HEIGHT1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  margin: 15,
  borderRadius: 15
},
saloncard1:{
 alignItems:'center',
  width: CARD_WIDTH1,
  // height: CARD_HEIGHT1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  margin: 15,
  borderRadius: 15
},
catogoryview:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginVertical:5,
  borderRadius: 10,
  width:'90%',
  // flex:1,
  flexWrap:'wrap',
  alignSelf: 'center',
  paddingVertical:10,
  top:10,
  borderColor:'lightgray',
  // zIndex:100,
  borderWidth:0,
  backgroundColor:'#ffffff'
},
offercard:{
  alignItems:'center',
   marginVertical:35,
   marginLeft:5,
   borderRadius: 10,
   width:width*0.6,
   alignSelf: 'center',
   paddingVertical:10,
   top:10,
   borderColor:'lightgray',
   zIndex:100,
   borderWidth:0,
   backgroundColor:'#ffffff'
 },
 offercard1:{
  alignItems:'center',
   marginVertical:35,
   marginHorizontal:-10,
   borderRadius: 10,
   width:width*0.6,
   alignSelf: 'center',
   paddingVertical:10,
   top:10,
   borderColor:'lightgray',
   zIndex:100,
   borderWidth:0,
   backgroundColor:'#ffffff'
 },
 cardStyle: {
  width: CARD_WIDTH,
  // height: CARD_HEIGHT,
  alignItems:'flex-start',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  margin: 15,
  borderRadius: 15
},
elevation: {  
  shadowOffset: {width: -2, height: 7},  
  shadowColor: '#fafafa',  
  shadowOpacity: 0.2,  
  shadowRadius: 3, 
  elevation: 2,     
},
searchresultouter:{
  width:'100%',
  marginHorizontal:30,
  // height:100%,
  backgroundColor:'#ffffff'
},
searchresultinner:{
  width:'100%',
},
searchresult:{
  width:'100%',
  // alignItems:'center',
  padding:5,
},
searchresulttext:{
  marginLeft:10,
  fontSize:18,
  color:"#111111"
}  
});