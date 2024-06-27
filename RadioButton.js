import { View, Text, Pressable  } from 'react-native';
import React from 'react';
import Cadastro from '../styles/cad.R.E';
import { useState } from 'react';

export default function RadioButton({data}) {

    const [userOption, setUserOption] = useState(null);

    return (
        <View style={Cadastro.Especialidade}>
            {data.map((item, index)=>{
                return (
                    <Pressable
                    key={index}
                    style={item.value === userOption ? Cadastro.selected : Cadastro.unselected} 
                    onPress={() => setUserOption(item.value)}>
                    <Text style={Cadastro.txtEspecialidade}>{item.value}</Text>
                    </Pressable>
                );
            })}
        </View>
    );
}