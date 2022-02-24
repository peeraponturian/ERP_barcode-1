// Library
import React from 'react';
// Framework
import { Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
// Style
import { headbarCpn } from '../../styles/headbar/headbarStyle';

const HeadbarCpn = ({ onPressDetail, onPressGoBack, onPressUser, Title }) => {
	return (
		<View style={headbarCpn.viewBar}>
			<StatusBar backgroundColor="rgba(0,0,0,0.5)" />
			<View style={headbarCpn.viewIcon}>
				<TouchableOpacity onPress={onPressGoBack}>
					<FontAwesomeIcon icon={faAngleLeft} size={30} color={'#fff'} style={headbarCpn.iconAngleLeft} />
				</TouchableOpacity>
			</View>

			<View style={headbarCpn.viewTitle}>
				<TouchableOpacity onPress={onPressDetail}>
					<Text style={headbarCpn.textTitle}>{Title}</Text>
				</TouchableOpacity>
			</View>

			<View style={headbarCpn.viewIcon}>
				<TouchableOpacity onPress={onPressUser}>
					<FontAwesomeIcon icon={faUserCircle} size={30} color={'white'} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
export default HeadbarCpn;
