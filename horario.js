import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const TimePicker = ({ onTimeChange }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    if (onTimeChange) {
      onTimeChange(formatTime(currentDate)); // Passa a data como string
    }
  };

  const showTimepicker = () => {
    setShow(true);
    setMode("time");
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes}`;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showTimepicker}>
        <Text style={styles.timeText}>{formatTime(date)}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
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
    height: 40,
    borderRadius: 5,
    fontSize: 15,
    backgroundColor: "#f0f0f8",
    paddingHorizontal: 10,
    borderBottomColor: "#d9d9d9",
    borderBottomWidth: 3,
    borderRightColor: "#d9d9d9",
    borderRightWidth: 2,
    borderCurve: "circular",
    width: "30%",
  },
  timeText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#5F008C",
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default TimePicker;
