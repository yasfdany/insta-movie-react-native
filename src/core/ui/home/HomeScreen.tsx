import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import GS from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';
import MovieList from './pages/MovieList'
import TvList from './pages/TvList'

const HomeScreen = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <SafeAreaView style={GS.container}>
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
              <Icon name="theaters" color={color} size={wp(5.6)} />
            ),
          }} 
          name="Movie" 
          component={MovieList} 
        />
        <Tab.Screen 
          options={{
            headerShown : false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="live-tv" color={color} size={wp(5.6)} />
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