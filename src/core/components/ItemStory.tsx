import React, {useState} from 'react';
import GlobalStyles from '../constants/GlobalStyles';
import Colors from '../constants/Colors';
import {
  View,
  TouchableNativeFeedback,
  Image,
  StyleSheet,
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';

const ItemStory = () => {
    return (
        <View style={{
            borderColor: Colors.primary,
            borderWidth: 2,
            marginRight: 6,
            borderRadius: 46,
            padding: 2,
        }}>
            <TouchableRipple
                borderless
                onPress={() => {
                        
                }}
                style={{ borderRadius: 46 }}
                rippleColor="rgba(0, 0, 0, .32)">
                <Image 
                    source={{ uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h25kBoE6YGMIF09R9FFDFPcvQoH.jpg' }}
                    style={styles.storyImage}
                />
            </TouchableRipple>
        </View>
    )
}

const styles = StyleSheet.create({
    storyImage: {
        width: 46, 
        height: 46,
        resizeMode: 'cover',
        borderRadius: 23,
    },
});


export default ItemStory;
