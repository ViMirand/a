import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Tab Bottom Bar - Especialista e Responsável
import TabNavigation from "./TabBottomBar1.routes";
import TabNavigation2 from "./TabBottomBar2.routes";

//Telas de Login
import Login from "../Login/Login";
import CadastroR from "../Login/CadastroR";
import CadastroE from "../Login/CadastroE";
import RedefinirSenha from "../Login/RedefinirSenha";
import RedefinindoSenha from "../Login/RedefinindoSenha";
import SenhaRedefinida from "../Login/Senha-ok";

//Outras Telas
import Agenda from "../Pages/Agenda";
import AgendaEsp from "../Pages - Esp/Agenda";
import AgendaEditarE from "../Pages - Esp/AgendaEditar";
import AgendaAdicionar from "../Pages - Esp/AgendaAdicionar";
import AgendaExcluirE from "../Pages - Esp/AgendaExcluir";
import EditAtividadeE from "../Pages - Esp/EditAtividade";
import NovaAtv from "../Pages/NovaAtividade";
import Notificacao from "../Pages/Notificacao";
import Notificacao2 from "../Pages - Esp/Notificacao";
import Perfil1R from "../Pages/Perfil-1R";
import Perfil2R from "../Pages/Perfil-2R";
import PerfilEsp from "../Pages - Esp/Perfil";
import Perfil1 from "../Pages - Esp/Perfil-1";
import AgendaEditar from "../Pages/AgendaEditar";
import EditAtividade from "../Pages/EditAtividade";
import AgendaExcluir from "../Pages/AgendaExcluir";
import Cadastro from "../Login/Cadastro";
import Chat2 from "../Pages/Chat2";
import Chat2Esp from "../Pages - Esp/Chat2";

const Stack = createNativeStackNavigator();

