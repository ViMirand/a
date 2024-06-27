// Ícones
import IconHome from '../assets/tabBar-home.png';
import IconHomeSelected from '../assets/tabBar-home.png';
import IconPerfil from '../assets/tabBar-home.png';
import IconPerfilSelected from '../assets/tabBar-home.png';
import IconChat from '../assets/tabBar-home.png';
import IconChatSelected from '../assets/tabBar-home.png';

//Telas
import ChatEsp from '../Pages - Esp/Chat';
import PerfilEsp from '../Pages - Esp/Perfil';
import HomeEsp from '../Pages - Esp/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TabNavigation2() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
  
            if (route.name === 'TabHome2') {
              iconName = focused ? IconHomeSelected : IconHome;
            } else if (route.name === 'Perfil2') {
              iconName = focused ? IconPerfilSelected : IconPerfil;
            }  else if (route.name === 'ChatEsp') {
              iconName = focused ? IconChatSelected : IconChat;
            }
  
            return <Image source={iconName} style={{ width: 30, height: 30 }} />;
          },
          tabBarStyle: {
            backgroundColor: '#9A76FF',
            height: 60
          },
          tabBarShowLabel: false
        })}
      > 
        <Tab.Screen name="TabHome2" component={HomeEsp} 
            options={{ 
              headerStyle: { backgroundColor: '#9A76FF'},
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
            }} />
        <Tab.Screen name="Perfil2" component={PerfilEsp}
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
        <Tab.Screen name="ChatEsp" component={ChatEsp}
          options={{ 
            headerStyle: { backgroundColor: '#9A76FF'},
            headerTitle: "Chat",
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
      </Tab.Navigator>
    );
  }

  export default TabNavigation2;