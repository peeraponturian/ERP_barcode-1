// Library
import React from 'react';
// Framework
import { Alert, BackHandler, FlatList, KeyboardAvoidingView, TextInput, TouchableOpacity, View } from 'react-native';
// Component
import HeadbarCpn from '../components/headbar/headbarCpn';
import ScanButtonCpn from '../components/scan/scanButtonCpn';
import ScanFlatlistCpn from '../components/scan/scanFlatlistCpn';
import ScanLayout from '../components/scan/scanLayoutCpn';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';
// Style
import { scanbarcodeStyle } from '../styles/scan/scanbarcodeStyle';

export default class Scanbarcode extends React.Component {
	backAction = () => {
		Alert.alert('Hold on!', 'Are you sure you want to go back?', [
			{
				text: 'Cancel',
				onPress: () => null,
				style: 'cancel'
			},
			{ text: 'YES', onPress: () => BackHandler.exitApp() }
		]);
		return true;
	};

	onPressPopupSaveOpen = () => {
		this.props.navigation.goBack();
	};

	onPressPopupBreakOpen = () => {
		this.props.navigation.goBack();
	};

	onPressPopupCancelOpen = () => {
		this.props.navigation.goBack();
	};

	render() {
		const { inputDocument, inputPickingDate, inputRemark, secondData } = this.props.route.params;
		return (
			<View style={scanbarcodeStyle.viewBody}>
				<HeadbarCpn
					onPressBack={() => this.props.navigation.goBack()}
					onPressDetail={() => this.props.navigation.navigate('Menu')}
					onPressUser={() => this.props.navigation.navigate('Profile')}
					Title={'สำนักงานใหญ่'}
				/>
				<View style={scanbarcodeStyle.content}>
					<KeyboardAvoidingView behavior="position">
						{/* Layout */}
						<ScanLayout
							inputDocument={JSON.stringify(inputDocument)}
							inputPickingDate={JSON.stringify(inputPickingDate)}
							inputRemark={JSON.stringify(inputRemark)}
						/>

						{/* Input Scanbarcode */}
						<View style={scanbarcodeStyle.viewInput}>
							<FontAwesomeIcon icon={faBarcode} size={70} style={{ marginRight: 5 }} />
							<TextInput placeholder="Scan Code" style={scanbarcodeStyle.textinput} />
						</View>

						{/* Button */}
						<ScanButtonCpn
							onPressBreak={() => this.onPressPopupBreakOpen()}
							onPressCancel={() => this.onPressPopupCancelOpen()}
							onPressSave={() => this.onPressPopupSaveOpen()}
						/>

						{/* FlatList */}
						<View style={scanbarcodeStyle.viewFlatlist}>
							<FlatList
								style={scanbarcodeStyle.flatlistData}
								data={secondData}
								keyExtractor={(item) => item.id.toString()}
								renderItem={({ item }) => (
									<TouchableOpacity>
										{/* onPress={() => onPressItemtwo(item)} */}
										<ScanFlatlistCpn item={item} />
									</TouchableOpacity>
								)}
							/>
						</View>
					</KeyboardAvoidingView>
				</View>
			</View>
		);
	}
}
