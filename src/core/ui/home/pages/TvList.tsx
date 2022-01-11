import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import Colors from '../../../constants/Colors';
import GS from '../../../constants/GlobalStyles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableRipple } from 'react-native-paper';

const TvList = () => {
    const [text, onSearchChange] = useState("")

    useEffect(() => {
    }, [text])

    return (
        <View style={[GS.flex, GS.column]}>
            <View style={[GS.row, GS.crossCenter, styles.containerInput]}>
                <Icon style={{marginHorizontal: 12}} name="search" size={wp(6)} />
                <TextInput 
                    value={text}
                    onChangeText={onSearchChange}
                    placeholder="Search here..."
                    style={{flex: 1}}
                />
                { text.length > 0 ? 
                    <TouchableRipple
                        borderless
                        onPress={() => {
                            onSearchChange("")
                        }}
                        style={{marginHorizontal: 12}}
                        rippleColor="rgba(0, 0, 0, .32)">
                        <Icon name="close" size={wp(6)} /> 
                    </TouchableRipple>
                : null }
            </View>
            <View style={{
                backgroundColor: 'rgba(0, 0, 0, .1)',
                width: '100%',
                height: 1,
                marginTop: 6,
            }}/>
        </View> 
    )
}

const styles = StyleSheet.create({
  containerInput: {
    margin: 14,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 8,
  },
});

export default TvList;
