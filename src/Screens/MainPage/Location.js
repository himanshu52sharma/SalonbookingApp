import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import {markers} from '../../../model/Mapdata'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const { width,height } = Dimensions.get('window');
const CARD_WIDTH = 220;
const CARD_HEIGHT = width*0.6;
const SPACING_FOR_CARD_INSET = width * 0.1-50;

const Location = () => {
  const theme = useTheme()
  const initialMapState = {
    
  //   markers : [
  //     {
  //         coordinate:{
  //             latitude: 22.6293867,
  //             longitude: 88.4354486,
  //         },
  //         title:'Amazing Salon',
  //         description:'This is the best salon',
  //         image: Images[0].image,
  //         rating:4,
  //         reviews:99,
  //     },
  //     {
  //         coordinate:{
  //             latitude: 22.6345648,
  //             longitude: 88.4377279,
  //         },
  //         title:'Second Amazing Salon',
  //         description:'This is the Second best salon',
  //         image: Images[1].image,
  //         rating:5,
  //         reviews:102,
  //     },
  //     {
  //         coordinate:{
  //             latitude: 22.6281662,
  //             longitude: 88.4410113,
  //         },
  //         title:'Third Amazing Salon',
  //         description:'This is the Third best salon',
  //         image: Images[2].image,
  //         rating:3,
  //         reviews:220,
  //     },
  //     {
  //         coordinate:{
  //             latitude: 22.6341137,
  //             longitude: 88.4497463,
  //         },
  //         title:' Fourth Amazing Salon',
  //         description:'This is the Fourth best salon',
  //         image: Images[3].image,
  //         rating:4,
  //         reviews:99,
  //     },
  //     {
  //         coordinate:{
  //             latitude: 22.6292757,
  //             longitude: 88.444781,
  //         },
  //         title:' Fifth Amazing Salon',
  //         description:'This is the Fifth best salon',
  //         image: Images[3].image,
  //         rating:4,
  //         reviews:178,
  //     },
  // ],
    markers,
    region:{
      latitude: 22.62938671242907,
      longitude: 88.43544866029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };
  const [state, setState] = useState(initialMapState);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
  mapAnimation.addListener(({ value }) =>{
    let index = Math.floor(value/CARD_WIDTH + 0.3); // animate 30% away from landing on the next
    if (index >= state.markers.length){
      index = state.markers.length-1;
    }
    if ( index <= 0) {
      index = 0;
    }

    clearTimeout(regionTimeout);

    const regionTimeout = setTimeout(() => {
      if(mapIndex!= index) {
        mapIndex = index;
        const { coordinate } = state.markers[index];
        _map.current.animateToRegion(
          {
            ...coordinate,
            latitudeDelta:state.region.latitudeDelta,
            longitudeDelta:state.region.longitudeDelta,
          },
          350
        );
      }
    }, 10);
   });
  });

  const interpolations = state.markers.map((marker, index) => {
     const inputRange = [
      (index-1) * CARD_WIDTH,
      index * CARD_WIDTH,
      ((index + 1) * CARD_WIDTH),
     ];

     const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp'
     });
     return { scale };
  });

  const onMarkerPress = (mapEventData) => {
     const markerID = mapEventData._targetInst.return.key;
     let x = (markerID * CARD_WIDTH) + (markerID * 20);
     if (Platform.OS === 'ios'){
      x = x - SPACING_FOR_CARD_INSET
     }
    
    //  _scrollView.current.getNode().scrollTo({x: x, y: 0, animated: true});

  }

  const _map = useRef(null);
  const _scrollView = useRef(null);
  return (
    <View style={[styles.container]}>
     <MapView
       ref={_map}
       initialRegion={state.region}
       style={styles.container}
     >
      {state.markers.map((marker, index) =>{
        const scaleStyle = {
          transform: [
            {
              scale: interpolations[index].scale,
            },
          ],
        };
        return(
          <Marker key={index} coordinate={marker.coordinate} onPress={(e)=>onMarkerPress(e)}>
             <Animated.View style={[styles.markerWrap]}>
              <Animated.Image
              source ={require('../../../assets/razorpay1.png')}
              style={[styles.marker, scaleStyle]}
              resizeMode="cover"
              />
             </Animated.View >
          </Marker>
        )
      })}
      {/* <Marker
      coordinate={{
        latitude: 37.78825,
        longitude: -122.4324,
      }}
      title="test title"
      description='this is the test description'
      >
      <Image source ={require('../../../assets/location-pin.png')} style={{width:35,height:35}}/>
      </Marker> */}
     </MapView> 
     <Animated.ScrollView
     ref={_scrollView}
     horizontal
     scrollEventThrottle={1}
     showsHorizontalScrollIndicator={false}
     pagingEnabled
     snapToInterval={CARD_WIDTH + 20}
     snapToAlignment="center"
     style={[styles.scrollView]}
     contentInset={{
      top:0,
      left:SPACING_FOR_CARD_INSET,
      bottom:0,
      right:SPACING_FOR_CARD_INSET
     }}
     contentContainerStyle={{
      paddingHorizontal: Platform.OS == 'android' ? SPACING_FOR_CARD_INSET:0
     }}
     onScroll={Animated.event(
      [
        {
          nativeEvent:{
            contentOffset:{
              x:mapAnimation,
            }
          },
        },
      ],
      {useNativeDriver: true}
     )}
     >
       {state.markers.map((marker, inedx) =>(
         <View style={styles.card} key={inedx}>
          <Image
          source={marker.image}
          style={styles.cardImage}
          resizeMode='cover'
          />
          <View style={[styles.textContent]}>
            <Text numberOfLines={1} style={[styles.cardTitle]}>{marker.title}</Text>
            <Text numberOfLines={1} style={[styles.cardDescription]}>{marker.description}</Text>
            <View style={[styles.button]}>
              <TouchableOpacity
               onPress={() => {}}
               style={[styles.signIn,{
                borderColor:'#111111',
                borderWidth:1
               }]}
              >
                <Text style={[styles.textSign,{color:'#111111'}]}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
         </View>
       ))}
     </Animated.ScrollView>
     </View>
  )
}

