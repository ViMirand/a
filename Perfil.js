import { View, Text, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import HomeStyle from '../styles/homeStyle';
import NotificacaoButton from '../components/NotificacaoButton';
import { useNavigation } from '@react-navigation/native';
import DadosE from '../Back/Login/DadosE';
import PerfilStyle from '../styles/PerfilStyle';
import Camera from '../components/camera';
import cameraStyle from '../styles/cameraStyle';
import CameraE from '../components/cameraE';
import NotificacaoButton2 from '../components/NotificacaoButton2';

function PerfilEsp() {
    const navigation = useNavigation();
    pessoa = DadosE[0];

    return (
        <View>
            <View style={{height: "90%"}}>
                <ImageBackground
                    source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpg_QeWTCIoGi5pNOSKC4ZzfATsyVrlq1og&s'}
                    resizeMode='contain'
                >
                <View style={PerfilStyle.container}>
                        <Text style={PerfilStyle.titulo}>Especialista</Text>
                    <ScrollView style={{height: '95%'}}>
                            <View style={cameraStyle.Geral}>
                                <CameraE/>
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
                            <View style={PerfilStyle.containerInput}>
                                <Text style={PerfilStyle.txtInput}>Tipo de especialidade:</Text>
                                <TextInput style={PerfilStyle.input} readOnly={true} value={pessoa.especialidade}/>
                            </View>
                            <View style={PerfilStyle.containerInput}>
                                <Text style={PerfilStyle.txtInput}>Tempo de experiência:</Text>
                                <TextInput style={PerfilStyle.input} readOnly={true} value={pessoa.experiencia}/>
                            </View>
                            <View style={PerfilStyle.containerInput}>
                                <Text style={PerfilStyle.txtInput}>CRP:</Text>
                                <TextInput style={PerfilStyle.input} readOnly={true} value={pessoa.crp}/>
                            </View>
                            <View style={PerfilStyle.containerInput}>
                                <Text style={PerfilStyle.txtInput}>Clínica:</Text>
                                <TextInput style={PerfilStyle.input} readOnly={true} value={pessoa.clinica}/>
                            </View>
                        <TouchableOpacity
                        onPress={()=>navigation.navigate("Perfil1")} 
                        style={PerfilStyle.editarBotao}>
                            <Text style={PerfilStyle.txtEditarBotao}>Editar</Text>
                        </TouchableOpacity>                        
                    </ScrollView>
                </View>
                </ImageBackground>
            </View>
</View>
);
}

export default PerfilEsp;