// Library
import React, { useState, useEffect } from 'react';
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
import HeadbarCpn from '../../components/headbar/headbarCpn';
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

export default class Scanbarcode extends React.Component {
	render() {
		const { inputDocument, inputRemark, inputPickingDate, secondData } = this.props.route.params;
		return (
			<View style={{ flex: 1 }}>
				<HeadbarCpn
					onPressBack={() => this.props.navigation.goBack()}
					onPressDetail={() => this.props.navigation.navigate('Menu')}
					onPressUser={() => this.props.navigation.navigate('Profile')}
					Title={'สำนักงานใหญ่'}
				/>
				<View>
					<View
						style={{
							alignItems: 'center',
							flex: 1,
							flexDirection: 'column'
							// padding: 5
						}}
					>
						<KeyboardAvoidingView behavior="position">
							<View
								style={{
									height: 280
									// paddingLeft: 10
								}}
							>
								<View
									style={{
										fontWeight: 'bold',
										height: 65,
										marginBottom: 5,
										width: 400
									}}
								>
									<Text
										style={{
											color: '#5787A4',
											fontWeight: 'bold',
											fontSize: 38,
											marginBottom: 10,
											marginTop: 10
										}}
									>
										สแกนบาร์โค้ด
									</Text>
								</View>

								<View
									style={{
										flexDirection: 'row',
										marginTop: 10,
										paddingLeft: 20,
										width: 445
									}}
								>
									<View
										style={{
											height: 30,
											marginTop: 5,
											marginBottom: 5,
											width: 100
										}}
									>
										<Text
											style={{
												color: '#5787A4',
												fontWeight: 'bold'
											}}
										>
											เลขที่เอกสาร
										</Text>
									</View>

									<ScrollView
										style={{
											backgroundColor: '#FFF',
											borderColor: 'rgba(0,0,0,0.1)',
											borderWidth: 1,
											height: 30,
											marginTop: 5,
											marginBottom: 5,
											width: 325
										}}
									>
										<Text
											style={{
												color: '#5787A4',
												// fontWeight: "bold",
												justifyContent: 'center',
												padding: 3,
												textAlign: 'center'
											}}
										>
											{JSON.stringify(inputDocument)}
										</Text>
									</ScrollView>
								</View>

								<View
									style={{
										flexDirection: 'row',
										marginTop: 10,
										paddingLeft: 20,
										width: 445
									}}
								>
									<View
										style={{
											height: 30,
											marginTop: 5,
											marginBottom: 5,
											width: 100
										}}
									>
										<Text
											style={{
												color: '#5787A4',
												fontWeight: 'bold'
											}}
										>
											ใบสั่งซื้อ
										</Text>
									</View>

									<View
										style={{
											backgroundColor: '#FFF',
											borderColor: 'rgba(0,0,0,0.1)',
											borderWidth: 1,
											height: 30,
											marginTop: 5,
											marginBottom: 5,
											width: 325
										}}
									>
										<Text
											style={{
												color: '#5787A4',
												// fontWeight: "bold",
												justifyContent: 'center',
												padding: 3,
												textAlign: 'center'
											}}
										>
											{JSON.stringify(inputDocument)}
										</Text>
									</View>
								</View>

								<View
									style={{
										flexDirection: 'row',
										marginTop: 10,
										paddingLeft: 20,
										width: 445
									}}
								>
									<View
										style={{
											height: 30,
											marginTop: 5,
											marginBottom: 5,
											width: 100
										}}
									>
										<Text
											style={{
												color: '#5787A4',
												fontWeight: 'bold'
											}}
										>
											ผู้ขาย
										</Text>
									</View>

									<View
										style={{
											backgroundColor: '#FFF',
											borderColor: 'rgba(0,0,0,0.1)',
											borderWidth: 1,
											height: 30,
											marginTop: 5,
											marginBottom: 5,
											width: 325
										}}
									>
										<Text
											style={{
												color: '#5787A4',
												// fontWeight: "bold",
												justifyContent: 'center',
												padding: 3,
												textAlign: 'center'
											}}
										>
											{JSON.stringify(inputRemark)}
										</Text>
									</View>
								</View>

								<View
									style={{
										flexDirection: 'row',
										marginTop: 10,
										paddingLeft: 20,
										width: 445
									}}
								>
									<View
										style={{
											height: 30,
											marginTop: 5,
											marginBottom: 5,
											width: 100
										}}
									>
										<Text
											style={{
												color: '#5787A4',
												fontWeight: 'bold'
											}}
										>
											วันที่เอกสาร
										</Text>
									</View>

									<View
										style={{
											backgroundColor: '#FFF',
											borderColor: 'rgba(0,0,0,0.1)',
											borderWidth: 1,
											height: 30,
											marginTop: 5,
											marginBottom: 5,
											width: 325
										}}
									>
										<Text
											style={{
												color: '#5787A4',
												// fontWeight: "bold",
												justifyContent: 'center',
												padding: 3,
												textAlign: 'center'
											}}
										>
											{JSON.stringify(inputPickingDate)}
										</Text>
									</View>
								</View>
							</View>

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
													<FontAwesomeIcon
														icon={faClipboardList}
														color={'orange'}
														size={25}
													/>
													<Text style={InsidePage.textFlatlistTitle}>สินค้า :</Text>
													<Text style={InsidePage.textFlatlistTitleInput}>
														{item.picking_product_name}
													</Text>
												</View>
												<View style={[ InsidePage.viewCode, { flexDirection: 'row' } ]}>
													<Text style={InsidePage.textFlatlistCode}>Code :</Text>
													<Text style={InsidePage.textFlatlistCodeInput}>
														{item.item_code}
													</Text>
												</View>
												<View style={[ InsidePage.viewCode, { flexDirection: 'row' } ]}>
													<Text style={InsidePage.textFlatlistBarcode}>Barcode :</Text>
													<Text style={InsidePage.textFlatlistBarcodeInput}>
														{item.picking_barcode}
													</Text>
												</View>
												<View style={[ InsidePage.viewCode, { flexDirection: 'row' } ]}>
													<Text style={InsidePage.textFlatlistLot}>Lot :</Text>
													<Text style={InsidePage.textFlatlistLotInput}>
														{item.picking_lot}
													</Text>
												</View>
												<View style={[ InsidePage.viewCode, { flexDirection: 'row' } ]}>
													<Text style={InsidePage.textFlatlistSerial}>Serial :</Text>
													<Text style={InsidePage.textFlatlistSerialInput}>
														{item.picking_serial_number}
													</Text>
												</View>
												<View style={[ InsidePage.viewCode, { flexDirection: 'row' } ]}>
													<Text style={InsidePage.textFlatlistLocation}>Location :</Text>
													<Text style={InsidePage.textFlatlistLocationInput}>
														{item.picking_location_code}
													</Text>
												</View>
												<View style={InsidePage.viewData}>
													<View style={[ InsidePage.viewDataIn, { flexDirection: 'row' } ]}>
														<View
															style={[ InsidePage.viewDataIn1, { flexDirection: 'row' } ]}
														/>
														<View
															style={[ InsidePage.viewDataIn2, { flexDirection: 'row' } ]}
														>
															<View style={InsidePage.viewDataIn2}>
																<View
																	style={[
																		InsidePage.viewDataIn21,
																		{ flexDirection: 'row' }
																	]}
																>
																	<View style={InsidePage.viewDataIn211}>
																		<Text style={InsidePage.textFlatlistQuantity}>
																			{textQuantity} :
																		</Text>
																	</View>
																	<View
																		style={[
																			InsidePage.viewDataIn212,
																			{ flexDirection: 'row' }
																		]}
																	>
																		<View style={InsidePage.viewDataIn2121}>
																			<Text
																				style={
																					InsidePage.textFlatlistNumberColor
																				}
																			>
																				{setConstqty(DataInsbm, DataIdInSend, item.id, DataPLQInSend)}.000
																			</Text>
																		</View>
																		<View style={InsidePage.viewDataIn2122}>
																			<Text style={InsidePage.textFlatlistNumber}>
																				/{item.picking_request_qty}
																			</Text>
																		</View>
																	</View>
																	<View style={InsidePage.viewDataIn213}>
																		<Text style={InsidePage.textFlatlistType}>
																			{item.picking_product_unit}
																		</Text>
																	</View>
																	<View style={InsidePage.viewDataIn214}>
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
			</View>
		);
	}
}
