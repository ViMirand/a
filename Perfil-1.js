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
import DadosE from '../Back/Login/DadosE';
import { useState } from 'react';

function Perfil1() {

    const navigation = useNavigation();
    const [nome, setNome] = useState(DadosE[0].nome);
    const [telefone, setTelefone] = useState(DadosE[0].telefone);
    const [email, setEmail] = useState(DadosE[0].email);
    const [especialidade, setEspecialidade] = useState(DadosE[0].especialidade);
    const [experiencia, setexperiencia] = useState(DadosE[0].experiencia);
    const [crp, setCRP] = useState(DadosE[0].crp);
    const [clinica, setClinica] = useState(DadosE[0].clinica);

    function mudar(){
        const dadosAtualizados = {
            ...DadosE[0],
            nome: nome,
            telefone: telefone,
            email: email,
            especialidade: especialidade,
            experiencia: experiencia,
            crp: crp,
            clinica: clinica
        };

        // Atualizar os dados no array Dados
        DadosE[0] = dadosAtualizados;

        // Navegar de volta para a tela de Perfil
        navigation.navigate("Perfil2");

        console.log("Dados atualizados:", DadosE);
    }
    pessoa = DadosE[0];

    return (
        <View>
        <View>
            <ImageBackground
                    source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpg_QeWTCIoGi5pNOSKC4ZzfATsyVrlq1og&s'}
                    resizeMode='contain'
                >
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
                    <View style={PerfilStyle.containerInput}>
                        <Text style={PerfilStyle.txtInput}>Tipo de especialidade:</Text>
                        <TextInput style={PerfilStyle.input} onChangeText={setEspecialidade}>{pessoa.especialidade}</TextInput>
                    </View>
                    <View style={PerfilStyle.containerInput}>
                        <Text style={PerfilStyle.txtInput}>Tempo de experiência:</Text>
                        <TextInput style={PerfilStyle.input} onChangeText={setexperiencia}>{pessoa.experiencia}</TextInput>
                    </View>
                    <View style={PerfilStyle.containerInput}>
                        <Text style={PerfilStyle.txtInput}>CRP:</Text>
                        <TextInput style={PerfilStyle.input} onChangeText={setCRP}>{pessoa.crp}</TextInput>
                    </View>
                    <View style={PerfilStyle.containerInput}>
                        <Text style={PerfilStyle.txtInput}>Clínica:</Text>
                        <TextInput style={PerfilStyle.input} onChangeText={setClinica}>{pessoa.clinica}</TextInput>
                    </View>
                <View style={{flexDirection: "row", justifyContent: "space-evenly", alignSelf: "flex-end", width: "60%"}}>
                    <TouchableOpacity
                    onPress={mudar}
                    style={PerfilStyle.salvarBotao}>
                        <Text style={PerfilStyle.txtSalvarBotao}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate("Perfil2")} 
                    style={PerfilStyle.cancelarBotao}>
                        <Text style={PerfilStyle.txtCancelarBotao}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        </View>
    </View>
    );
}

export default Perfil1;