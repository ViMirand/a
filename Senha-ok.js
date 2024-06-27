import {
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Text
} from 'react-native';
import loginStyle from '../styles/loginStyle';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

function SenhaRedefinida() {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 1500);

    const navigation = useNavigation();
    return (
        <View
        style={{backgroundColor:"#FCAC4E", flex:1, flexDirection: "column", justifyContent: "center"}}>
            <View style={{flexDirection: "column", justifyContent: "center", height: "50%"}}>
                <View style={loginStyle.logo3}>
                    <Image
                        source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpg_QeWTCIoGi5pNOSKC4ZzfATsyVrlq1og&s'}
                        style={{width: "85%", height: "80%"}}
                        resizeMode='contain'
                    />
                </View>
            </View>
            <Text style={{color: "#fff", alignSelf: "center", fontSize: 20}}>Senha redefinida com sucesso!</Text>
        </View>
    );
}

export default SenhaRedefinida;