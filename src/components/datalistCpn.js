// Library
import React, { useState, useEffect } from 'react';
// Framework
import {
	Alert,
	FlatList,
	KeyboardAvoidingView,
	Modal,
	Picker,
	RefreshControl,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import axios from 'axios';
// Component
import CardData from './card/cardData';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
	faClipboardList,
	faExclamationCircle,
	faPlus,
	faTrash,
	faInfoCircle,
	faBarcode,
	faCheckCircle,
	faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
// Style

const Datalist = ({ dataObject, dataRefrech }) => {
	// Set Data
	const [ Datasbm, setDatasbm ] = useState(null);
	const [ refreshing, setRefreshing ] = useState(false);
	// const [ selectedValue, setSelectedValue ] = useState('3');

	// Modal
	const [ isModalVisible, setisModalVisible ] = useState(false);

	const wait = (timeout) => {
		return new Promise((resolve) => setTimeout(resolve, timeout));
	};
	const baseUrl = 'http://192.168.1.25/';
	const kettypeRefrech = { picking_type: dataRefrech };
	const urlRefrech = `${baseUrl}erp_barcode/backend/picking/get_hd`;
	const onRefresh = React.useCallback(async () => {
		setRefreshing(true);
		try {
			const responseRefrech = await axios.post(urlRefrech, kettypeRefrech);
			if (responseRefrech.status === 200) {
				setDatasbm(responseRefrech.data.data.items);
				// console.log(responseRefrech.data.data.items);
				wait(0).then(() => setRefreshing(false));
			} else {
				throw new Error('Failed to fetch Data');
			}
		} catch (error) {
			console.error(error);
		}
	}, []);

	// const onRefresh = () => {
	// 	Alert.alert('คำเตือน', 'ใบงาน กำลังดำเนินการเช็คสินค้าอยู่', [
	// 		{ text: 'ตกลง', onPress: () => console.log('ตกลง', { dataObject }) }
	// 	]);
	// };

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ backgroundColor: '#f5f5fa' }}>
				{/* แทบด้านบน แบบปุ่ม */}
				<View
					style={{
						borderBottomWidth: 0.5,
						borderColor: 'rgba(0,0,0,0.2)',
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 10
					}}
				>
					<View>
						<TouchableOpacity
							// onPress={() => onPressPage()}
							style={{
								alignItems: 'center',
								backgroundColor: '#fff',
								borderColor: 'rgba(0,0,0,0.2)',
								borderLeftWidth: 1,
								borderRightWidth: 1,
								borderTopWidth: 1,
								height: 40,
								marginLeft: 10,
								width: 183
							}}
						>
							<Text
								style={{
									color: '#5787A4',
									fontSize: 22,
									fontWeight: 'bold',
									marginLeft: 1,
									marginVertical: 7
								}}
							>
								ใบสั่งซื้อ
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				{/* แทบใส่ข้อความ */}
				<View
					style={{
						backgroundColor: '#fff',
						flexDirection: 'row',
						justifyContent: 'space-between',
						margin: 10
					}}
				>
					{/* <View style={{ backgroundColor: "rgba(0,0,0,0.3)", height: 50, width: 130, }}>
                        <Picker selectedValue={ selectedValue } style={{ color:"white" }} onValueChange={( itemValue )=>setSelectedValue( itemValue )}>
                            <Picker.Item value="1" label="วันนี้"/>
                            <Picker.Item value="2" label="สัปดาห์นี้"/>
                            <Picker.Item value="3" label="ทั้งหมด"/>
                            <Picker.Item value="4" label="sync"/>
                        </Picker>
                    </View> */}
					<TextInput
						placeholder="Scan code"
						style={{
							borderColor: '#5787A4',
							borderRadius: 2.5,
							borderWidth: 1,
							color: '#000',
							fontSize: 25,
							height: 50,
							textAlign: 'center',
							// width: 330,
							width: 460
						}}
						maxLength={18}
					/>
				</View>
				{/* เส้นขั้น */}
				<View
					style={{ borderColor: 'rgba(0,0,0,0.2)', borderTopWidth: 0.5, marginLeft: 10, marginRight: 10 }}
				/>
				{/* Flatlist */}
				<View style={{ margin: 10 }}>
					<FlatList
						data={Datasbm == null ? dataObject : Datasbm}
						keyExtractor={(item) => item.id.toString()}
						refreshControl={
							<RefreshControl
								colors={[ '#00FFFF', '#0000FF' ]}
								onRefresh={onRefresh}
								refreshing={refreshing}
							/>
						}
						renderItem={({ item }) => (
							<TouchableOpacity
								style={{
									alignItems: 'flex-start',
									backgroundColor: '#fff',
									borderColor: 'grey',
									borderRadius: 5,
									borderWidth: 1,
									marginBottom: 10
								}}
								onPress={() => onPressItem(item)}
							>
								<CardData item={item} />
							</TouchableOpacity>
						)}
					/>
				</View>
			</View>

			{/* <Modal
				animationType="none"
				transparent={true}
				visible={isModalVisible}
				onRequestClose={() => setisModalVisible(false)}
			>
				<View style={Popup.centeredViewBackground}>
					<View style={[ Popup.viewPopupBackground, { flexDirection: 'column' } ]}>
						<View style={Popup.viewPopupDetails}>
							<Text style={Popup.textTitle}>{textPopupPageTitle}</Text>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<View style={Popup.viewLeftBgPopup}>
								<Text style={Popup.textInput}>{textPopupPageDocNum}</Text>
							</View>
							<View style={Popup.viewRightBgPopup}>
								<Text style={Popup.textInputData}>{inputDocument}</Text>
							</View>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<View style={Popup.viewLeftBgPopup}>
								<Text style={Popup.textInput}>{textPopupPageDocNum2}</Text>
							</View>
							<View style={Popup.viewRightBgPopup}>
								<Text style={Popup.textInputData}>{inputDocument}</Text>
							</View>
						</View>
						<View style={[ Popup.viewInputData, { flexDirection: 'row' } ]}>
							<View style={Popup.viewLeftBgPopupEx}>
								<Text style={Popup.textInput}>{textPopupPageDetails}</Text>
							</View>
							<ScrollView style={Popup.scollviewRightBgPopupEx}>
								<Text style={Popup.textInputData}>{inputRemark}</Text>
							</ScrollView>
						</View>
						<View style={[ Popup.viewLastData, { flexDirection: 'row' } ]}>
							<View style={Popup.viewLeftBgPopup}>
								<Text style={Popup.textInput}>{textPopupPageDate}</Text>
							</View>
							<View style={Popup.viewRightBgPopup}>
								<Text style={Popup.textInputData}>{inputPickingDate}</Text>
							</View>
						</View>
						<View
							style={{ flex: 5, borderColor: 'rgba(0,0,0,0.3)', borderBottomWidth: 1, borderTopWidth: 1 }}
						>
							<FlatList
								style={Popup.dataListPopup}
								data={DataInsbm}
								keyExtractor={(item) => item.id.toString()}
								renderItem={({ item }) => (
									<View style={[ Popup.viewCard, { flexDirection: 'column' } ]}>
										<View>
											<Text style={Popup.textFlatlistTitle}>{item.picking_product_name}</Text>
										</View>
										<View
											style={[
												Popup.viewFlatlistSecondLineOfInformation,
												{ flexDirection: 'row' }
											]}
										>
											<View>
												<Text style={Popup.textFlatlistQuantity}>{textQuantity}:</Text>
											</View>
											<View style={Popup.viewFlatlistTextQuantity}>
												<Text style={[ Popup.textFlatlistNumber, { textAlign: 'right' } ]}>
													{item.product_logs_qty}
												</Text>
											</View>
											<View>
												<Text style={Popup.textFlatlistNumber}>/{item.request_qty}</Text>
											</View>
											<View style={Popup.viewFlatlistTextType}>
												<Text style={Popup.textFlatlistType}>{item.picking_product_unit}</Text>
											</View>
										</View>
									</View>
								)}
							/>
						</View>
						<View style={[ Popup.viewButton, { flexDirection: 'row' } ]}>
							<View>
								<TouchableOpacity onPress={() => onPressPage()} style={Popup.touchableopacitySave}>
									<Text style={Popup.textButtonPopup}>ยืนยัน</Text>
								</TouchableOpacity>
							</View>
							<View>
								<TouchableOpacity onPress={() => onPressCancel()} style={Popup.touchableopacityCancel}>
									<Text style={Popup.textButtonPopup}>ยกเลิก</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</Modal> */}
		</SafeAreaView>
	);
};
export default Datalist;
