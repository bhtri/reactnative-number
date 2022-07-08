import { StyleSheet, Platform } from 'react-native';
import colors from './contains/colors';

export default styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    info: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingTop: (Platform.OS === 'ios') ? 0 : 23,
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
        color: colors.one,
        marginLeft: 10,
    }
});
