import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Deletar = ({ onPress, corBackground }) => (
    <TouchableOpacity onPress={onPress}>
        <Octicons name="trash" size={24} color="#5F008C" />
        <MaterialCommunityIcons name="pencil" size={24} color="#5F008C" />
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

    export default Deletar;
