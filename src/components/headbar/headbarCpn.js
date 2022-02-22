// Library
import React from "react";
// Framework
import { Text, View, TouchableOpacity, } from "react-native";
import { StatusBar } from "expo-status-bar";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
// Style
import { headbarCpn } from "../../styles/headbar/headbarStyle";

const HeadbarCpn = ({ onPressDetail, onPressGoBack, onPressUser, Title }) => {
    return (
        <View style={ headbarCpn.viewBar }>
            <StatusBar backgroundColor="rgba(0,0,0,0.5)"/>
            <View>
                <TouchableOpacity onPress={ onPressGoBack }>
                    <FontAwesomeIcon icon={ faAngleLeft } size={ 40 } color={ "#fff" } style={{ alignItems: "center", alignSelf: "center", marginTop: 5, marginLeft: 10, }}/>
                </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 85}}>
                <TouchableOpacity onPress={ onPressDetail }>
                    <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 35 }}>
                        {Title}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={ headbarCpn.viewIcon }>
                <TouchableOpacity onPress={ onPressUser }>
                    <FontAwesomeIcon icon={ faUserCircle } size={ 30 } color={ 'white' }/>
                </TouchableOpacity>
            </View>
      </View>
    );
};
export default HeadbarCpn;