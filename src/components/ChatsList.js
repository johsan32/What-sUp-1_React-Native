import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React 
from 'react';
import {MyColor} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../utils/Routes';
import {MyFonts} from '../theme/MyFonts';

const ChatstList = ({item}) => {
  const navigation = useNavigation();


  return (
    <ScrollView>
      <Pressable
        onPress={() => navigation.navigate(Routes.SENDCHAT, {item: item})}
        style={styles.container}>
        <View style={styles.imgContainer}>
          {item?.photo ? (
            <Image
              source={{uri: item?.photo}}
              resizeMode="cover"
              style={styles.image}
            />
          ) : (
            <Image
              source={require('../assets/dataImg/user5.jpeg')}
              resizeMode="cover"
              style={styles.image}
            />
          )}
          <View>
            <Text style={styles.textContact}>{item?.name}</Text>
            <FlatList
              data={item?.messages.slice(-1)}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View>
                  <Text style={styles.textMessage}>{item.title}</Text>
                  <Text style={styles.textTimestamp}>{item?.timeSend}</Text>
                </View>
              )}
            />
          </View>
        </View>

        <View style={styles.rightContainer}>
          <Text>{item.lastSeen}</Text>
          <View style={styles.badges}>
            <Text style={styles.textBadge}>5</Text>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default ChatstList;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
    backgroundColor: MyColor.white,
    borderBottomWidth: 1,
    borderBottomColor: MyColor.background,
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
    fontWeight: '700',
    color: MyColor.black,
    paddingLeft: 10,
  },
  icon: {
    width: 26,
    height: 26,
    tintColor: MyColor.tertiary,
  },
  rightContainer: {
    alignItems: 'center',
    gap: 10,
  },
  badges: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: MyColor.tertiary,
  },
  textBadge: {
    position: 'absolute',
    alignSelf: 'center',
    top: 5,
    fontFamily: MyFonts.bold,
    color: MyColor.white,
  },
});
