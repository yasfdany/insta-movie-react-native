import React, {useState} from 'react'
import GS from '../../constants/globalStyles'
import Colors from '../../constants/colors'
import {
  Image,
  StyleSheet,
} from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {apiConfig} from "../../data/services/apiClient"
import DeviceInfo from 'react-native-device-info';

const ItemTv = (props) => {
    return (
        <TouchableRipple
                borderless
                onPress={() => {
                        
                }}
                rippleColor="rgba(0, 0, 0, .32)">
            <Image 
                source={{ uri: `${apiConfig.imageBaseUrl}w342${props.tv.poster_path}` }}
                style={styles.tvImage}
            />
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
  tvImage: {
      width: wp(100/ (DeviceInfo.isTablet() ? 4 : 3)) - 1,
      height: wp(100/ (DeviceInfo.isTablet() ? 4 : 3)) - 1,
      margin: 1,
      backgroundColor: 'rgba(0,0,0,0.08)',
  },
})


export default ItemTv