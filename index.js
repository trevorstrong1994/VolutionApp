import React, { Component } from "react";
import { Font } from 'expo';
import App from "./App.js";
export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Font.loadAsync({
      AvenirNextCondensedDemiBold: require('../../assets/fonts/AvenirNextCondensed-DemiBold.ttf'),
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