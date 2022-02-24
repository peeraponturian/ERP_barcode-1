// Library
import React from 'react';
// Framework
import { ScrollView, Text, View } from 'react-native';
// Component
import HeadBar from '../components/headbar/headbarDetailCpn';
import DetailCpn from '../components/detailCpn';
// Style
import { detailStyle } from '../styles/detailStyle';

export default class Detail extends React.Component {
	render() {
		return (
			<ScrollView>
				<HeadBar onPressUser={() => this.props.navigation.navigate('Profile')} />
				<View>
					<Text style={detailStyle.textMenu}>Purchasing Management</Text>
				</View>
				<View style={detailStyle.viewMenu}>
					<DetailCpn onPress={() => this.props.navigation.navigate('Pm1')} title="รับสินค้า" />

					<DetailCpn // onPress={ () => this.props.navigation.navigate( "Pmm2" ) }
					title="ใบขนขาเข้า" />
				</View>

				<View>
					<Text style={detailStyle.textMenu}>Sales & Billing Management</Text>
				</View>
				<View style={detailStyle.viewMenu}>
					<DetailCpn // onPress={ () => this.props.navigation.navigate( "Sbm1" ) }
					title="จ่ายสินค้า" />

					<DetailCpn // onPress={ () => this.props.navigation.navigate( "Sbm2" ) }
					title="ใบขนขาออก" />
				</View>

				<View>
					<Text style={detailStyle.textMenu}>Warehouse Management</Text>
				</View>
				<View style={detailStyle.viewMenu}>
					<DetailCpn // onPress={ () => this.props.navigation.navigate( "Wh1" ) }
					title="เบิกสินค้า" />

					<DetailCpn // onPress={ () => this.props.navigation.navigate( "Wh2" ) }
					title="โอนสินค้าออก" />
				</View>

				<View style={detailStyle.viewMenu}>
					<DetailCpn // onPress={ () => this.props.navigation.navigate( "Wh3" ) }
					title="โอนสินค้าเข้า" />

					<DetailCpn // onPress={ () => this.props.navigation.navigate( "Wh4" ) }
					title="รับสินค้าผลิตเสร็จ" />
				</View>

				<View style={detailStyle.viewMenu}>
					<DetailCpn // onPress={ () => this.props.navigation.navigate( "Wh5" ) }
					title="รับคืนจากการเบิก" />

					<DetailCpn // onPress={ () => this.props.navigation.navigate( "Wh6" ) }
					title="ตรวจนับสินค้า" />
				</View>

				<View>
					<Text style={detailStyle.textMenu}>อื่นๆ</Text>
				</View>
				<View style={detailStyle.viewMenu}>
					<DetailCpn // onPress={ () => this.props.navigation.navigate( "O1" ) }
					title="พิมพ์บาร์โค้ด" />
				</View>
			</ScrollView>
		);
	}
}
