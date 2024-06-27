import {
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Text,
    ScrollView,
    Alert,
    Pressable
} from 'react-native';
import loginStyle from '../styles/loginStyle';
import { useNavigation } from '@react-navigation/native';
import botoesStyle from '../styles/cadastroStyle';
import Cadastro from '../styles/cad.R.E';
import { useState } from 'react';
import Dados from '../Back/Login/Dados';

function CadastroR() {

    const navigation = useNavigation();

    const [isLoading, setLoading] = useState('false');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [Senha, setSenha] = useState('');
    const [Senha2, setSenha2] = useState('');
    const categoria = 1;

    function HandleBack () {
        navigation.navigate('Login');
        dados();
    }
    
    function dados(){
        console.log("Email:"+Email, "Telefone:"+Telefone , "Senha:"+Senha, "Nome:"+Name, "Categoria:"+categoria, "Login:"+id);
        
    }

    return (
        <View style={{backgroundColor:"#FCAC4E", flex: 3}}>
            <Text style={{
                color:"#fff",
                fontSize: 35,
                alignSelf: "center",
                marginVertical: "15%"
            }}>
                Adicione seu dados:
            </Text>
            <View style={Cadastro.boxGeral}>
                <View style={Cadastro.boxTODOSinputs}>
                    <ScrollView>
                        <View style={Cadastro.boxInput}>
                            <Text style={Cadastro.txtInput}>Nome:</Text>
                            <TextInput style={Cadastro.input}                             
                            placeholder='Seu nome'
                            placeholderTextColor={"#999b9a"}
                            onChangeText={setName}/>
                        </View>
                        <View style={Cadastro.boxInput}>
                            <Text style={Cadastro.txtInput}>Email:</Text>
                            <TextInput style={Cadastro.input} 
                            keyboardType="email-address"
                            placeholder='exemplo@gmail.com'
                            placeholderTextColor={"#999b9a"}
                            onChangeText={setEmail}/>
                        </View>
                        <View style={Cadastro.boxInput}>
                            <Text style={Cadastro.txtInput}>Telefone:</Text>
                            <TextInput style={Cadastro.input} 
                            keyboardType="numeric"
                            placeholder='ex: 92999999999'
                            placeholderTextColor={"#999b9a"}
                            maxLength={11}
                            onChangeText={setTelefone}/>
                        </View>
                        <View style={Cadastro.boxInput}>
                            <Text style={Cadastro.txtInput}>Senha:</Text>
                            <TextInput style={Cadastro.input}
                            placeholderTextColor={"#999b9a"}
                            onChangeText={setSenha}/>
                        </View>
                        <View style={Cadastro.boxInput}>
                            <Text style={Cadastro.txtInput}>Confirmação de Senha:</Text>
                            <TextInput style={Cadastro.input}
                            placeholderTextColor={"#999b9a"} 
                            onChangeText={setSenha2}/>
                        </View>
                    </ScrollView>
                </View>
                {Senha == Senha2 &&
                <TouchableOpacity style={Cadastro.botaoConfirm}
                onPress={HandleBack}>
                    <Text style={Cadastro.txtConfirm}>Enviar email de Confirmação</Text>
                </TouchableOpacity> 
                }
                {Senha != Senha2 &&
                <Pressable style={Cadastro.botaoDontConfirm}>
                    <Text style={Cadastro.txtDontConfirm}>AS SENHAS NÃO COINCIDEM!!</Text>
                </Pressable> 
                }
                
                <View style={botoesStyle.boxLink}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={botoesStyle.txtVoltar}>Já possuo conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default CadastroR;