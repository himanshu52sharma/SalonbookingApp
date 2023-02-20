import React, {Component, useEffect} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Button,
  StyleSheet,
  Dimensions,
  Linking,
  Alert,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';
// import appConfig from '../../app.json';
// import {Color} from '../theme';
import {FAB} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';

// Disable yellow box warning messages
// console.disableYellowBox = true;

const Geolocationn =({props,navigation}) => {
  const openMainpage = (userLocation) =>{
    // console.log(item);
    navigation.navigate('Mainpage',userLocation)
  }
  const [loading, setLoading] = React.useState(true);
  const [region, setRegion] = React.useState({
    latitude: 26.241646589870545,
    longitude: 78.19236478469404,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [isMapReady, setIsMapReady] = React.useState(false);
  const [marginTop, setMarginTop] = React.useState(1);
  const [userLocation, setUserLocation] = React.useState('');

  const [regionChangeProgress, setRegionChangeProgress] = React.useState(false);
  const mapRef = React.useRef(null);

  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    // if (status === 'disabled') {
    //   Alert.alert(
    //     `Turn on Location Services to allow "${appConfig.displayName}" to determine your location.`,
    //     '',
    //     [
    //       {text: 'Go to Settings', onPress: openSetting},
    //       {text: "Don't Use Location", onPress: () => {}},
    //     ],
    //   );
    // }

    return false;
  };

  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        };
        console.log('region==',region)
        setRegion(region);
       
        setLoading(false);
        mapRef.current.animateToRegion(region, 2 * 1000);
      },
      error => {
        console.log(error);
        setLoading(false);
      },
      {enableHighAccuracy: true, timeout: 200000, maximumAge: 5000},
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  const onMapReady = () => {
    setIsMapReady(true);
    setMarginTop(0);
  };

  // Fetch location details as a JOSN from google map API
  const fetchAddress = () => {
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        region.latitude +
        ',' +
        region.longitude +
        '&key=' +
        'AIzaSyCF8BRYo9pIN3E-kPPG7mq-0oFhjnG59a0',
    )
      .then(response => response.json())
      .then(responseJson => {
       // console.log('map respo==',responseJson);
        const userLocation = responseJson.results[0].formatted_address;
        setUserLocation(userLocation);
 
        setRegionChangeProgress(false);
      })
      .catch(error => {
        console.error(error);
        setRegionChangeProgress(false);
      });
  };

  // Update state on region change
  const onRegionChange = region => {
    setRegion(region);
    setRegionChangeProgress(true);
    fetchAddress();
  };

  // Action to be taken after select location button click
  const onLocationSelect = () => {
    // alert(userLocation);
    props.setLocation(userLocation);
    props.setLatitude(region.latitude);
    props.setLongitude(region.longitude);
    props.onPress();
    // props.onPress ?  : null;
    // props.navigation.goBack();
  };

  //   if (loading) {
  //     return (
  //       <View style={styles.spinnerView}>
  //         <ActivityIndicator size="large" color="#0000ff" />
  //       </View>
  //     );
  //   } else {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={loading}
        size={'large'}
        // color={Color.primary}
        style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
      />
      <View style={{flex: 3}}>
        {!!region.latitude && !!region.longitude && (
          <MapView
            ref={mapRef}
            minZoomLevel={0}  // default => 0
            maxZoomLevel={20} // default => 20
            showsBuildings
            showsCompass={true}
            showsMyLocationButton
            showsScale
            loadingEnabled
            style={{...styles.map, marginTop: marginTop}}
            initialRegion={region}
            showsUserLocation={true}
            onMapReady={onMapReady}
            onRegionChangeComplete={onRegionChange}>
            <Marker
              coordinate={{
                latitude: region.latitude,
                longitude: region.longitude,
              }}
              title={'Your Location'}
              draggable
            />
          </MapView>
        )}

        {/* <View style={styles.mapMarkerContainer}>
              <Text
                style={{
                  fontFamily: 'fontawesome',
                  fontSize: 42,
                  color: '#ad1f1f',
                }}>
                &#xf041;
              </Text>
            </View> */}
      </View>
      {/* <View style={styles.deatilSection}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
            marginBottom: 10,
          }}>
          Move map for location
        </Text>
        <Text style={{fontSize: 10, color: '#999'}}>LOCATION</Text>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 14,
            paddingVertical: 10,
            fontFamily: 'Poppins-Medium',
            // borderBottomColor: 'silver',
            // borderBottomWidth: 0.5,
          }}>
          {!regionChangeProgress ? userLocation : 'Identifying Location...'}
        </Text>
        <TouchableOpacity style={[styles.elevation, { backgroundColor: '#111111', paddingVertical: 10, borderRadius: 10, marginHorizontal: 10,alignItems:'center' }]}
          onPress={() => navigation.navigate('Categories')}>
          <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Pick Here</Text>
        </TouchableOpacity>
        <FAB
          icon="check"
          loading={loading}
          style={styles.btnContainer}
          disabled={regionChangeProgress}
          onPress={onLocationSelect}
        />
      </View> */}
      <View style={styles.card}>
          <View style={[styles.textContent]}>
            <Text numberOfLines={1} style={[styles.cardTitle]}>Move map for location</Text>
            <Text numberOfLines={1} style={[styles.cardDescription]}>Full Address</Text>
            <View style={[styles.button]}>
            <Text
          numberOfLines={2}
          style={{
            fontSize: 14,
            paddingVertical: 10,
            fontFamily: 'Poppins-Medium',
            fontWeight:'bold',
            // borderBottomColor: 'silver',
            // borderBottomWidth: 0.5,
          }}>
          {!regionChangeProgress ? userLocation : 'Identifying Location...'}
        </Text>
            </View>
          </View>
         </View>
         <TouchableOpacity style={{ backgroundColor: '#111111', paddingVertical: 10, borderRadius: 10, marginHorizontal: 10,alignItems:'center',position:'absolute',bottom:40,width:'90%',elevation:5 }}
                onPress={() => openMainpage(userLocation)}>
          <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Pick Here</Text>
        </TouchableOpacity>
        <FAB
          icon="check"
          loading={loading}
          style={styles.btnContainer}
          disabled={regionChangeProgress}
          onPress={onLocationSelect}
        />
    </View>
  );
  //   }
};

export default Geolocationn
const { width,height } = Dimensions.get('window');
const CARD_WIDTH = 300;
const CARD_HEIGHT = 200;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  map: {
    flex: 1,
  },
  mapMarkerContainer: {
    left: '47%',
    position: 'absolute',
    top: '42%',
  },
  mapMarker: {
    fontSize: 40,
    color: 'red',
  },
  deatilSection: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  spinnerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    // backgroundColor: Color.primary,
    position: 'absolute',
    bottom: 170,
    right: 30,
  },
  card:{
    elevation:2,
    borderRadius: 10,
    backgroundColor:'#fff',
    // borderTopLeftRadius:5,
    // borderTopRightRadius:5,
    marginLeft:20,
    shadowColor:'#000',
    shadowRadius:5,
    shadowOpacity:0.3,
    shadowOffset:{x:2, y:-2},
    // height:CARD_HEIGHT,
    width:"90%",
    overflow:'hidden',
    position:'absolute',
    bottom:100,
    left:0 ,
    right:0,
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
      fontSize:18,
      fontWeight:'bold',
      marginVertical:10,
    },
    cardDescription:{
      fontSize:12,
      color:'#444'
    },
});