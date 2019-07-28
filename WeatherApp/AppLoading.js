import React from 'react';
import { Button, ProgressBarAndroid,ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
//import LoadingBar from 'react-redux-loading-bar';
//import { showLoading, hideLoading } from 'react-redux-loading-bar';

export default class AppLoading extends React.Component{

constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
  const{navigationView} = this.props;
      fetch('http://demo6468405.mockable.io/weather-crawlers/cities')
        .then(response => response.json())
        .then(info=> {
          this.setState({
          ...info,
            isLoading: false,
          });
        });
    }

  render() {
if(this.state.isLoading){
    return (
      <View style={styles.container}>
        <ProgressBarAndroid styleAttr="Horizontal"/>
      </View>
    );
    }

    return(
    <View>
    <ImageBackground source={require('./components/backgrounddofirst.png')} style={{width: '100%', height: '100%'}}>
    <View style={styles.container1}>
    <Button title={'Welcome To T7WA'} onPress={() => this.onPressEntrance()} color="#4CAF50"/>
    </View>
    </ImageBackground>
    </View>
    );
    }

onPressEntrance(){
    this.props.navigation.navigate(
    'Detail',
    );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:1000,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  container1:{
  flex:1,
  fontSize:500,
  height:1000,
  alignItems:'center',
  justifyContent:'center',
  color: '#4CAF50',
  borderColor:'#4CAF50',


  },


});
