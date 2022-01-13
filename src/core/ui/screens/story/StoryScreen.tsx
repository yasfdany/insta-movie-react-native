import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import PagerView from 'react-native-pager-view';

import GS from '../../../constants/GlobalStyles';

const StoryScreen = () => {
    return (
        <SafeAreaView style={GS.container}>
            <StatusBar
                hidden={true}/>
            <PagerView style={{flex: 1}}>
                {[0,1,2].map(data => (
                    <Image 
                        key={data}
                        source={{ uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h25kBoE6YGMIF09R9FFDFPcvQoH.jpg' }}
                        style={{
                            flex: 1,
                        }}
                    />
                ))}
        </PagerView>
        </SafeAreaView>
    )
}

export default StoryScreen;