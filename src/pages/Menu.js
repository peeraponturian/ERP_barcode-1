// Library
import React from 'react';
// Framework
import { ScrollView, Text, View } from 'react-native';
// Component
import HeadBar from '../components/headbar/headbarDetailCpn';
import MenuCpn from '../components/menuCpn';
// Style
import { menuStyle } from '../styles/menuStyle';

export default class Menu extends React.Component {
	render() {
		return (
			<ScrollView>
				<HeadBar onPressUser={() => this.props.navigation.navigate('Profile')} />
				<View>
					<Text style={menuStyle.textMenu}>Purchasing Management</Text>
				</View>
				<View style={menuStyle.viewMenu}>
					<MenuCpn onPress={() => this.props.navigation.navigate('Pm1')} title="รับสินค้า" />

					<MenuCpn // onPress={ () => this.props.navigation.navigate( "Pmm2" ) }
					title="ใบขนขาเข้า" />
				</View>

				<View>
					<Text style={menuStyle.textMenu}>Sales & Billing Management</Text>
				</View>
				<View style={menuStyle.viewMenu}>
					<MenuCpn // onPress={ () => this.props.navigation.navigate( "Sbm1" ) }
					title="จ่ายสินค้า" />

					<MenuCpn // onPress={ () => this.props.navigation.navigate( "Sbm2" ) }
					title="ใบขนขาออก" />
				</View>

				<View>
					<Text style={menuStyle.textMenu}>Warehouse Management</Text>
				</View>
				<View style={menuStyle.viewMenu}>
					<MenuCpn // onPress={ () => this.props.navigation.navigate( "Wh1" ) }
					title="เบิกสินค้า" />

					<MenuCpn // onPress={ () => this.props.navigation.navigate( "Wh2" ) }
					title="โอนสินค้าออก" />
				</View>

				<View style={menuStyle.viewMenu}>
					<MenuCpn // onPress={ () => this.props.navigation.navigate( "Wh3" ) }
					title="โอนสินค้าเข้า" />

					<MenuCpn // onPress={ () => this.props.navigation.navigate( "Wh4" ) }
					title="รับสินค้าผลิตเสร็จ" />
				</View>

				<View style={menuStyle.viewMenu}>
					<MenuCpn // onPress={ () => this.props.navigation.navigate( "Wh5" ) }
					title="รับคืนจากการเบิก" />

					<MenuCpn // onPress={ () => this.props.navigation.navigate( "Wh6" ) }
					title="ตรวจนับสินค้า" />
				</View>

				<View>
					<Text style={menuStyle.textMenu}>อื่นๆ</Text>
				</View>
				<View style={menuStyle.viewMenu}>
					<MenuCpn // onPress={ () => this.props.navigation.navigate( "O1" ) }
					title="พิมพ์บาร์โค้ด" />
				</View>
			</ScrollView>
		);
	}
}
