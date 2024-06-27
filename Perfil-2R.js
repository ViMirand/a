import {
    Text,
    View, 
    TouchableOpacity,
    TextInput
} from 'react-native';
import PerfilStyle from '../styles/PerfilStyle';
import Camera from '../components/camera';

function Perfil2R( {navigation, route }) {
    const { atualizarCrianca } = route.params;

    function cadastrarCrianca() {
        // Lógica para cadastrar a criança...
        
        // Depois de cadastrar, atualize o estado da criança em Perfil
        atualizarCrianca("cadastrada");

        // Navegue de volta para Perfil ou qualquer outra ação necessária
        navigation.navigate("Perfil");
    }

    return (
        <View>
        <View>
            <View style={PerfilStyle.container}>
                    <Text style={PerfilStyle.titulo}>Criança</Text>
                    <View style={{width: 100, height: 100, alignSelf: "center"}}>
                        <Camera/>
                    </View>
                    <View style={PerfilStyle.containerInput}>
                        <Text style={PerfilStyle.txtInput}>Nome:</Text>
                        <TextInput style={PerfilStyle.input}></TextInput>
                    </View>
                    <View style={PerfilStyle.containerInput}>
                        <Text style={PerfilStyle.txtInput}>Apelido(Opcional):</Text>
                        <TextInput style={PerfilStyle.input}></TextInput>
                    </View>
                    <View style={PerfilStyle.containerInput}>
                        <Text style={PerfilStyle.txtInput}>Idade:</Text>
                        <TextInput style={PerfilStyle.inputIdade} keyboardType="numeric" maxLength={2}></TextInput>
                    </View>
                    <View style={PerfilStyle.containerInput}>
                        <Text style={PerfilStyle.txtInput}>Código de conexão:</Text>
                        <TextInput style={PerfilStyle.input} keyboardType="numeric" maxLength={6}></TextInput>
                    </View>
                <View style={{flexDirection: "row", justifyContent: "space-evenly", alignSelf: "flex-end", width: "60%"}}>
                    <TouchableOpacity
                    onPress={cadastrarCrianca}
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
    </View>
    );
}

export default Perfil2R;