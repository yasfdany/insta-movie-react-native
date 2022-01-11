import React, {useState} from 'react';
import {
  View,
  TouchableNativeFeedback,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import GlobalStyles from '../../../constants/GlobalStyles';
import Colors from '../../../constants/Colors';
import ItemStory from '../../../components/ItemStory';

import Icon from 'react-native-vector-icons/Feather';
import { TouchableRipple } from 'react-native-paper';

const MovieList = () => {
    return (
        <View style={[GlobalStyles.flex, GlobalStyles.column]}>
            <View style={[
                GlobalStyles.row,
                GlobalStyles.spaceBetween,
            ]}>
                <TouchableRipple
                    style={GlobalStyles.p18}
                    onPress={() => {
                        
                    }}
                    rippleColor="rgba(0, 0, 0, .32)">
                    <Icon name="camera" size={24} />
                </TouchableRipple>
                <TouchableRipple
                    borderless
                    style={GlobalStyles.p18}
                    onPress={() => {

                    }}
                    rippleColor="rgba(0, 0, 0, .32)">
                    <Icon name="mail" size={24} />
                </TouchableRipple>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={Array(12)}
                style={{flexGrow: 0, marginVertical: 6}}
                contentContainerStyle={styles.stotyListStyle}
                renderItem={({ item }) => (
                    ItemStory()
                )}
            />
        </View> 
    )
}

const styles = StyleSheet.create({
    stotyListStyle: {
        paddingHorizontal: 14,
    },
});

export default MovieList;
