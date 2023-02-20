import { Dimensions, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import SwiperFlatList from 'react-native-swiper-flatlist';


const Bookingpage = ({ navigation, route }) => {
  const data = route.params
  // console.log('data',data.data);
  // const [first, setFirst] = useState([])
  // const colors = ['tomato', 'thistle', 'skyblue', 'teal']
  // data={(data.Product_Mulitple_Images)} 

  // console.log('data', (data.Product_Mulitple_Images));
  return (
    <View style={[styles.container]}>
      {/* <View style={[styles.topview]}>
        <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
          onPress={() => {
            navigation.navigate('Mainpage')
          }
          }/>
        <Text style={[styles.formHead]}>Categories</Text>
      </View> */}
      <StatusBar hidden={true} />
      <ScrollView showsVerticalScrollIndicator={false}>

        <SwiperFlatList autoplay
          autoplayDelay={2}
          keyExtractor={(item, index) => `key-${index}`}
          autoplayLoop
          // index={2}
          showPagination
          data={data.data?.Product_Mulitple_Images}
          renderItem={({ item, index }) => (
            <View style={[styles.child]}>
              <ImageBackground source={{ uri: `data:image/png;base64,${item}`}} style={[styles.image]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
                    onPress={() => { navigation.navigate('Mainpage') }} />
                  {/* <MaterialCommunityIcons name="cards-heart-outline" size={24} color="#111111" style={[styles.gohomeicon, { marginLeft: 310 }]}
                    onPress={() => navigation.navigate('All_chats')} /> */}
                </View>
              </ImageBackground>
            </View>
          )}
        />

        <View style={[styles.cardStyle, styles.elevation]}>
          {/* <Image source={require('../../../assets/skinimage1.jpg')} style={{height:height*0.2,width:width*0.6,borderRadius:10}}/> */}
          <View style={{ flexDirection: 'row', marginTop: 0, marginBottom: 3, alignItems: 'center', paddingVertical: 10,elevation:5 }}>
            <Text style={{ fontWeight: "700", fontSize: 18, marginTop: 0, marginBottom: 0, marginLeft: 10, width: '50%',color: '#111111' }}>{data.data.Product_Name}</Text>
            <View style={{ marginLeft: 45, backgroundColor: '#dddddd', marginTop: 0, paddingHorizontal: 5, borderRadius: 10, alignItems: 'center', }}>
              <Ionicons name="share-social" size={24} color="#111111" style={{ fontSize: 15, marginHorizontal: 1, marginVertical: 3 }} />
            </View>
            <View style={{ marginLeft: 10, backgroundColor: '#6dd26f', marginTop: 0, paddingHorizontal: 10, borderRadius: 10, opacity: 0.3 }}>
              <Text style={{ color: 'green', opacity: 1, marginVertical: 3 }}>open</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: -5, marginBottom: 15 }}>
            <View style={{ backgroundColor: '#f6f6f6', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 30, flexDirection: 'row', marginLeft: 10, flex: 0.7 }}>
              <SimpleLineIcons name="clock" size={24} color="#111111" style={{ fontSize: 15, marginHorizontal: 5 }} />
              <Text style={{ fontSize: 12,color: '#555555' }}>{data.data.Time_takon}</Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 110,color: '#111111' }}>{'\u20B9'}{data.data.Price}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ marginLeft: 10, backgroundColor: '#f5deb3', marginTop: 18, paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20, opacity: 0.5 }}>
            <Text style={{ color: 'orange', opacity: 1, fontSize: 12 }}>{data.data.Product_Category}</Text>
          </View>
          <View style={{ marginLeft: 10, backgroundColor: '#f5deb3', marginTop: 18, paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20, opacity: 0.5 }}>
            <Text style={{ color: 'orange', opacity: 1, fontSize: 12 }}>{data.data.Product_Category}</Text>
          </View>
        </View>

        <View style={[styles.cardStyle1, styles.elevation]}>
          {/* <Image source={require('../../../assets/skinimage1.jpg')} style={{height:height*0.2,width:width*0.6,borderRadius:10}}/> */}
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 0, marginBottom: -5, marginLeft: 15,color: '#111111' }}>Description</Text>
          </View>
          <View style={[styles.hr80]}></View>
          <View style={{ marginHorizontal: 15, width: width * 0.77 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12,color: '#555555' }}>{data.data.Product_description}</Text>
          </View>
        </View>
        <View style={[styles.cardStyle1, styles.elevation]}>
          {/* <Image source={require('../../../assets/skinimage1.jpg')} style={{height:height*0.2,width:width*0.6,borderRadius:10}}/> */}
          <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>
            <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 0, marginBottom: 0, marginLeft: 15,color: '#444444' }}>Service Provider</Text>
            <Text style={{ marginTop: 0, marginLeft: 105,color: '#444444' }}>View More</Text>
          </View>
          <View style={[styles.hr80]}></View>
          <View style={{ marginHorizontal: 15, width: width * 0.77, paddingVertical: 30, flexDirection: 'row' }}>
            <Image source={{ uri: `data:image/png;base64,${data.data.saloon_logo}` }} style={{ width: 50, height: 20 }} />
            <Text style={{ fontWeight: "700", fontSize: 14, marginTop: -7, marginBottom: 0, marginLeft: 20,width:'60%',color: '#444444' }}>{data.data.saloonname}</Text>
            <View style={{ marginLeft: 10, backgroundColor: '#111111', paddingVertical: 5, paddingHorizontal: 5, borderRadius: 30, alignItems: 'center', flexDirection: 'row',height:30 }}>
              <Text style={{ color: '#ffffff' }}>0.0</Text>
              <Ionicons name="star-outline" size={24} color="#ffffff" style={{ fontSize: 15, marginHorizontal: 1, marginTop: 2 }} />
            </View>
          </View>
        </View>

        <View style={[styles.cardStyle1, styles.elevation]}>
          {/* <Image source={require('../../../assets/skinimage1.jpg')} style={{height:height*0.2,width:width*0.6,borderRadius:10}}/> */}
          <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>
            <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 0, marginBottom: 0, marginLeft: 15,color: '#444444' }}>Galleries</Text>
          </View>
          <View style={[styles.hr80]}></View>

          {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ alignContent: 'space-between', }}>
            {
              data.Product_Mulitple_Images.map(
                item => {
                  return (
                    <View>
                      <Image source={{ uri: `data:image/png;base64,${item}` }} style={{ height: height * 0.14, width: width * 0.27, borderRadius: 10, marginVertical: 15, marginLeft: 20, marginRight: 10 }} />
                    </View>
                  )
                }
              )}
          </ScrollView> */}
        </View>

        <View style={[styles.searchview]}>

        </View>

      </ScrollView>
      <View style={[styles.searchview1]}>
        <TouchableOpacity style={[styles.elevation, { backgroundColor: '#111111', paddingVertical: 10, paddingHorizontal: 70, borderRadius: 10, marginHorizontal: 10, }]}
          onPress={() => navigation.navigate('Bookservice',{data})}>
          <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Place a Booking</Text>
        </TouchableOpacity>
        <View style={{alignItems:'center',justifyContent:'flex-start'}}>
          <Text style={{marginBottom:5, fontSize: 12,color: '#777777' }}>Subtotal</Text>
          <Text style={{ fontWeight: 'bold', marginTop: -10, fontSize: 20,color: '#111111' }}>{'\u20B9'}{data.Price}</Text>
        </View>
      </View>
    </View>
  )
}

export default Bookingpage
const { width, height } = Dimensions.get('window');
const CARD_WIDTH = Dimensions.get('window').width * 0.9

const styles = StyleSheet.create({

  container1: {
    width: '100%',
    height: 300, backgroundColor: 'white'
  },
  child: { width, justifyContent: 'center' },
  image: { height: 210, width: '100%' },
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
    position: 'absolute',
    top: 20,
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    marginTop: -50,
    borderRadius: 10
  },
  cardStyle1: {
    width: CARD_WIDTH,
    // height: CARD_HEIGHT,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    marginBottom: 25,
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
    width: '90%',
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 10,
    marginLeft: 17
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
})

