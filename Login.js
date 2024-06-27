import {
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Text
} from 'react-native';
import loginStyle from '../styles/loginStyle';
import { useNavigation } from '@react-navigation/native';
import { useState, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';

function Login() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [see, setSee] = useState('eye-off-sharp');
    const [pass, setPass] = useState(true);


// Função para lidar com a submissão do formulário
const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode colocar a lógica para enviar os dados para o backend, por exemplo
    if (username === '2' && password === '2') {
    // Lógica para autenticar o usuário
        console.log('Usuário autenticado!');
        navigation.navigate('Home2');
    }else if(username === '1' && password === '1'){
        console.log('Usuário autenticado!');
        navigation.navigate('Home');
    }else{
    setErrorMessage('Usuário ou senha incorretos');
    console.log('Usuário ou senha incorretos');
    }
};


    const navigation = useNavigation();
    const See = () => {
        setSee(see === 'eye-sharp' ? 'eye-off-sharp' : 'eye-sharp');
        setPass(!pass);
    };
    
    return (
        <View style={{backgroundColor:"#FCAC40", flex: 3}}>
            <View style={loginStyle.logo2}>
                <Image
                    source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpg_QeWTCIoGi5pNOSKC4ZzfATsyVrlq1og&s'}
                    style={{width: "70%", height: "80%"}}
                    resizeMode='contain'
                />
            </View>
            <View style={loginStyle.boxLogin}>
                <View style={{alignSelf: "center", width: "90%", justifyContent: "space-evenly", height: "100%"}}>
                    <Text style={loginStyle.titulo}>Olá!</Text>
                    <View style={loginStyle.boxTODOSinputs}>
                        <View style={loginStyle.boxInput}>
                            <Text style={loginStyle.txtInput}>Email:</Text>
                            <TextInput style={loginStyle.input}                    
                            value={username}
                            keyboardType="email-address"
                            placeholder='exemplo@gmail.com'
                            onChangeText={(text) => setUsername(text)}
                            />
                        </View>
                        <View style={loginStyle.boxInput}>
                            <Text style={loginStyle.txtInput}>Senha:</Text>
                            <View style={[loginStyle.input, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
                                <TextInput style={[loginStyle.input,{ flex: 1, paddingHorizontal:0}]}
                                secureTextEntry = {pass}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                />
                                <Ionicons name={see} size={24} color="orange" onPress={See}/>
                            </View>                  
                        </View>
                    </View>
                    <TouchableOpacity style={loginStyle.botaoEntrar}
                    onPress={handleSubmit}>
                        <Text style={{fontSize: 17, color: "#fff"}} /*onPress={enviar} disabled={false}*/>Entrar</Text>
                    </TouchableOpacity>
                    <View style={loginStyle.boxLinks}>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate('Cadastro')}>
                            <Text style={loginStyle.txtUser}>Novo usuário</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=> navigation.navigate('RedefinirSenha')}>
                            <Text style={loginStyle.txtSenha}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Login;

/*    const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = async () => {
    try {
        const response = await fetch('http://localhost:300/Perfil', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Erro ao fazer login');
        }

        // Se as credenciais estiverem corretas, redirecione para a tela 'Home'
        navigation.navigate('Home');
        console.log('Usuário autenticado!');
    } catch (error) {
        console.error(error);
        setErrorMessage('Usuário ou senha incorretos');
    }
};
*/