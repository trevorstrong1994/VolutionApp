import React, { Component } from "react";
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import FontAwesome, { Icons } from "react-native-fontawesome";
import { TabNavigator, TabBarBottom } from "react-navigation";

class TabBar extends React.Component {
	render() {
		return(
			<View style={{flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f8f8f8'}}>
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
	        		<TouchableOpacity onPress={() => this.props.navigation.navigate("Expenses")}>
	        			<View style={{ flex: 0, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
		        			<FontAwesome style={{fontSize: 30, color: '#d8d8d8'}}>{Icons.bars}</FontAwesome>
	        			</View>
	        		</TouchableOpacity>
	        		<TouchableOpacity onPress={() => this.props.navigation.navigate("Expenses")}>
	        			<View style={{ justifyContent: 'center', flexDirection: 'row' }}>
	        				<Image
				                style={{ height: 25, width: 30, marginTop: 5 }}
				                source={require('../../assets/icons/dumbbell-icon.png')}
			            	/>
	        			</View>
	        		</TouchableOpacity>
	        		<TouchableOpacity onPress={() => this.props.navigation.navigate("Expenses")}>
	        			<View style={{ justifyContent: 'center', flexDirection: 'row' }}>
							<Image
				                style={{ height: 25, width: 30, marginTop: 5 }}
				                source={require('../../assets/icons/utensils.png')}
			            	/>	        			
			            </View>
	        		</TouchableOpacity>
	        		<TouchableOpacity onPress={() => this.props.navigation.navigate("Expenses")}>
	        			<View style={{ justifyContent: 'center', flexDirection: 'row' }}>
		        			<FontAwesome style={{fontSize: 30, color: '#d8d8d8'}}>{Icons.wifi}</FontAwesome>
	        			</View>
	        		</TouchableOpacity>
		        </View>
			</View>
		)
	}
}

export default TabBar;