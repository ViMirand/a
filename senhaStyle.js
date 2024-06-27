import { StyleSheet } from "react-native";

const Senha = StyleSheet.create({
    boxLogin2:{
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
        height:"50%"
    },
    boxLogin:{
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
        height:"70%"
    },
    imagem:{
        alignSelf: "center",
        width: "50%",
        height: "64%"
    },
    titulo:{
        fontSize: 30,
        color: "#EF8320",
        alignSelf: "center",
    },
    botaoRedefinir:{
        backgroundColor: "#4C79BC",
        alignSelf: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        flexDirection: "column",
        justifyContent: "center",
        width: "40%",
        height: 40,
        borderRadius: 5
    },
    botaoEnviar:{
        backgroundColor: "#7C5DED",
        alignSelf: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        flexDirection: "column",
        justifyContent: "center",
        width: "40%",
        height: 40,
        borderRadius: 5
    },
    boxTODOSinputs:{
        height: 200
    },
    blocoCodigo:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignSelf: "center"
    },
    codInput:{
        width: 50,
        height: 50,
        borderRadius: 5,
        backgroundColor: "#F3F3F3",
        paddingHorizontal: "3%",
        fontSize: 30,
        color: "#EF8320"
    },
    txtBotao:{
        color: "#fff"
    }
})

export default Senha;