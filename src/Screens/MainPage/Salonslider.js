import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {AuthContext} from "./Navigation"
import { FlatList, TouchableOpacity} from 'react-native-gesture-handler';
const Salonslider = ({data,navigation}) => {
  const openSalondetailspage = (item) =>{
    // console.log(item);
    navigation.navigate('Salondetails',item)
  }
  return (
    <View>
      <View style={[styles.suggestionview]}>
  <Text style={[styles.suggestiontext]}>Recommended for you </Text>
  <View style={{backgroundColor:'#efefef',paddingVertical:8, paddingHorizontal: 15, borderRadius:30}}>
    <Text style={{color: '#444444'}}>View All</Text>
  </View>
  </View>

 <FlatList 
  showsHorizontalScrollIndicator={false}
  horizontal 
  style={{alignContent:'space-between'}}
  data={data} 
  renderItem={({ item }) =>(
    <TouchableWithoutFeedback style={[styles.saloncard, styles.elevation]}
      onPress={() => {openSalondetailspage(item)}}>
    <Image source={{uri:`data:image/png;base64,${item.saloon_image}`}} style={{height:height*0.3,width:width*0.7,borderRadius:10}}/>
    <Text style={{fontWeight:"700",marginVertical:7,alignSelf:'flex-start',marginLeft:10,color: '#444444'}}>{item.name}</Text>
    <Text style={{marginLeft:-185,color: '#666666'}}>0.00 km</Text>
    <View style={{flexDirection:'row', marginVertical:20}}>
  <Icon name="star-o" size={24} color="#e7cb65" style={[styles.icon4,{marginLeft:-15}]}/>
  <Icon name="star-o" size={24} color="#e7cb65" style={[styles.icon4]}/>
  <Icon name="star-o" size={24} color="#e7cb65" style={[styles.icon4]}/>
  <Icon name="star-o" size={24} color="#e7cb65" style={[styles.icon4]}/>
  <Icon name="star-o" size={24} color="#e7cb65" style={[styles.icon4,{marginRight:0}]}/>
  <View style={{marginLeft:80 ,backgroundColor:'#6dd26f',paddingVertical:4, paddingHorizontal: 10, borderRadius:10,opacity:0.3}}>
    <Text style={{color:'green',opacity:1}}>{item.availabilty}</Text>
  </View>
    </View>
    </TouchableWithoutFeedback>
    )} />
    </View>
  )
}

export default Salonslider
const { width,height } = Dimensions.get('window');
const CARD_WIDTH1 = Dimensions.get('window').width * 0.7
const CARD_HEIGHT1 = Dimensions.get('window').height * 0.5
const CARD_WIDTH = Dimensions.get('window').width * 0.6
const CARD_HEIGHT = Dimensions.get('window').height * 0.4
const styles = StyleSheet.create({
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
       elevation: {  
        shadowOffset: {width: -2, height: 7},  
        shadowColor: '#fafafa',  
        shadowOpacity: 0.2,  
        shadowRadius: 3, 
        elevation: 2,     
      }, 
      icon4:{
        color:'#e7cb65',
        fontSize:15,
        marginLeft:5,
      },
})