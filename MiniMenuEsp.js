import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const MiniMenu = ({ options, closeMenu }) => {
    return (
        <View style={{ position: "absolute", top: -5, width: 95, borderRadius: 5, backgroundColor: '#E3D9FF', padding: 5}}>
            <TouchableOpacity 
            onPress={closeMenu}
            style={{height: 22, alignItems: "flex-end", alignContent: "center", backgroundColor: '#E3D9FF', paddingHorizontal: 5}}> 
                <Icon name="chevron-up" size={15} color="#5F008C" />
            </TouchableOpacity>
        {options.map((option, index) => (
            <TouchableOpacity key={index} onPress={option.onPress} style={{height: 23, alignItems: "center", alignContent: "center", borderColor: "#5F008C", borderTopWidth: 1, borderStyle: "solid", backgroundColor: '#E3D9FF', flexDirection: "row", justifyContent: "space-between", padding:2}}>
                {option.title=== "Editar" &&
                    <MaterialIcons name="edit" size={15} color="#5F008C" />
                }
                {option.title=== "Excluir" &&
                    <Feather name="trash" size={15} color="#5F008C" />
                }
                {option.title=== "Adicionar" &&
                    <AntDesign name='plus' size={15} color="#5F008C" />
                }
                <Text style={{width: "75%", color: "#5f008c"}}>{option.title}</Text>
            </TouchableOpacity>
        ))}
        </View>
    );
    }

const OptionsButtonEsp = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    
    const closeMenu = () => {
        setShowMenu(false);
    }

    const navigation = useNavigation();

    const handleOptionPress = (option) => {
        // Aqui você pode implementar a lógica para lidar com a seleção da opção
        console.log(`${option.title} selecionado - especialista`);
        if(option.title == 'Adicionar'){
            navigation.navigate('AgendaAdicionarE')
        }
        if(option.title == 'Editar'){
            navigation.navigate('AgendaEditarE')
        }
        if(option.title == 'Excluir'){
            navigation.navigate('AgendaExcluirE')
        }
        setShowMenu(false);
    }

    const options = [
        { title: 'Adicionar', onPress: () => handleOptionPress({ title: 'Adicionar' }) },
        { title: 'Editar', onPress: () => handleOptionPress({ title: 'Editar' }) },
        { title: 'Excluir', onPress: () => handleOptionPress({ title: 'Excluir' }) }
    ];

    return (
        <View style={{ width: 80, alignItems: "flex-end", borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
        <TouchableOpacity onPress={toggleMenu}>
            <Icon name="chevron-down" size={15} color="#5F008C" />
        </TouchableOpacity>

        {showMenu && <MiniMenu options={options} closeMenu={closeMenu}/>}
        </View>
    );
}

export default OptionsButtonEsp;