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

const ItemMovie = () => {
    const navigation = useNavigation()
    const [love, setLove] = useState(false)
    const [bookmark, setBookmark] = useState(false)

    return (
        <View style={GS.column}>
            <View style={[GS.row, GS.crossCenter, styles.movieTitleContainer]}>
                <Image 
                    source={{ uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h25kBoE6YGMIF09R9FFDFPcvQoH.jpg' }}
                    style={styles.profileImage}
                />
                <View style={[GS.column, GS.mainCenter, {marginLeft: 12, flex: 1}]}>
                    <Text style={GS.black14}>Spider-Man : No way home</Text>
                    <Text style={[GS.black12,{color: 'gray'}]}>2021-12-9</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                    }}
                    rippleColor="rgba(0, 0, 0, .32)">
                    <Icon 
                        name="more-vert"
                        size={wp(6)} 
                    />
                </TouchableOpacity>
            </View>
            <TouchableRipple
                borderless
                onPress={() => {
                    navigation.navigate('MovieDetailScreen')
                }}
                rippleColor="rgba(0, 0, 0, .32)">
                <Image 
                    source={{ uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h25kBoE6YGMIF09R9FFDFPcvQoH.jpg' }}
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
                        size={wp(6)} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        
                    }}
                    style={{marginHorizontal: 12}}
                    rippleColor="rgba(0, 0, 0, .32)">
                    <Icon name="chat-bubble-outline" size={wp(6)} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        
                    }}
                    style={{flex:1}}
                    rippleColor="rgba(0, 0, 0, .32)">
                    <Icon name="share" size={wp(6)} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setBookmark(current => !current)
                    }}
                    rippleColor="rgba(0, 0, 0, .32)">
                    <Icon 
                        name={ bookmark ? "bookmark" : "bookmark-border"} 
                        size={wp(6)} />
                </TouchableOpacity>
             </View>
             <Text style={[GS.black14, GS.moreLineHeight, {marginHorizontal: 14, marginBottom: 14}]}>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is
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
    },
    profileImage: {
        height: wp(9),
        width: wp(9),
        resizeMode: 'cover',
        borderRadius: wp(9),
    },
})


export default ItemMovie
