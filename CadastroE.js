import {
    TextInput,
    TouchableOpacity,
    View,
    Pressable,
    Text,
    ScrollView
} from 'react-native';
import loginStyle from '../styles/loginStyle';
import { useNavigation } from '@react-navigation/native';
import botoesStyle from '../styles/cadastroStyle';
import Cadastro from '../styles/cad.R.E';
import RadioButton from '../components/RadioButton';
import { useState } from 'react';

function CadastroE() {
    const navigation = useNavigation();

    const [isLoading, setLoading] = useState('false');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [Especialidade, setEspecialidade] = useState('');
    const [CRM, setCRM] = useState('');
    const [Tempo, setTempo] = useState('');
    const [Senha, setSenha] = useState('');
    const [Senha2, setSenha2] = useState('');
    const categoria = "Especialista";

    function HandleBack () {
        navigation.navigate('Login');
        cont();
        dados();
    }
    function cont(){
        A = Math.random()*10;
        B = Math.random()*10;
        if(A>B){
            max=A;
            min=B;
        }else if(A=B){
            A+=B;
            max=A;
            min=B;
        }else{
            max=B;
            min=A;
        }
    }
    function dados(){
        id = Math.random();
        console.log("\nEmail:"+Email, "\nTelefone:"+Telefone , "\nSenha:"+Senha, "\nNome:"+Name, "\nCategoria:"+categoria, "\nLogin:"+id+ "\nCRM: " + CRM + "\nTempo de atuação na área: "+ Tempo + "\nEspecialidade: " + data.id);
        
    }

    const data = [
        { value: 'Psicólogo(a)', id: 1 },
        { value: 'Psiquiatra',  id: 2},
        { value: 'Neuropediatra', id: 3 },
        { value: 'Neurologista', id: 4 },
    ];

/*
    async function novoUser() {
        const realm = await getRealm();
        try {
        setIsLoading(true);
        realm.write(() => {
            const created = realm.create("User", {
            _id: uuid.v4(),
            status: "1",
            nome: Name,
            tel: parseInt(Telefone),
            imagem: null, // Use string para armazenar o caminho da imagem
            email: Email,
            senha: Senha,
            child: null,
            especialidade: null,
            tempo: Tempo,
            crp: CRM,
            clinica: null
            });
            console.log(created + 'olá, certoo');
        });
        realm.close();
        Alert.alert("Usuários", "User cadastrado com sucesso!");
        navigation.goBack();
        } catch (error) {
        Alert.alert("Usuários", "User não cadastrado!");
        console.error(error);
        } finally {
        realm.close();
        setIsLoading(false);
        }
    }
*/

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
                            placeholder='Macarrã0'
                            placeholderTextColor={"#999b9a"}
                            onChangeText={setSenha}/>
                        </View>
                        <View style={Cadastro.boxInput}>
                            <Text style={Cadastro.txtInput}>Confirmação de Senha:</Text>
                            <TextInput style={Cadastro.input}
                            placeholder='Macarrã0'
                            placeholderTextColor={"#999b9a"} 
                            onChangeText={setSenha2}/>
                        </View>
                        <View style={Cadastro.boxInputEsp}>
                            <Text style={Cadastro.txtInput}>Tipo de Especialidade</Text>
                            <RadioButton data={data} setEspecialidade={data.id}/>
                        </View>
                        <View style={Cadastro.boxInput}>
                            <Text style={Cadastro.txtInput}>CRM:</Text>
                            <TextInput style={Cadastro.input}                            
                            placeholder='123456667'
                            maxLength={11}
                            keyboardType='numeric'
                            placeholderTextColor={"#999b9a"}
                            onChangeText={setCRM}/>
                        </View>
                        <View style={Cadastro.boxInput}>
                            <Text style={Cadastro.txtInput}>Tempo de atuação nessa área:</Text>
                            <TextInput style={Cadastro.input}                            
                            placeholder='X meses'
                            placeholderTextColor={"#999b9a"}
                            onChangeText={setTempo}/>
                        </View>
                    </ScrollView>
                </View>
                {Senha == Senha2 &&
                <TouchableOpacity style={Cadastro.botaoConfirm}>
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

export default CadastroE;