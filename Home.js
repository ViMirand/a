import {
    View,
    BackHandler, 
    ImageBackground, 
    ScrollView, 
    TouchableOpacity,
    Text, 
    Image,
    FlatList
} from 'react-native';
import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import HomeStyle from '../styles/homeStyle';
import Dicas from '../components/Dicas';
import Agenda from '../components/Agenda';
import DevStyles from '../styles/devStyle';
import jogos from '../Back/App/DadosGame';

function Home() {

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}/${month}`;
    };
    
    const today = formatDate(new Date());

    const navigation = useNavigation();
    useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress',()=>{
            return true
        })
    },[])
    const handlePress = () => {
        navigation.navigate('Agenda')
    };

    const renderItem = ({ item }) => (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 5}}>
            <View style={DevStyles.barraGameHora}>
                <Image source={item.imagem} style={DevStyles.iconGame}/>
                <Text style={{color: "#3290FF"}}>{item.nome}</Text>
            </View>
            <View style={[DevStyles.barraGameHora,{ flexDirection: 'column', alignSelf: 'center'}]}>
                <View style={[DevStyles.barrasMin, {backgroundColor: item.backgroundColor}]}></View>
                <Text>{(item.tempo / 60).toFixed(0)} min</Text>
            </View>
        </View>
    );

    const totalTime = jogos.reduce((total, jogo) => total + jogo.tempo, 0);

// Adicionar a porcentagem calculada a cada jogo
    const jogosComPorcentagem = jogos.map(jogo => ({
        ...jogo,
        widthPercentage: (jogo.tempo / totalTime) * 100 // Calcula a porcentagem como um número
    }));

    const totalHours = Math.floor(totalTime / 3600);
    const totalMinutes = Math.floor((totalTime % 3600) / 60);
    const formattedTime = `${totalHours}h ${totalMinutes.toString().padStart(2, '0')}min`;


    console.log(jogosComPorcentagem+ "\n" + totalTime + "\n" );

    return (
    <View style={HomeStyle.container}>
        <View style={{flex:1}}>
            <ImageBackground
                style={{flex:1}}
                source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpg_QeWTCIoGi5pNOSKC4ZzfATsyVrlq1og&s'}
                resizeMode='contain'>
                <View>
                    <Text style={{alignSelf: "center", marginVertical: 10, fontSize: 20, color:"#7C5DED"}}>Bem-vindo!</Text>
                    <Dicas/>
                </View>
                <View style={{width: "80%", alignSelf: "center", marginTop: 15, marginBottom: 10}}>
                    <Text style={{color: "#5f008c", fontSize: 20}}>Tempo de tela</Text>
                    <Text style={{color: "#ACA6A6", fontSize: 13}}>Vamos analisar o tempo de tela diário da criança?</Text>
                </View>
                <View style={[DevStyles.bloco, {borderColor: '#5f008c'}]}>
                        <View style={DevStyles.dados}>
                            <Text style={{color: "#5f008c", fontSize: 20, textAlign: 'center'}}>{formattedTime}</Text>
                            <Text style={{color: "#5f008c", fontSize: 18, textAlign: 'center'}}>{today}</Text>
                        </View>
                        <View>
                            <View style={[DevStyles.barrasHora, {height:  50, marginBottom: 10, flexDirection: 'row'}]}>
                            {jogosComPorcentagem.map((jogo, index) => (
                                <View
                                    key={index}
                                    style={{
                                        backgroundColor: jogo.backgroundColor,
                                        height: '100%',
                                        width: `${jogo.widthPercentage}%`, // Define a largura como uma string com %
                                        borderTopLeftRadius: index === 0 ? 10 : 0,
                                        borderBottomLeftRadius: index === 0 ? 10 : 0,
                                        borderTopRightRadius: index === jogosComPorcentagem.length - 1 ? 10 : 0,
                                        borderBottomRightRadius: index === jogosComPorcentagem.length - 1 ? 10 : 0,
                                    }}
                                />
                            ))}
                            </View>
                            </View>
                            <TouchableOpacity onPress={()=>navigation.navigate('Dev')}>
                                <Text style={{textDecorationLine: 'underline', color: "#5f008c", fontSize: 13, marginBottom: '2%'}}>Ver Detalhes</Text>
                            </TouchableOpacity>
                            <View>
                            <FlatList
                                    data={jogos}
                                    renderItem={renderItem}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </View>
            </ImageBackground>
        </View>
        <Agenda onPress={handlePress}/>
    </View>
    );
}

export default Home;