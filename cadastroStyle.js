import { StyleSheet } from "react-native";

const botoesStyle = StyleSheet.create({
    boxGeral:{
        flex: 1,
        backgroundColor:"#fff",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderColor: "#EF8320",
        borderWidth: 2,
        borderStyle: "solid",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height:"60%",
        justifyContent: "space-between"
    },
    boxBotao:{
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    Botoes:{
        backgroundColor: "#7C5DED",
        height: 150,
        width: 150,
        borderRadius: 10,
        margin: 10,
        alignItems:"center",
        alignContent: "center",
        flexDirection: "column",
        justifyContent: "center"
    },
    txtId:{
        fontSize: 14,
        color: "#fff"
    },
    txtVoltar:{
        color: "#DC195F",
        textDecorationLine: "underline",
        alignSelf: "flex-end"
    },
    boxLink:{
        width: "90%",
        alignSelf: "center",
        padding: 15
    },
    titulo:{
        fontSize: 40,
        color: "#EF8320",
        alignSelf: "center",
        marginTop: 15
    },
    subtitulo:{
        fontSize: 20,
        color: "#fcac4e",
        alignSelf: "center",
        marginBottom: 5
    }
})
export default botoesStyle;