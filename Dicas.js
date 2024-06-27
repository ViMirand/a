import { 
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    Dimensions
} from 'react-native';
import dicasStyle from '../styles/dicasStyle';
import { Linking } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import Datas from '../Back/App/Dados';
import { useState } from 'react';


const { width } = Dimensions.get('window');
const iconSize = width * 0.35;


export default function Dicas(props) {
    
    const colors = ["#9A76FF", "#47C1F3", "#FCAC4E", "#FFED93"];
    const txts = ["#5F008C", "#1D4582", "#9A4A00", "#9A4A00"];
    const icons = ["#7C5DED","#349EFF", "#EF8320", "#FCD317"];
    const links = ["#fff","#fff", "#fff", "#EF9543"];

    return (
    <View style={dicasStyle.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Datas.map((data, index) => (
                <View key={index} style={dicasStyle.bloco}>
                    <View style={[dicasStyle.blocoUnique, { backgroundColor: colors[index % colors.length] }]}>
                        <View style={{position: 'absolute', width: "100%", height: '100%', alignSelf: 'center'}}>
                            <FontAwesome6 
                            name="pills" 
                            size={iconSize} 
                            color={icons[index % icons.length]}
                            style={{ transform: [{ rotate: '15deg' }], marginTop: '10%' }}
                        />
                        </View>
                        <View style={dicasStyle.textoBlocos}>
                            <Text style={[dicasStyle.txtBloco, {color: links[index% links.length]}]}>{data.texto}</Text>
                            <TouchableOpacity style={dicasStyle.links}>
                                <Text style={[dicasStyle.linkBloco,{color: txts[index% txts.length]}]}
                                    onPress={() => {Linking.openURL(data.link);
                                }}
                                >Veja mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    </View>
    );
}