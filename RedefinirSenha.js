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
import VerificationCodeInput from '../components/inputConexão';

function RedefinirSenha() {
    const [login, setLogin] = useState('');
    const [loginValid, setLoginValid] = useState('true');

    const enviar = () => {
        if (login === 'Oi') {
            setLoginValid('true');
        } else {
            navigation.navigate('splash');
        }
    }

    const navigation = useNavigation();
    return (
        <View style={{backgroundColor:"#FCAC4E", flex: 3}}>
            <View style={{flexDirection: "column", justifyContent: "center", height: "30%"}}>
            <View style={loginStyle.logo3}>
                <Image
                    source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpg_QeWTCIoGi5pNOSKC4ZzfATsyVrlq1og&s'}
                    style={{width: "85%", height: "80%"}}
                    resizeMode='contain'
                />
            </View>
            </View>
            
            <View style={Senha.boxLogin}>
                <View style={{alignSelf: "center", width: "90%", justifyContent: "space-evenly", height: "100%"}}>
                    <Text style={Senha.titulo}>Hmm, você esqueceu sua senha...</Text>
                    <View style={Senha.boxTODOSinputs}>
                        <View style={loginStyle.boxInput}>
                            <Text style={loginStyle.txtInput}>Email:</Text>
                            <TextInput style={loginStyle.input}
                            keyboardType="email-address"
                            placeholder='exemplo@gmail.com'/>
                        </View>
                        <TouchableOpacity style={Senha.botaoEnviar}>
                            <Text style={Senha.txtBotao}>Enviar Código</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{color: "#EF8320"}}>Código:</Text>
                        <VerificationCodeInput/>
                    </View>
                    <View style={loginStyle.boxLinks}>
                        <TouchableOpacity 
                        style={Senha.botaoEnviar}
                        onPress={()=>navigation.navigate('Login')}>
                            <Text style={Senha.txtBotao}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={Senha.botaoEnviar}
                        onPress={()=>navigation.navigate('RedefinindoSenha')}>
                            <Text style={Senha.txtBotao}>Verificar código</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default RedefinirSenha;

/**
 * <View>
                        <Text style={{color: "#EF8320"}}>Código:</Text>
                        <View style={Senha.blocoCodigo}>
                            <TextInput
                            style={Senha.codInput}
                                keyboardType="numeric"
                                maxLength={1}
                            />
                            <TextInput
                            style={Senha.codInput}
                                keyboardType="numeric"
                                maxLength={1}
                            />
                            <TextInput
                            style={Senha.codInput}
                                keyboardType="numeric"
                                maxLength={1}
                            />
                            <TextInput
                            style={Senha.codInput}
                                keyboardType="numeric"
                                maxLength={1}
                            />
                            <TextInput
                            style={Senha.codInput}
                                keyboardType="numeric"
                                maxLength={1}
                            />
                            <TextInput
                            style={Senha.codInput}
                                keyboardType="numeric"
                                maxLength={1}
                            />
                        </View>
                    </View>
 */