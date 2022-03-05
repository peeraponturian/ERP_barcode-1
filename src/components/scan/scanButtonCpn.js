// Library
import React from 'react';
// Framework
import { Text, TouchableOpacity, View } from 'react-native';
// Style
import { scanButtonStyle } from '../../styles/componentStyle/scan/scanButtonStyle';

const scanButtonCpn = ({ onPressBreak, onPressCancel, onPressSave }) => {
	return (
		<View style={scanButtonStyle.viewbody}>
			<View>
				<TouchableOpacity onPress={() => onPressSave()} style={scanButtonStyle.toSave}>
					<Text style={scanButtonStyle.textSave}>ปิดใบงาน</Text>
				</TouchableOpacity>
			</View>

			<View>
				<TouchableOpacity onPress={() => onPressBreak()} style={scanButtonStyle.toBreak}>
					<Text style={scanButtonStyle.textBreak}>พักใบงาน</Text>
				</TouchableOpacity>
			</View>

			<View>
				<TouchableOpacity onPress={() => onPressCancel()} style={scanButtonStyle.toCancel}>
					<Text style={scanButtonStyle.textCancel}>ยกเลิก</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
export default scanButtonCpn;
