import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, ScrollView, Alert } from 'react-native';
import AgendaStyle from '../styles/AgendaStyle';
import { format, startOfWeek, endOfWeek, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import TimePicker from '../components/horario';
import PerfilStyle from '../styles/PerfilStyle';
import DatePicker from '../components/Data';
import { useNavigation } from '@react-navigation/native';

function AgendaAdicionar() {

    const [diaSelecionado, setDiaSelecionado] = useState(null);
    const [atividade1, setAtividade1] = useState('');
    const [atividade2, setAtividade2] = useState('');
    const [atividade3, setAtividade3] = useState('');
    const [atividade4, setAtividade4] = useState('');
    const [hr, setHr] = useState('');

    const navigation = useNavigation();
    const today = new Date();
    const startOfTheWeek = startOfWeek(today, { weekStartsOn: 1 });
    const endOfTheWeek = endOfWeek(today, { weekStartsOn: 1 });

    const daysOfWeek = [];
    for (let i = 0; i < 7; i++) {
        const day = addDays(startOfTheWeek, i);
        daysOfWeek.push(day);
    }

    const sair=()=>{
        Alert.alert(
            "Confirmação",
            "Você tem certeza que deseja sair?",
            [
                {
                text: "Não",
                onPress: () => console.log("Ação de sair cancelada"),
                style: "cancel"
                },
                { text: "Sim", onPress: () => navigation.navigate('AgendaE') }
            ],
            { cancelable: false }
        )
    }

    return (
        <View>
            <View style={AgendaStyle.Header}>
                <Text style={{ fontSize: 20, color: "#5F008C" }}>Agenda</Text>
            </View>
            <View style={{ width: "90%", alignSelf: "center", alignItems: "center", marginTop: -30, height: 60, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 19, color: "#5F008C" }}>Rotina Semanal</Text>
                <Text style={{ fontSize: 19, color: "#5F008C" }}>{format(startOfTheWeek, 'd MMMM', { locale: ptBR })} - {format(endOfTheWeek, 'd MMMM', { locale: ptBR })}</Text>
            </View>
            <View style={{ width: "90%", alignSelf: "center", height: 40, marginVertical: 10}}>
                <View style={{ width: "40%", height: "100%", flexDirection: "row"}}>
                    <Text style={{ color: "#4F008C", height: "100%", fontSize: 17, textAlignVertical: "center"}}>Dia: </Text>
                    <DatePicker/>
                </View>
            </View>
            <ScrollView style={{ width: "90%", alignSelf: "center", height: "68%" }}>
                <View style={AgendaStyle.containerInput}>
                    <Text style={AgendaStyle.txtInput}>Atividade 1:</Text>
                    <TextInput style={PerfilStyle.input} onChangeText={setAtividade1}></TextInput>
                </View>
                <View style={AgendaStyle.containerInput}>
                    <Text style={AgendaStyle.txtInput}>Atividade 2:</Text>
                    <TextInput style={PerfilStyle.input} onChangeText={setAtividade2}></TextInput>
                </View>
                <View style={AgendaStyle.containerInput}>
                    <Text style={AgendaStyle.txtInput}>Atividade 3:</Text>
                    <TextInput style={PerfilStyle.input} onChangeText={setAtividade3}></TextInput>
                </View>
                <View style={AgendaStyle.containerInput}>
                    <Text style={AgendaStyle.txtInput}>Atividade 4:</Text>
                    <TextInput style={PerfilStyle.input} onChangeText={setAtividade4}></TextInput>
                </View>
                <View style={{width: "100%", height: 60, marginVertical: 5}}>
                    <Text style={{ fontSize: 15, color: "#5F008C" }}>Horário da Atividade 1:</Text>
                    <TimePicker/>
                </View>
                <View style={{width: "100%", height: 60, marginVertical: 5}}>
                    <Text style={{ fontSize: 15, color: "#5F008C" }}>Horário da Atividade 2:</Text>
                    <TimePicker/>
                </View>
                <View style={{width: "100%", height: 60, marginVertical: 5}}>
                    <Text style={{ fontSize: 15, color: "#5F008C" }}>Horário da Atividade 3:</Text>
                    <TimePicker/>
                </View>
                <View style={{width: "100%", height: 60, marginVertical: 5}}>
                    <Text style={{ fontSize: 15, color: "#5F008C" }}>Horário da Atividade 4:</Text>
                    <TimePicker/>
                </View>
                </ScrollView>
                <View style={{flexDirection: "row", justifyContent: "space-evenly", alignSelf: "flex-end", width: "60%"}}>
                    <TouchableOpacity
                    style={PerfilStyle.salvarBotao}
                    onPress={()=>
                        navigation.navigate('AgendaE')}
                    >
                        <Text style={PerfilStyle.txtSalvarBotao}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={PerfilStyle.cancelarBotao}
                    onPress={sair}
                    >
                        <Text style={PerfilStyle.txtCancelarBotao}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

export default AgendaAdicionar;