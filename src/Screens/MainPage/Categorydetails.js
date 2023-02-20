import { Dimensions, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SwiperFlatList from 'react-native-swiper-flatlist';


const Categorydetails = ({ navigation, route }) => {
  const data = route.params
  const [search, setSearch] = useState('');
  const [type, setType] = useState('Languages');
  const [pdata, setPdata] = useState([]);


  // console.log(data.item.cat_name);
  // console.log('data',data);

  const getProductData = async () => {
    var body = {
      category: data.item.cat_name
    }
    try {
      const response = await fetch(
        "http://saloon.rootstechnology.in/pcapi/product_list.php",
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
    getProductData()
  }, [data])

  return (
    <View style={[styles.container]}>
      <StatusBar hidden={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.child]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <AntDesign name="left" size={24} color="#ffffff" style={[styles.gohomeicon]}
              onPress={() => { navigation.navigate('Mainpage') }} />
            <Text style={{ color: '#ffffff', fontWeight: 'bold', marginLeft: 130, top: 20, fontSize: 16, }}>{data.item.cat_name}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 40, paddingVertical: 40 }}>
            <Image source={{ uri: `data:image/png;base64,${data.item.cat_img}` }} style={[styles.image]} />
          </View>
        </View>


          
        <View style={[styles.locationview]}>
          <Ionicons name="location-outline" size={24} color="#111111" style={[styles.icon1]} />
          <Text style={[styles.locationtext]}>Please choose your address </Text>
          <MaterialIcons name="my-location" size={24} color="#111111" style={[styles.icon1]}
          />
        </View>
        <View style={[styles.searchview]}>
          <Icon name="search" size={24} color="#111111" style={[styles.icon3]} />
          <TextInput style={[styles.searchbar]} placeholder="Search for salon service..."
            onChangeText={(text) => { setSearch(text) }} />
        </View>
        {search != '' && <View style={[styles.searchresultouter]}>
          {/* <Text>You Typrd Something</Text> */}
          <FlatList style={[styles.searchresultinner]}
            data={adata}
            renderItem={({ item }) => {
              if (item.cat_name.toLowerCase().includes(search.toLowerCase())) {
                return (
                  <View style={[styles.searchresult]}>
                    <Text style={[styles.searchresulttext]}>{item.cat_name}</Text>
                  </View>
                )
              }
            }} />
        </View>}

        <View style={styles.btnContainer}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <TouchableOpacity
              onPress={() => setType('Languages')}
              style={{
                ...styles.btn,
                backgroundColor: type === 'Languages' ? '#111' : '#f4f4f4',
              }}>


              <Text
                style={{
                  ...styles.btnText,
                  color: type === 'Languages' ? '#fff' : '#111',
                }}>
                {('All')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setType('Availability') && { Languages }}
              style={{
                ...styles.btn,
                backgroundColor: type === 'Availability' ? '#111' : '#f4f4f4',
              }}>
              <Text
                style={{
                  ...styles.btnText,
                  color: type === 'Availability' ? '#fff' : '#111',
                }}>
                {('Availability')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setType('Rating') && { Languages }}
              style={{
                ...styles.btn,
                backgroundColor: type === 'Rating' ? '#111' : '#f4f4f4',
              }}>
              <Text
                style={{
                  ...styles.btnText,
                  color: type === 'Rating' ? '#fff' : '#111',
                }}>
                {('Rating')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setType('Featured') && { Languages }}
              style={{
                ...styles.btn,
                backgroundColor: type === 'Featured' ? '#111' : '#f4f4f4',
              }}>
              <Text
                style={{
                  ...styles.btnText,
                  color: type === 'Featured' ? '#fff' : '#111',
                }}>
                {('Featured')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setType('Popular') && { Languages }}
              style={{
                ...styles.btn,
                backgroundColor: type === 'Popular' ? '#111' : '#f4f4f4',
              }}>
              <Text
                style={{
                  ...styles.btnText,
                  color: type === 'Popular' ? '#fff' : '#111',
                }}>
                {('Popular')}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {type === 'Languages' &&
          <View> 
            {
              pdata.map((item) => {
                // console.log('item',item);
                return (
                  <TouchableOpacity style={[styles.cardStyle1,]}
                    onPress={() => navigation.navigate('Bookingpage', item)}>
                    <View style={{ borderRadius: 20 }}>
                      <Image source={{ uri: `data:image/png;base64,${item.Product_Images}` }} style={{ height: height * 0.11, width: width * 0.22, marginLeft: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                      <View style={{ marginLeft: 10, backgroundColor: '#6dd26f', paddingVertical: 3, paddingHorizontal: 10, opacity: 0.3, alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                        <Text style={{ color: 'green', opacity: 1 }}>open</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{ fontWeight: "700", marginVertical: 7, marginLeft: 10 ,color:'#444444'}}>{item.Product_Name}</Text>
                      <View style={[styles.hr90]}></View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.6 }}>
                        <View style={{ backgroundColor: '#f6f6f6', paddingVertical: 5, paddingHorizontal: 6, borderRadius: 30, flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>
                          <SimpleLineIcons name="clock" size={10} color="#111111" style={{ fontSize: 13, marginHorizontal: 5 }} />
                          <Text style={{ fontSize: 12,color:'#444444'}}>{item.Time_takon}</Text>
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold',color:'#444444'}}>{'\u20B9'}{item.Price}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }}>
                        <Image source={require('../../../assets/buildingg.png')} style={{ height: 17, width: 17, marginLeft: 10, marginRight: 5, marginTop: 15 }} />
                        <Text style={{ marginTop: 15, fontSize: 13,color:'#444444' }}>{item.saloonname}</Text>
                      </View>

                      <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }}>
                        <Ionicons name="location-outline" size={17} color="#111111" style={{ marginTop: 10, marginLeft: 10, marginRight: 5 }} />
                        <Text style={{ marginTop: 15, fontSize: 13,color:'#444444'}}>{item.saloonaddress}</Text>
                      </View>
                      <View style={[styles.hr90]}></View>

                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', marginLeft: 10, borderColor: "#dddddd", borderWidth: 1, borderRadius: 20, width: '33%', paddingVertical: 3, justifyContent: 'center' }}>
                          <Text style={{ fontSize: 10,color:'#444444' }}>{item.Product_Category}</Text>
                        </View>
                        {/* <View style={{flexDirection:'row', marginHorizontal:10,borderColor:"#dddddd",borderWidth:1,borderRadius:20,width:'33%',paddingVertical:3,justifyContent:'center'}}>
   <Text style={{fontSize:10,}}>Hair Color</Text>
  </View> */}
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              )}
          </View>}

        {type === 'Rating' && <View>
          {
            pdata.map((item) => {
              // console.log('item',item);
              return (
                <TouchableOpacity style={[styles.cardStyle1,]}
                  onPress={() => navigation.navigate('Bookingpage', item)}>
                  <View style={{ borderRadius: 20 }}>
                    <Image source={{ uri: `data:image/png;base64,${item.Product_Images}` }} style={{ height: height * 0.11, width: width * 0.22, marginLeft: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                    <View style={{ marginLeft: 10, backgroundColor: '#6dd26f', paddingVertical: 3, paddingHorizontal: 10, opacity: 0.3, alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                      <Text style={{ color: 'green', opacity: 1 }}>open</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "700", marginVertical: 7, marginLeft: 10 }}>{item.Product_Name}</Text>
                    <View style={[styles.hr90]}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.6 }}>
                      <View style={{ backgroundColor: '#f6f6f6', paddingVertical: 5, paddingHorizontal: 6, borderRadius: 30, flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>
                        <SimpleLineIcons name="clock" size={10} color="#111111" style={{ fontSize: 13, marginHorizontal: 5 }} />
                        <Text style={{ fontSize: 12 }}>{item.Time_takon}</Text>
                      </View>
                      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{'\u20B9'}{item.Price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }}>
                      <Image source={require('../../../assets/buildingg.png')} style={{ height: 17, width: 17, marginLeft: 10, marginRight: 5, marginTop: 15 }} />
                      <Text style={{ marginTop: 15, fontSize: 13 }}>{item.saloonname}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }}>
                      <Ionicons name="location-outline" size={17} color="#111111" style={{ marginTop: 10, marginLeft: 10, marginRight: 5 }} />
                      <Text style={{ marginTop: 15, fontSize: 13 }}>{item.saloonaddress}</Text>
                    </View>
                    <View style={[styles.hr90]}></View>

                    <View style={{ flexDirection: 'row' }}>
                      <View style={{ flexDirection: 'row', marginLeft: 10, borderColor: "#dddddd", borderWidth: 1, borderRadius: 20, width: '33%', paddingVertical: 3, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, }}>{item.Product_Category}</Text>
                      </View>
                      {/* <View style={{flexDirection:'row', marginHorizontal:10,borderColor:"#dddddd",borderWidth:1,borderRadius:20,width:'33%',paddingVertical:3,justifyContent:'center'}}>
         <Text style={{fontSize:10,}}>Hair Color</Text>
        </View> */}
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            )}
        </View>}

        {type === 'Featured' && <View>
          {
            pdata.map((item) => {
              // console.log('item',item);
              return (
                <TouchableOpacity style={[styles.cardStyle1,]}
                  onPress={() => navigation.navigate('Bookingpage', item)}>
                  <View style={{ borderRadius: 20 }}>
                    <Image source={{ uri: `data:image/png;base64,${item.Product_Images}` }} style={{ height: height * 0.11, width: width * 0.22, marginLeft: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                    <View style={{ marginLeft: 10, backgroundColor: '#6dd26f', paddingVertical: 3, paddingHorizontal: 10, opacity: 0.3, alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                      <Text style={{ color: 'green', opacity: 1 }}>open</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "700", marginVertical: 7, marginLeft: 10 }}>{item.Product_Name}</Text>
                    <View style={[styles.hr90]}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.6 }}>
                      <View style={{ backgroundColor: '#f6f6f6', paddingVertical: 5, paddingHorizontal: 6, borderRadius: 30, flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>
                        <SimpleLineIcons name="clock" size={10} color="#111111" style={{ fontSize: 13, marginHorizontal: 5 }} />
                        <Text style={{ fontSize: 12 }}>{item.Time_takon}</Text>
                      </View>
                      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{'\u20B9'}{item.Price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }}>
                      <Image source={require('../../../assets/buildingg.png')} style={{ height: 17, width: 17, marginLeft: 10, marginRight: 5, marginTop: 15 }} />
                      <Text style={{ marginTop: 15, fontSize: 13 }}>{item.saloonname}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }}>
                      <Ionicons name="location-outline" size={17} color="#111111" style={{ marginTop: 10, marginLeft: 10, marginRight: 5 }} />
                      <Text style={{ marginTop: 15, fontSize: 13 }}>{item.saloonaddress}</Text>
                    </View>
                    <View style={[styles.hr90]}></View>

                    <View style={{ flexDirection: 'row' }}>
                      <View style={{ flexDirection: 'row', marginLeft: 10, borderColor: "#dddddd", borderWidth: 1, borderRadius: 20, width: '33%', paddingVertical: 3, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, }}>{item.Product_Category}</Text>
                      </View>
                      {/* <View style={{flexDirection:'row', marginHorizontal:10,borderColor:"#dddddd",borderWidth:1,borderRadius:20,width:'33%',paddingVertical:3,justifyContent:'center'}}>
         <Text style={{fontSize:10,}}>Hair Color</Text>
        </View> */}
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            )}
        </View>}

        {type === 'Popular' && <View>
          {
            pdata.map((item) => {
              // console.log('item',item);
              return (
                <TouchableOpacity style={[styles.cardStyle1,]}
                  onPress={() => navigation.navigate('Bookingpage', item)}>
                  <View style={{ borderRadius: 20 }}>
                    <Image source={{ uri: `data:image/png;base64,${item.Product_Images}` }} style={{ height: height * 0.11, width: width * 0.22, marginLeft: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                    <View style={{ marginLeft: 10, backgroundColor: '#6dd26f', paddingVertical: 3, paddingHorizontal: 10, opacity: 0.3, alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                      <Text style={{ color: 'green', opacity: 1 }}>open</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "700", marginVertical: 7, marginLeft: 10 }}>{item.Product_Name}</Text>
                    <View style={[styles.hr90]}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.6 }}>
                      <View style={{ backgroundColor: '#f6f6f6', paddingVertical: 5, paddingHorizontal: 6, borderRadius: 30, flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>
                        <SimpleLineIcons name="clock" size={10} color="#111111" style={{ fontSize: 13, marginHorizontal: 5 }} />
                        <Text style={{ fontSize: 12 }}>{item.Time_takon}</Text>
                      </View>
                      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{'\u20B9'}{item.Price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }}>
                      <Image source={require('../../../assets/buildingg.png')} style={{ height: 17, width: 17, marginLeft: 10, marginRight: 5, marginTop: 15 }} />
                      <Text style={{ marginTop: 15, fontSize: 13 }}>{item.saloonname}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }}>
                      <Ionicons name="location-outline" size={17} color="#111111" style={{ marginTop: 10, marginLeft: 10, marginRight: 5 }} />
                      <Text style={{ marginTop: 15, fontSize: 13 }}>{item.saloonaddress}</Text>
                    </View>
                    <View style={[styles.hr90]}></View>

                    <View style={{ flexDirection: 'row' }}>
                      <View style={{ flexDirection: 'row', marginLeft: 10, borderColor: "#dddddd", borderWidth: 1, borderRadius: 20, width: '33%', paddingVertical: 3, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, }}>{item.Product_Category}</Text>
                      </View>
                      {/* <View style={{flexDirection:'row', marginHorizontal:10,borderColor:"#dddddd",borderWidth:1,borderRadius:20,width:'33%',paddingVertical:3,justifyContent:'center'}}>
         <Text style={{fontSize:10,}}>Hair Color</Text>
        </View> */}
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            )}
        </View>}

        {type === 'Availability' && <View>
          {
            pdata.map((item) => {
              // console.log('item',item);
              return (
                <TouchableOpacity style={[styles.cardStyle1,]}
                  onPress={() => navigation.navigate('Bookingpage', item)}>
                  <View style={{ borderRadius: 20 }}>
                    <Image source={{ uri: `data:image/png;base64,${item.Product_Images}` }} style={{ height: height * 0.11, width: width * 0.22, marginLeft: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                    <View style={{ marginLeft: 10, backgroundColor: '#6dd26f', paddingVertical: 3, paddingHorizontal: 10, opacity: 0.3, alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                      <Text style={{ color: 'green', opacity: 1 }}>open</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "700", marginVertical: 7, marginLeft: 10 }}>{item.Product_Name}</Text>
                    <View style={[styles.hr90]}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.6 }}>
                      <View style={{ backgroundColor: '#f6f6f6', paddingVertical: 5, paddingHorizontal: 6, borderRadius: 30, flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>
                        <SimpleLineIcons name="clock" size={10} color="#111111" style={{ fontSize: 13, marginHorizontal: 5 }} />
                        <Text style={{ fontSize: 12 }}>{item.Time_takon}</Text>
                      </View>
                      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{'\u20B9'}{item.Price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }}>
                      <Image source={require('../../../assets/buildingg.png')} style={{ height: 17, width: 17, marginLeft: 10, marginRight: 5, marginTop: 15 }} />
                      <Text style={{ marginTop: 15, fontSize: 13 }}>{item.saloonname}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }}>
                      <Ionicons name="location-outline" size={17} color="#111111" style={{ marginTop: 10, marginLeft: 10, marginRight: 5 }} />
                      <Text style={{ marginTop: 15, fontSize: 13 }}>{item.saloonaddress}</Text>
                    </View>
                    <View style={[styles.hr90]}></View>

                    <View style={{ flexDirection: 'row' }}>
                      <View style={{ flexDirection: 'row', marginLeft: 10, borderColor: "#dddddd", borderWidth: 1, borderRadius: 20, width: '33%', paddingVertical: 3, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, }}>{item.Product_Category}</Text>
                      </View>
                      {/* <View style={{flexDirection:'row', marginHorizontal:10,borderColor:"#dddddd",borderWidth:1,borderRadius:20,width:'33%',paddingVertical:3,justifyContent:'center'}}>
         <Text style={{fontSize:10,}}>Hair Color</Text>
        </View> */}
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })}
        </View>}
      </ScrollView>

    </View>
  )
}

export default Categorydetails
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
  hr90: {
    width: '80%',
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 10,
    marginLeft: 10
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

