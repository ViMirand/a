import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white"
    },
    header:{
        backgroundColor: "#FCAC4E",
        height: 80,
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems:"flex-end",
        paddingBottom:"3%"
    },
    headerE:{
        backgroundColor: "#9A76FF",
        height: 80,
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems:"flex-end",
        paddingBottom:"3%"
    },
    textoHeader:{
        width: "90%",
        fontSize: 20,
        color: "#fff",
        flexDirection: "row",
        textAlign: "center"
    },
    titulo:{
        marginBottom: "5%",
        color: "#9A76FF",
        textAlign:"center",
        fontSize: 17
    },
    imagem:{
        flex: 1,
        width: "130%",
        left: "5%",
        justifyContent: 'center',
    },
    scrollviewHorizontal:{
        height: 250
    },
    imgFundo:{
    },
    containerBotao:{
        marginTop: "4%",
        flexWrap: "wrap",
        height: 440,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "5%"
    },
    cxBotao:{
        backgroundColor: "#9A76FF",
        height: 165,
        width: 165,
        marginBottom: "2%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },  
    imgBotao:{
        marginTop: "2%"
    },
    nomeBotao:{
        fontSize: 20,
        color:"white"
    },
    jogos:{
    },
    boxJogo:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: "2%",
        width: "95%",
        alignSelf: "center",
        height: "15%"
    },
    txtjogo:{
        color: "#5f008c"
    },
    grafico:{
        width: "95%",
        borderRadius: 100,
        height: "24%",
        flexDirection: "row",
        alignSelf: "center"
    },
    boxGrafico:{
        width: "85%",
        alignSelf: "center",
        borderRadius: 20,
        borderColor: "#5F008C",
        borderWidth: 2,
        borderStyle: "solid", 
        backgroundColor: "#F5F3Ea93",
        height: "54%",
        padding: "2%"
    },
    imgJogo:{
        borderRadius: 50, 
        width: 50, 
        height: 50,
        backgroundColor: "#000"
    }
})

export  default HomeStyle;