import { StyleSheet } from "react-native";

const DevStyles = StyleSheet.create({
    bloco: {
        backgroundColor: '#F5F3EA70', 
        alignSelf: 'center', 
        width:'85%', 
        paddingHorizontal: 10, 
        paddingVertical: 20, 
        borderRadius: 20,
        borderWidth: 2 
    },
    dados:{
        flexDirection: 'row', 
        justifyContent:'space-between', 
        alignItems: 'center',
        marginBottom: '2%'
    },
    barrasHora:{
        flexDirection: 'row', 
        justifyContent:'space-between', 
        alignItems: 'center',
        backgroundColor: "#7EC1FF",
        width:'100%',
        height: 15,
        borderRadius: 10,
        marginVertical: 4
    },
    barraGameHora:{
        flexDirection: 'row', 
        alignItems: 'center'
    },
    barrasMin:{
        borderRadius: 20,
        width: '100%', 
        height: 12,
        alignItems: 'center'
    },
    iconGame:{
        backgroundColor: "#4B1ECD", 
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        marginRight: 10
    }
})

export default DevStyles;