/*import React from 'react';
import { View, Button, Alert, TouchableOpacity } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

const sendEmail = async () => {
    const isAvailable = MailComposer.MailComposerStatus;
    if (isAvailable) {
        MailComposer.composeAsync({
        recipients: ['mvictoriayasmim@gmail.com'],
        subject: 'Teste',
        body: 'Corpo do email...',
        })
        .then(result => {
        if (result.status === MailComposer.MailComposerStatus.SENT) {
            Alert.alert('Email enviado com sucesso!');
        } else {
            Alert.alert('O envio do email foi cancelado.');
        }
        })
        .catch(error => {
        Alert.alert('Erro ao enviar email:', error.message);
        });
    } else {
        Alert.alert('Serviço de email não está disponível.');
    }
};

export default function SendEmail() {
    return(
        <TouchableOpacity onPress={sendEmail}>
            <Text>
                Botão do email
            </Text>
        </TouchableOpacity>
    )
}
*/