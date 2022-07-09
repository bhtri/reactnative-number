import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

import Time from '../Time';
import styles from './style';
import { COLORS } from '../../contains';

export default Info = ({onResponse, startGame, timeOut, hightScore}) => {
    return (
        <View style={styles.info}>
            <View style={styles.infoScores}>
                <FontAwesome name='money' size={24} color={COLORS.one} />
                <Text style={styles.infoText}>{hightScore}</Text>
            </View>
            <View style={styles.infoTime}>
                <FontAwesome name='clock-o' size={24} color={COLORS.one} />
                <Text style={styles.infoText}>
                    <Time onResponse={onResponse} startGame={startGame} timeOut={timeOut} />
                </Text>
            </View>
        </View>
    )
}