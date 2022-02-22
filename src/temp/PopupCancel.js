import { StyleSheet } from "react-native";

export const PopupCancel = StyleSheet.create({
    centeredViewBackground: {
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        flex: 1,
        justifyContent: "center",
    },
    modalView: {
        alignItems: "center",
        backgroundColor: "white",
        borderColor: "#5787A4",
        borderRadius: 5,
        borderWidth: 3,
        height: 210,
        margin: 100,
        padding: 5,
        width: 400,
    },
    viewSave: {
        alignItems: "center",
        backgroundColor: "#1E90FF",
        borderColor: "#5787A4",
        // borderBottomLeftRadius: 5,
        borderRadius: 5,
        // borderTopLeftRadius: 5,
        // borderWidth: 1,
        height: 30,
        marginRight: 10,
        marginTop: 10,
        paddingHorizontal: 5,
        width: 100
    },
    viewClose: {
        alignItems: "center",
        backgroundColor: "#A9A9A9",
        borderColor: "#5787A4",
        // borderBottomRightRadius: 5,
        borderRadius: 5,
        // borderTopRightRadius: 5,
        // borderWidth: 1,
        height: 30,
        marginLeft: 10,
        marginTop: 10,
        paddingHorizontal: 5,
        width: 100
    },
    textTitle:{
        color: "#5787A4",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
    text:{
        color: "#5787A4",
        fontSize: 15,
        textAlign: "center",
    },
    textSaveCancel: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 1,
        marginVertical: 3,
    },
    iconPopup:{
        alignItems: "center",
        alignSelf: "center"
    },
});