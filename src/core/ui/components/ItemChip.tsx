import React, {useState} from 'react';
import GS from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ItemChip = (props) => {
    return (
        <View style={styles.chipContainer}>
            <Text style={[GS.black14, {color: Colors.primary}]}>{props.title}</Text>
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
});


export default ItemChip;