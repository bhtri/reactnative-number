import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Modal from "react-native-modal";

import styles from './style';
import colors from '../../contains/theme';

export default EndGame = ({isVisible, onClose, score}) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType='slide'
                transparent={true}
                isVisible={isVisible}
                hasBackdrop={true}
                backdropOpacity={0.5}
                backdropColor={colors.backdropColor}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Sorry, you failed</Text>
                        <View style={styles.modalBoxScore}>
                            <Text style={styles.modalBoxScoreText}>Your Score: </Text>
                            <Text style={styles.modalBoxScoreNumber}>{score}</Text>
                        </View>
                        <TouchableOpacity style={styles.modalButton} onPress={onClose}>
                            <FontAwesome name='recycle' size={42} color={colors.one} />
                            <Text style={styles.modalButtonText}>Try Again</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
