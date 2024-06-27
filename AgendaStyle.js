import { StyleSheet } from "react-native";

const AgendaStyle = StyleSheet.create({
    Header:{
        marginVertical: 15,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 15
    },
    container: {
        height: "auto",
        width: "100%",
        alignSelf: "center",
        marginVertical: 10,
        borderRadius: 15,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    titulo:{
        width: "80%",
        height: 40,
        backgroundColor: "#349EFF",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -10,
        borderRadius: 10,
        textAlign: "center",
        textAlignVertical: "center",
        flexDirection: "row"
    },
    atividade:{
        width: "88%",
        height: 40,
        marginVertical: 2,
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center"
    },
    atividade2:{
        width: "90%",
        height: 40,
        marginVertical: 2,
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        textDecorationLine: 'line-through'
    },
    hr:{
        backgroundColor: "pink"
    },
    editar:{
        backgroundColor: "#6AB7FF",
        borderRadius: 10,
        width: 220,
        height: 40,
        color: "#fff",
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "flex-end",
        left: -10,
        bottom: -10
    },
    editarTxt:{
        color: "#fff",
        fontSize: 17,
        textAlign: "center"
    },
    input:{
        height: 40,
        borderRadius: 5,
        fontSize: 15,
        backgroundColor: "#6AB7FF40",
        paddingHorizontal: 10,
        color: "#5F008C"
    },
    containerInput:{
        justifyContent: "center",
        flexDirection: "column",
        marginVertical: 5,
    },
    txtInput:{
        fontSize: 15,
        padding: 5,
        color: "#5F008C"
    },
    concluir:{
        backgroundColor: "#6AB7FF",
        width: "30%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        alignSelf: "flex-end",
        marginTop: 10
    },
    txtConcluir:{
        color: "#fff",
        fontSize: 15
    },
    bloco:{
        width: "90%",
        height: 250,
        borderRadius: 20,
        marginBottom: 15
    },
    icon:{
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 5,
        borderStyle: "solid",
        backgroundColor: "#fff",
        alignItems: "center", 
        justifyContent: 'center',
        top: -19,
        right: -5,
        position: "absolute"
    },
    titulo:{
        fontSize: 20, 
        color: "#5F008C" 
    },
    rotina:{
        fontSize: 19, 
        color: "#5F008C" 
    },
    scrollview:{
        width: "100%", 
        height: "90%", 
        alignSelf: "center", 
        marginTop: 10 
    },
    box:{
        height: 46,
        paddingHorizontal: 5
    }
})

export default AgendaStyle;