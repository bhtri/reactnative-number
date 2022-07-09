import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../contains/colors';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height - 128;

export default styles = StyleSheet.create({
    container: {
        width: Width / 5,
        height: Height / 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        borderRadius: 100,
        backgroundColor: 'green',

    },
    itemNumber: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingHorizontal: 13,
        paddingVertical: 13,
        color: colors.background,
    },
    bg_one: {
        backgroundColor : colors.one,
        borderColor: colors.one,
    },
    bg_two: {
        backgroundColor : colors.two,
        borderColor: colors.two,
    },
    bg_three: {
        backgroundColor : colors.three,
        borderColor: colors.three,
    },
    bg_four: {
        backgroundColor : colors.four,
        borderColor: colors.four,
    },
    bg_five: {
        backgroundColor : colors.five,
        borderColor: colors.five,
    },
    active: {
        backgroundColor: colors.active,
        borderColor: colors.active,
    },
    activeNumber: {
        color: colors.two,
    }
})
