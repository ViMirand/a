import { StyleSheet } from "react-native";

const PerfilStyle = StyleSheet.create({
    container:{
        alignSelf: "center",
        width: "90%",
    },
    containerInput:{
        justifyContent: "center",
        flexDirection: "column",
        marginVertical: 5,
    },
    titulo:{
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        marginVertical: 20
    },
    input:{
        height: 40,
        borderRadius: 5,
        fontSize: 15,
        backgroundColor: "#f0f0f0",
        paddingHorizontal: 10,
        borderBottomColor: "#d9d9d9",
        borderBottomWidth: 3,
        borderRightColor: "#d9d9d9",
        borderRightWidth: 2,
        borderCurve: "circular"
    },
    inputIdade:{
        height: 40,
        borderRadius: 5,
        fontSize: 15,
        backgroundColor: "#f0f0f0",
        borderBottomColor: "#d9d9d9",
        borderBottomWidth: 3,
        borderRightColor: "#d9d9d9",
        borderRightWidth: 2,
        borderCurve: "circular",
        width:"20%",
        textAlign: "center"
    },
    txtInput:{
        fontSize: 15,
        fontWeight: "bold",
        padding: 5
    },
    editarBotao:{
        height: 28,
        width: "25%",
        backgroundColor:"#71BAFE",
        borderRadius: 5,
        alignSelf: "flex-end",
        justifyContent: "center",
        flexDirection: "column",
        alignItems:"center",
        borderBottomColor: "#66a7ff",
        borderBottomWidth: 3,
        borderCurve: "circular"
    },
    txtEditarBotao:{
        color:"#1D4582",
        fontSize: 15
    },
    criarBotao:{
        height: 50,
        width: "80%",
        backgroundColor:"#b3a0e9",
        borderRadius: 5,
        alignSelf: "center",
        alignItems:"center",
        alignContent:"center",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 5,
        borderBottomColor: "#9A76FF",
        borderBottomWidth: 5,
        borderCurve: "circular"
    },
    txtCriarBotao:{
        fontSize: 17,
        color:"#5F008C"
    },
    cancelarBotao:{
        height: 35,
        width: "40%",
        backgroundColor:"#b3a0e9",
        borderRadius: 5,
        alignSelf: "flex-end",
        alignItems:"center",
        justifyContent: "center",
        flexDirection: "column",
        borderBottomColor: "#9A76FF",
        borderBottomWidth: 3,
        borderCurve: "circular"
    },
    txtCancelarBotao:{
        fontSize: 15,
        color:"#5F008C"
    },
    salvarBotao:{
        height: 35,
        width: "40%",
        backgroundColor:"#349EFF",
        borderRadius: 5,
        textAlignVertical: "center",
        alignSelf: "flex-end",
        alignItems:"center",
        justifyContent: "center",
        flexDirection: "column",
        borderBottomColor: "#1a7bff",
        borderBottomWidth: 3,
        borderCurve: "circular"
    },
    txtSalvarBotao:{
        fontSize: 15,
        color:"#1D4582"
    },
})

export default PerfilStyle;