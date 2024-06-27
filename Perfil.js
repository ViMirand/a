import {
    ImageBackground,
    Text,
    View, 
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useState } from 'react';
import PerfilStyle from '../styles/PerfilStyle';
import HomeStyle from '../styles/homeStyle';
import DadosE from '../Back/Login/DadosE';
import Camera from '../components/camera';
import cameraStyle from '../styles/cameraStyle';

function Perfil() {
    
    const navigation = useNavigation();
    const [crianca, setCrianca] = useState("");
    
    function atualizarCrianca(status) {
        setCrianca(status);
    }
    
    const handlePress = () => {
        navigation.navigate('Agenda')
    };
    pessoa = DadosE[0];

    return (
        <View style={{flex:1}}>
            <ImageBackground
            style={{flex:1}}
                source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpg_QeWTCIoGi5pNOSKC4ZzfATsyVrlq1og&s'}
                resizeMode='contain'>
                <View style={PerfilStyle.container}>
                    <ScrollView style={{height: 700}}>
                        <Text style={PerfilStyle.titulo}>Responsável</Text>
                        <View style={cameraStyle.Geral}>
                            <Camera/>
                        </View>
                            <View style={PerfilStyle.containerInput}>
                                <Text style={PerfilStyle.txtInput}>Nome:</Text>
                                <TextInput style={PerfilStyle.input} readOnly={true} value={pessoa.nome}/>
                            </View>
                            <View style={PerfilStyle.containerInput}>
                                <Text style={PerfilStyle.txtInput}>Telefone:</Text>
                                <TextInput style={PerfilStyle.input} readOnly={true} value={pessoa.telefone}/>
                            </View>
                            <View style={PerfilStyle.containerInput}>
                                <Text style={PerfilStyle.txtInput}>Email:</Text>
                                <TextInput style={PerfilStyle.input} readOnly={true} value={pessoa.email}/>
                            </View>
                        <TouchableOpacity
                        onPress={()=>navigation.navigate("Perfil1R")} 
                        style={PerfilStyle.editarBotao}>
                            <Text style={PerfilStyle.txtEditarBotao}>Editar</Text>
                        </TouchableOpacity>
                        {crianca != "" && 
                        <View style={PerfilStyle.container}>
                            <Text style={PerfilStyle.titulo}>Criança</Text>
                            <View style={cameraStyle.Geral}>
                                <Camera/>
                            </View>
                            <View style={PerfilStyle.containerInput}>
                                <Text style={PerfilStyle.txtInput}>Nome:</Text>
                                <TextInput style={PerfilStyle.input} readOnly={true}></TextInput>
                            </View>
                            <View style={PerfilStyle.containerInput}>
                                <Text style={PerfilStyle.txtInput}>Apelido(Opcional):</Text>
                                <TextInput style={PerfilStyle.input} readOnly={true}></TextInput>
                            </View>
                            <View style={PerfilStyle.containerInput}>
                                <Text style={PerfilStyle.txtInput}>Idade:</Text>
                                <TextInput style={PerfilStyle.inputIdade} readOnly={true}></TextInput>
                            </View>
                            <View style={PerfilStyle.containerInput}>
                                <Text style={PerfilStyle.txtInput}>Código de conexão:</Text>
                                <TextInput style={PerfilStyle.input} readOnly={true}></TextInput>
                            </View>
                            <TouchableOpacity
                        onPress={()=>navigation.navigate("Perfil2R", { atualizarCrianca: atualizarCrianca })} 
                        style={PerfilStyle.editarBotao}>
                            <Text style={PerfilStyle.txtEditarBotao}>Editar</Text>
                        </TouchableOpacity>
                        </View>}
                        {crianca == "" && 
                        <TouchableOpacity
                        onPress={()=>navigation.navigate("Perfil2R", { atualizarCrianca: atualizarCrianca })}
                        style={PerfilStyle.criarBotao}>
                            <Text style={PerfilStyle.txtCriarBotao}>Criar Perfil da Criança</Text>
                        </TouchableOpacity>
                        }
                        
                    </ScrollView>
                </View>
                </ImageBackground>
        </View>
    );
}

export default Perfil;