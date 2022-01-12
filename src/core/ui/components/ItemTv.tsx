import React, {useState} from 'react';
import GS from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';
import {
  Image,
  StyleSheet,
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ItemTv = () => {
    return (
        <TouchableRipple
                borderless
                onPress={() => {
                        
                }}
                rippleColor="rgba(0, 0, 0, .32)">
            <Image 
                source={{ uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h25kBoE6YGMIF09R9FFDFPcvQoH.jpg' }}
                style={styles.tvImage}
            />
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
  tvImage: {
      width: wp(100/3) - 1,
      height: wp(100/3) - 1,
      margin: 1,
  },
});


export default ItemTv;