import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../contains';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height - 128;

export default styles = StyleSheet.create({
    info: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingTop: (Platform.OS === 'ios') ? 0 : 23,
        marginBottom: 40,
    },
    infoScores: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    infoTime: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    infoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.one,
        marginLeft: 10,
    },
})
