import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style';

export default Item = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemNumber}>
                    00
                </Text>
            </View>
        </TouchableOpacity>
    )
}