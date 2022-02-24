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

const Datalist = ({ dataObject }) => {
	const [ refreshing, setRefreshing ] = React.useState(false);
	const [ selectedValue, setSelectedValue ] = useState('3');

	// const baseUrl = 'http://192.168.1.25/';
	// const kettypeRefrech = { "picking_type":"sbm" }
	// const urlRefrech = `${baseUrl}erp_barcode/backend/picking/get_hd`;
	// const onRefresh = React.useCallback( async() => {
	//     setRefreshing( true );
	//     try{
	//         const responseRefrech = await axios.post( urlRefrech,kettypeRefrech )
	//         if(responseRefrech.status === 200){
	//             setDatasbm( responseRefrech.data.data.items );
	//             console.log( responseRefrech.data.data.items );
	//             wait(0).then(() => setRefreshing( false ));
	//         }
	//         else{
	//             throw new Error( "Failed to fetch Data" );
	//         }
	//     }
	//     catch( error ){
	//         console.error( error )
	//     }
	// }, []);
    
	const onRefresh = () => {
		Alert.alert('คำเตือน', 'ใบงาน กำลังดำเนินการเช็คสินค้าอยู่', [
			{ text: 'ตกลง', onPress: () => console.log('ตกลง', { dataObject }) }
		]);
	};

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
							width: 460,
                            
						}}
						maxLength={18}
					/>
				</View>
				<View
					style={{ borderColor: 'rgba(0,0,0,0.2)', borderTopWidth: 0.5, marginLeft: 10, marginRight: 10 }}
				/>
				<ScrollView
					refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
					style={{ margin: 10 }}
				>
					<View>
						<FlatList
							data={dataObject}
							keyExtractor={(item) => item.id.toString()}
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
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};
export default Datalist;
