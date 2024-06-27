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
import HomeStyle from '../styles/homeStyle';
import DevStyles from '../styles/devStyle';
import jogos from '../Back/App/DadosGame';
import tempo from '../Back/App/Jogos';
import { addDays, endOfWeek, startOfWeek } from 'date-fns';

function Dev() {

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}/${month}`;
    };
    
    const today = formatDate(new Date());
    const startOfTheWeek = startOfWeek(today, { weekStartsOn: 1 });

    const daysOfWeek = [];
    for (let i = 0; i < 7; i++) {
        const day = addDays(startOfTheWeek, i);
        daysOfWeek.push(day);
    }

    const totalTime = jogos.reduce((total, jogo) => total + jogo.tempo, 0);
    const jogosComPorcentagem = jogos.map(jogo => ({
        ...jogo,
        widthPercentage: `${(jogo.tempo / totalTime) * 100}%`
    }));
    
    const totalTempo = tempo.reduce((total, jogo) => total + jogo.tempo, 0);
    const jogosComPorcentagem2 = tempo.map(jogo => ({
        ...jogo,
        widthPercentage: `${(jogo.tempo / totalTempo) * 100}%`,
        nome: `${(jogo.dia)}`
    }));
    
    const jogosComPorcentagem3 = jogos.map(jogo => ({
        ...jogo,
        widthPercentage1: `${(jogo.chamado/ jogo.tempo) * 100}%`,
        widthPercentage2: `${(jogo.tempo / totalTempo) * 100}%`,
        nome: `${(jogo.nome)}`,
        img: `${jogo.imagem}`,
        chamado: `${(jogo.chamado)}`,
        tempo: `${(jogo.tempo)}`
    }));
    const totalHours = Math.floor(totalTime / 3600);
    const totalMinutes = Math.floor((totalTime % 3600) / 60);
    const formattedTime = `${totalHours}h ${totalMinutes.toString().padStart(2, '0')}min`;


    console.log(jogosComPorcentagem+ "\n" + totalTime + "\n" );

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

    const renderBarra = ({ item }) => (
        <View style={DevStyles.barrasHora}>
            <View style={[DevStyles.barrasHora, { width: item.widthPercentage, backgroundColor: item.backgroundColor }]}>
            </View>
        </View>
    );
    
    const renderCard = ({item}) =>(
        <View style={{padding: 0}}>
        <View style={[DevStyles.bloco, {borderColor: "#3490ff", justifyContent: 'center', height: 100, marginVertical: 10, paddingVertical: 10}]}>
            <View style={{flexDirection: 'row', width: '80%', justifyContent: 'space-between', alignItems: 'center'}}>
                <Image source={item.imagem} style={DevStyles.iconGame}/>
                <Text style={{color: "#5f008c", fontSize: 15, textAlign: 'flex-start', width: '80%'}}>{item.nome}</Text>
            </View>
            <View style={{height: '50%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={[DevStyles.barrasHora, { height: '80%', width: '80%'}]}>
                        <View style={[DevStyles.barrasHora, {width: item.widthPercentage2, height: '100%', backgroundColor: '#5f008c'}]}></View>
                    </View>
                    <Text>{(item.tempo / 60).toFixed(0)} min</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={[DevStyles.barrasHora, { height: '80%', width: '80%'}]}>
                        {item.chamado >= item.tempo &&
                            <View style={[DevStyles.barrasHora, {width: "100%", height: '100%', backgroundColor: 'red'}]}></View>
                        }
                        {item.chamado < item.tempo &&
                            <View style={[DevStyles.barrasHora, {width: item.widthPercentage1, height: '100%', backgroundColor: '#3490ff'}]}></View>
                        }
                        </View>
                    <Text>{(item.chamado / 60).toFixed(0)} min</Text>
                </View>
            </View>
        </View>
    </View>
    );

    const renderTempo = ({item}) =>(
        <View>
            <View style={{width: "80%", alignSelf: "center", justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={{fontSize: 17, color: '#5f008c'}}>{item.nome}</Text>
                <Text style={{fontSize: 17, color: '#5f008c'}}>{(item.tempo / 60).toFixed(0)} min</Text>
            </View>
            <View style={[DevStyles.bloco, {borderColor: "#3490ff", justifyContent: 'center', height: 80, marginVertical: 4, marginBottom: 10}]}>
                <View style={[DevStyles.barrasHora, { height: '80%'}]}>
                    <View style={[DevStyles.barrasHora, {width: item.widthPercentage, height: '100%', backgroundColor: '#3290FF'}]}></View>
                </View>
            </View>
        </View>
    );

    return (
        <View style={HomeStyle.container}>
            <View style={{flex:1}}>
            <ImageBackground
            style={{flex:1}}
                source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpg_QeWTCIoGi5pNOSKC4ZzfATsyVrlq1og&s'}
                resizeMode='contain'>
            <View>
                <Text style={{width:'80%', padding: 5, marginVertical: '5%', borderRadius: 10, borderColor: '#ACA6A680', borderRightWidth: 2, borderBottomWidth: 4, backgroundColor: '#FFE978', alignSelf: 'center', fontSize: 17, color: '#9F2600', textAlign: 'center', textAlignVertical: 'center'}}>Tabelas e Gráficos de Desenvolvimento da Criança</Text>
                <FlatList
                    data={[{key: 'header'}]}
                    renderItem={() => (
                        <>
                            <View style={{width: "80%", alignSelf: "center", marginTop: 15, marginBottom: 10}}>
                                <Text style={{color: "#5f008c", fontSize: 20, textAlign: 'center'}}>Tempo nos jogos</Text>
                                <Text style={{color: "#ACA6A6", fontSize: 13, textAlign: 'center'}}>Quais foram os jogos que seu filho mais prestou atenção?</Text>
                            </View>
                            <View style={[DevStyles.bloco, {borderColor: '#5f008c'}]}>
                                <View style={DevStyles.dados}>
                                    <Text style={{color: "#5f008c", fontSize: 18, textAlign: 'center'}}>{formattedTime}</Text>
                                    <Text style={{color: "#5f008c", fontSize: 18, textAlign: 'center'}}>{today}</Text>
                                </View>
                                <View>
                                    <FlatList
                                        data={jogosComPorcentagem}
                                        renderItem={renderBarra}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                </View>
                                <Text style={{textDecorationLine: 'underline', color: "#5f008c", fontSize: 13, marginBottom: '2%'}}>Ver Detalhes</Text>
                                <View>
                                    <FlatList
                                        data={jogos}
                                        renderItem={renderItem}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                </View>
                            </View>
                            <View style={{width: "80%", alignSelf: "center", marginTop: 15, marginBottom: 10}}>
                                <Text style={{color: "#5f008c", fontSize: 20, textAlign: 'center'}}>Tempo geral de atenção ao tablet</Text>
                                <Text style={{color: "#ACA6A6", fontSize: 13, textAlign: 'center'}}>Qual foi o tempo de atenção geral do seu filho?</Text>
                            </View>
                            <FlatList
                                data={jogosComPorcentagem2}
                                renderItem={renderTempo}
                                keyExtractor={(item, index) => index.toString()}
                            />
                            <View style={{width: "80%", alignSelf: "center", marginTop: 15, marginBottom: 10}}>
                                <Text style={{color: "#5f008c", fontSize: 20, textAlign: 'center'}}>Chamadas de atenção</Text>
                                <Text style={{color: "#ACA6A6", fontSize: 13, textAlign: 'center'}}>Quantas vezes seu filho perdeu o foco do jogo?</Text>
                            </View>
                            <View>
                                <View style={[DevStyles.bloco, {borderColor: "#3490ff", justifyContent: 'center', width: '40%', marginVertical: 4, marginBottom: 10, paddingVertical: 10}]}>
                                    <Text style={{color: "#5f008c", fontSize: 20, textAlign: 'center'}}>6 chamadas</Text>
                                </View>
                            </View>
                            <FlatList
                                data={jogosComPorcentagem3}
                                renderItem={renderCard}
                                keyExtractor={(item, index) => index.toString()}
                            />
                            <Text style={{height: 100, width:20}}>Gambiarra</Text>
                        </>
                    )}
                    keyExtractor={item => item.key}
                />
            </View>
        </ImageBackground>
        </View>
    </View>
    );
}

export default Dev;

/**
 * <View style={DevStyles.barrasHora}>
                                    <View style={[DevStyles.barrasHora, {width: '47%', backgroundColor: '#4B1ECD'}]}></View>
                                </View>
                                <View style={DevStyles.barrasHora}>
                                    <View style={[DevStyles.barrasHora, {width: '34%', backgroundColor: '#2C59FB'}]}></View>
                                </View>
                                <View style={DevStyles.barrasHora}>
                                    <View style={[DevStyles.barrasHora, {width: '19%', backgroundColor: '#3290FF'}]}></View>
                                </View>
 */

/**
 * const totalTime = Jogos.reduce((total, jogo) => total + jogo.time, 0);
    const jogosComPorcentagem = jogos.map(jogo => ({
        ...jogo,
        widthPercentage: `${(jogo.time / totalTime) * 100}%`
    }));
 */

                        /**
                            <FlatList
                                data={jogosComPorcentagem}
                                renderItem={renderBarra}
                                keyExtractor={(item, index) => index.toString()}
                            /> */

                            /**<FlatList
                                data={Jogos}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index.toString()}
                            /> */

/**
 * <View>
                <Text style={{width:'80%', padding: 5, marginVertical: '5%', borderRadius: 10, borderColor: '#ACA6A680', borderRightWidth: 2, borderBottomWidth: 4, backgroundColor: '#FFE978', alignSelf: 'center', fontSize: 17, color: '#9F2600', textAlign: 'center', textAlignVertical: 'center'}}>Tabelas e Gráficos de Desenvolvimento da Criança</Text>
                <ScrollView>
                    <View style={{width: "80%", alignSelf: "center", marginTop: 15, marginBottom: 10}}>
                        <Text style={{color: "#5f008c", fontSize: 20, textAlign: 'center'}}>Tempo nos jogos</Text>
                        <Text style={{color: "#ACA6A6", fontSize: 13, textAlign: 'center'}}>Quais foram os jogos que seu filho mais prestou atenção?</Text>
                    </View>
                    <View style={[DevStyles.bloco, {borderColor: '#5f008c'}]}>
                        <View style={DevStyles.dados}>
                            <Text style={{color: "#5f008c", fontSize: 18, textAlign: 'center'}}>Hora</Text>
                            <Text style={{color: "#5f008c", fontSize: 18, textAlign: 'center'}}>Data</Text>
                        </View>
                        <View>
                        </View>
                        <Text style={{textDecorationLine: 'underline', color: "#5f008c", fontSize: 13, marginBottom: '2%'}}>Ver Detalhes</Text>
                        <View>
                            
                        </View>
                    </View>
                    <View>
                        <Text>Tempo nos jogos</Text>
                        <Text>Quais foram os jogos que seu filho mais prestou atenção?</Text>
                    </View>
                </ScrollView>
            </View>
 */

            /**
             * 
    const renderItem = ({ item }) => (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 5}}>
            <View style={DevStyles.barraGameHora}>
                <Image source={item.icon} style={styles.icon} />
                <Text style={{color: "#3290FF"}}>{item.nome}</Text>
            </View>
            <View style={[DevStyles.barraGameHora,{ flexDirection: 'column', alignSelf: 'center'}]}>
                <View style={[DevStyles.barrasMin, {backgroundColor: "#4B1ECD"}]}></View>
                <Text>{item.time} min</Text>
            </View>
        </View>
    );

    const renderBarra = ({ item }) => (
        <View style={styles.barrasHora}>
            <View style={[styles.barra, { width: item.widthPercentage, backgroundColor: item.backgroundColor }]}>
                <Text style={styles.barraText}>{item.nome}</Text>
            </View>
        </View>
    );
             */