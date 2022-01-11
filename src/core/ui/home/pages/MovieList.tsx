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
import GlobalStyles from '../../../constants/GlobalStyles';

const MovieList = () => {
    return (
        <View style={GlobalStyles.container}>
            <Text>Home Screen</Text>
        </View> 
    )
}

export default MovieList;
