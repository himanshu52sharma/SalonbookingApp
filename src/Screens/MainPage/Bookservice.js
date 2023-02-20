import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useEffect } from 'react';


// import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Bookservice = ({ navigation, route }) => {
  const data = route.params
  // console.log('bookingservicedata',data);
  const [image, setImage] = useState(null);
  const [profileimage, setProfileImage] = useState('');
  const [notes, setNotes] = useState('');
  // console.log('notes',notes);
  const [type, setType] = useState('Imagnotexist');
  const [adata, setAdata] = useState([]);
  const [time , setTime] = useState('');
  const [selectsalon, setSelectsalon] = useState(false)
  // const toggleSelectsalon = () => {
  //   // 👇️ passed function to setState
  //   setSelectsalon(current => !current);
  // };

  const getSalonTime = async () =>{
    try{
      const response = await fetch(
        "http://saloon.rootstechnology.in/pcapi/slot_time.php"
      );
      const myData = await response.json();
      // console.log("hgduytgdu",myData.Catlist);
      setAdata(myData.Addondata);
    }
    catch(error){
      console.log(error);
    }
};
// console.log('adata',adata);
useEffect(() => {
  getSalonTime();
},[])

  const months = [
  ('JAN'),
  ('FEB'),
  ('MAR'),
  ('APR'),
  ('MAY'),
  ('JUN'),
  ('JUL'),
  ('AUG'),
  ('SEP'),
  ('OCT'),
  ('NOV'),
  ('DEC'),
  ];
  // const start = moment('2018-12-08 09:42');
  // const remainder = 30 - (start.minute() % 30);
   
  // const dateTime = moment(start).add(remainder, "minutes").format("DD.MM.YYYY, h:mm:ss a");
  
  // console.log(dateTime);
  const days = [
    ('SUN'),
    ('MON'),
    ('TUE'),
    ('WED'),
    ('THU'),
    ('FRI'),
    ('SAT'),
  ];
  const morningtimes = [
    ('6:00 AM'),
    ('6:30 AM'),
    ('7:00 AM'),
    ('7:30 AM'),
    ('8:00 AM'),
    ('8:30 AM'),
    ('9:00 AM'),
    ('9:30 AM'),
    ('10:00 AM'),
    ('10:30 AM'),
    ('11:00 AM'),
    ('11:30 AM'),
    ];
  const afternoontimes = [
    ('12:00 PM'),
    ('12:30 PM'),
    ('1:00 PM'),
    ('1:30 PM'),
    ('2:00 PM'),
    ('2:30 PM'),
    ('3:00 PM'),
    ('3:30 PM'),
    ('4:00 PM'),
    ('4:30 PM'),
    ('5:00 PM'),
    ('5:30 PM'),
      ];
  const eveningstimes = [
    ('6:00 PM'),
    ('6:30 PM'),
    ('7:00 PM'),
    ('7:30 PM'),
    ('8:00 PM'),
    ('8:30 PM'),
    ('9:00 PM'),
    ('9:30 PM'),
    ('10:00 PM'),
    ('10:30 PM'),
    ('11:00 PM'),
        ];
  const nighttimes = [
    ('1:00 AM'),
    ('1:30 AM'),
    ('2:00 AM'),
    ('2:30 AM'),
    ('3:00 AM'),
    ('3:30 AM'),
    ('4:00 AM'),
    ('4:30 AM'),
    ('5:00 AM'),
    ('5:30 AM'),
    ];

  const [dates, setDates] = React.useState([]);
  // const [morningtime, setMorningtime] = React.useState([]);
  const _datesRef = React.useRef(null);
  const [selectedDate, setSelectedDate] = React.useState({
    date: new Date().getDate(),
    month: months[new Date().getMonth()],
    day: days[new Date().getDay()],
    morningtime: morningtimes[new Date().getHours()],

  });
  const [selectedTime, setSelectedTime] = React.useState({
    morningtime:morningtimes[new Date().getHours()]
  })
