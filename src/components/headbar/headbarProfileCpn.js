// Library
import React from "react";
// Framework
import { Text, View, TouchableOpacity, } from "react-native";
import { StatusBar } from "expo-status-bar";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// Style
import { headbarCpn } from "../../styles/headbar/headbarStyle";

const headbarDetail = ({ onPressInformation }) => {
    return (
        <View style={ headbarCpn.viewBar }>
            <StatusBar backgroundColor="rgba(0,0,0,0.5)"/>
            <View>
                <TouchableOpacity onPress={ onPressInformation }>
                    <FontAwesomeIcon icon={ faAngleLeft } size={ 40 } color={ "#fff" } style={{ alignItems: "center", alignSelf: "center", marginTop: 5, marginLeft: 10, }}/>
                </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 85}}>
            <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 35 }}>
                ข้อมูลส่วนตัว
            </Text>
            </View>
      </View>
    );
};
export default headbarDetail;