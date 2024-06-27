import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format, startOfWeek, endOfWeek, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Calendar = () => {
const today = new Date();
const startOfTheWeek = startOfWeek(today, { weekStartsOn: 1 });
const endOfTheWeek = endOfWeek(today, { weekStartsOn: 1 });

const daysOfWeek = [];
for (let i = 0; i < 7; i++) {
const day = addDays(startOfTheWeek, i);
daysOfWeek.push(day);
}

return (
<View style={styles.container}>
    
    <View style={styles.daysContainer}>
    <Text style={styles.headerText}>Rotina Semanal</Text>
        <Text style={styles.dateText}>
        {format(startOfTheWeek, 'd MMMM', { locale: ptBR })} - {format(endOfTheWeek, 'd MMMM', { locale: ptBR })}
    </Text>
    {daysOfWeek.map((day, index) => (
        <View key={index} style={styles.dayBox}>
        <Text style={styles.dayName}>{format(day, 'EEEE', { locale: ptBR })}</Text>
        <Text style={styles.dayNumber}>{format(day, 'd')}</Text>
        </View>
    ))}
    </View>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
backgroundColor: '#f8f8f8',
},
headerText: {
fontSize: 24,
fontWeight: 'bold',
marginTop: 20,
},
dateText: {
fontSize: 16,
color: 'red',
marginBottom: 20,
},
daysContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'center',
},
dayBox: {
width: 100,
height: 100,
margin: 10,
borderRadius: 10,
backgroundColor: '#f0f0f0',
justifyContent: 'center',
alignItems: 'center',
},
dayName: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5,
},
dayNumber: {
fontSize: 16,
color: '#6e6e6e',
},
});

export default Calendar;
