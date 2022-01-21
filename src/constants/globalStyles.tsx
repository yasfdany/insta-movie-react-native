import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

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
    spaceEvenly: {
        justifyContent: 'space-evenly'
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
        lineHeight: 20
    },
    bold: {
        fontWeight: 'bold',
    },
    black12: {
        fontSize: 12,
        color: 'black',
    },
    black14: {
        fontSize: 14,
        color: 'black',
    },
    black18: {
        fontSize: 18,
        color: 'black',
    },
    white12: {
        fontSize: 12,
        color: 'white',
    },
    white14: {
        fontSize: 14,
        color: 'white',
    },
    white18: {
        fontSize: 18,
        color: 'white',
    },
})