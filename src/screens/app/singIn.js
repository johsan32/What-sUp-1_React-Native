import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { windowWidth} from '../../utils/Dimensions';
import {MyFonts} from '../../theme/MyFonts';
import {MyColor} from '../../theme/colors';
import Button from '../../components/ui/button';
import ModalCityList from '../../components/ModalCityList';
import data from '../../constants/Countries';
import {Routes} from '../../utils/Routes';
import {appContext} from '../../context/MyContext';
import { Toast } from 'toastify-react-native';

const SignInScreen = () => {
  const navigation = useNavigation();
  const {setUserPhone,getUserInfo, userRegister, userInfo} = appContext();
  const defaultFlag = data.find(obj => obj.name === 'Turkey').flag;
  const [value, setValue] = useState('5055055050');
  const [flag, setFlag] = useState(defaultFlag);
  const [modalVisible, setModalVisible] = useState(false);
  const [phoneCity, setPhoneCity] = useState('+90');

  const phoneNumber = phoneCity + value;
  const handleSignUp = () => {
    setUserPhone(phoneNumber);
    if (!userInfo) {
      userRegister();
      if (phoneNumber !== userInfo?.phone)
        navigation.navigate(Routes.VERIFICATION);
    } else {
      Toast.success('Registered user!');
      navigation.navigate(Routes.PROFIL);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  console.log("sig", userInfo);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        imageStyle={{opacity: 0.4}}
        style={{width: '100%', height: '100%'}}
        source={require('../../assets/images/chatbg.jpeg')}>
        <View style={styles.body}>
          <Text style={styles.headerText}>Sign In</Text>
          <Text style={styles.titleText}>
            We will send an SMS message to verify your phone number (carrier
            charges may apply)
          </Text>
          <View style={styles.inputContainer}>
            <Text style={styles.textHead}>Phone Number</Text>
            <View style={styles.inputSection}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{fontSize: 35, marginLeft: 10, flexDirection: 'row'}}>
                  {flag}
                </Text>
                <Text
                  style={{fontSize: 25, marginLeft: 10, flexDirection: 'row'}}>
                  {phoneCity}
                </Text>
              </TouchableOpacity>
            </View>
            <TextInput
              //multiline={true}
              value={value}
              keyboardType="phone-pad"
              placeHolder="Enter phone number"
              placeholderTextColor={MyColor.background}
              style={styles.textInput}
              onChangeText={text => setValue(text)}
            />
          </View>
        </View>

        <View style={{marginBottom: 10}}>
          <Button
            onPress={handleSignUp}
            text="Sign In"
            color={MyColor.primary}
            textColor={MyColor.white}
          />
          <Text style={styles.textFooter}>
            Don’t have an account? <Text style={styles.textBold}>Sign up</Text>
          </Text>
        </View>
        {modalVisible && (
          <ModalCityList
            setModalVisible={setModalVisible}
            setPhoneCity={setPhoneCity}
            setFlag={setFlag}
            modalVisible={modalVisible}
          />
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColor.white,
  },
  body: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontFamily: MyFonts.bold,
    fontWeight: '800',
    color: MyColor.black,
    paddingBottom: 10,
    alignSelf: 'flex-start',
  },
  titleText: {
    fontFamily: MyFonts.regular,
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 10,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  textFooter: {
    fontFamily: MyFonts.regular,
    fontSize: 16,
    textAlign: 'center',
  },
  textBold: {
    fontFamily: MyFonts.bold,
    fontSize: 18,
    fontWeight: '700',
    color: MyColor.blueSecond,
  },
  input: {
    flex: 1,
  },
  inputContainer: {
    width: windowWidth * 0.9,
    borderRadius: 10,
    borderWidth: 2,
    paddingVertical: 10,
    borderColor: MyColor.primary,
    flexDirection: 'row',
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 2,
    paddingRight: 15,
    borderRightColor: MyColor.primary,
  },
  textHead: {
    position: 'absolute',
    backgroundColor: MyColor.white,
    paddingHorizontal: 10,
    top: -15,
    left: 20,
    zIndex: 5,
    color: MyColor.black,
    fontSize: 18,
  },
  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    marginLeft: 10,
  },
});
