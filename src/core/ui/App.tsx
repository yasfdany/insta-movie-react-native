/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import MovieDetailScreen from './screens/movie_detail/MovieDetailScreen';

const Stack = createNativeStackNavigator();
const statusbarStyles = ['default', 'dark-content', 'light-content'];
const statusbarTransitions = ['fade', 'slide', 'none'];
const noToolbar = {
   headerShown : false
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen options={noToolbar} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={noToolbar} name="MovieDetailScreen" component={MovieDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

