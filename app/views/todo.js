import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const Home = () => {
  return (
    <View><Text>Todo</Text></View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 24
  },
  footer: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0
  },
});

export default Home;
