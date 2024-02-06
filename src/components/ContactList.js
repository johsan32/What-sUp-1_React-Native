import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MyColor} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';

const ContactList = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable 
    style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/dataImg/user1.jpeg')}
          resizeMode='cover'
          style={styles.image}
        />
        <View>
          <Text style={styles.textContact}>{item.name}</Text>
          <Text style={styles.textContact}>{item?.phone} </Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../assets/icons/sendPhone.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate(Routes.SENDCHAT, {item:item})}
        >
          <Image
            source={require('../assets/icons/contactRight.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingBottom:15,
    borderBottomWidth:0.4,
    borderBottomColor:MyColor.grey,
    backgroundColor: MyColor.white,
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContact: {
    fontSize: 16,
    fontWeight:"700",
    color:MyColor.black,
    paddingLeft: 10,
  },
  icon: {
    width: 26,
    height: 26,
    tintColor: MyColor.background,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});
