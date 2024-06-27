import {
    View,
    BackHandler, 
    ImageBackground, 
    ScrollView, 
    TouchableOpacity,
    Text, 
    Image
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import HomeStyle from '../styles/homeStyle';
import { useNavigation } from '@react-navigation/native';
import Dicas from '../components/Dicas';
import AgendaE from '../components/AgendaE';
import { FlatList } from 'react-native-gesture-handler';
function HomeEsp() {
    const navigation = useNavigation();
    useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress',()=>{
            return true
        })
    },[])
    
    const handlePress = () => {
        navigation.navigate('AgendaE')
    };

    return (
    <View style={HomeStyle.container}>
        <View style={{flex:1}}>
            <ImageBackground
                style={{flex:1}}
                source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpg_QeWTCIoGi5pNOSKC4ZzfATsyVrlq1og&s'}
                resizeMode='contain'
            >
                <View>
                    <Text style={{alignSelf: "center", marginVertical: 10, fontSize: 20, color:"#9A76FF"}}>Bem-vindo!</Text>
                    <Dicas/>
                </View>
                <FlatList
                    data={tasks}
                    renderItem={({item})=> <Text>{`${item.title} -  ${item.description}`}</Text>}
                />
                <TouchableOpacity style={{width: 100, height: 50, alignSelf: 'center', backgroundColor: 'green', borderRadius: 20}}>
                    <Text>{'NewTask'}</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
        <AgendaE onPress={handlePress}/>
    </View>
    );
}

export default HomeEsp;

/*<Deletar/>
<Editar
corBackground="#C8E5FF"
/>*/