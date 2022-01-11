import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import GlobalStyles from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';
import MovieList from './pages/MovieList'
import TvList from './pages/TvList'

const HomeScreen = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <StatusBar
        backgroundColor="#ffffff"
        barStyle={'dark-content'} />
      <Tab.Navigator
        activeColor={Colors.primary}
        barStyle={{ backgroundColor: 'white' }}>
        <Tab.Screen 
          options={{
            headerShown : false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="film" color={color} size={18} />
            ),
          }} 
          name="Movie" 
          component={MovieList} 
        />
        <Tab.Screen 
          options={{
            headerShown : false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="tv" color={color} size={18} />
            ),
          }} 
          name="Tv" 
          component={TvList} 
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default HomeScreen;