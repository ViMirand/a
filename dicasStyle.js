import { StyleSheet } from "react-native";

const dicasStyle = StyleSheet.create({
    container:{
        height: 200,
        width: "90%",
        alignSelf: "center"
    },
    links:{
        marginBottom: "5%"
    },
    bloco:{
        height: 200,
        width: 375
    },
    textoBlocos:{
        flexDirection: "column", 
        justifyContent: "flex-end", 
        height: "100%", 
        alignSelf:"center",
        width: "100%"
    },
    blocoUnique:{
        height: 200,
        width: "95%", 
        backgroundColor: "#9A76FF", 
        alignSelf: "center",
        borderRadius: 20,
        padding: "3%"
    },
    txtBloco:{
        color: "#fff",
        alignSelf: "flex-end",
        textAlign: "right"
    },
    linkBloco:{
        alignSelf: "flex-end",
        textDecorationLine:"underline",
    },
    blocoAzul:{
        backgroundColor: "#47C1F3",
        height: 200,
        width: "95%", 
        alignSelf: "center",
        borderRadius: 20,
        padding: "3%"
    },
    txtBlocoAzul:{
        color: "#fff",
        alignSelf: "flex-end",
        textAlign: "right"
    },
    linkBlocoAzul:{
        color: "#1D4582",
        textDecorationLine: "underline",
        alignSelf: "flex-end"
    },
    blocoLaranja:{
        backgroundColor: "#FCAC4E",
        height: 200,
        width: "95%", 
        alignSelf: "center",
        borderRadius: 20,
        padding: "3%"
    },
    txtBlocoLaranja:{
        color: "#fff",
        alignSelf: "flex-end",
        textAlign: "right"
    },
    linkBlocoLaranja:{
        color: "#9A4A00",
        textDecorationLine: "underline",
        alignSelf: "flex-end"
    },
    blocoAmarelo:{
        backgroundColor: "#FFE95B",
        height: 200,
        width: "95%", 
        alignSelf: "center",
        borderRadius: 20,
        padding: "3%"
    },
    txtBlocoAmarelo:{
        color: "#000",
        alignSelf: "flex-end",
        textAlign: "right"
    },
    linkBlocoAmarelo:{
        color: "#EF9543",
        textDecorationLine: "underline",
        alignSelf: "flex-end"
    }
})

export default dicasStyle;