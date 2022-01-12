import React, {useState} from 'react';
import GS from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const TitleSection = (props) => {
    return (
        <View style={[GS.row, props.style]}>
            <Text style={[GS.black14, {width: wp(25)}]}>{props.title}</Text>
            <Text style={[GS.black14, {color: Colors.primary}]}>{props.value}</Text>
        </View>
    )
}

export default TitleSection;