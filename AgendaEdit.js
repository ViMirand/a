import React from 'react';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Editar = ({ corBackground, onPress }) => (
    <View style={[styles.contorno1, {backgroundColor: corBackground }]} >
        <TouchableOpacity style={styles.contorno} onPress={onPress}>
            <MaterialCommunityIcons name="pencil" size={24} color="#5F008C" />
        </TouchableOpacity>
    </View>
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
    contorno:{
        borderRadius: 50,
        backgroundColor: "#ef8320",
        width: "20%",
        height: "20%"
    },
    contorno1:{
        borderRadius: 50,
        backgroundColor: "#fff",
        width: "15%",
        height: "15%"
    }
    });

    export default Editar;
