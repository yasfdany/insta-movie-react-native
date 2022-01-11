import React, {useState} from 'react';
import {
  View,
  TouchableNativeFeedback,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import GS from '../../../constants/GlobalStyles';
import Colors from '../../../constants/Colors';
import ItemStory from '../../components/ItemStory';
import ItemMovie from '../../components/ItemMovie';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableRipple } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MovieList = () => {
    return (
        <View style={[GS.flex, GS.column]}>
            <View style={[
                GS.row,
                GS.spaceBetween,
            ]}>
                <TouchableRipple
                    style={GS.p18}
                    onPress={() => {
                        
                    }}
                    rippleColor="rgba(0, 0, 0, .32)">
                    <Icon name="photo-camera" size={wp(6)} />
                </TouchableRipple>
                <TouchableRipple
                    borderless
                    style={GS.p18}
                    onPress={() => {

                    }}
                    rippleColor="rgba(0, 0, 0, .32)">
                    <Icon name="mail" size={wp(6)} />
                </TouchableRipple>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={Array(12)}
                style={{flexGrow: 0, marginVertical: 6}}
                contentContainerStyle={styles.stotyListStyle}
                renderItem={({ item }) => (
                    <ItemStory/>
                )}
            />
            <View style={{
                backgroundColor: 'rgba(0, 0, 0, .1)',
                width: '100%',
                height: 1,
                marginTop: 6,
            }}/>
            <FlatList
                style={{flex: 1}}
                data={Array(12)}
                renderItem={({ item }) => (
                    <ItemMovie/>
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
