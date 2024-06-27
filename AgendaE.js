import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';

const AgendaE = ({ onPress }) => (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
        <Image
        source= {require('../assets/Agenda.png')}
        />
    </TouchableOpacity>
    );

    const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#EF8320',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        right: 20,
        bottom: 20,
        elevation: 8,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    });

    export default AgendaE;
