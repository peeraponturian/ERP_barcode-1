// Library
import React from 'react';
// Framework
import axios from 'axios';
import {
	Alert,
	BackHandler,
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
// Component
import HeadbarCpn from '../components/headbar/headbarCpn';
import ScanLayout from '../components/scan/scanlayout'
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
	render() {
		const { inputDocument, inputPickingDate, inputRemark, secondData } = this.props.route.params;
		return (
			<View style={{ flex: 1 }}>
				<HeadbarCpn
					onPressBack={() => this.props.navigation.goBack()}
					onPressDetail={() => this.props.navigation.navigate('Menu')}
					onPressUser={() => this.props.navigation.navigate('Profile')}
					Title={'สำนักงานใหญ่'}
				/>
				<View style={scanbarcodeStyle.content}>
					<KeyboardAvoidingView behavior="position">
						<ScanLayout
							inputDocument={JSON.stringify(inputDocument)}
							inputPickingDate={JSON.stringify(inputPickingDate)}
							inputRemark={JSON.stringify(inputRemark)}
						/>
						{/* Input Scanbarcode */}
						<View
							style={{
								alignSelf: 'center',
								flexDirection: 'row',
								height: 70
							}}
						>
							<FontAwesomeIcon icon={faBarcode} size={70} style={{ marginRight: 5 }} />
							<TextInput
								placeholder="Scan Code"
								style={{
									backgroundColor: '#FFF',
									fontSize: 20,
									marginTop: 5,
									marginBottom: 5,
									height: 60,
									width: 380,
									borderColor: '#5787A4',
									borderWidth: 2,
									borderRadius: 2.5,
									textAlign: 'center',
									color: '#5787A4'
								}}
							/>
						</View>

						{/* Button */}
						<View
							style={{
								alignSelf: 'center',
								flexDirection: 'row',
								height: 60
							}}
						>
							<View>
								<TouchableOpacity
									// onPress={() => onPressPopupSaveOpen()}
									style={{
										alignItems: 'center',
										backgroundColor: '#008000',
										borderBottomLeftRadius: 5,
										borderTopLeftRadius: 5,
										height: 40,
										marginTop: 10,
										paddingHorizontal: 20,
										width: 105
									}}
								>
									<Text
										style={{
											color: 'white',
											fontSize: 15,
											fontWeight: 'bold',
											marginLeft: 1,
											marginVertical: 7
										}}
									>
										ปิดใบงาน
									</Text>
								</TouchableOpacity>
							</View>

							<View>
								<TouchableOpacity
									// onPress={() => onPressPopupBreakOpen()}
									style={{
										alignItems: 'center',
										backgroundColor: '#FFD700',
										height: 40,
										marginTop: 10,
										paddingHorizontal: 20,
										width: 105
									}}
								>
									<Text
										style={{
											color: 'black',
											fontSize: 15,
											fontWeight: 'bold',
											marginLeft: 1,
											marginVertical: 7
										}}
									>
										พักใบงาน
									</Text>
								</TouchableOpacity>
							</View>

							<View>
								<TouchableOpacity
									// onPress={() => onPressPopupCancelOpen()}
									style={{
										alignItems: 'center',
										backgroundColor: '#DC143C',
										borderBottomRightRadius: 5,
										borderTopRightRadius: 5,
										height: 40,
										marginTop: 10,
										paddingHorizontal: 20,
										width: 105
									}}
								>
									<Text
										style={{
											color: 'white',
											fontSize: 15,
											fontWeight: 'bold',
											marginLeft: 1,
											marginVertical: 7
										}}
									>
										ยกเลิก
									</Text>
								</TouchableOpacity>
							</View>
						</View>

						{/* FlatList */}
						<View style={{ height: 330, alignSelf: 'center' }}>
							<FlatList
								style={{
									marginTop: 5,
									marginBottom: 5,
									fontWeight: 'bold',
									height: 50,
									width: 425
								}}
								data={secondData}
								keyExtractor={(item) => item.id.toString()}
								renderItem={({ item }) => (
									<TouchableOpacity>
										{/* onPress={() => onPressItemtwo(item)} */}
										<View
											style={{
												flexDirection: 'column',
												alignItems: 'flex-start',
												backgroundColor: '#fff',
												borderColor: 'grey',
												borderRadius: 5,
												borderWidth: 1,
												marginBottom: 10
											}}
										>
											<View
												style={{
													flexDirection: 'row',
													marginBottom: 5,
													marginLeft: 5,
													marginTop: 5
												}}
											>
												<FontAwesomeIcon icon={faClipboardList} color={'orange'} size={25} />
												<Text
													style={{
														fontSize: 15,
														fontWeight: 'bold',
														marginLeft: 10,
														marginVertical: 3,
														width: 50
													}}
												>
													สินค้า :
												</Text>
												<Text
													style={{
														fontSize: 15,
														marginVertical: 3,
														width: 320
													}}
												>
													{item.picking_product_name}
												</Text>
											</View>

											<View style={{ flexDirection: 'row' }}>
												<Text
													style={{
														fontSize: 15,
														fontWeight: 'bold',
														marginLeft: 10,
														width: 45
													}}
												>
													Code :
												</Text>
												<Text
													style={{
														fontSize: 15,
														marginLeft: 10,
														width: 325
													}}
												>
													{item.item_code}
												</Text>
											</View>

											<View style={{ flexDirection: 'row' }}>
												<Text
													style={{
														fontSize: 15,
														fontWeight: 'bold',
														marginLeft: 10,
														width: 65
													}}
												>
													Barcode :
												</Text>
												<Text
													style={{
														fontSize: 15,
														marginLeft: 10,
														width: 315
													}}
												>
													{item.picking_barcode}
												</Text>
											</View>

											<View style={{ flexDirection: 'row' }}>
												<Text
													style={{
														fontSize: 15,
														fontWeight: 'bold',
														marginLeft: 10,
														width: 100
													}}
												>
													Lot :
												</Text>
												<Text
													style={{
														fontSize: 15,
														marginLeft: 10,
														width: 270
													}}
												>
													{item.picking_lot}
												</Text>
											</View>

											<View style={{ flexDirection: 'row' }}>
												<Text
													style={{
														fontSize: 15,
														fontWeight: 'bold',
														marginLeft: 10,
														width: 100
													}}
												>
													Serial :
												</Text>
												<Text
													style={{
														fontSize: 15,
														marginLeft: 10,
														width: 270
													}}
												>
													{item.picking_serial_number}
												</Text>
											</View>

											<View style={{ flexDirection: 'row' }}>
												<Text
													style={{
														fontSize: 15,
														fontWeight: 'bold',
														marginLeft: 10,
														width: 100
													}}
												>
													Location :
												</Text>
												<Text
													style={{
														fontSize: 15,
														fontWeight: 'bold',
														marginLeft: 10,
														width: 270
													}}
												>
													{item.picking_location_code}
												</Text>
											</View>

											<View
												style={{
													alignItems: 'flex-end',
													marginBottom: 5,
													width: 410
												}}
											>
												<View style={{ flexDirection: 'row', width: 400 }}>
													<View style={{ flexDirection: 'row', width: 100 }} />
													<View
														style={{
															flexDirection: 'row',
															alignItems: 'flex-end',
															width: 300
														}}
													>
														<View
															style={{
																alignItems: 'flex-end',
																width: 300
															}}
														>
															<View style={{ flexDirection: 'row', width: 275 }}>
																<View style={{ width: 55 }}>
																	<Text
																		style={{
																			color: 'rgba(0,0,0,0.5)',
																			fontSize: 15,
																			fontWeight: 'bold'
																		}}
																	>
																		จำนวน :
																	</Text>
																</View>

																<View style={{ flexDirection: 'row', width: 150 }}>
																	<View style={{ width: 70 }}>
																		<Text
																			style={{
																				color: '#FFA500',
																				fontSize: 15,
																				fontWeight: 'bold',
																				textAlign: 'right'
																			}}
																		>
																			{/* {setConstqty(DataInsbm, DataIdInSend, item.id, DataPLQInSend)} */}.000
																		</Text>
																	</View>

																	<View style={{ width: 80 }}>
																		<Text
																			style={{
																				color: '#000',
																				fontSize: 15,
																				fontWeight: 'bold'
																			}}
																		>
																			/{item.picking_request_qty}
																		</Text>
																	</View>
																</View>

																<View style={{ width: 55 }}>
																	<Text
																		style={{
																			color: 'rgba(0,0,0,0.5)',
																			fontSize: 15,
																			fontWeight: 'bold'
																		}}
																	>
																		{item.picking_product_unit}
																	</Text>
																</View>

																<View
																	style={{
																		marginTop: 3,
																		width: 15
																	}}
																>
																	<FontAwesomeIcon icon={faInfoCircle} />
																</View>
															</View>
														</View>
													</View>
												</View>
											</View>
										</View>
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
