// Library
import React from "react";
// Framework
import { View, TouchableOpacity, Text } from "react-native";
//  Icon
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
// Style
import { detailStyle } from "../styles/detailStyle";

const detailCpn = ({ onPress,title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={ detailStyle.touchableCard }>
            <View style={ detailStyle.viewBgIcon }>
                <FontAwesomeIcon icon={ faClipboardList } color={ 'white' } size={ 30 } style={{ margin: 10 }}/>
            </View>
            <Text style={ detailStyle.textTitle }>
                {title}
            </Text>
        </TouchableOpacity>
    );
};
export default detailCpn;