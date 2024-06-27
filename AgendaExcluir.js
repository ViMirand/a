import React from 'react';
import { Alert, FlatList, ScrollView, Text, View } from 'react-native';
import AgendaStyle from '../styles/AgendaStyle';
import IconCard from '../components/Dias';
import { format, startOfWeek, endOfWeek, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function AgendaExcluirE() {
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
                tela="excluir"
                onpress={sair}
            />
        </View>
    );  

    const sair=()=>{
        Alert.alert(
            "Confirmação",
            "Você tem certeza que deseja excluir esse item?",
            [
                {
                text: "Não",
                onPress: () => console.log("Ação cancelada"),
                style: "cancel"
                },
                { text: "Sim", onPress: () => console.log("Item excluído")}
            ],
            { cancelable: false }
        )
    }

    return (
        <View>
            <View style={AgendaStyle.Header}>
                <Text style={AgendaStyle.titulo}>Agenda</Text>
            </View>
            <View style={{ width: "90%", alignSelf: "center", alignItems: "center", marginTop: -30, height: 60, justifyContent: "space-between" }}>
                <Text style={AgendaStyle.rotina}>Rotina Semanal</Text>
                <Text style={AgendaStyle.rotina}>{format(startOfTheWeek, 'd MMMM', { locale: ptBR })} - {format(endOfTheWeek, 'd MMMM', { locale: ptBR })}</Text>
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

export default AgendaExcluirE;