import { StyleSheet } from "react-native";


const ContatoStyle = StyleSheet.create({
    container: {
        height: 90,
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        padding: "3%",
        alignItems: "center"
    },
    titulo:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%"
    }
    ,
    nome:{
        fontSize: 17,
        color: "#000"
    },
    lastMsg:{
        color: "#8A7979",
        fontSize: 13,
        fontFamily: 'Comfortaa-SemiBold'
    }
})

export default ContatoStyle;