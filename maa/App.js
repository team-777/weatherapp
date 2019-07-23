import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style = {styles.textBig}>Hello, World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({

textBig:{
fontSize: 32,
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
