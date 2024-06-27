import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function NotificacaoButton2 (){
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Notificacao2')} style={{marginHorizontal: 20}}>
            <Image
                source= 'teste/src/assets/notificacao.png'
            />
        </TouchableOpacity>
    )
}

export default NotificacaoButton2;