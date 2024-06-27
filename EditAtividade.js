import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, ScrollView } from 'react-native';
import AgendaStyle from '../styles/AgendaStyle';
import datas from '../Back/Agenda/atividades';
import { format, startOfWeek, endOfWeek, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import TimePicker from '../components/horario';
import PerfilStyle from '../styles/PerfilStyle';

function EditAtividade({ route }) {
    const { dia } = route.params;

    const [diaSelecionado, setDiaSelecionado] = useState(null);
    const [atividade1, setAtividade1] = useState('');
    const [atividade2, setAtividade2] = useState('');
    const [atividade3, setAtividade3] = useState('');
    const [atividade4, setAtividade4] = useState('');
    const [hr, setHr] = useState('');

    useEffect(() => {
        const diaEncontrado = datas.find(item => item.day === format(dia, 'd')); // Certifique-se de que 'datas' está definida e disponível
        setDiaSelecionado(diaEncontrado);
        console.log("Id: " + format(dia, 'dd/MM/yyyy') + "\nDia: " + diaEncontrado?.title); // Verifique se diaEncontrado não é undefined
    }, [dia]);

    const today = new Date();
    const startOfTheWeek = startOfWeek(today, { weekStartsOn: 1 });
    const endOfTheWeek = endOfWeek(today, { weekStartsOn: 1 });

    const daysOfWeek = [];
    for (let i = 0; i < 7; i++) {
        const day = addDays(startOfTheWeek, i);
        daysOfWeek.push(day);
    }

    const renderAtividade = ({ item }) => (
        <View style={AgendaStyle.atividade}>
            <TouchableOpacity>
                <Text style={{ color: "#1D4582" }}>{item.nome}</Text>
            </TouchableOpacity>
            <View style={{ margin: 2, width: 60, height: 25, alignItems: "center", backgroundColor: "#4C79BC", borderRadius: 20 }}>
                <Text style={{ color: "#fff", textAlignVertical: "center" }}>{item.hr}</Text>
            </View>
        </View>
    );

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
                    <Text style={{ color: "#4F008C", fontSize: 17, height: "100%", fontSize: 17, textAlignVertical: "center",
                        backgroundColor: "#f0f0f0",
                        paddingHorizontal: 10,
                        borderBottomColor: "#d9d9d9",
                        borderBottomWidth: 3,
                        borderRightColor: "#d9d9d9",
                        borderRightWidth: 2,
                        borderRadius: 10
                        }}>{format(dia, 'dd/MM/yyyy')}</Text>
                </View>
            </View>
            <Text style={{ color: "#1D4582", fontSize: 20, width: "90%", alignSelf: 'center', textAlignVertical: "center", textAlign: 'center', backgroundColor: '#C8E5FF', borderTopLeftRadius: 20 }}>Atividades do dia</Text>
            {diaSelecionado ? (
                <View style={{height: "20%", backgroundColor: '#C8E5FF', width: "90%", alignSelf: 'center', borderBottomRightRadius: 20}}>
                    <FlatList
                        data={diaSelecionado.atv} // Array de atividades para o dia selecionado
                        renderItem={renderAtividade} // Função para renderizar cada atividade
                        keyExtractor={(atv, index) => `${atv.nome} ${index}`} // Utiliza o nome e o índice como chave única
                    />
                </View>
            ) : (
                <Text style={{ padding: 20, textAlign: 'center' }}>Carregando...</Text>
            )}
            <ScrollView style={{ width: "90%", alignSelf: "center", height: "20%" }}>
                <View style={AgendaStyle.containerInput}>
                    <Text style={AgendaStyle.txtInput}>Nova atividade:</Text>
                    <TextInput style={PerfilStyle.input} onChangeText={setAtividade1}></TextInput>
                </View>
                <View style={{width: "100%", height: 60, marginVertical: 5}}>
                    <Text style={{ fontSize: 15, color: "#5F008C" }}>Horário:</Text>
                    <TimePicker/>
                </View>
                </ScrollView>
                <View style={{flexDirection: "row", justifyContent: "space-evenly", alignSelf: "flex-end", width: "60%"}}>
                    <TouchableOpacity
                    style={PerfilStyle.salvarBotao}>
                        <Text style={PerfilStyle.txtSalvarBotao}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={PerfilStyle.cancelarBotao}>
                        <Text style={PerfilStyle.txtCancelarBotao}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

export default EditAtividade;