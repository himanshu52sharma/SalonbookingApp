import { Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SwiperFlatList from 'react-native-swiper-flatlist';
const Saloncategory = ({ navigation, route }) => {
  const {data, id} = route.params

  // console.log('data',data.category_name);
  const [type, setType] = useState('Languages');
  const [pdata, setPdata] = useState([]);
  const getProductData = async () => {
    var body = {
      id:id,
      category: data.category_name
    }
    try {
      const response = await fetch(
        "http://saloon.rootstechnology.in/pcapi/product_saloon_list.php",
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8' },
          body: JSON.stringify(body),
        },
      );
      const pData = await response.json();
      // console.log("data cat",pData);
      setPdata(pData.Addondata);


    }
    catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    setInterval(() => {
    getProductData()
    }, 500);
    return () => clearInterval(t);
  }, [])
  // console.log("pdata",pdata);


  return (
    <View style={[styles.container]}>
      <StatusBar hidden={true} />
      <ScrollView showsVerticalScrollIndicator={false}>      
          <View>  
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1,marginBottom:40 }}>
            <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
              onPress={() => { navigation.navigate('Mainpage') }} />
            <Text style={{ color: '#111111', fontWeight: 'bold', marginLeft: 80, top: 20, fontSize: 16, }}>{data.category_name}</Text>
          </View>
            {
              pdata && pdata.map(item => {
                // console.log('item',item);
                return (
                  <View style={[styles.cardStyle1,]}
                    onPress={() => navigation.navigate('Bookingpage',{
                      data:item
                    })}>
                    <View style={{ borderRadius: 20 }}>
                      <Image source={{ uri: `data:image/png;base64,${item.Product_Images}` }} style={{ height: height * 0.07, width: width * 0.15, marginLeft: 10, borderRadius: 10 }} />
                    </View>
                    <View>
                      <Text style={{ fontWeight: "700", marginVertical: 7, marginLeft: 10 ,color:'#444444'}}>{item.Product_Name}</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', marginLeft: 10, borderColor: "#dddddd", borderWidth: 1, borderRadius: 20, width: '33%', paddingVertical: 3, justifyContent: 'center', marginTop: 7 }}>
                          <Text style={{ fontSize: 10,color:'#444444' }}>{item.Product_Category}</Text>
                        </View>
                      </View>
                      <View style={[styles.hr90]}></View>
                      
                      <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', marginLeft: 10 }}>
                        {/* <Image source={require('../../../assets/buildingg.png')} style={{ height: 17, width: 17, marginLeft: 10, marginRight: 5, marginTop: 5 }} /> */}
                        <Text style={{ marginTop: 0, fontSize: 12,color:'#444444', fontWeight: 'bold' }}>{item.Product_description}</Text>
                      </View>

                      <View style={[styles.hr90]}></View>
                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.6 }}>
                        <View style={{ backgroundColor: '#f6f6f6', paddingVertical: 5, paddingHorizontal: 6, borderRadius: 30, flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>
                          <SimpleLineIcons name="clock" size={10} color="#111111" style={{ fontSize: 13, marginHorizontal: 5 }} />
                          <Text style={{ fontSize: 12,color:'#444444'}}>{item.Time_takon}</Text>
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold',color:'#444444'}}>{'\u20B9'}{item.Price}</Text>
                      </View>
                    <View style={[styles.hr91]}></View>

                    </View>
                  </View>
                )}
              )}
          </View>


      </ScrollView>

    </View>
  )
}

export default Saloncategory
const { width, height } = Dimensions.get('window');
const CARD_WIDTH = Dimensions.get('window').width * 0.9
const styles = StyleSheet.create({

  container: { flex: 0.4, backgroundColor: 'white', },
  child: { width, backgroundColor: '#F0E68C', width: '100%', },
  image: { height: 70, width: 70 },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fafafa',
  },
  gohomeicon: {
    marginLeft: 10,
    position: 'absolute',
    top: 20,
    flex: 2
  },
  icon3: {
    color: '#111111',
    fontSize: 20,
    marginLeft: 15,
  },
  cardStyle: {
    width: CARD_WIDTH,
    // height: CARD_HEIGHT,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    // marginTop:-70,
    borderRadius: 10
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
    marginTop: 10,
    borderRadius: 10
  },
  elevation: {
    shadowOffset: { width: -2, height: 7 },
    shadowColor: '#fafafa',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  hr80: {
    width: '100%',
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 10,
    marginLeft: 17
  },
  hr90: {
    width: '80%',
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 10,
    marginLeft: 10
  },
  hr91: {
    width: '113%',
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 10,
    marginLeft: -42
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
  locationview: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 10,
    top: 135,
    position: 'absolute',
    borderColor: 'lightgray',
    zIndex: 100,
    borderWidth: 0,
    backgroundColor: '#F0E68C'
  },
  locationtext: {
    marginLeft: 10,
    marginRight: 80
  },
  searchbar: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    top: -5,
    fontSize: 14,
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginTop: 10,
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
    marginTop: -27,
    borderColor: 'lightgray',
    zIndex: 100,
    borderWidth: 1,
    backgroundColor: '#ffffff'
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
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
})