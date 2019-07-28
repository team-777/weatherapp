import React from 'react';
import { NavigationActions, createStackNavigator, createAppContainer ,createSwitchNavigator} from 'react-navigation';
import CityList from './CityList';
import WeatherDetailScreen from './WeatherDetailScreen';
import AppLoading from './AppLoading';


const MainNavi = createStackNavigator(
  {
    CityList: CityList,
    Detail: WeatherDetailScreen,
  },
  {
    initialRouteName: 'CityList',
  }
);

export default createAppContainer(
  createStackNavigator(
    {
      AppLoading : AppLoading,
      Detail : MainNavi,
    },
    {
      initialRouteName: 'AppLoading',

    },
  ),

)
