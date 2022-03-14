// Library
import React from 'react';
// Framework
import { ScrollView, Text, View } from 'react-native';
// Style
import { modalCpnStyle } from '../../styles/componentStyle/menu/menuModalStyle';

const datalistModal = ({ inputDocument, inputPickingDate, inputRemark }) => {
	return (
		<View>
			<View style={modalCpnStyle.viewTitleModal}>
				<Text style={modalCpnStyle.textTitleModal}>รายละเอียด</Text>
			</View>
			<View style={modalCpnStyle.viewLayout}>
				<View style={modalCpnStyle.view}>
					<Text style={modalCpnStyle.text}>เลขที่เอกสาร</Text>
				</View>
				<View style={modalCpnStyle.viewDisplay}>
					<Text style={modalCpnStyle.textDisplay}>{inputDocument}</Text>
				</View>
			</View>

			<View style={modalCpnStyle.viewLayout}>
				<View style={modalCpnStyle.view}>
					<Text style={modalCpnStyle.text}>ใบสั่งซื้อ</Text>
				</View>
				<View style={modalCpnStyle.viewDisplay}>
					<Text style={modalCpnStyle.textDisplay}>{inputDocument}</Text>
				</View>
			</View>
			<View style={[ modalCpnStyle.viewLayout, { width: 340 } ]}>
				<View style={modalCpnStyle.view}>
					<Text style={modalCpnStyle.text}>ผู้ขาย</Text>
				</View>
				<ScrollView style={modalCpnStyle.svDisplay}>
					<Text style={modalCpnStyle.textDisplay}>{inputRemark}</Text>
				</ScrollView>
			</View>

			<View style={[ modalCpnStyle.viewLayout, { marginBottom: 10 } ]}>
				<View style={modalCpnStyle.view}>
					<Text style={modalCpnStyle.text}>วันที่เอกสาร</Text>
				</View>
				<View style={modalCpnStyle.viewDisplay}>
					<Text style={modalCpnStyle.textDisplay}>{inputPickingDate}</Text>
				</View>
			</View>
		</View>
	);
};
export default datalistModal;
