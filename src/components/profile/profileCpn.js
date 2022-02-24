// Library
import React from 'react';
// Framework
import { Text, View } from 'react-native';
//  Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
// Style
import { profileStyle } from '../../styles/profileStyle';

const profileCpn = ({ leftText, rightText }) => {
	return (
		<View style={profileStyle.view}>
			<View style={profileStyle.viewLeft}>
				<Text style={profileStyle.textLeft}>{leftText}</Text>
			</View>

			<View style={profileStyle.viewRigth}>
				<Text style={profileStyle.textRigth}>{rightText}</Text>
			</View>

			<View style={profileStyle.viewIcon}>
				<FontAwesomeIcon icon={faAngleRight} />
			</View>
		</View>
	);
};
export default profileCpn;
