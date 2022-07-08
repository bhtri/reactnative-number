import { StyleSheet, Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    container: {
        width: Width / 5,
        height: Height / 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },

})
