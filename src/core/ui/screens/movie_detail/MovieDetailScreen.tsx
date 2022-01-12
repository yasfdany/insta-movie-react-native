import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CollapsibleToolbar from '../../components/CollapsibleToolbar/index.js';
import { TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import GS from '../../../constants/GlobalStyles';
import Colors from '../../../constants/Colors';

const MovieDetailScreen = () => {
    const navigation = useNavigation();
    const [opacity, setOpacity] = useState(0)

    renderContent = () => (
        <View>
            {new Array(20).fill().map((_, i) => (
                <View
                    key={i}
                    style={{
                        backgroundColor: '#F5F5F5',
                        padding: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#E5E5E5'
                    }}>
                    <Text>{`Item ${i + 1}`}</Text>
                </View>
            ))}
        </View>
    );

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
                    navigation.goBack();
                }}
                rippleColor="rgba(1, 1, 1, .32)">
                <Icon name="arrow-back" color="white" size={wp(6)} />
            </TouchableRipple>
            <Text style={[GS.white18, {opacity: opacity}]}>Spider-man : No way home</Text>
        </View>
    );

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
                    renderBackground={() => (
                        <View>
                            <Image
                                source={{ uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h25kBoE6YGMIF09R9FFDFPcvQoH.jpg' }}
                                style={{ height: hp(50) }}
                            />
                            <View style={[GS.row, GS.p18 , {
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'white',
                            }]}>
                            </View>
                        </View>
                    )}
                    collapsedNavBarBackgroundColor={Colors.primary}
                    translucentStatusBar
                    showsVerticalScrollIndicator={false}
                    toolBarHeight={hp(50)}
                    onContentScroll = {(offset, max) => {
                        setOpacity(offset/max)
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default MovieDetailScreen