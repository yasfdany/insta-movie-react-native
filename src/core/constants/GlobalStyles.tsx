import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    column: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    row: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    mainCenter: {
        justifyContent: 'center'
    },
    crossCenter: {
        alignItems: 'center'
    },
    flex: {
        flex: 1,
    },
    p12: {
        padding: 12,
    },
    p14: {
        padding: 14,
    },
    p18: {
        padding: 18,
    },
    m14: {
        margin: 14,
    },
    m18: {
        margin: 18,
    },
    moreLineHeight: {
        lineHeight: 18
    },
    black14: {
        fontSize: wp(3.4),
        color: 'black',
        fontFamily: 'Cochin',
    },
    black12: {
        fontSize: wp(3),
        color: 'black',
        fontFamily: 'Cochin',
    }
});