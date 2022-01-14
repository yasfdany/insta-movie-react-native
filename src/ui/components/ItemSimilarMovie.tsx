import React, {useState} from 'react'
import GS from '../../constants/globalStyles'
import Colors from '../../constants/colors'
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { TouchableRipple } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import {apiConfig} from "../../data/services/apiClient"

const ItemSimilarMovie = (props) => {
    const navigation = useNavigation()

    return (
        <View style={[GS.column, props.style]}>
            <TouchableRipple
                borderless
                style={styles.poserImage}
                onPress={() => {
                    navigation.push('MovieDetailScreen',{movie: props.movie})
                }}
                rippleColor="rgba(0, 0, 0, .32)">
                <Image 
                    style={styles.poserImage} 
                    source={{ uri: `${apiConfig.imageBaseUrl}w500${props.movie.poster_path}` }}
                />
            </TouchableRipple>
            <Text style={[
                GS.black14, 
                {
                    width: wp(30),
                    marginTop: 6,
                    marginBottom: 12,
                }
            ]}>
                {props.movie.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  poserImage: {
      width: wp(30),
      height: hp(20),
      borderRadius: 14,
      backgroundColor: 'rgba(0,0,0,0.08)',
  },
})

export default ItemSimilarMovie