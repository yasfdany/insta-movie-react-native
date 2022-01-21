import React, {useState, useEffect} from 'react'
import {
  View,
  TouchableNativeFeedback,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native'
import GS from '../../../../constants/globalStyles'
import Colors from '../../../../constants/colors'
import ItemStory from '../../../components/ItemStory'
import ItemMovie from '../../../components/ItemMovie'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableRipple } from 'react-native-paper'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../../../../redux/actions/movieActions"
import { ActionTypes } from '../../../../redux/constants/actionTypes';
import { useNavigation } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';

const MovieList = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const bookmarks = useSelector((state) => state.movie.movieBookmarks)
    const movies = useSelector((state) => state.movie.movies)
    const stories = useSelector((state) => state.tv.stories)
    const page = useSelector((state) => state.movie.page)
    const maxPage = useSelector((state) => state.movie.maxPage)
    const loading = useSelector((state) => state.movie.loading)
    const scrollPosition = useSelector((state) => state.movie.scrollPosition)
    const [refreshing, setRefreshing] = useState(false)
    
    useEffect(() => {
        if(!loading){
            setRefreshing(false)
        }
    }, [loading,movies])

    return (
        <View style={[GS.flex,GS.row]}>
            { DeviceInfo.isTablet() 
                ? 
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={stories}
                    style={{flexGrow: 0, marginVertical: 6}}
                    contentContainerStyle={styles.stotyListStyle}
                    renderItem={({ item, index }) => (
                        <ItemStory style={{marginBottom: 6}} story={item} index={index}/>
                    )}/>
                : null
            }
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
                        <Icon name="photo-camera" color="gray" size={24} />
                    </TouchableRipple>
                    <TouchableRipple
                        borderless
                        style={GS.p18}
                        onPress={() => {
                            navigation.navigate('MovieBookmarkScreen')
                        }}
                        rippleColor="rgba(0, 0, 0, .32)">
                        <Icon name="bookmark" color="gray" size={24} />
                    </TouchableRipple>
                </View>
                {
                    DeviceInfo.isTablet() 
                        ? 
                            null 
                        : 
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                data={stories}
                                style={{flexGrow: 0, marginVertical: 6}}
                                contentContainerStyle={styles.stotyListStyle}
                                renderItem={({ item, index }) => (
                                    <ItemStory style={{marginRight: 6}} story={item} index={index}/>
                            )}/>
                }
                <View style={{
                    backgroundColor: 'rgba(0, 0, 0, .1)',
                    width: '100%',
                    height: 1,
                    marginTop: 6,
                }}/>
                <FlatList
                    refreshing={refreshing}
                    onRefresh={() => {
                        dispatch(getMovies(1, true))
                    }}
                    scrollEventThrottle={5}
                    style={{flex: 1}}
                    data={movies}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if(page + 1 <= maxPage){
                            dispatch(getMovies(page+1))
                        }
                    }}
                    renderItem={({ item }) => {
                        let bookmarked = false
                        for(let bookmark of bookmarks){
                            if(bookmark.id == item.id){
                                bookmarked = true
                                break
                            }
                        }
                        return <ItemMovie movie={item} bookmarked={bookmarked}/>
                    }}
                />
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    stotyListStyle: {
        paddingHorizontal: 14,
    },
})

export default MovieList
