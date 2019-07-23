import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class CounterButton extends React.Component{
 state = {
    counter: 0,
    };

    clickHandler = () => console.log('Clicked!');
    clickHandler2 = () =>{
    this.setState({
    counter: this.state.counter +1,
    });
    };

    render(){
    return (
    <View>
    <Text>{this.state.counter}</Text>
    <Button title={'click me! - 1'}
              onPress={
              this.clickHandler2
              }/>
              </View>
    );
    }
}

export default class App extends React.Component{
    render(){
      return (
             <View style={styles.container}>
          <Text style = {[styles.textBig, styles.textRed]}>Hello, World!</Text>
         <Button title={'click me!'}
          onPress={
          this.clickHandler
          }/>
          <CounterButton />
          </View>
          );
    }
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
