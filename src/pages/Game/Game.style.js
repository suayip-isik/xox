import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const borderColor = '#b3e5fc';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    playerInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
        marginTop: 30,
    },
    playerTxt: {
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 1.2,
        color: '#fff',
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 60,
    },
    cellTopLeft: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 6,
        borderBottomWidth: 6,
        borderColor: borderColor,
    },
    cellTopMid: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 6,
        borderBottomWidth: 6,
        borderColor: borderColor,
    },
    cellTopRight: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 6,
        borderColor: borderColor,
    },
    cellMidLeft: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 6,
        borderBottomWidth: 6,
        borderColor: borderColor,
    },
    cellMidMid: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 6,
        borderBottomWidth: 6,
        borderColor: borderColor,
    },
    cellMidRight: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 6,
        borderColor: borderColor,
    },
    cellBottomLeft: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 6,
        borderColor: borderColor,
    },
    cellBottomMid: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 6,
        borderColor: borderColor,
    },
    cellBottomRight: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 62,
        height: 62,
    },
    cancelButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    cancelIcon: {
        width: 80,
        height: 80,
    },
    header: {
        marginHorizontal: '0%',
    },
    homeIcon: {
        width: 55,
        height: 55,
        margin: 10,
    },
    homeButton: {
        marginLeft: '5%',
    },
});