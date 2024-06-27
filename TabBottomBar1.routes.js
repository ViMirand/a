// Ícones
import IconHome from '../assets/tabBar-home.png';
import IconHomeSelected from '../assets/tabBar-home.png';
import IconDev from '../assets/tabBar-home.png';
import IconDevSelected from '../assets/tabBar-home.png';
import IconPerfil from '../assets/tabBar-home.png';
import IconPerfilSelected from '../assets/tabBar-home.png';
import IconChat from '../assets/tabBar-home.png';
import IconChatSelected from '../assets/tabBar-home.png';

//Telas
import Home from '../Pages/Home';
import Dev from '../Pages/Dev';
import Perfil from '../Pages/Perfil';
import Chat from '../Pages/Chat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TabNavigation() {
return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
        let iconName;

        if (route.name === 'TabHome') {
            iconName = focused ? IconHomeSelected : IconHome;
        } else if (route.name === 'Dev') {
            iconName = focused ? IconDevSelected : IconDev;
        } else if (route.name === 'Perfil') {
            iconName = focused ? IconPerfilSelected : IconPerfil;
        } else if (route.name === 'Chat') {
            iconName = focused ? IconChatSelected : IconChat;
        }

        return <Image source={iconName} style={{ width: 30, height: 30 }} />;
        },
        tabBarStyle: {
        backgroundColor: '#FCAC4E',
        height: 60
        },
        tabBarShowLabel: false
    })}
    > 
    <Tab.Screen name="TabHome" component={Home}
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
        }} />
    <Tab.Screen name="Dev" component={Dev}
        options={{ 
        headerStyle: { backgroundColor: '#FCAC4E'},
        headerTitle: "Gráficos",
        headerTitleAlign: 'center',
        headerTitleStyle: {
            color: "#fff"
        },
        headerTintColor: "#fff",
        headerRight: () => (
            <NotificacaoButton/>
        ),
        }} 
    />
    <Tab.Screen name="Perfil" component={Perfil}
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
        }} />
    <Tab.Screen name="Chat" component={Chat} 
    options={{ 
        headerStyle: { backgroundColor: '#FCAC4E'},
        headerTitle: "Chat",
        headerTitleAlign: 'center',
        headerTitleStyle: {
        color: "#fff"
        },
        headerTintColor: "#fff",
        headerRight: () => (
        <NotificacaoButton/>
        )
    }} />
    </Tab.Navigator>
);
}

export default TabNavigation;