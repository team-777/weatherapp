import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style = {[styles.textBig, styles.textRed]}>Hello, World!</Text>
   <Button title={'click me!'} onPress={() => console.log('Clicked')}/>
    </View>
  );
}

const styles = StyleSheet.create({

textBig:{
fontSize: 32,
},
textRed:{
color:'red'
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
