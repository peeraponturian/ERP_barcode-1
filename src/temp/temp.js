                        {/* <Modal
							animationType="none"
							transparent={true}
							visible={modalVisible}
							onRequestClose={() => {
								Alert.alert('Modal has been closed.');
								this.setModalVisible(!modalVisible);
							}}
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
											<TouchableOpacity
												onPress={() => onPressPage()}
												style={datalistModalStyle.toSubmit}
											>
												<Text style={datalistModalStyle.textSubmit}>ยืนยัน</Text>
											</TouchableOpacity>
										</View>

										<View>
											<TouchableOpacity
												onPress={() => onPressCancel()}
												style={datalistModalStyle.toCancel}
											>
												<Text style={datalistModalStyle.textcancel}>ยกเลิก</Text>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
						</Modal> */}

                                {/* <View style={{ backgroundColor: "rgba(0,0,0,0.3)", height: 50, width: 130, }}>
									<Picker selectedValue={ selectedValue } style={{ color:"white" }} onValueChange={( itemValue )=>setSelectedValue( itemValue )}>
										<Picker.Item value="1" label="วันนี้"/>
										<Picker.Item value="2" label="สัปดาห์นี้"/>
										<Picker.Item value="3" label="ทั้งหมด"/>
										<Picker.Item value="4" label="sync"/>
									</Picker>
								</View> */}