console.log('morningtime',selectedTime.slot_start_time);
console.log('date',selectedDate.date);

  const getDates = () => {
      console.log('hours',new Date().getHours());

    let dates = [];
    for (let i = 0; i < 11; i++) {
      let d = new Date();
       
      // console.log(d.getHours()+i,': 00',d.getHours()+i,': 30');
      d.setDate(d.getDate() + i);
      dates.push({
        date: d.getDate(),
        month: months[d.getMonth()],
        day: days[d.getDay()],
        // morningtime: morningtimes[d.getHours()],
        // afternoontime: afternoontimes[d.getHours()],
      });
    }
    setDates(dates);
  };
  FormatDate = () => {
    let dateTimeString =
      new Date().getHours() + ':' + (new Date().getMinutes() );

    // hideDatePicker();
    setTime(dateTimeString);

    return dateTimeString; // It will look something like this 3-5-2021 16:23
  };
  useEffect(() => {
    FormatDate();
  },[])
  console.log('time',time);
  // const geMorningtimes = () => {
  //   let morningtime = [];
  //   for (let i = 0; i < 11; i++) {
  //     let d = new Date();
  //     d.setDate(d.getDate() + i);
  //     dates.push({
  //       date: d.getDate(),
  //       month: months[d.getMonth()],
  //       day: days[d.getDay()],
  //     });
  //   }
  //   setMorningtime(morningtime);
  // };

  useEffect(() => {
    getDates();
  }, []);

