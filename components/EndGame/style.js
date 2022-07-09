import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../contains/colors';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height - 128;

export default styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        paddingHorizontal: 58,
        paddingVertical: 26,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 21,
    },
    modalBoxScore: {
        flexDirection: 'row',
        marginBottom: 18,
        alignItems: 'flex-end',
    },
    modalBoxScoreText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginRight: 36,
    },
    modalBoxScoreNumber: {
        fontSize: 72,
        fontWeight: 'bold',
        color: colors.numberScore,
    },
    modalButton: {
        flexDirection: 'row',
        backgroundColor: colors.four,
        paddingVertical: 12,
        paddingHorizontal: 27,
        borderRadius: 20,
        alignItems: 'center'
    },
    modalButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.one,
        marginLeft: 15,
    },
})
