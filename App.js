import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import Mystack from './navigation/inde';

const App = () => {
  return (
    <NavigationContainer>
      <Mystack />
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
