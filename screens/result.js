/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../components/title';

const Result = ({navigation, route}) => {
  const {score} = route.params
  const resultBanner = score > 10 ? 'https://image.shutterstock.com/image-vector/you-win-poster-colorful-watercolor-260nw-1075991621.jpg' : 'https://suptonmclaughlin.files.wordpress.com/2013/10/what-is-face.jpg';
  return (
    <View style={styles.container}>
<Title titleText="RESULTS" />
<Text style={styles.scoreValue}>{score}</Text>
<View style={styles.bannerContainer}>
  <Image
    source={{
      uri:resultBanner,
    }}
    style={styles.banner}
    resizeMode="contain"
  />
</View>
<TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
  <Text style={styles.buttonText}>GO TO HOME</Text>
</TouchableOpacity>
</View>
  );
};



export default Result;

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
    color: 'black',
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
  scoreValue: {
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center',
    color: 'black',
  },
});