function Routes(){
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={TabNavigation} options={{headerShown: false}}/>
            <Stack.Screen name="Home2" component={TabNavigation2} options={{headerShown: false}}/>
            <Stack.Screen name="Agenda" component={Agenda} 
            options={{ 
                headerStyle: { 
                backgroundColor: '#FCAC4E'
                },
                headerTitle: "Tdah Connect",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                color: "#fff"
                },
                headerTintColor: "#fff",
                headerRight: () => (
                <NotificacaoButton/>
                ),
                contentStyle: { backgroundColor: '#fff' }
            }}/>
            <Stack.Screen name="AgendaE" component={AgendaEsp} 
            options={{ 
                headerStyle: { 
                backgroundColor: '#9A76FF'
                },
                headerTitle: "Tdah Connect",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                color: "#fff"
                },
                headerTintColor: "#fff",
                headerRight: () => (
                <NotificacaoButton/>
                ),
                contentStyle: { backgroundColor: '#fff' }
            }}/>
            <Stack.Screen name="AgendaEditarE" component={AgendaEditarE} 
            options={{ 
                headerStyle: { 
                backgroundColor: '#9A76FF'
                },
                headerTitle: "Tdah Connect",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                color: "#fff"
                },
                headerTintColor: "#fff",
                headerRight: () => (
                <NotificacaoButton/>
                ),
                contentStyle: { backgroundColor: '#fff' }
            }}/>
            <Stack.Screen name="AgendaAdicionarE" component={AgendaAdicionar} 
            options={{ 
                headerStyle: { 
                backgroundColor: '#9A76FF'
                },
                headerTitle: "Tdah Connect",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                color: "#fff"
                },
                headerTintColor: "#fff",
                headerRight: () => (
                <NotificacaoButton/>
                ),
                contentStyle: { backgroundColor: '#fff' }
            }}/>
            <Stack.Screen name="AgendaExcluirE" component={AgendaExcluirE} 
            options={{ 
                headerStyle: { 
                backgroundColor: '#9A76FF'
                },
                headerTitle: "Tdah Connect",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                color: "#fff"
                },
                headerTintColor: "#fff",
                headerRight: () => (
                <NotificacaoButton/>
                ),
                contentStyle: { backgroundColor: '#fff' }
            }}/>
            <Stack.Screen name="EditAtividadeE" component={EditAtividadeE} 
            options={{ 
                headerStyle: { 
                backgroundColor: '#9A76FF'
                },
                headerTitle: "Tdah Connect",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                color: "#fff"
                },
                headerTintColor: "#fff",
                headerRight: () => (
                <NotificacaoButton/>
                ),
                contentStyle: { backgroundColor: '#fff' }
            }}/>
            <Stack.Screen name="NovaAtv" component={NovaAtv} 
            options={{ 
                headerStyle: { 
                backgroundColor: '#FCAC4E'
                },
                headerTitle: "Tdah Connect",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                color: "#fff"
                },
                headerTintColor: "#fff",
                headerRight: () => (
                <NotificacaoButton/>
                ),
                contentStyle: { backgroundColor: '#fff' }
            }}/>
            <Stack.Screen name="Notificacao" component={Notificacao} 
                options={{ 
                headerStyle: { 
                    backgroundColor: '#FCAC4E',
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderColor: "#00003932",
                    borderWidth: 1.5
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: "#fff"
                },
                headerTintColor: "#fff",
                contentStyle: { backgroundColor: '#fff' }
                }} 
            />
            <Stack.Screen name="Notificacao2" component={Notificacao2} 
                options={{ 
                headerStyle: { 
                    backgroundColor: '#9A76FF',
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderColor: "#00003932",
                    borderWidth: 1.5
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: "#fff"
                },
                headerTintColor: "#fff",
                contentStyle: { backgroundColor: '#fff' }
                }} 
            />
            <Stack.Screen name="Perfil1R" component={Perfil1R} 
                options={{ 
                headerStyle: { backgroundColor: '#FCAC4E'},
                headerTitle: "Perfil",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: "#fff"
                },
                headerTintColor: "#fff",
                headerRight: () => (
                    <NotificacaoButton/>
                ),
                contentStyle: { backgroundColor: '#fff' }
                }}  
            />
            <Stack.Screen name="Perfil2R" component={Perfil2R} 
                options={{ 
                headerStyle: { backgroundColor: '#FCAC4E'},
                headerTitle: "Perfil",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: "#fff"
                },
                headerTintColor: "#fff",
                headerRight: () => (
                    <NotificacaoButton/>
                ),
                contentStyle: { backgroundColor: '#fff' }
                }}
            />
            <Stack.Screen name="PerfilEsp" component={PerfilEsp} 
                options={{ 
                headerStyle: { backgroundColor: '#9A76FF'},
                headerTitle: "Perfil",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: "#fff"
                },
                headerTintColor: "#fff",
                headerRight: () => (
                    <NotificacaoButton/>
                ),
                contentStyle: { backgroundColor: '#fff' }
                }}  
            />
            <Stack.Screen name="Perfil1" component={Perfil1} 
                options={{ 
                headerStyle: { backgroundColor: '#9A76FF'},
                headerTitle: "Perfil",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: "#fff"
                },
                headerTintColor: "#fff",
                headerRight: () => (
                    <NotificacaoButton/>
                ),
                contentStyle: { backgroundColor: '#fff' }
                }}  
            />
            <Stack.Screen name="AgendaEditar" component={AgendaEditar} 
                options={{ 
                headerStyle: { backgroundColor: '#FCAC4E'},
                headerTitle: "Tdah Connect",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: "#fff"
                },
                headerTintColor: "#fff",
                headerRight: () => (
                    <NotificacaoButton/>
                ),
                contentStyle: { backgroundColor: '#fff' }
                }}  
            />
            
            <Stack.Screen name="EditAtividade" component={EditAtividade} 
                options={{ 
                headerStyle: { backgroundColor: '#FCAC4E'},
                headerTitle: "Tdah Connect",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: "#fff"
                },
                headerTintColor: "#fff",
                headerRight: () => (
                    <NotificacaoButton/>
                ),
                contentStyle: { backgroundColor: '#fff' }
                }}  
            />
            
            <Stack.Screen name="AgendaExcluir" component={AgendaExcluir} 
                options={{ 
                headerStyle: { backgroundColor: '#FCAC4E'},
                headerTitle: "Tdah Connect",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: "#fff"
                },
                headerTintColor: "#fff",
                headerRight: () => (
                    <NotificacaoButton/>
                ),
                contentStyle: { backgroundColor: '#fff' }
                }}  
            />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{
                headerShown: false,
                contentStyle: { backgroundColor: '#fff' }
            }} />
            <Stack.Screen name="CadastroR" component={CadastroR} options={{headerShown: false}} />
            <Stack.Screen name="CadastroE" component={CadastroE} options={{headerShown: false}} />
            <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} options={{headerShown: false}} />
            <Stack.Screen name="RedefinindoSenha" component={RedefinindoSenha} options={{headerShown: false}} />
            <Stack.Screen name="SenhaRedefinida" component={SenhaRedefinida} options={{headerShown: false}} />
            <Stack.Screen name="Chat2" component={Chat2} options={{headerShown: false}}/>
            <Stack.Screen name="Chat2Esp" component={Chat2Esp} options={{headerShown: false}}/>
        </Stack.Navigator>
}

export default Routes;