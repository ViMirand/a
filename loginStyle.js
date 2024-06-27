import { StyleSheet } from "react-native"

const loginStyle = StyleSheet.create({
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
        height:"60%"
    },
    titulo:{
        fontSize: 40,
        color: "#EF8320",
        alignSelf: "center",
        marginVertical: 20
    },
    boxTODOSinputs:{
        height: 180
    },
    boxInput:{
        height: '50%',
    },
    txtInput:{
        color:"#EF8320",
        fontSize: 16
    },
    input:{
        backgroundColor: "#F3F3F3",
        paddingHorizontal: 10,
        borderRadius: 5,
        height: 50,
        fontSize: 15
    },
    botaoEntrar:{
        backgroundColor: "#7C5DED",
        alignSelf: "center",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "center",
        width: "40%",
        height: 40,
        borderRadius: 5
    },
    boxLinks:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    txtSenha:{
        color:"#DC195F",
        textDecorationLine: "underline"
    },
    txtUser:{
        color:"#4C79BC",
        textDecorationLine: "underline"
    },
    logo2:{
        alignSelf:"center",
        width: "90%",
        height: "40%",
        alignItems: "center",
        justifyContent: "center"
    },
    logo3:{
        alignSelf:"center",
        width: "90%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default loginStyle;