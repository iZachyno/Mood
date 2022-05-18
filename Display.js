import {  Image, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Display() {
  const [im, setIm] = useState(require('./assets/Normal.png'))
  
  function Mood(Set){
    setIm(Set)
  }

  return (
    <>
      
        <View style = {styles.State}>
          <Image source={im} style = {{height: 300, width: 350,}} />
        </View>
        <View style = {{marginVertical: 25, height: 100, width: 150, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => Mood(require('./assets/Normal.png'))} style = {styles.Switch}>
          <Image source={require('./assets/Normal.png')} style = {{height: 40, width: 40}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Mood(require('./assets/Happy.png'))} style = {styles.Switch}>
            <Image source={require('./assets/Happy.png')} style = {{height: 40, width: 61}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Mood(require('./assets/Sad.png'))} style = {styles.Switch} >
          <Image source={require('./assets/Sad.png')} style = {{height: 40, width: 40}} />
          </TouchableOpacity>
        </View>
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

