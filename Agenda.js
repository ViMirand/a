import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import AgendaStyle from '../styles/AgendaStyle';
import OptionsButton from '../components/MiniMenu';
import IconCard from '../components/Dias';
import { format, startOfWeek, endOfWeek, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function Agenda() {
    const today = new Date();
    const startOfTheWeek = startOfWeek(today, { weekStartsOn: 1 });
    const endOfTheWeek = endOfWeek(today, { weekStartsOn: 1 });

    const daysOfWeek = [];
    for (let i = 0; i < 7; i++) {
        const day = addDays(startOfTheWeek, i);
        daysOfWeek.push(day);
    }
    
    const colors = ["#C8E5FF", "#FEE3C3", "#E3D9FF", "#FFED93"];

    const renderItem = ({ item, index }) => (
        <View style={{flex:1}}>
            <IconCard
            corBackground={colors[index % colors.length]} // Alterna cores
            texto={format(item, 'EEEE', { locale: ptBR })} // Nome do dia
            dia={format(item, 'd')} // Número do dia
            />
        </View>
    );  
    return (
        <View>
            <View style={AgendaStyle.Header}>
                <Text style={{ fontSize: 20, color: "#5F008C" }}>Agenda</Text>
                <OptionsButton />
            </View>
            <View style={{ width: "90%", alignSelf: "center", alignItems: "center", marginTop: -30, height: 60, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 19, color: "#5F008C" }}>Rotina Semanal</Text>
                <Text style={{ fontSize: 19, color: "#5F008C" }}>{format(startOfTheWeek, 'd MMMM', { locale: ptBR })} - {format(endOfTheWeek, 'd MMMM', { locale: ptBR })}</Text>
            </View>
            <View style={{marginVertical: 25}}>
                <FlatList
                    data={daysOfWeek}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    style={{ width: "100%", height: "90%", alignSelf: "center" }}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

export default Agenda;