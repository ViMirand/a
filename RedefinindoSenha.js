import {
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Text
} from 'react-native';
import loginStyle from '../styles/loginStyle';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Senha from '../styles/senhaStyle';

function RedefinindoSenha() {
    const [senha, setSenha] = useState('');
    const [confirm, setConfirm] = useState('true');

    

//   const enviar = () => {
//     if(login === 'Oi'){
//       setLoginValid('true');
// }else{
//   navigation.navigate('splash');
//}
//}

    const navigation = useNavigation();
    function Verificacao (){
        if(senha === confirm){
            navigation.navigate('SenhaRedefinida');
        }
    }
    return (
        <View style={{backgroundColor:"#FCAC4E", flex: 3}}>
            <View style={{flexDirection: "column", justifyContent: "center", height: "50%"}}>
                <View style={loginStyle.logo3}>
                    <Image
                        source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpg_QeWTCIoGi5pNOSKC4ZzfATsyVrlq1og&s'}
                        style={{width: "85%", height: "80%"}}
                        resizeMode='contain'
                    />
                </View>
            </View>
            <View style={Senha.boxLogin2}>
                <View style={{alignSelf: "center", width: "90%", justifyContent: "space-evenly", height: "100%"}}>
                    <Text style={Senha.titulo}>Redefinindo sua senha.</Text>
                    <View style={Senha.boxTODOSinputs}>
                        <View style={loginStyle.boxInput}>
                            <Text style={loginStyle.txtInput}>Nova senha:</Text>
                            <TextInput style={loginStyle.input} onChangeText={setSenha}/>
                        </View>
                        <View style={loginStyle.boxInput}>
                            <Text style={loginStyle.txtInput}>Confirmação de nova senha:</Text>
                            <TextInput style={loginStyle.input} onChangeText={setConfirm}/>
                            { senha !== '' && confirm !== '' && senha !== confirm &&
                            <Text style={{fontSize: 14, color: "red", width: "100%", textAlign: "center", fontStyle: "italic", fontWeight: "300"}}>Senhas não coincidem!</Text>
                            }
                        </View>
                    </View>

                    <View style={loginStyle.boxLinks}>
                        <TouchableOpacity 
                        style={Senha.botaoEnviar}
                        onPress={()=>navigation.navigate('Login')}>
                            <Text style={Senha.txtBotao}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={Senha.botaoRedefinir}
                        onPress={Verificacao}>
                            <Text style={Senha.txtBotao}>Redefinir Senha</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default RedefinindoSenha;