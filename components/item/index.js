import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style';

export default Item = ({value}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemNumber}>
                    {value < 10 ? `0${value}`: value}
                </Text>
            </View>
        </TouchableOpacity>
    )
}