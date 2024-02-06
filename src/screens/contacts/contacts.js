import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {MyFonts} from '../../theme/MyFonts';
import {MyColor} from '../../theme/colors';
import ContactList from '../../components/ContactList';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../utils/Routes';


const ContactsScreen = () => {
  const navigation = useNavigation();

// İçerik güncelleniyor.....
  return (
    <View>
      <ImageBackground
        imageStyle={{opacity: 0.4}}
        style={{width: '100%', height: '100%'}}
        source={require('../../assets/images/chatbg.jpeg')}>
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}>Contacts</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.CONTACTADD)}>
            <Image
              source={require('../../assets/icons/add-user.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={[]}
            keyExtractor={item => item.phone}
            renderItem={({item}) => <ContactList item={item} />}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: MyColor.background,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginVertical: 30,
  },
  textHeader: {
    fontSize: 26,
    fontFamily: MyFonts.black,
  },
});
