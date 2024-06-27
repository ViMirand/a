// components/Chat2Esp.js
import React, { useState, useEffect } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
 
export default function Chat2Esp({ route }) {
    const navigation = useNavigation();
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState('');

    const { contact } = route.params;

    const renderItem = ({ item }) => (
        <View style={[styles.messageContainer, item.sender === 'me' ? styles.myMessage : styles.theirMessage]}>
            <Text style={styles.messageText}>{item.lastMsg}</Text>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', flex: 1 }}>
                <View style={{ width: '100%', height: '13%' }}>
                    <Image
                        source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpg_QeWTCIoGi5pNOSKC4ZzfATsyVrlq1og&s'}
                        style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30, width: '100%', height: '100%', position: 'absolute' }}
                    />
                    <View style={{ width: '100%', height: '80%', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', bottom: 0, position: 'absolute' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('ChatEsp')} style={{ marginHorizontal: 10 }}>
                            <AntDesign name="arrowleft" size={24} color="#5F008C" />
                        </TouchableOpacity>
                        <Image
                            source={contact.imagem}
                            style={{ borderRadius: 40, width: 50, height: 50, marginHorizontal: 20 }}
                        />
                        <Text style={{ color: "#fff", fontSize: 20 }}>{contact.nome}</Text>
                    </View>
                </View>
                <View style={{ width: '100%', height: '77%'}}>
                    <FlatList
                        data={messages}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        inverted={true}
                        contentContainerStyle={{ padding: 10 }}
                    />
                </View>
                
                <View style={styles.inputContainer}>
                    <TouchableOpacity>
                        <Feather name="pie-chart" size={30} color="#fff" />
                    </TouchableOpacity>
                    <TextInput
                        value={messageText}
                        onChangeText={setMessageText}
                        style={styles.textInput}
                        placeholder='Escreva uma mensagem...'
                    />
                    <TouchableOpacity>
                        <FontAwesome name="send-o" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    messageContainer: {
        padding: 10,
        marginVertical: 5
    },
    myMessage: {
        backgroundColor: '#DCF8C6',
        alignSelf: 'flex-end',
        backgroundColor: 'pink',
        borderTopStartRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    theirMessage: {
        backgroundColor: 'pink',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        alignSelf: 'flex-start'
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        backgroundColor: '#9A76FF',
        position: 'absolute',
        bottom: 0,
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    textInput: {
        flex: 1,
        height: 35,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
});
