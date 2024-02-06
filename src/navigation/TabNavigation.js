import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from '../utils/Routes';
import CallsScreen from '../screens/calls/CallsScreen';
import ChatsScreen from '../screens/chats/ChatsScreen';
import ProfilScreen from '../screens/profil/profilScreen';
import {Image} from 'react-native';
import ContactsScreen from '../screens/contacts/contacts';
import {MyColor} from '../theme/colors';
import { windowWidth } from '../utils/Dimensions';
import { appContext } from '../context/MyContext';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const {userInfo} = appContext();

  return (
    <Tab.Navigator
      initialRouteName={Routes.CONTACTS}
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12,paddingBottom:5},
        tabBarStyle:{backgroundColor:MyColor.primary, height:70, borderRadius:15, marginBottom:10, width:windowWidth*0.95, alignSelf:"center"},
        headerShown: false,
        tabBarInactiveTintColor:MyColor.lightGrey,
        tabBarActiveTintColor:MyColor.white,
      }}>
      <Tab.Screen
        name={Routes.CONTACTS}
        component={ContactsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/icons/contact.png')}
              tintColor={color}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.CALLS}
        component={CallsScreen}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/icons/calls.png')}
              tintColor={color}
              style={{width: 27, height: 27}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.CHATS}
        component={ChatsScreen}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/icons/chats.png')}
              tintColor={color}
              style={{width: 34, height: 28}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.PROFIL}
        component={ProfilScreen}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              source={userInfo?.photo? {uri:userInfo?.photo}:require("../assets//images/userImage.jpeg")}
              style={{width: 34, height: 34, borderRadius:100}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
