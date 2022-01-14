import React, {useState} from 'react'
import GS from '../../constants/globalStyles'
import Colors from '../../constants/colors'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const ItemChip = (props) => {
    return (
        <View style={styles.chipContainer}>
            <Text style={[GS.black14, {color: Colors.primary}]}>{props.genre.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    chipContainer: {
        padding: 6,
        borderColor: Colors.primary,
        borderWidth: 1.4,
        borderRadius: 32,
        marginRight: 12,
    },
})


export default ItemChip