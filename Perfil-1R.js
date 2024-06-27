import {
    ImageBackground,
    Text,
    View, 
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

import PerfilStyle from '../styles/PerfilStyle';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Dados from '../Back/Login/Dados';

function Perfil1R() {

    const navigation = useNavigation();
    const [nome, setNome] = useState(Dados[0].nome);
    const [telefone, setTelefone] = useState(Dados[0].telefone);
    const [email, setEmail] = useState(Dados[0].email);

    function mudar(){
        const dadosAtualizados = {
            ...Dados[0],
            nome: nome,
            telefone: telefone,
            email: email
        };

        // Atualizar os dados no array Dados
        Dados[0] = dadosAtualizados;

        // Navegar de volta para a tela de Perfil
        navigation.navigate("Perfil");

        console.log("Dados atualizados:", Dados);
    }
    pessoa = Dados[0];

    return (
        <View style={{flex:1}}>
            <ImageBackground
            style={{flex:1}}
                source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpg_QeWTCIoGi5pNOSKC4ZzfATsyVrlq1og&s'}
                resizeMode='contain'>
        <View>
            <View style={PerfilStyle.container}>
                
                <Text style={PerfilStyle.titulo}>Responsável</Text>
                    <View style={PerfilStyle.containerInput}>
                        <Text style={PerfilStyle.txtInput}>Nome:</Text>
                        <TextInput style={PerfilStyle.input} readOnly={false} onChangeText={setNome}>{pessoa.nome}</TextInput>
                    </View>
                    <View style={PerfilStyle.containerInput}>
                        <Text style={PerfilStyle.txtInput}>Telefone:</Text>
                        <TextInput style={PerfilStyle.input} onChangeText={setTelefone}>{pessoa.telefone}</TextInput>
                    </View>
                    <View style={PerfilStyle.containerInput}>
                        <Text style={PerfilStyle.txtInput}>Email:</Text>
                        <TextInput style={PerfilStyle.input} onChangeText={setEmail}>{pessoa.email}</TextInput>
                    </View>
                <View style={{flexDirection: "row", justifyContent: "space-evenly", alignSelf: "flex-end", width: "60%"}}>
                    <TouchableOpacity
                    onPress={mudar}
                    style={PerfilStyle.salvarBotao}>
                        <Text style={PerfilStyle.txtSalvarBotao}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate("Perfil")} 
                    style={PerfilStyle.cancelarBotao}>
                        <Text style={PerfilStyle.txtCancelarBotao}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ImageBackground>
    </View>
    );
}

export default Perfil1R;