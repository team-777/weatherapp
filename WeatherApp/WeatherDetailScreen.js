import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,rgb} from 'react-native';
import { Constants } from 'expo';

export default class WeatherDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Todays ${navigation.getParam('city', 'Unknown')} Weather`,
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    // const city = navigation.getParam('city', null);
    const city = 'Daejeon';

    fetch(`http://demo6468405.mockable.io/weather-crawlers/current-weathers/by-city-name/${city}`)
      .then(response => response.json())
      .then(info => {
        this.setState({
          ...info,
          isLoading: false,
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      )
    }

    let celsius = this.state.main.temp - 273.15;

    if(celsius.toFixed(1) >27){
      return (
           <View>
             <ImageBackground source={require('./components/hotsky.png')} style={{width: '100%', height: '100%'}}>
             <Text style={styles.cityname_container}>Daejeon</Text>
             <Text style={styles.container}>{celsius.toFixed(1)} &#180;c </Text>
            </ImageBackground>
           </View>
         );
     }
     else if(celsius.toFixed(1)>=18 && celsius.toFixed(1)<27){
      return (
           <View>
             <ImageBackground source={require('./components/perfectsky.png')} style={{width: '100%', height: '100%'}}>
             <Text style={styles.cityname_container}>Daejeon</Text>
             <Text style={styles.container}>{celsius.toFixed(1)} &#180;c </Text>
            </ImageBackground>
           </View>
         );
     }
     else if(celsius.toFixed(1)<18){
      return (
           <View>
             <ImageBackground source={require('./components/cloudysky.png')} style={{width: '100%', height: '100%'}}>
             <Text style={styles.cityname_container}>Daejeon</Text>
             <Text style={styles.container}>{celsius.toFixed(1)} &#180;c</Text>
            </ImageBackground>
           </View>
         );
     }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
      textAlignVertical: 'auto',
    fontSize:60,
    color:'white'
    //marginTop: Constants.statusBarHeight,
  },

  cityname_container:{
  flex: 1,
  textAlign: 'center',
  textAlignVertical: 'center',
  fontSize: 48,
  fontWeight: 'bold',
  color: 'white'
  },

  button_container:{
  flex:1,
  color:'white',

  },

  });