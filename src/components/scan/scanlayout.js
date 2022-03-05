// Library
import React from 'react';
// Framework
import {
	Text,
	View
} from 'react-native';
// Style
import { scanbarcodeStyle } from '../../styles/scan/scanbarcodeStyle';

const scanLayout = ({ inputDocument, inputPickingDate, inputRemark }) => {
	return (
		<View style={scanbarcodeStyle.viewBody}>
            <View style={scanbarcodeStyle.viewTitle}>
                <Text style={scanbarcodeStyle.textTitle}>สแกนบาร์โค้ด</Text>
            </View>

            <View style={scanbarcodeStyle.viewData}>
                <View style={scanbarcodeStyle.viewText}>
                    <Text style={scanbarcodeStyle.textData}>เลขที่เอกสาร</Text>
                </View>

                <View style={scanbarcodeStyle.viewTextInput}>
                    <Text style={scanbarcodeStyle.textInput}>{inputDocument}</Text>
                </View>
            </View>

            <View style={scanbarcodeStyle.viewData}>
                <View style={scanbarcodeStyle.viewText}>
                    <Text style={scanbarcodeStyle.textData}>ใบสั่งซื้อ</Text>
                </View>

                <View style={scanbarcodeStyle.viewTextInput}>
                    <Text style={scanbarcodeStyle.textInput}>{inputDocument}</Text>
                </View>
            </View>

            <View style={scanbarcodeStyle.viewData}>
                <View style={scanbarcodeStyle.viewText}>
                    <Text style={scanbarcodeStyle.textData}>ผู้ขาย</Text>
                </View>

                <View style={scanbarcodeStyle.viewTextInput}>
                    <Text style={scanbarcodeStyle.textInput}>{inputRemark}</Text>
                </View>
            </View>

            <View style={scanbarcodeStyle.viewData}>
                <View style={scanbarcodeStyle.viewText}>
                    <Text style={scanbarcodeStyle.textData}>วันที่เอกสาร</Text>
                </View>

                <View style={scanbarcodeStyle.viewTextInput}>
                    <Text style={scanbarcodeStyle.textInput}>{inputPickingDate}</Text>
                </View>
            </View>
        </View>
	);
};
export default scanLayout;
                        