console.log('date3s', new Date().toLocaleTimeString().replace(new Date().toLocaleTimeString().slice(-6,-2)));
  return (
    <View style={[styles.container]}>
      <View style={[styles.topview]}>
        <AntDesign name="left" size={24} color="#111111" style={[styles.gohomeicon]}
          onPress={() => {
            navigation.navigate('Mainpage')
          }
          }
        />
        <Text style={[styles.formHead]}>Book Service</Text>
      </View>
      <ScrollView  nestedScrollEnabled={true} >

        <View style={[styles.numberview,{marginTop:-5}]}>
          <View style={[styles.imageview]}>
            <Text style={{ marginLeft: 20, marginTop: 8, marginBottom: 0,color: '#666666' }}>Choose employee</Text>
          </View>
          <View style={[styles.searchview]}>
            <View style={[styles.c1]}>

            {/* <View style={[styles.fileview]}>
            { type === 'Imagnotexist' && 
              <Image style={[styles.profilepic]} source={require('../../../assets/image.png')}  />
               }
               { type === 'Imagexist' && 
              <Image style={[styles.profilepic1]} source={{ uri: `data:image/png;base64,${profileimage}` }} />
               }
              </View> */}
              <TouchableOpacity
              onPress= {()=>setSelectsalon(!selectsalon)}>
              <View  style={[styles.fileview]}
              onPress= {()=>setSelectsalon(!selectsalon)}>
              <Image style={[styles.profilepic]} source={require('../../../assets/image.png')} />
              </View>
          {selectsalon && <View style={[styles.fileview2]}>
                <AntDesign name="check" size={24} color="#ffffff" 
          // onPress={() => {
          //   navigation.navigate('Mainpage')
          // }}
        />
              </View>}
              </TouchableOpacity>
              <Text style={{marginLeft:10,fontWeight:'bold',color: '#444444'}}>{data.data.saloonname}</Text>
            </View>
          </View>
        </View>
        {/* <View style={[styles.numberview]}>
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
            <TextInput style={[styles.searchbar]} placeholder="223 665 7896" />
          </View>
        </View> */}
        <View style={[styles.numberview]}>
          {/* <MaterialCommunityIcons
            name="chevron-left"
            size={30}
            color={'#000'}
          /> */}
          <FlatList
            // ref={_datesRef}
            data={dates}
            horizontal
            nestedScrollEnabled={true}
            // onLayout={e => {
            //   _datesRef &&
            //     _datesRef.current.scrollToIndex({
            //       index: dates.length / 2 - 5,
            //       animated: true,
            //     });
            // }}
            // initialScrollIndex={dates.length / 2 - 2}
            getItemLayout={(data, index) => ({
              length: 0,
              offset: 0 * index,
              index,
            })}
            showsHorizontalScrollIndicator={false}
            // keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedDate(item)}
                  
                  style={{
                    ...styles.dayContainer,
                    backgroundColor:
                      item.date === selectedDate.date &&
                      item.day === selectedDate.day
                        ? '#111111'
                        : null,
                    borderWidth:
                      item.date == new Date().getDate() &&
                      item.day == days[new Date().getDay()]
                        ? 0.5
                        : 0,
                    borderColor: '#999',
                  }}>
                  <Text style={{...styles.day,
                  color:
                  item.date === selectedDate.date &&
                  item.day === selectedDate.day
                    ? '#fff'
                    : '#111111',
                    }}>{item.month}</Text>
                  <Text style={{...styles.date,
                  color:
                  item.date === selectedDate.date &&
                  item.day === selectedDate.day
                    ? '#fff'
                    : '#111111',
                    }}>{item.date}</Text>
                  <Text style={{...styles.day,
                  color:
                  item.date === selectedDate.date &&
                  item.day === selectedDate.day
                    ? '#fff'
                    : '#111111',
                    }}>{item.day}</Text>
                </TouchableOpacity>
              );
            }}
          />
          <Text style={{marginLeft:10,marginVertical:10,fontWeight:'bold',color:'#111'}}>Select Time</Text>
          <View>
          <FlatList
            // ref={_datesRef}
            data={adata}
            numColumns={4}
            nestedScrollEnabled={true}
            // onLayout={e => {
            //   _datesRef &&
            //     _datesRef.current.scrollToIndex({
            //       index: dates.length / 2 - 5,
            //       animated: true,
            //     });
            // }}
            // initialScrollIndex={dates.length / 2 - 2}
            // getItemLayout={(data, index) => ({
            //   length: 0,
            //   offset: 0 * index,
            //   index,
            // })}
            // showsHorizontalScrollIndicator={false}
            // keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedTime(item)}
                   disabled={new Date().getHours() + ':' + (new Date().getMinutes()) >= item.slot_start_time &&
                  selectedDate.date == new Date().getDate()} 
                  style={{
                    ...styles.dayContainer2,
                    backgroundColor:
                    item === selectedTime
                      ? '#111111'
                      : (new Date().getHours() + ':' + (new Date().getMinutes()) >= item.slot_start_time 
                      &&  selectedDate.date == new Date().getDate()?'#cccccc':'#007100'),
                  // borderWidth:
                  //   item == new Date().getHours() 
                  //     ? 0.5
                  //     : 0,
                  borderColor: '#999',
                  }}>

                  <Text style={{...styles.time,fontSize:12,
                  color:
                  item === selectedDate
                    ? '#fff'
                    : '#fff',
                    }}>{item.slot_start_time}</Text>

                </TouchableOpacity>
              );
            }}
          />
          </View>
          {/* <Text style={{marginLeft:10,marginVertical:10,fontWeight:'bold',color:'#111'}}>Afternoon</Text>
          <View>
          <FlatList
            // ref={_datesRef}
            data={afternoontimes}
            horizontal
            // onLayout={e => {
            //   _datesRef &&
            //     _datesRef.current.scrollToIndex({
            //       index: dates.length / 2 - 5,
            //       animated: true,
            //     });
            // }}
            // initialScrollIndex={dates.length / 2 - 2}
            // getItemLayout={(data, index) => ({
            //   length: 0,
            //   offset: 0 * index,
            //   index,
            // })}
            showsHorizontalScrollIndicator={false}
            // keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedDate(item)}
                  style={{
                    ...styles.dayContainer2,
                    backgroundColor:
                    item === selectedDate
                      ? '#111111'
                      : '#007100',
                  // borderWidth:
                  //   item == new Date().getHours() 
                  //     ? 0.5
                  //     : 0,
                  borderColor: '#999',
                  }}>

                  <Text style={{...styles.time,fontSize:12,
                  color:
                  item === selectedDate
                    ? '#fff'
                    : '#fff',
                    }}>{item}</Text>

                </TouchableOpacity>
              );
            }}
          />
          </View>
          <Text style={{marginLeft:10,marginVertical:10,fontWeight:'bold',color:'#111'}}>Evening</Text>
          <View>
          <FlatList
            // ref={_datesRef}
            data={eveningstimes}
            horizontal
            // onLayout={e => {
            //   _datesRef &&
            //     _datesRef.current.scrollToIndex({
            //       index: dates.length / 2 - 5,
            //       animated: true,
            //     });
            // }}
            // initialScrollIndex={dates.length / 2 - 2}
            // getItemLayout={(data, index) => ({
            //   length: 0,
            //   offset: 0 * index,
            //   index,
            // })}
            showsHorizontalScrollIndicator={false}
            // keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedDate(item)}
                  style={{
                    ...styles.dayContainer2,
                    backgroundColor:
                    item === selectedDate
                      ? '#111111'
                      : '#007100',
                  // borderWidth:
                  //   item == new Date().getHours() 
                  //     ? 0.5
                  //     : 0,
                  borderColor: '#999',
                  }}>

                  <Text style={{...styles.time,fontSize:12,
                  color:
                  item === selectedDate
                    ? '#fff'
                    : '#fff',
                    }}>{item}</Text>

                </TouchableOpacity>
              );
            }}
          />
          </View>
          <Text style={{marginLeft:10,marginVertical:10,fontWeight:'bold',color:'#111'}}>Night</Text>
          <View>
          <FlatList
            // ref={_datesRef}
            data={nighttimes}
            horizontal
            // onLayout={e => {
            //   _datesRef &&
            //     _datesRef.current.scrollToIndex({
            //       index: dates.length / 2 - 5,
            //       animated: true,
            //     });
            // }}
            // initialScrollIndex={dates.length / 2 - 2}
            // getItemLayout={(data, index) => ({
            //   length: 0,
            //   offset: 0 * index,
            //   index,
            // })}
            showsHorizontalScrollIndicator={false}
            // keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <View
                  key={index}
                  onPress={() => setSelectedDate(item)}
                  style={{
                    ...styles.dayContainer2,
                    backgroundColor:
                    item === selectedDate
                      ? '#111111'
                      : '#f1f1f1',
                  // borderWidth:
                  //   item == new Date().getHours() 
                  //     ? 0.5
                  //     : 0,
                  borderColor: '#999',
                  }}>

                  <Text style={{...styles.time,fontSize:12,
                  color:
                  item === selectedDate
                    ? '#111'
                    : '#111',
                    }}>{item}</Text>

                </View>
              );
            }}
          />
          </View> */}
          {/* <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color={'#000'}
          /> */}
        </View>
        <View style={[styles.saloncard, styles.elevation]}>
        <View style={[styles.suggestionview1]}
        onPress={() => navigation.navigate('Settings1')}>
        <Fontisto name="radio-btn-active" size={24} color="#ffffff" style={[styles.icon1, { flex: 1 , marginHorizontal:15 }]}/>
        <Text style={{ fontWeight: 'bold', flex: 9,color:'#ffffff' }}>At Salon</Text>
      </View>
      </View>

         <View style={[styles.numberview]}>
          <Text style={{ left: 20, top: 8, bottom: 10,color: '#444444' }}>Booking Notes</Text>
          <View style={[styles.searchview]}>
            <MaterialCommunityIcons name="clipboard-text-outline" size={20} color="#111111" style={{ marginHorizontal: 20 }} />
            <TextInput style={[styles.searchbar]} placeholder="Is there anything else you would like us..." 
            onChangeText={(text) => { setNotes(text)} }/>
          </View>
        </View>
        {/* <View style={[styles.numberview]}>
          <Text style={{ left: 20, top: 8, bottom: 10 }}>Coupen Code</Text>
          <View style={[styles.searchview]}>
            <Entypo name="map" size={20} color="#111111" style={{ marginHorizontal: 20 }} />
            <TextInput style={[styles.searchbar]} placeholder="COUPON01" />
          </View>
        </View> */}
       
        {/* <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Text style={{ marginLeft: 20, marginRight: 10, color: '#888888' }}>Want to delete your account?</Text>
          <Text style={{ color: '#FF8500' }}>Click here</Text>
        </View> */}
      </ScrollView>
      {/* <View style={[styles.numberview]}> */}
      {/* <Text style={{ left: 20, top: 8, bottom: 10 }}>Phone Number</Text> */}
      <View style={[styles.searchview1]}>
        <TouchableOpacity style={[styles.elevation, { backgroundColor: '#111111', paddingVertical: 10, paddingHorizontal: 80, borderRadius: 10, marginRight: 10, }]}
          onPress={() => { selectsalon  ? navigation.navigate('BookingSummary',{data:data,note:notes,date:selectedDate,time:selectedTime}) : alert('Please, Choose an Employee and time First')}}>
          <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Continue</Text>
        </TouchableOpacity>
        <View style={{alignItems:'center',justifyContent:'flex-start'}}>
          <Text style={{marginBottom:5, fontSize: 12,color: '#777777' }}>Subtotal</Text>
          <Text style={{ fontWeight: 'bold', marginTop: -10, fontSize: 20,color: '#111111' }}>{'\u20B9'}{data.data.Price}</Text>
        </View>
      </View>
      {/* </View> */}
    </View>
  )}

