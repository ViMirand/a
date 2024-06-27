import { useState } from 'react';
import { Alert, Button, Image, Pressable, TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import cameraStyle from '../styles/cameraStyle';
import { Entypo } from '@expo/vector-icons';

import {launchImageLibrary} from 'react-native-image-picker';

function Camera() {
const [image, setImage] = useState(null);

const pickImage = async () => {
    console.log("mana, deu certo! Ta entrando");
// No permissions request is necessary for launching the image library
let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
});

console.log(result);

if (!result.canceled) {
    setImage(result.assets[0].uri);
}
};

const handleImage = () => {
    Alert.alert(
        "Perfil", 
        "selecione de onde você deseja retirar sua foto de perfil",
        [
            {
                text: "Galeria",
                onPress: () => pickImageFromGalery(),
                style: "default"
            },
            {
                text: "Camera",
                onPress: () => pickImageFromCamera(),
                style: "default"
            }
        ],
        {
            cancelable: true,
            onDismiss:()=> console.log("tratar dps")
        }
    )
}

const pickImageFromCamera = async () => {
    console.log("Era pra entrar na câmera");
        // Solicitando permissão para usar a câmera
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
        console.log(setImage);
}

const pickImageFromGalery = async () => {
    console.log("Devia ter entrado na galeria");
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
}


return (
    <View style={[cameraStyle.container,{borderColor: '#ef8320', backgroundColor: '#fff'}]}>
        {image && <Image source={{ uri: image }} style={cameraStyle.container}/>}
        <TouchableOpacity onPress={handleImage} style={cameraStyle.camera} >
            <Entypo name="camera" size={24} color="#ef8320" />
        </TouchableOpacity>
    </View>
    );
}

export default Camera;
