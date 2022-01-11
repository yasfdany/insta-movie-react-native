import React, {useState} from 'react';
import GS from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';
import {
  View,
  TouchableNativeFeedback,
  Image,
  StyleSheet,
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ItemStory = () => {
    return (
        <View style={{
            borderColor: Colors.primary,
            borderWidth: 2,
            marginRight: 6,
            borderRadius: wp(11),
            padding: 2,
        }}>
            <TouchableRipple
                borderless
                onPress={() => {
                        
                }}
                style={{ borderRadius: wp(11) }}
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
        height: wp(11),
        width: wp(11),
        resizeMode: 'cover',
        borderRadius: wp(11),
    },
});


export default ItemStory;
