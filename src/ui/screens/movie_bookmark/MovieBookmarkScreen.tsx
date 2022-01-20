import React, {useState, useEffect} from 'react'
import {
  View,
  TouchableNativeFeedback,
  FlatList,
  Image,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native'
import GS from '../../../constants/globalStyles'
import Colors from '../../../constants/colors'
import ItemStory from '../../components/ItemStory'
import ItemMovie from '../../components/ItemMovie'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableRipple } from 'react-native-paper'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { useDispatch, useSelector } from "react-redux"
import { getMovieBookmark } from '../../../redux/actions/movieActions';
import { useNavigation } from '@react-navigation/native';

const MovieBookmarkScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const bookmarks = useSelector((state) => state.movie.movieBookmarks)

    useEffect(() => {
        dispatch(getMovieBookmark())
    }, [])
    
    return (
        <View style={[GS.flex, GS.column]}>
            <StatusBar
                backgroundColor={Colors.primary}
                barStyle={'light-content'} />
            <View style={[GS.row, GS.crossCenter,{backgroundColor: Colors.primary}]}>
                 <TouchableRipple
                    style={GS.p14}
                    onPress={() => {
                        navigation.goBack()
                    }}
                    rippleColor="rgba(1, 1, 1, .32)">
                    <Icon name="arrow-back" color="white" size={wp(6)} />
                </TouchableRipple>
                <Text style={[GS.white18, {marginLeft: 12}]}>Bookmark</Text>
            </View>
            <FlatList
                scrollEventThrottle={5}
                style={{flex: 1}}
                data={bookmarks}
                onEndReachedThreshold={0.5}
                renderItem={({ item }) => (
                    <ItemMovie movie={item} bookmarked/>
                )}
            />
        </View> 
    )
}

const styles = StyleSheet.create({
    stotyListStyle: {
        paddingHorizontal: 14,
    },
})

export default MovieBookmarkScreen
