import { StyleSheet } from 'react-native';

export const Global = StyleSheet.create({
    Header:{
      height: 3,
      width: 25, 
      backgroundColor: '#111', 
      marginTop: 4,
      marginLeft: 28,
      borderRadius: 9,
    },
    text:{
      textAlign: 'left',
      textDecorationLine: 'underline',
      color: '#fff',
    },
    title:{
      fontSize: 20,
      color: '#111',
      fontWeight: "600",
    },
    title2:{
      color: '#444',
    },
    Circle:{
      marginTop: 20,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Profile:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg:{
        flex: 1,
        backgroundColor: 'tomato',
        borderWidth: 1,
    },
    fast:{
        flex: 1,
        flexDirection: 'column',
        margin: 15,
        padding: 31 - 1,
        backgroundColor: 'tomato',
        fontSize: 31 - 7,
        borderRadius: 6,
      },
      image:{
        width: 31, height: 31, backgroundColor: '#111', borderRadius: 111,
      },
      image3:{
        width: 20, height: 20, backgroundColor: '#111', borderRadius: 111,
      },
      image4:{
        width: 20, height: 20, backgroundColor: '#111', borderRadius: 111,
      }
  });