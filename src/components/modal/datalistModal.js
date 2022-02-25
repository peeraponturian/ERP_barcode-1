// Library
import React from 'react';
// Framework
import { ScrollView, Text, View } from 'react-native';
// Style

import { datalistModalStyle } from '../../styles/modal/datalistModalStyle';
const datalistModal = ({ inputDocument, inputRemark, inputPickingDate }) => {
	return (
		<View>
			<View style={datalistModalStyle.viewTitleModal}>
				<Text style={datalistModalStyle.textTitleModal}>รายละเอียด</Text>
			</View>
			<View style={datalistModalStyle.viewLayout}>
				<View style={datalistModalStyle.view}>
					<Text style={datalistModalStyle.text}>เลขที่เอกสาร</Text>
				</View>
				<View style={datalistModalStyle.viewDisplay}>
					<Text style={datalistModalStyle.textDisplay}>{inputDocument}</Text>
				</View>
			</View>

			<View style={datalistModalStyle.viewLayout}>
				<View style={datalistModalStyle.view}>
					<Text style={datalistModalStyle.text}>ใบสั่งซื้อ</Text>
				</View>
				<View style={datalistModalStyle.viewDisplay}>
					<Text style={datalistModalStyle.textDisplay}>{inputDocument}</Text>
				</View>
			</View>
			<View style={[ datalistModalStyle.viewLayout, { width: 340 } ]}>
				<View style={datalistModalStyle.view}>
					<Text style={datalistModalStyle.text}>ผู้ขาย</Text>
				</View>
				<ScrollView style={datalistModalStyle.svDisplay}>
					<Text style={datalistModalStyle.textDisplay}>{inputRemark}</Text>
				</ScrollView>
			</View>

			<View style={[ datalistModalStyle.viewLayout, { marginBottom: 10 } ]}>
				<View style={datalistModalStyle.view}>
					<Text style={datalistModalStyle.text}>วันที่เอกสาร</Text>
				</View>
				<View style={datalistModalStyle.viewDisplay}>
					<Text style={datalistModalStyle.textDisplay}>{inputPickingDate}</Text>
				</View>
			</View>
		</View>
	);
};
export default datalistModal;
