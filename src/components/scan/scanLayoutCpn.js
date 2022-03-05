// Library
import React from 'react';
// Framework
import { Text, View } from 'react-native';
// Style
import { scanlayoutStyle } from '../../styles/componentStyle/scan/scanlayoutStyle';

const scanLayout = ({ inputDocument, inputPickingDate, inputRemark }) => {
	return (
		<View style={scanlayoutStyle.viewBody}>
			<View style={scanlayoutStyle.viewTitle}>
				<Text style={scanlayoutStyle.textTitle}>สแกนบาร์โค้ด</Text>
			</View>

			<View style={scanlayoutStyle.viewData}>
				<View style={scanlayoutStyle.viewText}>
					<Text style={scanlayoutStyle.textData}>เลขที่เอกสาร</Text>
				</View>

				<View style={scanlayoutStyle.viewTextInput}>
					<Text style={scanlayoutStyle.textInput}>{inputDocument}</Text>
				</View>
			</View>

			<View style={scanlayoutStyle.viewData}>
				<View style={scanlayoutStyle.viewText}>
					<Text style={scanlayoutStyle.textData}>ใบสั่งซื้อ</Text>
				</View>

				<View style={scanlayoutStyle.viewTextInput}>
					<Text style={scanlayoutStyle.textInput}>{inputDocument}</Text>
				</View>
			</View>

			<View style={scanlayoutStyle.viewData}>
				<View style={scanlayoutStyle.viewText}>
					<Text style={scanlayoutStyle.textData}>ผู้ขาย</Text>
				</View>

				<View style={scanlayoutStyle.viewTextInput}>
					<Text style={scanlayoutStyle.textInput}>{inputRemark}</Text>
				</View>
			</View>

			<View style={scanlayoutStyle.viewData}>
				<View style={scanlayoutStyle.viewText}>
					<Text style={scanlayoutStyle.textData}>วันที่เอกสาร</Text>
				</View>

				<View style={scanlayoutStyle.viewTextInput}>
					<Text style={scanlayoutStyle.textInput}>{inputPickingDate}</Text>
				</View>
			</View>
		</View>
	);
};
export default scanLayout;
