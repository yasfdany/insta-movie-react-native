import React, {useState, useEffect} from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  Animated,
} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import CollapsibleToolbar from '../../components/CollapsibleToolbar/index.js'
import { TouchableRipple } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useDispatch,useSelector } from "react-redux";

import GS from '../../../constants/globalStyles'
import Colors from '../../../constants/colors'
import ItemChip from '../../components/ItemChip'
import TitleSection from '../../components/TitleSection'
import ItemSimilarMovie from '../../components/ItemSimilarMovie'
import {apiConfig} from "../../../data/services/apiClient"

import { getDetailMovies, getSimilarMovies, toggleMovieBookmark } from "../../../redux/actions/movieActions"
import { ProgressBar } from '@react-native-community/progress-bar-android';

const MovieDetailScreen = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const movie = props.route.params.movie
    const loading = useSelector((state) => state.movie[`loadingDetail${movie.id}`]);
    const movieDetail = useSelector((state) => state.movie[`detail${movie.id}`]);
    const similarMovies = useSelector((state) => state.movie[`similar${movie.id}`]);
    const bookmarks = useSelector((state) => state.movie.movieBookmarks)
    const [height, setheight] = useState(0);
    const contentHeight = hp(100) - 56
    const [bookmarked, setbookmarked] = useState(false);

    let opacityValue = new Animated.Value(0)
    let opacityAnim = opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })
    let parralaxAnim = opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100]
    })
    let scaleAnim = opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.2]
    })

    useEffect(() => {
        dispatch(getSimilarMovies(movie.id));
        dispatch(getDetailMovies(movie.id));
    }, [])

    useEffect(() => {
        setbookmarked(false)
        for(let bookmark of bookmarks){
            if(bookmark.id == movie.id){
                setbookmarked(true)
                break
            }
        }
    }, [bookmarks]);    

    renderContent = () => (
        <ScrollView 
            onLayout={(event) => {
                const {x, y, height, width} = event.nativeEvent.layout

                if(height < contentHeight){
                    setheight(contentHeight - height + 24)
                }
            }}
            style={{backgroundColor: 'white'}}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={movieDetail?.genres ?? []}
                style={{flexGrow: 0, marginTop: 12}}
                contentContainerStyle={{paddingHorizontal: 14,}}
                renderItem={({ item }) => (
                    <ItemChip genre={item} />
                )}>
            </FlatList>
            <View style={[GS.row, GS.spaceBetween]}>
                <View style={[GS.column, GS.spaceBetween, {paddingHorizontal: 14, marginTop: 12}]}>
                    <TitleSection style={{marginTop: 12}} title="Status" value={movieDetail?.status ?? ""}/>
                    <TitleSection style={{marginTop: 12}} title="Runtime" value={movieDetail?.runtime ?? ""}/>
                    <TitleSection style={{marginTop: 12}} title="Release" value={movieDetail?.release_date ?? ""}/>
                    <TitleSection style={{marginTop: 12}} title="Budget" value={`Rp. ${movieDetail?.budget ?? ""}`}/>
                    <TitleSection style={{marginTop: 12}} title="Revenue" value={`Rp. ${movieDetail?.revenue ?? ""}`}/>
                </View>
                <Image 
                    style={styles.poserImage} 
                    source={{ uri: `${apiConfig.imageBaseUrl}w342${movie.poster_path}` }}
                />
            </View>
            <Text 
                style={[
                    GS.black18, 
                    GS.bold,
                    {
                        marginHorizontal: 14, 
                        marginTop: 24,
                    }
                ]}>
                Overview
            </Text>
            <Text style={[GS.black14, GS.moreLineHeight, {marginHorizontal: 14}]}>
                {movieDetail?.overview}
            </Text>
            <Text 
                style={[
                    GS.black18, 
                    GS.bold,
                    {
                        marginHorizontal: 14, 
                        marginTop: 24,
                    }
                ]}>
                Similar Movie
            </Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={similarMovies}
                style={{flexGrow: 0, marginTop: 14}}
                contentContainerStyle={{paddingHorizontal: 14,}}
                renderItem={({ item }) => (
                    <ItemSimilarMovie movie={item} style={{marginRight: 12}}/>
                )}>
            </FlatList>
            <View style={{height: height}}/>
        </ScrollView>
    )

    renderNavBar = () => (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1
            }}>
            <TouchableRipple
                style={GS.p14}
                onPress={() => {
                    navigation.goBack()
                }}
                rippleColor="rgba(1, 1, 1, .32)">
                <Icon name="arrow-back" color="white" size={wp(6)} />
            </TouchableRipple>
            <Animated.View style={{
                opacity: opacityAnim,
                flex: 1,
            }}>
                <Text numberOfLines={1} style={GS.white18}>{movie.title}</Text>
            </Animated.View>
            <TouchableRipple
                borderless
                style={GS.p18}
                onPress={() => {
                    dispatch(toggleMovieBookmark(movie))
                }}
                rippleColor="rgba(0, 0, 0, .32)">
                    <Icon name={bookmarked ? "bookmark" : "bookmark-border"} color="white" size={wp(6)} />
            </TouchableRipple>
        </View>
    )

    renderBackground = () => (
        <View>
            <Animated.Image
                source={{ uri: `${apiConfig.imageBaseUrl}w780${movie.backdrop_path}` }}
                style={{ 
                    height: hp(50),
                    transform: [
                        {translateY: parralaxAnim},
                        {scale: scaleAnim},
                    ],
                }}
            />
            <View style={[GS.row, GS.p18, GS.crossCenter,GS.spaceBetween, {
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'white',
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
            }]}>
                <Text style={[GS.black18, {width: wp(76)}]}>{movie.title}</Text>
                <View style={[
                    GS.mainCenter,
                    {
                        backgroundColor: Colors.primary,
                        paddingHorizontal: 8,
                        paddingVertical: 2,
                        borderRadius: 24,
                    }]
                }>
                    <Text style={GS.white14}>{movie.vote_average}</Text>
                </View>
            </View>
        </View>
    )

    return (
        <SafeAreaView style={GS.container}>
            <StatusBar
                translucent 
                backgroundColor="transparent"
                barStyle={movieDetail == null ? 'dark-content' : 'light-content'} />
            {
                movieDetail == null
                ?
                    <View style={[GS.column, GS.flex]}>
                        <View style={[GS.row, GS.crossCenter, {marginTop: 24}]}>
                            <TouchableRipple
                                style={GS.p14}
                                onPress={() => {
                                    navigation.goBack()
                                }}
                                rippleColor="rgba(1, 1, 1, .32)">
                                <Icon name="arrow-back" color="black" size={wp(6)} />
                            </TouchableRipple>
                        </View>
                        {
                            loading 
                            ? 
                                <View style={[GS.flex, GS.mainCenter, GS.crossCenter]}>
                                    <ProgressBar style={{color: Colors.primary}}/>
                                </View>
                            :
                                <View style={[GS.flex, GS.column,GS.mainCenter, GS.crossCenter]}>
                                    <Image 
                                        style={{
                                            height: hp(36),
                                            resizeMode: 'contain',
                                        }}
                                        source={require("../../../../assets/images/empty_state.png")}>
                                    </Image>
                                    <Text style={[GS.black18, GS.bold, {marginTop: 24}]}>Data tidak tersedia</Text>
                                    <Text style={[
                                        GS.black14, 
                                        {
                                            color: 'gray', 
                                            textAlign: 'center', 
                                            marginHorizontal: wp(12),
                                            marginTop: 4,
                                        }
                                    ]}>
                                        Data tidak tersedia secara offline, aktifkan paket data untuk memuat halaman ini
                                    </Text>
                                </View>
                        }
                    </View>
                :
                    <View style={[GS.column, GS.flex]}>
                        <CollapsibleToolbar
                            renderContent={renderContent}
                            renderNavBar={renderNavBar}
                            renderBackground={renderBackground}
                            collapsedNavBarBackgroundColor={Colors.primary}
                            translucentStatusBar
                            showsVerticalScrollIndicator={false}
                            toolBarHeight={hp(50)}
                            onContentScroll = {(offset, max) => {
                                opacityValue.setValue(offset/max)
                            }}
                        />
                    </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  poserImage: {
      width: wp(30),
      height: hp(20),
      borderRadius: 14,
      marginRight: 14,
      marginTop: 24,
  },
})

export default MovieDetailScreen