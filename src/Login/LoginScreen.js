import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, AsyncStorage, ActivityIndicator, ToastAndroid } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { StackNavigator } from 'react-navigation';
import Modal from "react-native-modal";
import styles from './styles';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      email: '',
      password: ''
    }
  }

  static navigationOptions = {
      header: null,
  }

  _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  //process login
  _loginProcess = () => {
    const { password, email } = this.state;
    if(email == '' || password == '') {
      alert('Please enter all fields');
    }
    else {
      //save data with AsyncStorage
      let loginArray = {
        email: email, 
        password: password
      }

      AsyncStorage.setItem('loginArray',
      JSON.stringify(loginArray));

      //fetches item key for login details
      this._signInAsync();

      //show toast notification after user has signed in
      this.toastNotification();
    }
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };

  //toast notification after logging in
  toastNotification() {
    setTimeout(() => {
        ToastAndroid.showWithGravityAndOffset (
          'Signed in Successfully',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
    }, 1500);
  }

  updateEmailInput(value) {
    this.setState({ email: value })
  }

  updatePasswordInput(value) {
    this.setState({ password: value })
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/mainBackground.png')}
          style={{flex: 1, width: '100%', height: '100%', resizeMode:'contain ', justifyContent: 'center'}}>
          <Image
              style={styles.logo}
              source={require('../../assets/images/volutionLogo.png')}
          />
          <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <TouchableOpacity>
                <Text style={styles.loginButton} onPress={this._toggleModal}>LOGIN</Text>
            </TouchableOpacity>
            {/* LOGIN FIELDS MODAL*/}
            <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.setState({ isModalVisible: false })}>
              <View style={styles.modalView}>
                <Form>
                <Image
                    style={styles.icon}
                    source={require('../../assets/images/icon.png')}
                />
                <Text style={{fontSize: 18, textAlign: 'center'}}>LOG IN</Text>
                  <Item style={{ width: 250 }}>
                    <Input 
                      autoCapitalize="none"
                      placeholder="Email Address"
                      placeholderTextColor="#A7A9AB"
                      maxLength={30}
                      value={this.state.email}
                      onChangeText={(text) => this.updateEmailInput(text)}
                    />
                  </Item>
                  <Item style={{ width: 250 }}>
                    <Input 
                      type="password"
                      autoCapitalize="none"
                      placeholder="Password"
                      secureTextEntry={true}
                      placeholderTextColor="#A7A9AB"
                      maxLength={12}
                      value={this.state.password}
                      onChangeText={(text) => this.updatePasswordInput(text)}
                    />
                  </Item>
                  <View style={{flex: 0, alignItems: 'center'}}>
                    <TouchableOpacity onPress={this._loginProcess}>
                      <Text style={styles.submitButton}>CONTINUE</Text>
                    </TouchableOpacity>
                  </View>
                </Form>
              </View>
            </Modal>
            {/* MODAL END */}
            <Text style={styles.supportedText}>By clicking on Join now, you agree to the Volution</Text>
            <Text style={styles.terms}>
              <Text style={{fontWeight: 'bold'}}>terms & conditions</Text>
                    <Text> and </Text> 
              <Text style={{fontWeight: 'bold'}}>privacy policy</Text>
            </Text>
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
} 

export default LoginScreen;
