import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {windowWidth} from '../utils/Dimensions';
import {MyColor} from '../theme/colors';
import {MyFonts} from '../theme/MyFonts';
import moment from 'moment';
import { appContext } from '../context/MyContext';

const SendBalloon = ({item}) => {
  const { loading} = appContext();
console.log(loading);

  return (
    <ScrollView>
      <View style={[styles.container, {alignSelf: 'flex-end'}]}>
        <View style={styles.inputContainer}>
          <Text style={styles.textBox}>{item?.title}</Text>
          <View style={styles.rightContainer}>
          <Text style={styles.time}>{moment(item?.timeSend).format('HH:mm')}</Text>
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={
                item?.isRead
                  ? require('../assets/icons/tick.png')
                  : require('../assets/icons/doubleClick.png')
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SendBalloon;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 15,
    width: windowWidth * 0.7,
    justifyContent: 'center',
    minHeight: 50,
    borderRadius: 8,

    backgroundColor: '#E6C9C6',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  textBox: {
    alignItems: 'center',
    paddingLeft: 10,
    color: MyColor.black,
    fontFamily: MyFonts.fontPoppinsR,
    fontSize: 17,
    width: '80%',
  },
  rightContainer: {
    //flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
  },
  time: {
    color: MyColor.background,
    fontFamily: MyFonts.bold,
  },
  icon: {
    tintColor: MyColor.grey,
    width: 15,
    height: 10,
  },
});
