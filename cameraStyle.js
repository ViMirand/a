import { StyleSheet } from "react-native";

const cameraStyle = StyleSheet.create({
    Geral:{
        width: 150,
        height: 150,
        borderStyle: "solid",
        alignSelf: "center",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    container: {
        width: "100%",
        height: "100%",
        borderRadius: 100,
        borderWidth: 4,
        borderStyle: "solid",
        alignSelf: "center"
    },
    containerE: {
        width: "90%",
        height: "90%",
        borderRadius: 100,
        borderColor: "#9A76FF",
        backgroundColor: "#F5F3EA",
        borderWidth: 4,
        borderStyle: "solid",
        alignSelf: "center"
    },
    camera:{
        width: 30,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 3,
        alignSelf: "center",
        borderRadius: 2
    },
    image:{
        alignItems: "center",
    }
});
export default cameraStyle;