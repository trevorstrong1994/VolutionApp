import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';

class AuthLoadingScreen extends React.Component {
	constructor(props) {
		super(props);
		this._fetchTokenAsync();
	}

	//fetch the token from storage then navigate to the main page
	_fetchTokenAsync = async () => {
		const userToken = await AsyncStorage.getItem('userToken');

		//this will switch to the App screen or Auth screen and this loading
		this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
	};

	//render loading content
	render() {
		return(
			<View style={styles.container}>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
});

export default AuthLoadingScreen;