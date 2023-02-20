// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './Home';
// import Details from './Details';
// import Signup_EnterEmail from "./src/Screens/LoglnSignup/Signup/Signup_EnterEmail";
// import Signup_Enterverificationcode from "./src/Screens/LoglnSignup/Signup/Signup_Enterverificationcode";
// import Signup_Chooseusername from "./src/Screens/LoglnSignup/Signup/Signup_Chooseusername";
// import Signup_ChoosePassword from "./src/Screens/LoglnSignup/Signup/Signup_ChoosePassword";
// import Signup_Accountcreated from "./src/Screens/LoglnSignup/Signup/Signup_Accountcreated";
// import ForgotPassword_Enteremail from "./src/Screens/LoglnSignup/ForgotPassword/ForgotPassword_Enteremail";
// import ForgotPassword_EnterverificationCode from "./src/Screens/LoglnSignup/ForgotPassword/ForgotPassword_EnterverificationCode";
// import ForgotPassword_ChoosePassword from "./src/Screens/LoglnSignup/ForgotPassword/ForgotPassword_ChoosePassword";
// import ForgotPassword_AccountRecovered from "./src/Screens/LoglnSignup/ForgotPassword/ForgotPassword_AccountRecovered";
// import All_chats from './src/Screens/Chatsection/All_chats';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Mainpage from '../Screens/MainPage/Mainpage';
import My_Userprofile from '../Screens/Profile/My_Userprofile';
import Drawernavigation from './Drawernavigation';
import Drawercontent from '../Components/Drawercontent';
import {AuthContext} from "./Navigation"
import Notificationpage from '../Screens/MainPage/Notificationpage';
import Location from '../Screens/MainPage/Location';
import Categories from '../Screens/MainPage/Categories';
import Bookings from '../Screens/MainPage/Bookings';
import Settings1 from '../Screens/MainPage/Settings';
import Login from '../Screens/MainPage/Login';
import Profile from '../Screens/MainPage/Profile';
import UploadImage from '../Screens/MainPage/uploadimage';
import offerscard from '../Screens/MainPage/offerscard';
import Offerscard from '../Screens/MainPage/offerscard';
import Bookingpage from '../Screens/MainPage/Bookingpage';
import Salondetails from '../Screens/MainPage/Salondetails';
import Salonslider from '../Screens/MainPage/Salonslider';
import Categorydetails from '../Screens/MainPage/Categorydetails';
import Geolocation from '../Screens/MainPage/Geolocation';
import Geolocationn from '../Screens/MainPage/Geolocation';
import Bookservice from '../Screens/MainPage/Bookservice';
import BookingSummary from '../Screens/MainPage/BookingSummary';
import Paymentpage from '../Screens/MainPage/Paymentpage';
import Bookingsuccessful from '../Screens/MainPage/Bookingsuccessful';
import Bookingdetails from '../Screens/MainPage/Bookingdetails';
import Paymentgateway from '../Screens/MainPage/Paymentgateway';
import saloncategory from '../Screens/MainPage/Saloncategory';
import Saloncategory from '../Screens/MainPage/Saloncategory';
// import Settings1 from './src/Screens/Settings/Settings1';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function Mainnavigation({ navigation }) {
    
    return (

        <Stack.Navigator screenOptions={{headerTitle: 'Test', headerShown: false,}}>

        {/* <Stack.Navigator headerMode: 'screen' screenOptions= {{
              ,
            animation: 'slide_from_right'
        }}>
            headerMode="screen" screenOptions={{headerTitle: 'Test', headerShown: true}} */}
            
            <Stack.Screen name="Drawernavigation" options={{headerShown: false,}} component={Drawernavigation} />
            {/* 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
        <Stack.Screen name="Signup_Enterverificationcode" component={Signup_Enterverificationcode} />
        <Stack.Screen name="Signup_Chooseusername" component={Signup_Chooseusername} />
        <Stack.Screen name="Signup_ChoosePassword" component={Signup_ChoosePassword} />
        <Stack.Screen name="Signup_Accountcreated" component={Signup_Accountcreated} />

        <Stack.Screen name="ForgotPassword_Enteremail" component={ForgotPassword_Enteremail} />
        <Stack.Screen name="ForgotPassword_EnterverificationCode" component={ForgotPassword_EnterverificationCode} />
        <Stack.Screen name="ForgotPassword_ChoosePassword" component={ForgotPassword_ChoosePassword} />
        <Stack.Screen name="ForgotPassword_AccountRecovered" component={ForgotPassword_AccountRecovered} /> */}


            {/* <Stack.Screen name="All_chats" component={All_chats}
        options={{
          animation:'slide_from_left'
        }}
        />*/}

<Stack.Screen name="Location" component={Location}
        options={{
          animation:'slide_from_bottom'
        }}
        />
        <Stack.Screen name="Notificationpage" component={Notificationpage}
        options={{
        //   headerShown: true,
          animation:'slide_from_right'
        }}
        /> 
        <Stack.Screen name="My_Userprofile" component={My_Userprofile}
                options={{
                    animation: 'slide_from_left'
                }}
            />
        <Stack.Screen name="Categories" component={Categories}
                options={{ 
                    animation: 'slide_from_left',
                    headerTransparent:true
                }}
            />
            <Stack.Screen name="Bookings" component={Bookings}
                options={{ 
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Settings1" component={Settings1}
                options={{ 
                    animation: 'slide_from_left'
                }}
            />
             <Stack.Screen name="Login" component={Login}
                options={{ 
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Profile" component={Profile}
                options={{ 
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Offerscard" component={Offerscard}
                options={{ 
                    animation: 'slide_from_left'
                }}
            />
            <Stack.Screen name="Bookingpage" component={Bookingpage}
                options={{ 
                    headerShown: false,
                    animation: 'slide_from_left'
                    
                }}
            />
             <Stack.Screen name="Salondetails" component={Salondetails}
                options={{ 
                    headerShown: false,
                    animation: 'slide_from_left'
                    
                }}
            />
            <Stack.Screen name="Salonslider" component={Salonslider}
                options={{ 
                    headerShown: false,
                    animation: 'slide_from_left'
                    
                }}
            />
            <Stack.Screen name="Categorydetails" component={Categorydetails}
                options={{ 
                    headerShown: false,
                    animation: 'slide_from_left'
                    
                }}
            />
            <Stack.Screen name="Geolocation" component={Geolocationn}
                options={{ 
                    headerShown: false,
                    animation: 'slide_from_left'
                    
                }}
            />
            <Stack.Screen name="Bookservice" component={Bookservice}
                options={{ 
                    headerShown: false,
                    animation: 'slide_from_left'
                    
                }}
            />
            <Stack.Screen name="BookingSummary" component={BookingSummary}
                options={{ 
                    headerShown: false,
                    animation: 'slide_from_left'
                    
                }}
            />
            <Stack.Screen name="Paymentpage" component={Paymentpage}
                options={{ 
                    headerShown: false,
                    animation: 'slide_from_left'
                    
                }}
            />
             <Stack.Screen name="Bookingsuccessful" component={Bookingsuccessful}
                options={{ 
                    headerShown: false,
                    animation: 'slide_from_left'
                    
                }}
            />
             <Stack.Screen name="Bookingdetails" component={Bookingdetails}
                options={{ 
                    headerShown: false,
                    animation: 'slide_from_left'
                    
                }}
            />
            <Stack.Screen name="Paymentgateway" component={Paymentgateway}
                options={{ 
                    headerShown: false,
                    animation: 'slide_from_left'
                    
                }}
            />
           <Stack.Screen name="Saloncategory" component={Saloncategory}
                options={{ 
                    headerShown: false,
                    animation: 'slide_from_left'
                    
                }}
            />



        

    {/* <Stack.Screen name='Settings1' component={Settings1}/> */}
    
</Stack.Navigator>
    );
}

export default Mainnavigation;
