import {
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Text
} from 'react-native';
import loginStyle from '../styles/loginStyle';
import { useNavigation } from '@react-navigation/native';
import botoesStyle from '../styles/cadastroStyle';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function Cadastro() {
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor:"#FCAC4E", flex: 3}}>
            <View style={loginStyle.logo2}>
                <Image
                    source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpg_QeWTCIoGi5pNOSKC4ZzfATsyVrlq1og&s'}
                    style={{width: "85%", height: "80%"}}
                    resizeMode='contain'
                />
            </View>
            <View style={botoesStyle.boxGeral}>
                <Text style={botoesStyle.titulo}>Seja bem vindo(a)!</Text>
                <Text style={botoesStyle.subtitulo}>Você é:</Text>
                <View style={botoesStyle.boxBotao}>
                    <TouchableOpacity style={botoesStyle.Botoes} 
                    onPress={()=>navigation.navigate('CadastroR')}>
                        <MaterialIcons name="family-restroom" size={80} style={{width: "50%", textAlign: "center"
                        }} color="#fff" />
                        <Text style={botoesStyle.txtId}>Responsável legal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={botoesStyle.Botoes}
                    onPress={()=>navigation.navigate('CadastroE')}>
                        <Ionicons name="bag-add" size={80} color="#fff" />
                        <Text style={botoesStyle.txtId}>Especialista na área</Text>
                    </TouchableOpacity>
                </View>
                <View style={botoesStyle.boxLink}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={botoesStyle.txtVoltar}>Já possuo conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Cadastro;