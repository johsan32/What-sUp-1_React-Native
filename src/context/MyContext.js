import React, {useContext, useState, createContext, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import uuid from 'react-native-uuid';

const MyContext = createContext();

const ContextProvider = ({children}) => {
  const [deviceId, setDeviceId] = useState(null);
  const [userPhone, setUserPhone] = useState('+905055055050');
  const [securityCode, setSecurityCode] = useState('962574');
  const [userInfo, setUserInfo] = useState(null);
  const [phoneId, setPhoneId] = useState(null);

  const getDeviceId = async () => {
    const id = await DeviceInfo.getAndroidId();
    setDeviceId(id);
  };
  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(deviceId);
      await AsyncStorage.setItem('myId', jsonValue);
      setPhoneId(jsonValue);
      console.log('phoneıs', phoneId);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('myId');
      if (value !== null) {
      }
    } catch (e) {
    }
  };
  const userRegister = () => {
    if (!userInfo) {
      const addUser = {
        id: uuid.v4(),
        phone: userPhone,
        status: true,
        type: 'sender',
        creatAt: moment().valueOf(),
      };
      firestore()
        .collection('users')
        .doc(deviceId)
        .set(addUser)
        .onSnapshot(querySnapshot => {
          setUserInfo(querySnapshot.data());
           });
    }
    return;
  };
  const getUserInfo = () => {
    if(deviceId){
          firestore()
      .collection(`users`)
      .doc(deviceId)
      .onSnapshot(querySnapshot => {
       setUserInfo(querySnapshot.data());
        });
    }

  };
  


  const contextValues = {
    deviceId,
    setUserPhone,
    userPhone,
    securityCode,
    userRegister,
    getUserInfo,
    userInfo,
    storeData,
    getData,
    phoneId,
    getDeviceId,
  };

  useEffect(() => {}, []);

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
};

export const appContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useContext must be used with a TaskContext');
  }
  return context;
};

export default ContextProvider;
