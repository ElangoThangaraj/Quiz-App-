/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText = "QUIZZLER" />
      <View style={styles.bannerContainer}>
      <Image source={{uri:'https://staugustineschoolcom.files.wordpress.com/2021/12/106891951-quiz-time-sign-with-colorful-paper-confetti-vector-background-800x445-1.jpg'}} style={styles.banner} resizeMode="contain"/>
     </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} style={styles.button}>
        <Text style={styles.buttonText}> Start </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor:'#1A759F',
    padding: 20,
    borderRadius: 16,
    alignItems:'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color:'white',
  },
});
