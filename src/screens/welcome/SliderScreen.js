import {
  StyleSheet,
  SafeAreaView,
  View,
  ImageBackground,
  Dimensions,
  Text
} from 'react-native';
import React from 'react';
import CustomImageCarousal from '../../components/Slider/CustomImageCarousal';
import { Button } from '../../components/Button/Button';
import { Styles } from '../../../Styles/Styles';
import { Colors } from '../../../Styles/Colors';
// const height = useWindowDimensions();
// console.log(height)
const height = Dimensions.get('window').height;
const SliderScreen = ({ navigation }) => {
  const data = [
    {
      image: require('../../../assets/img/photo-1515138692129-197a2c608cfd.jpeg'),
    },
    {
      image: require('../../../assets/img/photo-1536063211352-0b94219f6212.jpeg'),
    },
    {
      image: require('../../../assets/img/photo-1515138692129-197a2c608cfd.jpeg'),
    },
    {
      image: require('../../../assets/img/photo-1536063211352-0b94219f6212.jpeg'),
    },
  ];
  return (
    <ImageBackground style={styles.block} source={require('../../../assets/img/Welcome.jpg')}>
      <SafeAreaView style={{ marginTop: 120, height: height - 200 }}>
        <View style={styles.carouselContainer}>
          <CustomImageCarousal data={data} autoPlay={false} pagination={true} />
        </View>
        <Text style={Styles.black70014}>Already have an account?
          <Text style={{ color: Colors.red_color }} onPress={() => navigation.navigate('SignUpScreen')}>   Sign In</Text>
        </Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SliderScreen;

const styles = StyleSheet.create({
  carouselContainer: {
    marginBottom: 20,
  },
  block: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
});