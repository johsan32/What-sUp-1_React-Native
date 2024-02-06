import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import InputText from '../../components/ui/inputText';
import TextHeader from '../../components/ui/textHeader';
import firestore from '@react-native-firebase/firestore';
import {Routes} from '../../utils/Routes';
import ImagePicker from 'react-native-image-crop-picker';
import {appContext} from '../../context/MyContext';
import ModalProfil from '../../components/ModalProfil';
import { MyColor } from '../../theme/colors';

const ProfilScreen = () => {
  const {deviceId, userInfo, getUserInfo} = appContext();
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(userInfo?.photo);
  const [name, setName] = useState(userInfo?.name);
  const [userName, setUserName] = useState(userInfo?.userName);
  const [biography, setBiography] = useState(userInfo?.description);
  const [modalVisible, setModalVisible] = useState(false);


  const imageGallery = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      setPhoto(`data:${image.mime};base64,${image.data}`);
    });
  };
  const imageCamera = () => {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      setPhoto(`data:${image.mime};base64,${image.data}`);
    });
  };

  const userUpdate = () => {
    firestore()
      .collection('users')
      .doc(deviceId)
      .update({
        name: name,
        photo: photo,
        description: biography,
        userName: userName,
        updateAt: '1.1.1',
      })
      .then(() => {
        console.log('User updated!');
        navigation.navigate(Routes.CONTACTS);
      });
  };
  const userPhotoDelete = () => {
    firestore()
      .collection('users')
      .doc(deviceId)
      .update({
        photo:photo,
      })
      .then(() => {
        console.log('User photo');
      });
  };

  useEffect(() => {
    getUserInfo();
  }, [photo,name,userName,biography]);
  return (
    <ScrollView style={{}} showsVerticalScrollIndicator={false}>
      <ImageBackground
        imageStyle={{opacity: 0.4}}
        style={{width: '100%', height: '100%'}}
        source={require('../../assets/images/chatbg.jpeg')}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                resizeMode="contain"
                style={styles.iconLeft}
                source={require('../../assets/icons/close.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={userUpdate}>
              <Image
                resizeMode="contain"
                style={styles.iconRight}
                source={require('../../assets/icons/tick.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <TextHeader title="Edit Profil" />
            {userInfo?.photo ? (
              <Image style={styles.image} source={{uri: photo}} resizeMode="cover" />
            ) : (
              <Image
                style={styles.image}
                resizeMode="cover" 
                source={require('../../assets/images/userImage.jpeg')}
              />
            )}
            <TouchableOpacity
              style={{zIndex: 55}}
              onPress={() => setModalVisible(true)}>
              <Image
                style={styles.absolute}
                source={require('../../assets/icons/camera.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.input}>
            <InputText
              setValue={setName}
              onPress={() => setName('')}
              placeholderText="Enter full name"
              value={name}
              title="Name"
            />
            <InputText
              setValue={setUserName}
              onPress={() => setUserName('')}
              placeholderText="Enter username"
              value={userName}
              title="Username"
            />
            <InputText
              setValue={setBiography}
              onPress={() => setBiography('')}
              placeholderText="Description"
              value={biography}
              title="Biography"
            />
          </View>
        </View>
      </ImageBackground>
      {modalVisible && (
        <ModalProfil
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          imageCamera={imageCamera}
          imageGallery={imageGallery}
          setPhoto={setPhoto}
          userPhotoDelete={userPhotoDelete}
        />
      )}
    </ScrollView>
  );
};

export default ProfilScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 1,
    width: windowWidth * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  iconLeft: {
    width: 16,
    height: 16,
    tintColor:MyColor.red,
  },
  iconRight: {
    width: 20,
    height: 27,
    tintColor:MyColor.primary,
  },
  header: {
    flex: 2,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    zIndex: 1,
    borderWidth:1,
    borderColor:MyColor.lightGrey,
    backgroundColor:MyColor.white
  },
  absolute: {
    position: 'absolute',
    bottom: 30,
    right: -10,
    zIndex: 55,
  },
  input: {
    flex: 3,
  },
  text: {},
});
