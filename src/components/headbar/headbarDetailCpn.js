// Library
import React from 'react';
// Framework
import { Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
// Style
import { headbarCpn } from '../../styles/headbar/headbarStyle';

const HeadbarDetail = ({ onPressUser }) => {
	return (
		<View style={headbarCpn.viewBarD}>
			<StatusBar backgroundColor="rgba( 0,0,0,0.5 )" />
			<View style={headbarCpn.viewTitleD}>
				<Text style={headbarCpn.textTitleD}>สำนักงานใหญ่</Text>
			</View>

			<View style={headbarCpn.viewIconD}>
				<TouchableOpacity onPress={onPressUser}>
					<FontAwesomeIcon icon={faUserCircle} size={30} color={'white'} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
export default HeadbarDetail;
