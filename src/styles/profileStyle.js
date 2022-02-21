import { StyleSheet } from "react-native";

export const profileStyle = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: 900
  },
  heading: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  view:{
    flexDirection: "row",
    marginBottom:20
  },
  viewRigth:{
    marginLeft: 30,
    width: 155,
  },
  viewCenter:{
    alignItems: "flex-end",
    width: 250,
  },
  viewLeft:{
    marginLeft: 10,
    marginTop: 5,
  },
  viewClose:{
    marginTop: 80, 
    width: 180,
    height: 40,
    borderWidth: 1, 
    borderColor: "#5787A4"
  },
  textTitle:{
    color: "#5787A4",
    fontWeight: "bold",
    fontSize:18,
  },
  text:{
    color: "#5787A4",
    fontSize:18,
  },
  textColse:{
    alignItems: "center",
    alignSelf: "center",
    color: "#5787A4",
    fontWeight: "bold",
    fontSize:15,
    marginVertical: 2.5,
  },
});
