import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import Button from '../../components/ui/button';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import {MyColor} from '../../theme/colors';
import {MyFonts} from '../../theme/MyFonts';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../utils/Routes';
import {appContext} from '../../context/MyContext';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const {getDeviceId, deviceId, userInfo, getUserInfo} = appContext();
  useEffect(() => {
    getDeviceId();
    getUserInfo();
  }, []);
  console.log(deviceId);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        imageStyle={{opacity: 0.4}}
        style={{width: '100%', height: '100%'}}
        source={require('../../assets/images/chatbg.jpeg')}>
        <View style={{flex: 1}}>
          <View style={styles.image}>
            <LottieView
              source={require('../../assets/animations/onboarding.json')}
              style={{width: windowWidth, height: windowHeight / 3}}
              autoPlay
              loop
            />
          </View>
          <View style={styles.body}>
            <Text style={styles.headerText}>Hello, Lets Chat</Text>
            <Text style={styles.titleText}>What are you doing today?</Text>
            <Text style={styles.titleText}>Everything is ok?</Text>
          </View>
        </View>
        <Button
          onPress={() =>
            // navigation.navigate(deviceId ? Routes.TAB : Routes.SINGIN)
            navigation.navigate(userInfo.phone ? Routes.TAB : Routes.SINGIN)
          }
          text="Sign In"
          size={windowWidth * 0.9}
          color={MyColor.primary}
          textColor={MyColor.white}
        />
      </ImageBackground>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 28,
    fontFamily: MyFonts.bold,
    fontWeight: '800',
    color: MyColor.black,
    paddingBottom: 30,
  },
  titleText: {
    fontFamily: MyFonts.regular,
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 10,
  },
});
