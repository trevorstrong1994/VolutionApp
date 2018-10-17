import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, ActivityIndicator, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import styles from './styles';

class HomeScreen extends React.Component {
	//signout async function
	_signOutAsync = async() => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('Auth');
	};
	render() {
		return(
			<ScrollView>
			<View style={styles.container}>
					<Image
		                style={styles.imageHeader}
		                source={require('../../assets/images/screenHeader.png')}
	            	/>
	            	<View style={styles.imageText}>
		            	<Text style={styles.headerTitle}>SHRED</Text>
						<Text style={styles.secondTitle}>6 WEEKS</Text>
					</View>
            	<View style={{flex: 0, flexDirection: 'column', justifyContent: 'flex-start', marginLeft: 30, marginTop: 15}}>
            		<View style={{flex: 0, flexDirection: 'row', marginBottom: 15}}>
            			<Icon name="time" style={{fontSize: 25, color: '#62C8F2', marginRight: 15}} />
            			<Text style={styles.averageWorkout}>Average workout:</Text>
            			<Text style={styles.averageWorkoutAmount}>23mins</Text>
            		</View>
            		<View style={{flex: 0, flexDirection: 'row'}}>
            			<Icon name="calendar" style={{fontSize: 25, color: '#62C8F2', marginRight: 15}} />
            			<Text style={styles.trainingDays}>Training days:</Text>
            			<Text style={styles.trainingDaysAmount}>18</Text>
            		</View>
            		<Text style={styles.workoutDescriptionTitle}>Workout Description</Text>
            		<Text style={{fontSize: 15, fontFamily: 'AvenirNextCondensedDemiBold', color: '#01234a', letterSpacing: 2, width: 340}}>
            			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            			incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            			exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            		</Text>
            		<Text style={styles.previewTitle}>Preview</Text>
	            		<View style={{ flex: 0, flexDirection: 'row', width: '100%', marginLeft: -20 }}>
	            			<ScrollView horizontal={true}>
        						<Image
					                style={styles.image1}
					       			source={require('../../assets/images/exercise3.png')}
				            	/>
				            	<Image
					                style={styles.image1}
					                source={require('../../assets/images/exercise2.png')}
				            	/>
				            	<Image
					                style={styles.image1}
					                source={require('../../assets/images/exercise1.png')}
				            	/>
				            	<Image
					                style={styles.image1}
					                source={require('../../assets/images/exercise4.png')}
				            	/>
	            			</ScrollView>
	            		</View>
            	</View>
				 <View style={{flex: 0, alignItems: 'center', marginTop: 10}}>
	              <TouchableOpacity onPress={this._signOutAsync}>
	                <Text style={styles.submitButton}>CONTINUE TO WORKOUT</Text>
	              </TouchableOpacity>
	            </View>
	        </View>
	        </ScrollView>
		)
	}
}

export default HomeScreen;