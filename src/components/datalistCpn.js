// Library
import React, { useState, useEffect } from 'react';
// Framework
import axios from 'axios';
import {
	Alert,
	BackHandler,
	FlatList,
	Modal,
	Picker,
	RefreshControl,
	SafeAreaView,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
// Component
import CardData from './card/cardData';
import DatalistModal from '../components/modal/datalistModal';
// Style
import { datalistStyle } from '../styles/datalistStyle';
import { datalistModalStyle } from '../styles/modal/datalistModalStyle';

const baseUrl = 'http://192.168.1.25/';
const urlInlist = `${baseUrl}erp_barcode/backend/picking/get_dt`;
const urlRefrech = `${baseUrl}erp_barcode/backend/picking/get_hd`;

const DatalistCpn = ({ dataObject, dataRefrech, onPressBack, onPressScan }) => {
	// Set Data
	const [ Datasbm, setDatasbm ] = useState(null);
	const [ DataInsbm, setDataInsbm ] = useState(null);
	// const [ selectedValue, setSelectedValue ] = useState('3');
	const [ inputDocument, setinputDocument ] = useState();
	const [ inputRemark, setinputRemark ] = useState();
	const [ inputPickingDate, setinputPickingDate ] = useState();
	const [ inputid, setinputid ] = useState();
	const [ inputStatus, setinputStatus ] = useState();
	const [ inputIntext, setinputIntext ] = useState();

	// Modal
	const [ isModalVisible, setisModalVisible ] = useState(false);
	const [ isModalVisiblePage, setisModalVisiblePage ] = useState(false);

	// Refrech
	const kettypeRefrech = { picking_type: dataRefrech };
	const [ refreshing, setRefreshing ] = useState(false);
	const wait = (timeout) => {
		return new Promise((resolve) => setTimeout(resolve, timeout));
	};
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

	// onPress
	const onPressItem = async (item) => {
		if (false) {
		} else {
			setisModalVisible(true);
			setinputDocument(item.document);
			setinputRemark(item.remark);
			setinputPickingDate(item.picking_date);
			setinputid(item.id);
			setinputStatus(item.picking_status);
			setDataInsbm();
			setinputIntext(item.intext);
			// setBgcolor('#f5f5fa');
			// console.log(item.id);
			try {
				// setIsLoading(true);
				const response = await axios.post(urlInlist, { id: item.id });
				if (response.status === 200) {
					setDataInsbm(response.data.data.items);
					// setIsLoading(false);
					// console.log(response.data.data.items);
					return;
				} else {
					throw new Error('Failed to fetch Data');
				}
			} catch (error) {
				console.error(error);
			}
		}
	};

	const onPressPage = () => {
		setisModalVisiblePage(false);
		setisModalVisible(false);
		onPressScan({
			document: inputDocument,
			remark: inputRemark,
			pickingDate: inputPickingDate,
			id: inputid,
			status: inputStatus,
			intext: inputIntext
		})
	};

	const onPressCancel = () => {
		setisModalVisiblePage(false);
		setisModalVisible(false);
	};

	// life cycle
	useEffect(() => {
		const backAction = () => {
			Alert.alert('Hold on!', 'Are you sure you want to go back?', [
				{ text: 'YES', onPress: onPressBack },
				{
					text: 'Cancel',
					onPress: () => null,
					style: 'cancel'
				}
			]);
			return true;
		};
		const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
		return () => backHandler.remove();
	}, []);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ backgroundColor: '#f5f5fa' }}>
				{/* แทบด้านบน แบบปุ่ม */}
				<View style={datalistStyle.viewButtonBar}>
					<View>
						<TouchableOpacity style={datalistStyle.viewButton}>
							<Text style={datalistStyle.textButton}>ใบสั่งซื้อ</Text>
						</TouchableOpacity>
					</View>
				</View>
				{/* แทบใส่ข้อความ */}
				<View style={datalistStyle.viewInputBar}>
					{/* <View style={{ backgroundColor: "rgba(0,0,0,0.3)", height: 50, width: 130, }}>
                        <Picker selectedValue={ selectedValue } style={{ color:"white" }} onValueChange={( itemValue )=>setSelectedValue( itemValue )}>
                            <Picker.Item value="1" label="วันนี้"/>
                            <Picker.Item value="2" label="สัปดาห์นี้"/>
                            <Picker.Item value="3" label="ทั้งหมด"/>
                            <Picker.Item value="4" label="sync"/>
                        </Picker>
                    </View> */}
					<TextInput placeholder="Scan code" style={datalistStyle.textInputScan} maxLength={18} />
				</View>
				{/* เส้นขั้น */}
				<View style={datalistStyle.viewHr} />
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
							<TouchableOpacity style={datalistStyle.toCard} onPress={() => onPressItem(item)}>
								<CardData item={item} />
							</TouchableOpacity>
						)}
					/>
				</View>
			</View>

			<Modal
				animationType="none"
				transparent={true}
				visible={isModalVisible}
				onRequestClose={() => setisModalVisible(false)}
			>
				<View style={datalistModalStyle.container}>
					<View style={datalistModalStyle.viewModal}>
						<View style={datalistModalStyle.viewLayoutText}>
							<DatalistModal
								inputDocument={inputDocument}
								inputRemark={inputRemark}
								inputPickingDate={inputPickingDate}
							/>
						</View>

						<View style={datalistModalStyle.viewLayoutFlatlist}>
							<FlatList
								style={datalistModalStyle.flatlistCard}
								data={DataInsbm}
								keyExtractor={(item) => item.id.toString()}
								renderItem={({ item }) => (
									<View style={datalistModalStyle.viewFLCard}>
										<View>
											<Text style={datalistModalStyle.textTitle}>
												{item.picking_product_name}
											</Text>
										</View>

										<View style={datalistModalStyle.viewQuantity}>
											<View>
												<Text style={datalistModalStyle.textActual}>จำนวน:</Text>
											</View>

											<View style={datalistModalStyle.viewNumber}>
												<Text style={datalistModalStyle.textProductLogsQty}>
													{item.product_logs_qty}
												</Text>
											</View>

											<View>
												<Text style={datalistModalStyle.textRequestQty}>
													/{item.request_qty}
												</Text>
											</View>

											<View style={{ marginLeft: 10 }}>
												<Text style={datalistModalStyle.textPickingProductUnit}>
													{item.picking_product_unit}
												</Text>
											</View>
										</View>
									</View>
								)}
							/>
						</View>

						<View style={{ flex: 0.75, flexDirection: 'row' }}>
							<View>
								<TouchableOpacity onPress={() => onPressPage()} style={datalistModalStyle.toSubmit}>
									<Text style={datalistModalStyle.textSubmit}>ยืนยัน</Text>
								</TouchableOpacity>
							</View>

							<View>
								<TouchableOpacity onPress={() => onPressCancel()} style={datalistModalStyle.toCancel}>
									<Text style={datalistModalStyle.textcancel}>ยกเลิก</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
};
export default DatalistCpn;
