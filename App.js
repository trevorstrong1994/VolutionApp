import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createTabNavigator } from 'react-navigation';
import { Font } from 'expo';
import AuthLoadingScreen from './src/Auth/AuthLoading.js';
import LoginScreen from './src/Login/LoginScreen.js';
import HomeScreen from './src/Main/Home.js';
import TabBar from './src/Main/tabBar.js';

const AuthStack = createStackNavigator({ Login: LoginScreen });

const MainStack = createTabNavigator({
	Home: HomeScreen
  }, { 
    	 tabBarComponent: TabBar,
    	 tabBarPosition: 'bottom',
       swipeEnabled: false,
  });

//create our app's navigation stack
const App = createSwitchNavigator (
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    Main: MainStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Font.loadAsync({
      AvenirNextCondensedDemiBold: require('./assets/fonts/AvenirNextCondensed-DemiBold.ttf'),
      FontAwesome: require('./assets/fonts/FontAwesome.ttf')
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <App />;
  }
}
console.disableYellowBox = true;