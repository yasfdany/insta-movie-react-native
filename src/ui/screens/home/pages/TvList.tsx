import React, {useState, useEffect} from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native'
import Colors from '../../../../constants/colors'
import GS from '../../../../constants/globalStyles'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableRipple } from 'react-native-paper'
import ItemTv from '../../../components/ItemTv'

const TvList = () => {
    const [text, onSearchChange] = useState("")
    const [data, setData] = useState([])   

    useEffect(() => {
        let items = Array.apply(null, Array(60)).map((v, i) => {
            return {
                id: i,
                src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h25kBoE6YGMIF09R9FFDFPcvQoH.jpg'
            }
        })
        setData(items)
    }, [])


    useEffect(() => {
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
            <FlatList 
                style={{flex: 1}}
                data={data}
                renderItem={({ item }) => (
                    <ItemTv/>
                )}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
            />
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
