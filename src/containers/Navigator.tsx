import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../ui/screens/home/HomeScreen'
import MovieDetailScreen from '../ui/screens/movie_detail/MovieDetailScreen'
import StoryScreen from '../ui/screens/story/StoryScreen'

const Stack = createNativeStackNavigator()
const statusbarStyles = ['default', 'dark-content', 'light-content']
const statusbarTransitions = ['fade', 'slide', 'none']
const noToolbar = {
   headerShown : false
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen options={noToolbar} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={noToolbar} name="MovieDetailScreen" component={MovieDetailScreen} />
        <Stack.Screen options={noToolbar} name="StoryScreen" component={StoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

