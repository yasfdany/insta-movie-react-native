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

const ItemSimilarMovie = (props) => {
    return (
        <View style={[GS.column, props.style]}>
            <View style={styles.posterShadow}>
                <Image 
                    style={styles.poserImage} 
                    source={{ uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h25kBoE6YGMIF09R9FFDFPcvQoH.jpg' }}
                />
            </View>
            <Text style={[
                GS.black14, 
                {
                    width: wp(30),
                    marginTop: 6,
                    marginBottom: 12,
                }
            ]}>
                Spirder-Man : No way home
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  poserImage: {
      width: wp(30),
      height: hp(20),
      borderRadius: 14,
  },
  posterShadow: {
      elevation: 5,
  }
})

export default ItemSimilarMovie