import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

import styles from './style';

export default EndGame = () => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={true}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Sorry, you failed</Text>
                        <View style={styles.modalBoxScore}>
                            <Text style={styles.modalBoxScoreText}>Your Score: </Text>
                            <Text style={styles.modalBoxScoreNumber}>20</Text>
                        </View>
                        <TouchableOpacity style={styles.modalButton}>
                            <FontAwesome name="recycle" size={24} color="black" />
                            <Text style={styles.modalButtonText}>Try Again</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
