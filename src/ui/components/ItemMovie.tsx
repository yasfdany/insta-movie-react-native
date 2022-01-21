import React, {useState} from 'react'
import GS from '../../constants/globalStyles'
import Colors from '../../constants/colors'
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from "react-redux"

import {apiConfig} from "../../data/services/apiClient"
import { toggleMovieBookmark } from "../../redux/actions/movieActions"

const ItemMovie = (props) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [love, setLove] = useState(false)

    return (
        <View style={GS.column}>
            <View style={[GS.row, GS.crossCenter, styles.movieTitleContainer]}>
                <Image 
                    source={{ uri: `${apiConfig.imageBaseUrl}w342${props.movie.backdrop_path}` }}
                    style={styles.profileImage}
                />
                <View style={[GS.column, GS.mainCenter, {marginLeft: 12, flex: 1}]}>
                    <Text style={GS.black14}>{props.movie.title}</Text>
                    <Text style={[GS.black12,{color: 'gray'}]}>{props.movie.release_date}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                    }}
                    rippleColor="rgba(0, 0, 0, .32)">
                    <Icon 
                        name="more-vert"
                        color="gray"
                        size={24} 
                    />
                </TouchableOpacity>
            </View>
            <TouchableRipple
                borderless
                onPress={() => {
                    navigation.navigate('MovieDetailScreen',{movie: props.movie})
                }}
                rippleColor="rgba(0, 0, 0, .32)">
                <Image 
                    source={{ uri: `${apiConfig.imageBaseUrl}w500${props.movie.poster_path}` }}
                    style={styles.movieImage}
                />
            </TouchableRipple>
             <View style={[GS.row, GS.p12]}>
                <TouchableOpacity
                    onPress={() => {
                        setLove(current => !current)
                    }}
                    rippleColor="rgba(0, 0, 0, .32)">
                    <Icon 
                        name={ love ? "favorite" : "favorite-border"} 
                        color={ love ? "red" : "gray" }
                        size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        
                    }}
                    style={{marginHorizontal: 12}}
                    rippleColor="rgba(0, 0, 0, .32)">
                    <Icon 
                        name="chat-bubble-outline" 
                        color="gray"
                        size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        
                    }}
                    style={{flex:1}}
                    rippleColor="rgba(0, 0, 0, .32)">
                    <Icon 
                        name="share" 
                        color="gray"
                        size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(toggleMovieBookmark(props.movie))
                    }}
                    rippleColor="rgba(0, 0, 0, .32)">
                    <Icon 
                        name={ props.bookmarked ? "bookmark" : "bookmark-border"} 
                        color="gray"
                        size={24} />
                </TouchableOpacity>
             </View>
             <Text style={[GS.black14, GS.moreLineHeight, {marginHorizontal: 14, marginBottom: 14}]}>
                {props.movie.overview}
             </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    movieTitleContainer: {
        padding: wp(3),
    },
    movieImage: {
        height: hp(52),
        resizeMode: 'cover',
        backgroundColor: 'rgba(0,0,0,0.08)',
    },
    profileImage: {
        height: 48,
        width: 48,
        resizeMode: 'cover',
        borderRadius: 48,
        backgroundColor: 'rgba(0,0,0,0.08)',
    },
})


export default ItemMovie
