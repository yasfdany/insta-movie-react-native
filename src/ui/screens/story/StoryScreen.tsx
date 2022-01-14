import React, {useState} from 'react'
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

const StoryScreen = (props) => {
    const dispatch = useDispatch()
    const stories = useSelector((state) => state.tv.stories)

    return (
        <SafeAreaView style={GS.container}>
            <StatusBar
                hidden={true}/>
            <PagerView initialPage={props.route.params.index} style={{flex: 1}}>
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
        </SafeAreaView>
    )
}

export default StoryScreen