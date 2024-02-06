import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {windowWidth} from '../utils/Dimensions';
import {MyColor} from '../theme/colors';
import VectorIcon from '../utils/VectorIcon';


const SendFooter = ({setValue,value, onPress}) => {

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require('../assets/icons/microphone.png')}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type here"
          value={value}
          onChangeText={text => setValue(text)}
        />
        <TouchableOpacity onPress={onPress}>
          <VectorIcon name="send" size={32} color={MyColor.background} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require('../assets/icons/sendFile.png')}
        />
      </View>
    </View>
  );
};

export default SendFooter;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  iconContainer: {
    backgroundColor: MyColor.white,
    borderRadius: 25,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginHorizontal: 15,
    borderRadius: 25,
    backgroundColor: MyColor.white,
  },
  icon: {
    width: 51,
    height: 51,
    borderRadius: 25,
    backgroundColor: MyColor.white,
  },
});
