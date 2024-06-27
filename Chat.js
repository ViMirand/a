import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import ContatoStyle from '../styles/ContatosStyle';
import datas from '../Back/Contatos/Data';
import { useNavigation } from '@react-navigation/native';

export default function Chat() {

  const navigation = useNavigation();

  const handleChatPress = (contact) => {
    navigation.navigate('Chat2', { contact });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={ContatoStyle.container} onPress={() => handleChatPress(item)}>
        <View style={ContatoStyle.titulo}>
            <Image
            source={item.imagem}
            style={{height: 60, width: 60, borderRadius: 60, marginRight: 5}}
            />
            <View style={{width: "80%", height: "80%", justifyContent: "space-between"}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={ContatoStyle.nome}>{item.nome}</Text>
                { item.status === 1 && 
                    <View style={{height: 15, width: 15, borderRadius: 20, backgroundColor: "orange"}}></View>
                }
                {item.status === 0 && 
                    <View style={{height: 15, width: 15, borderRadius: 20, backgroundColor: "gray"}}></View>
                }
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={ContatoStyle.lastMsg}>{item.lastMsg}</Text>
                <Text style={ContatoStyle.lastMsg}>{item.hr}</Text>
            </View>
            </View>
        </View>
    </TouchableOpacity>
    );

  return (
    <View style={{backgroundColor: "#fff"}}>
        <View style={{height: "100%", backgroundColor: "#F7FFE6"}}>
            <FlatList
              data={datas} // Dados a serem renderizados
              renderItem={renderItem} // Função para renderizar cada item
              keyExtractor={item => item.id}
            />
        </View>
    </View>
  );
}
/**
 * 
 */