export default Location

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  card:{
    elevation:2,
    backgroundColor:'#fff',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    marginHorizontal:10,
    shadowColor:'#000',
    shadowRadius:5,
    shadowOpacity:0.3,
    shadowOffset:{x:2, y:-2},
    height:CARD_HEIGHT,
    width:CARD_WIDTH,
    overflow:'hidden'
    },
    cardImage:{
      flex:3.5,
      width:'100%',
      height:'100%',
      alignSelf:'center',
    },
    textContent:{
      flex:2,
      padding:10
    },
    cardTitle:{
      fontSize:12,
      fontWeight:'bold',
    },
    cardDescription:{
      fontSize:12,
      color:'#444'
    },
    markerWrap:{
      alignItems:'center',
      justifyContent:'center',
      width:50,
      height:50
    },
    marker:{
      width:30,
      height:30
    },
    button:{
      alignItems:'center',
      marginTop:5
    },
    signIn:{
       width:'100%',
       padding:5,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:3
    },
    textSign:{
      fontSize:14,
      fontWeight:'bold'
    },
  map: {
   height:'100%'
  },
  bubble:{
    flexDirection:'row',
    alignSelf:'flex-start',
    backgroundColor:'#fff',
    borderRadius:6,
    borderColor:'#ccc',
    borderWidth:0.5,
    padding:15,
    width:150,
  },
  arrow:{
    backgroundColor:'transparent',
    borderColor:'transparent',
    borderTopColor:'#fff',
    borderWidth:'16',
    alignSelf:'center',
    marginTop:-32,
  },
  arrowBorder:{
    backgroundColor:'transparent',
    borderColor:'transparent',
    borderTopColor:'#007a87',
    borderWidth:'16',
    alignSelf:'center',
    marginTop:-0.5,
  },
  name:{
     fontSize:16,
     marginBottom:5
  },
  image:{
    width:120,
    height:80,
  },
  scrollView:{
    position:'absolute',
    bottom:0,
    left:0 ,
    right:0,
    paddingVertical:10 
  },
});