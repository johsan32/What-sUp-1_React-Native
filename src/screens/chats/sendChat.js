import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SendHeader from '../../components/sendHeader';
import SendFooter from '../../components/sendFooter';
import SendBalloon from '../../components/sendBalloon';


const SendChat = () => {
  const [value, setValue] = useState('');
  
// İçerik güncelleniyor.....
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        imageStyle={{opacity: 0.4}}
        style={{width: '100%', height: '100%'}}
        source={require('../../assets/images/chatbg.jpeg')}>
        <View>
          <SendHeader item={item} />
        </View>
        <View style={{flex: 1}}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={[]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => <SendBalloon item={item} />}
            />
          )}
        </View>
        <View>
          <SendFooter
            item={item}
            setValue={setValue}
            value={value}
            onPress={addMessages}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SendChat;

const styles = StyleSheet.create({});
