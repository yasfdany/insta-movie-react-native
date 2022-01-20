import React, {useState, useEffect} from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native'
import {ProgressBar} from '@react-native-community/progress-bar-android';

import Colors from '../../../../constants/colors'
import GS from '../../../../constants/globalStyles'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableRipple } from 'react-native-paper'
import ItemTv from '../../../components/ItemTv'
import { useDispatch, useSelector } from "react-redux"
import { getTv } from '../../../../redux/actions/tvActions'
import { ActionTypes } from '../../../../redux/constants/actionTypes';

const TvList = () => {
    const dispatch = useDispatch()
    const [text, onSearchChange] = useState("")
    const tvs = useSelector((state) => state.tv.tvs)
    const page = useSelector((state) => state.tv.page)
    const maxPage = useSelector((state) => state.tv.maxPage)
    const loading = useSelector((state) => state.tv.loading)
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        dispatch({
            type: ActionTypes.SET_TV_LOADING,
            payload: {loading: true},
        })
        const delayDebounceFn = setTimeout(() => {
            dispatch(getTv(1, text, true))
        }, 500)

        return () => clearTimeout(delayDebounceFn)
    }, [text])

    return (
        <View style={[GS.flex, GS.column]}>
            <View style={[GS.row, GS.crossCenter, styles.containerInput]}>
                <Icon style={{marginHorizontal: 12}} name="search" size={wp(6)} />
                <TextInput 
                    value={text}
                    onChangeText={onSearchChange}
                    placeholder="Search here..."
                    style={{flex: 1}}
                />
                { text.length > 0 ? 
                    <TouchableRipple
                        borderless
                        onPress={() => {
                            onSearchChange("")
                        }}
                        style={{marginHorizontal: 12}}
                        rippleColor="rgba(0, 0, 0, .32)">
                        <Icon name="close" size={wp(6)} /> 
                    </TouchableRipple>
                : null }
            </View>
            <View style={{
                backgroundColor: 'rgba(0, 0, 0, .1)',
                width: '100%',
                height: 1,
                marginTop: 6,
            }}/>
            {loading ? 
                <View style={[GS.flex, GS.mainCenter, GS.crossCenter]}>
                    <ProgressBar style={{color: Colors.primary}}/>
                </View>
             : 
                <FlatList 
                    refreshing={refreshing}
                    onRefresh={() => {
                        dispatch(getTv(1, text, true))
                    }}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if(page + 1 <= maxPage){
                            dispatch(getTv(page+1, text))
                        }
                    }}
                    style={{flex: 1}}
                    data={tvs}
                    renderItem={({ item }) => (
                        <ItemTv tv={item}/>
                    )}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}/>
            }
        </View> 
    )
}

const styles = StyleSheet.create({
  containerInput: {
    margin: 14,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 8,
  },
})

export default TvList
