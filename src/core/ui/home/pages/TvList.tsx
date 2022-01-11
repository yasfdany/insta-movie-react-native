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

const TvList = () => {
    return (
        <View style={GlobalStyles.container}>
            <Text>Tv Screen</Text>
        </View> 
    )
}

export default TvList;
