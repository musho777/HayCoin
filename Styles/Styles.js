import { Colors } from "./Colors";

const { StyleSheet } = require("react-native");

export const Styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 40
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        color: Colors.white_color,
        textAlign: 'center',
    },
    whiteBold: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        color: Colors.white_color,
        textAlign: 'center',
    },
    white700: {
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Montserrat',
        color: Colors.white_color,
        textAlign: 'center',
    },
    white40012: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Montserrat',
        color: Colors.white_color,
        textAlign: 'center',
        lineHeight: 18
    },
    redBold: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        color: Colors.red_color,
        textAlign: 'center',
    },
    black70014: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: '700',
        color: 'rgba(0, 0, 0, 0.70)',
        textAlign: 'center',
    },
    buttonWrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 40,
    },
    nevayRegular: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Montserrat',
        color: Colors.navy_color,
        textAlign: 'center',

    }
})