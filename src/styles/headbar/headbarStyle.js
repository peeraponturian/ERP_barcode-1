import { StyleSheet } from "react-native";

export const headbarCpn = StyleSheet.create({
// Page
    // View
    viewBar: {
        backgroundColor: "#5787A4",
        flexDirection: "row",
        height: 75,
        margin: 0,
        padding: 1,
        paddingTop:25,
        width: 480
    },
    viewTitle:{
        marginLeft: 125
    },
    viewIcon:{
        marginLeft: 80,
        marginTop: 10
    },
    // Text
    textTitle: {
        color: "#FFFFFF",
        fontSize: 35,
        fontWeight: "bold"
    },
});