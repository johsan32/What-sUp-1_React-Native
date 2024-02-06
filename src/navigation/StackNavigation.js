import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import {MyColor} from '../theme/colors';
import {Routes} from '../utils/Routes';
import OnboardingScreen from '../screens/app/onboarding';
import ProfilScreen from '../screens/profil/profilScreen';
import SignInScreen from '../screens/app/singIn';
import VerificationCode from '../screens/app/VerificationCode';
import MyTabs from './TabNavigation';
import ChatsScreen from '../screens/chats/ChatsScreen';
import ContactsScreen from '../screens/contacts/contacts';
import ContactsAdd from '../screens/contacts/contactsAdd';
import SendChat from '../screens/chats/sendChat';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.SPLASH}
      screenOptions={{
        headerShown: false,
        statusBarColor: MyColor.primary,
      }}>
      <Stack.Screen name={Routes.SPLASH} component={OnboardingScreen} />
      <Stack.Screen name={Routes.SINGIN} component={SignInScreen} />
      <Stack.Screen
        name={Routes.VERIFICATION}
        component={VerificationCode}
        options={{headerBackVisible: true}}
      />
      <Stack.Screen name={Routes.TAB} component={MyTabs} />
      <Stack.Screen name={Routes.CONTACTS} component={ContactsScreen} />
      <Stack.Screen name={Routes.CHATS} component={ChatsScreen} />
      <Stack.Screen name={Routes.HOME} component={HomeScreen} />
      <Stack.Screen name={Routes.USER} component={ProfilScreen} />
      <Stack.Screen name={Routes.CONTACTADD} component={ContactsAdd} />
      <Stack.Screen name={Routes.SENDCHAT} component={SendChat} />
    </Stack.Navigator>
  );
};

export default MyStack;