export default Bookservice

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8f8',
  },
  formHead: {
    fontSize: 17,
    color: '#111111',
    // marginLeft: 120,
    flex:0.9,
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
  suggestionview1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 20,
    top: 10,
    zIndex: 100,
    borderWidth: 0,
    backgroundColor: '#111111'
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
    color: '#555555',
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
      marginTop:0
},
Bookservicepic: {
    width: 30,
    height: 30,
    // borderRadius: 20,
    // marginLeft: 20,
},
profilepic: {
    width: 15,
    height: 15,
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
  width: 42,
  height: 42,
  borderRadius: 10,
  marginLeft: 20,
  backgroundColor:'#f1f1f1'
},
fileview2: {
  position:'absolute',
  alignItems: 'center',
  justifyContent:'center',
  width: 42,
  height: 42,
  borderRadius: 10,
  marginLeft: 20,
  backgroundColor:'#555555',
  opacity:0.9
},
dayContainer: {
  width: 50,
  paddingVertical: 10,
  marginHorizontal: 2,
  marginLeft:10,
  alignItems: 'center',
  borderRadius: 7,
  backgroundColor:"#111111",
},
dayContainer2: {
  width: 65,
  paddingVertical: 10,
  marginHorizontal: 2,
  marginLeft:10,
  marginVertical:4,
  alignItems: 'center',
  borderRadius: 7,
  // borderWidth:1,

  // backgroundColor:"#111111",
},
day: {
  // fontFamily: Fonts.primaryBold,
  fontSize:11,
  color: '#fff',
  fontWeight:'bold'
},
time: {
  // fontFamily: Fonts.primaryBold,
  fontSize:8,
  color: '#fff',
  fontWeight:'bold'
},
date: {
  // fontFamily: Fonts.primaryRegular,
  fontSize:22,
  color: '#fff',
  fontWeight:'bold'
},
scheduleContainer: {
  alignItems: 'flex-start',
  paddingHorizontal: 20,
},
batchContainer: {
  flexDirection: 'row',
  flexShrink: 1,
  flexWrap: 'wrap',
},
dayTime: {
  fontSize: 16,
  width: '100%',
  marginTop: 26,
  marginBottom: 10,
  // fontFamily: Fonts.primarySemiBold,
  color: '#000',
},
time: {
  color: '#000',
  // fontFamily: Fonts.primaryRegular,
  lineHeight: 14 * 1.4,
  // paddingHorizontal: 4,
},
batch: {
  // borderWidth: 1,
  borderColor: '#111111',
  borderRadius: 7,
  backgroundColor: '#fff',
  padding: 8,
  marginRight: 10,
  marginBottom: 10,
  elevation: 5,
  shadowColor: '#111111',
},
booked: {
  backgroundColor: '#111111',
  shadowColor: '#000',
},
bookedTime: {
  color: '#fff',
},
legendContainer: {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 20,
},
legend: {
  width: 20,
  height: 20,
  backgroundColor:'#111111',
  borderRadius: 3,
  elevation: 2,
},
legendText: {
  color: '#000',
  // fontFamily: Fonts.primarySemiBold,
  marginHorizontal: 10,
  lineHeight: 14 * 1.4,
},
btnContainer: {
  flexDirection: 'row',
},
btn: {
  flex: 1,
  paddingVertical: 15,
},
btnText: {
  textAlign: 'center',
  fontSize: 16,
  color: '#000',
  // fontFamily: Fonts.primarySemiBold,
  lineHeight: 16 * 1.4,
},
});