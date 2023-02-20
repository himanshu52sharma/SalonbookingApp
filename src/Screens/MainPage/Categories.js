import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import { useState } from 'react';
import { useEffect } from 'react';


const Categories = ({ navigation }) => {
  const [cdata, setCdata] = useState([]);

  const getUserData = async () =>{
    try{
      const response = await fetch(
        "http://saloon.rootstechnology.in/pcapi/view_all_product.php"
      );
      const myData = await response.json();
      // console.log("hgduytgdu",myData.Catlist);
      setCdata(myData.Catlist);
    }
    catch(error){
      console.log(error);
    }
};
// console.log("cdata",cdata);
useEffect(() => {
  getUserData();
},[])
  return (
    <View style={[styles.container]}>
      <View style={[styles.topview]}>
        <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
          onPress={() => {
            navigation.navigate('Mainpage')
          }
          }
        />
        <Text style={[styles.formHead]}>Categories</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.searchview]}>
        <Icon name="search" size={24} color="#111111" style={[styles.icon3]} />
        <TextInput style={[styles.searchbar]} placeholder="Search for salon service..." />
      </View>
      <View style={[styles.suggestionview]}>
        <Text style={[styles.suggestiontext]}>Categories of services </Text>
        <Ionicons name="list-outline" size={24} color="#111111" style={{marginLeft:50}} />
        <Foundation name="thumbnails" size={24} color="#111111" style={{marginRight:10}} />
      </View>

  {
    cdata.map((item)=>{
      return(
        <TouchableOpacity style={[styles.suggestionview2]}
        onPress={() => navigation.navigate('Categorydetails',{
          item
         })}>
      <Image source={{uri:`data:image/png;base64,${item.cat_img}`}} style={{width:30,height:30,marginHorizontal:20}}/>
  <Text style={[styles.suggestiontext1]}>{item.cat_name}</Text>
  </TouchableOpacity>
      )
    })
  }

  </ScrollView>
    </View>
  )
}

export default Categories

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
    paddingVertical: 0,
    top: 0,
    borderColor: 'lightgray',
    zIndex: 100,
    borderWidth: 1,
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
  suggestionview1: {
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
    backgroundColor: '#cdFcFf'
  },
  suggestiontext1: {
    fontSize: 14,
    fontWeight: '700',
    color: '#666666'
  },
  suggestionview2: {
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
    backgroundColor: '#FDF5E6'
  },
  suggestionview3: {
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
    backgroundColor: '#FFdfD7'
  },
  suggestionview4: {
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
    backgroundColor: '#E6E6FA'
  },
  suggestionview5: {
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
    backgroundColor: '#caecD4'
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
})