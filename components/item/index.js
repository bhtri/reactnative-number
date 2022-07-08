import { View, Text } from 'react-native'
import React from 'react'

import styles from './style';

export default Item = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemNumber}>
                    Item
                </Text>
            </View>
        </View>
    )
}