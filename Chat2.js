import { Image, ImageBackground, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

function Chat2({route}) {

    const navigation = useNavigation();

    const { contact } = route.params;
    return (
        <View style={{flex:1}}>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                <View style={{width: '100%', height: '13%'}}>
                    <Image
                    source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpg_QeWTCIoGi5pNOSKC4ZzfATsyVrlq1og&s'}
                    style={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30, width: '100%', height: '100%', position: 'absolute'}}>
                    </Image>
                    <View style={{ width: '100%', height: '80%', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', bottom: 0, position: 'absolute'}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Chat')} style={{marginHorizontal: 10}}>
                            <AntDesign name="arrowleft" size={24} color="purple"/>
                        </TouchableOpacity>
                        <Image
                            source={contact.imagem}
                            style={{borderRadius: 40, width: 50, height: 50, marginHorizontal: 20}}
                        />
                        <Text style={{color: "#fff", fontSize: 20}}>{contact.nome}</Text>
                    </View>
                </View>
            <Text>Conversando com {contact.nome}</Text>
            {/* Exibir as mensagens da conversa aqui */}
            <View style={{backgroundColor: '#FCAC4E', position: 'absolute', bottom: 0, height: '10%', width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <TouchableOpacity>
                    <Feather name="pie-chart" size={30} color="#fff" />
                </TouchableOpacity>
                <TextInput style={{width: '70%', height: 35, backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 10}} placeholder='Escreva uma mensagem...'/>
                <TouchableOpacity>
                    <FontAwesome name="send-o" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}

export default Chat2;