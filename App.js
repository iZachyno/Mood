import { StatusBar, Image, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import Display from './Display';

export default function App() {
  const [im, setIm] = useState(require('./assets/Normal.png'))
  
  function Mood(Set){
    setIm(Set)
  }

  return (
    <>
      <StatusBar />
      <ImageBackground source = {require('./assets/L.png')} style={styles.container}>
        <Display />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  State: {
    height: 640,
    width: 350,
    backgroundColor: '#00000030',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Switch:{
    marginHorizontal: 4,
    borderRadius: 20,
    height: 54,
    width: 84,
    backgroundColor: '#00000030',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

