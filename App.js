import { StatusBar, ImageBackground, } from 'react-native';

import Display from './Display';

export default function App() {
  return (
    <>
      <StatusBar />
      <ImageBackground source = {require('./assets/L.png')} style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Display />
      </ImageBackground>
    </>
  );
}

