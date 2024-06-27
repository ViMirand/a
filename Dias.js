import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import AgendaStyle from '../styles/AgendaStyle';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import datas from '../Back/Agenda/atividades';

// Função para renderizar cada atividade individualmente
const renderAtividade = (item, toggleStatus) => (
    <View style={AgendaStyle.box}>
        <View style={AgendaStyle.box}>
            <View style={{ width: "100%", height: "90%", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 2 }}>
                    <View style={{ 
                        flexDirection: "row", 
                        justifyContent: "space-between", 
                        width: "100%", 
                        alignItems: "center",
                        borderBottomColor: "#fff",
                        borderStyle: "solid",
                        borderBottomWidth: 1 
                    }}>
                        <Text style={[item.status === "0" ? AgendaStyle.atividade2 : AgendaStyle.atividade,{textAlignVertical: "center"}]}>
                            {item.nome}
                        </Text>
                        <TouchableOpacity 
                            style={{
                                height: 15,
                                width: 15,
                                borderRadius: 5,
                                borderColor: "orange",
                                borderStyle: "solid",
                                borderWidth: 2,
                                backgroundColor: item.status === "0" ? "orange" : "transparent"
                            }}
                            onPress={() => toggleStatus(item)}
                        />
                    </View>
                </View>
            </View>
        </View>
    </View>
);

const IconCard = ({ texto, corBackground, onpress, dia, name, tela }) => {
    // Estado para as atividades
    const [atividades, setAtividades] = useState(datas);

    // Função para alternar o status da atividade
    const toggleStatus = (item) => {
        setAtividades(prevState => {
            return prevState.map(diaData => {
                if (diaData.day === dia) {
                    return {
                        ...diaData,
                        atv: diaData.atv.map(atv => {
                            if (atv.nome === item.nome) {
                                return {
                                    ...atv,
                                    status: atv.status === "1" ? "0" : "1"
                                };
                            }
                            return atv;
                        })
                    };
                }
                return diaData;
            });
        });
    };

    // Encontrar o dia correspondente no array de datas
    const diaData = atividades.find(data => data.day === dia);

    return (
        <View style={{ width: "100%", alignItems: "center"}}>
            <Text style={{ color: "#5F008C", fontSize: 17 }}>{texto}</Text>
            <View style={[AgendaStyle.bloco, { backgroundColor: corBackground }]}>
                {tela === "adicionar" && (
                    <TouchableOpacity  onPress={onpress} style={[AgendaStyle.icon, { borderColor: corBackground }]}>
                        <AntDesign name='plus' size={24} color="#5F008C" />
                    </TouchableOpacity>
                )}
                {tela === "editar" && (
                    <TouchableOpacity onPress={onpress} style={[AgendaStyle.icon, { borderColor: corBackground }]}>
                        <MaterialIcons name="edit" size={19} color="#5F008C" />
                    </TouchableOpacity>
                )}
                {tela === "excluir" && (
                    <TouchableOpacity onPress={onpress} style={[AgendaStyle.icon, { borderColor: corBackground }]}>
                        <Feather name="trash" size={20} color="#5F008C" />
                    </TouchableOpacity>
                )}
                <Text style={{ width: "20%", color: "#5F008C80", fontSize: 19, height: "15%", backgroundColor: "#fff8", borderBottomRightRadius: 10, borderTopLeftRadius: 20, fontWeight: "500", textAlign: "center", textAlignVertical: "center" }}>{dia}</Text>
                <View>
                    <FlatList
                        data={diaData ? diaData.atv : []}
                        renderItem={({ item }) => renderAtividade(item, toggleStatus)} // Passar a função de alternância
                        keyExtractor={(item, index) => index.toString()} // Usar o index como chave única
                    />
                </View>
            </View>
        </View>
    );
}

export default IconCard;
