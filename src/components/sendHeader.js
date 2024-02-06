import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {MyColor} from '../theme/colors';
import {Routes} from '../utils/Routes';

const SendHeader = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.CHATS, {item:item})}>
        <Image
          source={require('../assets/icons/left.png')}
          style={{width: 15, height: 27}}
        />
      </TouchableOpacity>
      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/dataImg/user5.jpeg')}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textContact}>{item?.name}</Text>
          <Text style={styles.textStatus}>Online </Text>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            source={require('../assets/icons/sendCamera.png')}
            style={{width: 29, height: 21, backgroundColor: MyColor.white}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            source={require('../assets/icons/sendPhone.png')}
            style={{width: 26, height: 26, backgroundColor: MyColor.white}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SendHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: MyColor.white,
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    flex: 1,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  textContainer: {
    paddingLeft: 10,
  },
  textContact: {
    fontSize: 18,
    fontWeight: '800',
    color: MyColor.black,
  },
  textStatus:{

  },
  icon: {
    width: 26,
    height: 26,
    tintColor: MyColor.tertiary,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});
