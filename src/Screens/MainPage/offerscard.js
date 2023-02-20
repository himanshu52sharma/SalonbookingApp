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

const Offerscard = ({data,title,
    navigation}) => {
      // console.log('carddata',data);
      const openProductpage = (data) =>{
        // console.log(item);
        navigation.navigate('Bookingpage',data)
      }
const [adata, setAdata] = useState([]);

      // console.log('data',data);
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

   useEffect(() => {
      getUserData();
    },[])
  return (
    <View>
  {
        
        adata.map((item) => {
        return(
          <View>
      <View style={[styles.suggestionview]}>
  <Text style={[styles.suggestiontext]}>{item.cat_name}</Text>
  <TouchableWithoutFeedback style={{backgroundColor:'#efefef',paddingVertical:8, paddingHorizontal: 15, borderRadius:30}}
       onPress={() => navigation.navigate('Categorydetails',{item})}>                       
    <Text style={{color: '#444444'}}>View All</Text>
  </TouchableWithoutFeedback>
  </View>
  <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  >
  {data.filter(data=>data.Product_Category===item.cat_name).map(data=>{
    return(
      
      <TouchableWithoutFeedback style={[styles.cardStyle,styles.elevation]}
      onPress={() => navigation.navigate('Bookingpage',{data:data})}>
    <Image source={{uri:`data:image/png;base64,${data.Product_Images}`}} style={{height:height*0.2,width:width*0.6,borderRadius:10}}/>
    <Text style={{fontWeight:"700",marginVertical:7,marginLeft:10,color: '#444444'}}>{data.Product_Name}</Text>
    <View style={{backgroundColor:'#f6f6f6',paddingVertical:6, paddingHorizontal: 15, borderRadius:30,flexDirection:'row',marginLeft:10}}>
  <SimpleLineIcons name="clock" size={24} color="#111111" style={{fontSize:15,marginHorizontal:5}}/>
    <Text style={{fontSize:12,color: '#444444'}}>{data.Time_takon}</Text>
  </View>
    <View style={{flexDirection:'row', marginVertical:20}}>
     <Text style={{marginRight:40,marginLeft:10,color: '#777777'}}>Starting from</Text>
     <Text style={{fontSize:16,fontWeight:'bold',color: '#444444'}}>{'\u20B9'}{data.Price}</Text>
    </View>
    </TouchableWithoutFeedback>
    )
  })
 
  }
  </ScrollView>
  </View>
          )}
        )}  
  {/* <FlatList 
  showsHorizontalScrollIndicator={false}
  horizontal 
  style={{alignContent:'space-between'}}
  data={data} 
  renderItem={({ item }) =>(

      <TouchableWithoutFeedback style={[styles.cardStyle,styles.elevation]}
      onPress={() => {openProductpage(item)}}>
    <Image source={{uri:`data:image/png;base64,${item.Product_Images}`}} style={{height:height*0.2,width:width*0.6,borderRadius:10}}/>
    <Text style={{fontWeight:"700",marginVertical:7,marginLeft:10}}>{item.Product_Name}</Text>
    <View style={{backgroundColor:'#f6f6f6',paddingVertical:6, paddingHorizontal: 15, borderRadius:30,flexDirection:'row',marginLeft:10}}>
  <SimpleLineIcons name="clock" size={24} color="#111111" style={{fontSize:15,marginHorizontal:5}}/>
    <Text style={{fontSize:12}}>{item.Time_takon}</Text>
  </View>
    <View style={{flexDirection:'row', marginVertical:20}}>
     <Text style={{marginRight:40,marginLeft:10}}>Starting from</Text>
     <Text style={{fontSize:16,fontWeight:'bold'}}>{'\u20B9'}{item.Price}</Text>
    </View>
    </TouchableWithoutFeedback>
      )} /> */}
    </View>
  )
}

export default Offerscard
const { width,height } = Dimensions.get('window');
const CARD_WIDTH1 = Dimensions.get('window').width * 0.7
const CARD_HEIGHT1 = Dimensions.get('window').height * 0.5
const CARD_WIDTH = Dimensions.get('window').width * 0.6
const CARD_HEIGHT = Dimensions.get('window').height * 0.4
const styles = StyleSheet.create({
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
         alignSelf: 'center',
         paddingVertical:10,
         top:10,
         borderColor:'lightgray',
         zIndex:100,
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
       elevation: {  
         shadowOffset: {width: -2, height: 7},  
         shadowColor: '#fafafa',  
         shadowOpacity: 0.2,  
         shadowRadius: 3, 
         elevation: 2,     
       },  
})