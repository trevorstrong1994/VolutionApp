import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  logo: {
    flex: 0,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 107,
    height: 100,
    marginTop: 100
  },
  loginButton: {
    color: '#fff',
    fontFamily: 'AvenirNextCondensedDemiBold',
    letterSpacing: 2,
    textAlign: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    fontWeight: '500',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#fff',
    marginLeft: 0,
    marginTop: 40,
    width: 270
  },
  icon: {
    flex: 0,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  supportedText: {
  	fontFamily: 'AvenirNextCondensedDemiBold',
  	marginTop: 20,
  	letterSpacing: 2,
  	fontSize: 12,
  	color: '#01234a',
    fontWeight: 'normal'
  },
  terms: {
  	marginTop: 10,
    fontFamily: 'AvenirNextCondensedDemiBold',
    letterSpacing: 2,
  	fontSize: 12,
    fontWeight: 'normal',
  	color: '#01234a'
  },
  forgotPassword: {
  	color: '#fff',
  	marginTop: 25,
  	fontFamily: 'AvenirNextCondensedDemiBold',
  	letterSpacing: 2,
  	fontSize: 12
  },
  modalView: {
  	flex: 0,
  	flexShrink: 1,
  	alignSelf: 'center',
  	justifyContent: 'center',
  	width: 280,
  	height: 270,
  	backgroundColor: '#fff',
  	borderWidth: 1,
  	borderRadius: 10,
  	borderColor: '#0893cf'
  },
  submitButton: {
  	color: '#fff',
    textAlign: 'center',
    backgroundColor: '#0893cf',
    padding: 10,
    fontWeight: '500',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#fff',
    marginTop: 20
  }
});

export default styles;
