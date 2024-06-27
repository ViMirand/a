import { StyleSheet } from "react-native";

const Cadastro = StyleSheet.create({
    boxGeral:{
        backgroundColor:"#fff",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderColor: "#EF8320",
        borderWidth: 2,
        borderStyle: "solid",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height:"85%",
        justifyContent: "space-between"
    },
    boxTODOSinputs:{
        marginTop: 40,
        height: "70%"
    },
    boxInput:{
        height: 70,
        width: "90%",
        alignSelf: "center"
    },
    boxInputEsp:{
        height: 90,
        width: "90%",
        alignSelf: "center",
        marginBottom: "30%",
        borderRadius: 5
    },
    txtInput:{
        color:"#EF8320",
        fontSize: 16
    },
    input:{
        backgroundColor: "#F3F3F3",
        paddingHorizontal: 10,
        borderRadius: 5,
        height: 30,
        fontSize: 15
    },
    botaoConfirm:{
        backgroundColor: "#7C5DED",
        alignSelf: "center",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "center",
        width: "60%",
        height: 40,
        borderRadius: 5
    },
    botaoDontConfirm:{
        backgroundColor: "#cc2545",
        alignSelf: "center",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "center",
        width: "60%",
        height: 40,
        borderRadius: 5
    },
    txtConfirm:{
        color: "#fff"
    },
    txtDontConfirm:{
        color: "#fbd8e2"
    },
    Especialidade:{
        width: "100%",
        backgroundColor: "#F3F3F3",
    },
    txtEspecialidade:{
        color: "#5F008C"
    },
    unselected:{
        margin: "2%",
        borderColor: "#ef8320",
        borderBottomWidth: 1,
        borderStyle: "solid",
        padding: 4
    },
    selected:{
        backgroundColor: "#FCAC4E",
        borderColor: "#5F008C",
        margin: "2%",
        borderBottomWidth: 1,
        borderRadius: 5,
        padding: 2
    }
})

export default Cadastro;