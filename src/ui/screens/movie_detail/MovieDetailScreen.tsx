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

import { getDetailMovies } from "../../../redux/actions/movieActions"

const MovieDetailScreen = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const [extraHeight, setExtraHeight] = useState(null)
    const categories = ["Action", "Advanture", "Science Fiction"]
    const movie = props.route.params.movie
    const movieDetail = useSelector((state) => state.movie[`detail${movie.id}`]);
    
    let opacityValue = new Animated.Value(0)
    opacityAnim = opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })
    parralaxAnim = opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100]
    })

    useEffect(() => {
        dispatch(getDetailMovies(movie.id));
    }, [])

    useEffect(() => {
    }, [movieDetail])

    renderContent = () => (
        <ScrollView style={{backgroundColor: 'white'}} onLayout={(event) => {
            const {x, y, height, width} = event.nativeEvent.layout
            const minHeight = hp(100) - 56

            if(height < minHeight){
                setExtraHeight(current => current+(minHeight-height))
            }
        }}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={categories}
                style={{flexGrow: 0, marginTop: 12}}
                contentContainerStyle={{paddingHorizontal: 14,}}
                renderItem={({ item }) => (
                    <ItemChip title={item} />
                )}>
            </FlatList>
            <View style={[GS.row, GS.spaceBetween]}>
                <View style={[GS.column, GS.spaceBetween, {paddingHorizontal: 14, marginTop: 12}]}>
                    <TitleSection style={{marginTop: 12}} title="Status" value="Released"/>
                    <TitleSection style={{marginTop: 12}} title="Runtime" value="148"/>
                    <TitleSection style={{marginTop: 12}} title="Release" value="2021-12-01"/>
                    <TitleSection style={{marginTop: 12}} title="Budget" value="Rp. 24.000.000"/>
                    <TitleSection style={{marginTop: 12}} title="Revenue" value="Rp. 12.000.000"/>
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
                Overflow
            </Text>
            <Text style={[GS.black14, GS.moreLineHeight, {marginHorizontal: 14}]}>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is
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
                data={Array(12)}
                style={{flexGrow: 0, marginTop: 14}}
                contentContainerStyle={{paddingHorizontal: 14,}}
                renderItem={({ item }) => (
                    <ItemSimilarMovie style={{marginRight: 12}}/>
                )}>
            </FlatList>
            {extraHeight ? <View style={{height: extraHeight}}/> : null}
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
            }}>
                <Text style={GS.white18}>Spider-man : No way home</Text>
            </Animated.View>
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
                    ],
                }}
            />
            <View style={[GS.row, GS.p18, GS.spaceBetween , {
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'white',
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
            }]}>
                <Text style={GS.black18}>Spider-Man : No way home</Text>
                <View style={[
                    GS.mainCenter,
                    {
                        backgroundColor: Colors.primary,
                        paddingHorizontal: 8,
                        borderRadius: 24,
                    }]
                }>
                    <Text style={GS.white14}>8.6</Text>
                </View>
            </View>
        </View>
    )

    return (
        <SafeAreaView style={GS.container}>
            <StatusBar
                translucent 
                backgroundColor="transparent"
                barStyle={'light-content'} />
            <View style={[GS.column, GS.flex]}>
                <CollapsibleToolbar
                    renderContent={this.renderContent}
                    renderNavBar={this.renderNavBar}
                    renderBackground={this.renderBackground}
                    collapsedNavBarBackgroundColor={Colors.primary}
                    translucentStatusBar
                    showsVerticalScrollIndicator={false}
                    toolBarHeight={hp(50)}
                    onContentScroll = {(offset, max) => {
                        opacityValue.setValue(offset/max)
                    }}
                />
            </View>
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