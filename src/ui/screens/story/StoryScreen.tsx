import React, {useState, useEffect} from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Image,
} from 'react-native'
import PagerView from 'react-native-pager-view'
import { useDispatch, useSelector } from "react-redux"

import GS from '../../../constants/globalStyles'
import {apiConfig} from "../../../data/services/apiClient"
import { TouchableRipple } from 'react-native-paper';

const StoryScreen = (props) => {
    const dispatch = useDispatch()
    const stories = useSelector((state) => state.tv.stories)
    const [page, setpage] = useState(0);

    useEffect(() => {
        setpage(props.route.params.index)
    }, []);
    

    return (
        <SafeAreaView style={GS.container}>
            <StatusBar
                hidden={true}/>
            <PagerView 
                onPageSelected={(event) => {
                    setpage(event.nativeEvent.position)
                }}
                initialPage={props.route.params.index} style={{flex: 1}}>
                    {stories.map(data => (
                        <Image 
                            key={data.id}
                            source={{ uri: `${apiConfig.imageBaseUrl}w780${data.poster_path}` }}
                            style={{
                                flex: 1,
                            }}
                        />
                    ))}
            </PagerView>
            <View style={[GS.row,GS.spaceBetween, {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                backgroundColor: 'transparent',
                marginHorizontal: 4,
            }]}>
                {stories.map((story) => 
                    <View key={story.id} style={{
                        flex: 1,
                        height: 6,
                        backgroundColor: `rgba(255,255,255,${stories[page].id == story.id ? 1 : .4})`,
                        marginHorizontal: 4,
                        marginTop: 8,
                        borderRadius: 24,
                    }}/>
                )}
            </View>
        </SafeAreaView>
    )
}

export default StoryScreen