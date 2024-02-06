import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {MyFonts} from '../../theme/MyFonts';
import ChatstList from '../../components/ChatsList';


const ChatsScreen = () => {


// İçerik güncelleniyor.....
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{opacity: 0.4}}
        style={{width: '100%', height: '100%'}}
        source={require('../../assets/images/chatbg.jpeg')}>
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}>Messages</Text>
          <Image
            source={require('../../assets/icons/contactRight.png')}
            style={{width: 21, height: 21}}
          />
        </View>
        <FlatList
          data={[]}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ChatstList item={item} />}
        />
      </ImageBackground>
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  textHeader: {
    fontSize: 26,
    fontFamily: MyFonts.black,
  },
});
