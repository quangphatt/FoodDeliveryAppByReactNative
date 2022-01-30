import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import {Home, Restaurant, OrderDelivery} from './screens';
import Tabs from './navigation/tabs';

import { Text, View, LogBox } from 'react-native';

const Stack=createStackNavigator();

const App = () => {
	LogBox.ignoreLogs([
		"[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
	]);

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
						headerShown: false
					}}
				initialRouteName={'Home'}
			>
				<Stack.Screen name="Home" component={Tabs} />
				<Stack.Screen name="Restaurant" component={Restaurant} />
				<Stack.Screen name="OrderDelivery" component={OrderDelivery} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;

