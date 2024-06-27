import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function NotificacaoButton (){
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Notificacao')}>
            <Image
                source={require('../assets/notificacao.png')}
            />
        </TouchableOpacity>
    )
}

export default NotificacaoButton;