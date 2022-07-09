import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../contains';
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
        color: COLORS.background,
    },
    bg_one: {
        backgroundColor : COLORS.one,
        borderColor: COLORS.one,
    },
    bg_two: {
        backgroundColor : COLORS.two,
        borderColor: COLORS.two,
    },
    bg_three: {
        backgroundColor : COLORS.three,
        borderColor: COLORS.three,
    },
    bg_four: {
        backgroundColor : COLORS.four,
        borderColor: COLORS.four,
    },
    bg_five: {
        backgroundColor : COLORS.five,
        borderColor: COLORS.five,
    },
    active: {
        backgroundColor: COLORS.active,
        borderColor: COLORS.active,
    },
    activeNumber: {
        color: COLORS.two,
    }
})
