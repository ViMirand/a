import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ onDateChange }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        onDateChange(currentDate); // Passa a data selecionada para o componente pai
    };

    const showDatepicker = () => {
        setShow(true);
        setMode('date');
    };

    const formatDate = (date) => {
        let day = date.getDate();
        let month = date.getMonth() + 1; // Janeiro é 0!
        let year = date.getFullYear();
        day = day < 10 ? `0${day}` : day;
        month = month < 10 ? `0${month}` : month;
        return `${day}/${month}/${year}`;
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={showDatepicker}>
                <Text style={styles.dateText}>{formatDate(date)}</Text>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        textAlignVertical: "center",
        backgroundColor: "#f0f0f0",
        paddingHorizontal: 10,
        borderBottomColor: "#d9d9d9",
        borderBottomWidth: 3,
        borderRightColor: "#d9d9d9",
        borderRightWidth: 2,
        borderRadius: 10
    },
    dateText: {
        color: "#4F008C",
        fontSize: 17,
    },
});

export default DatePicker;
