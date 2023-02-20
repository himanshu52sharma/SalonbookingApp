import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Profile = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [profileimage, setProfileImage] = useState('');
  const [type, setType] = useState('Imagnotexist');


  const addImage = () => {
 
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        includeBase64:true,
        cropping: true
      }).then(image => {
        console.log(image);
        setProfileImage(image.data)
        setType('Imagexist')
      });
}
  return (
    <View style={[styles.container]}>
      <View style={[styles.topview]}>
        <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
          onPress={() => {
            navigation.navigate('Mainpage')
          }
          }
        />
        <Text style={[styles.formHead]}>Profile</Text>
      </View>
      <ScrollView>

        <View style={[styles.suggestionview]}>
          <View>
            <Text style={[styles.suggestiontext]}>Profile details</Text>
            <Text style={{ fontSize: 12, top: 5 }}>Change the following details and save them</Text>
          </View>
          {/* <TouchableOpacity style={{backgroundColor:'#111111',paddingVertical:4, paddingHorizontal: 8, borderRadius:5}}
    onPress={() => navigation.navigate('Categories')}>                       
    <Text style={{color:'#ffffff',fontSize:12}}>Clear All</Text>
    </TouchableOpacity> */}
        </View>
        <View style={[styles.numberview]}>
          <View style={[styles.imageview]}>
            <Text style={{ left: 20, top: 8, bottom: 10 }}>Image</Text>
            <TouchableOpacity style={{ backgroundColor: '#f4f4f4', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 30 }}
              onPress={() => navigation.navigate('Categories')}>
              <Text style={{ color: '#111111', fontSize: 12 }}>Reset</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.searchview]}>
            <View style={[styles.c1]}>
            {
                    image  && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                }
            <View style={[styles.fileview]}>
            { type === 'Imagnotexist' && 
              <Image style={[styles.profilepic]} source={require('../../../assets/image.png')}  />
               }
               { type === 'Imagexist' && 
              <Image style={[styles.profilepic1]} source={{ uri: `data:image/png;base64,${profileimage}` }} />
               }
              </View>
              <TouchableOpacity onPress={()=> addImage()} style={[styles.fileview]}>
              <Image style={[styles.profilepic]} source={require('../../../assets/add-image.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.numberview]}>
          <Text style={{ left: 20, top: 8, bottom: 10 }}>Full Name</Text>
          <View style={[styles.searchview]}>
            <Icon name="user-o" size={20} color="#111111" style={{ marginHorizontal: 20 }} />
            <TextInput style={[styles.searchbar]} placeholder="John Doe" />
          </View>
        </View>
        <View style={[styles.numberview]}>
          <Text style={{ left: 20, top: 8, bottom: 10 }}>Email</Text>
          <View style={[styles.searchview]}>
            <MaterialIcons name="alternate-email" size={24} color="#111111" style={{ marginHorizontal: 20 }} />
            <TextInput style={[styles.searchbar]} placeholder="johndoe@gmail.com" />
          </View>
        </View>
        <View style={[styles.numberview]}>
          <Text style={{ left: 20, top: 8, bottom: 10 }}>Phone Number</Text>
          <View style={[styles.searchview]}>
            <Image style={{ width: 30, height: 30, marginLeft: 20, marginRight: 10 }} source={require('../../../assets/india.png')} />
            <Text style={{ fontWeight: 'bold', marginRight: 5 }}>+91</Text>
            <TextInput style={[styles.searchbar]} keyboardType = 'numeric' placeholder="223 665 7896" />
          </View>
        </View>
        <View style={[styles.numberview]}>
          <Text style={{ left: 20, top: 8, bottom: 10 }}>Address</Text>
          <View style={[styles.searchview]}>
            <Entypo name="map" size={20} color="#111111" style={{ marginHorizontal: 20 }} />
            <TextInput style={[styles.searchbar]} placeholder="123 Street, City 136, State, Country" />
          </View>
        </View>
        <View style={[styles.numberview]}>
          <Text style={{ left: 20, top: 8, bottom: 10 }}>Short Biography</Text>
          <View style={[styles.searchview]}>
            <MaterialCommunityIcons name="clipboard-text-outline" size={20} color="#111111" style={{ marginHorizontal: 20 }} />
            <TextInput style={[styles.searchbar]} placeholder="Your short biography here" />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Text style={{ marginLeft: 20, marginRight: 10, color: '#888888' }}>Want to delete your account?</Text>
          <Text style={{ color: '#FF8500' }}>Click here</Text>
        </View>
      </ScrollView>
      {/* <View style={[styles.numberview]}> */}
      {/* <Text style={{ left: 20, top: 8, bottom: 10 }}>Phone Number</Text> */}
      <View style={[styles.searchview1]}>
        <TouchableOpacity style={{ backgroundColor: '#111111', paddingVertical: 10, paddingHorizontal: 90, borderRadius: 10, marginHorizontal: 10 }}
          onPress={() => navigation.navigate('Categories')}>
          <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: 'bold' }}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#f4f4f4', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 10 }}
          onPress={() => navigation.navigate('Categories')}>
          <Text style={{ color: '#111111', fontSize: 12, fontWeight: 'bold' }}>Reset</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8f8',
  },
  formHead: {
    fontSize: 17,
    color: '#111111',
    marginLeft: 120,
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
  numberview: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    // borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 10,
    top: 10,
    marginVertical: 15,
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
    // width: '90%',
    // alignSelf: 'center',
    paddingVertical: 10,
    // top: 0,
    // borderColor: 'lightgray',
    // zIndex: 100,
    // borderWidth: 1,
    // backgroundColor: '#ffffff'
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
      marginTop:20
},
profilepic: {
    width: 30,
    height: 30,
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
  width: 100,
  height: 100,
  borderRadius: 10,
  marginLeft: 20,
  backgroundColor:'#f1f1f1'
},
});