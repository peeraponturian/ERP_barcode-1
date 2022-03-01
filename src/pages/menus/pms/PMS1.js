// Library
import React from 'react';
// Framework
import axios from 'axios';
import { Text, View } from 'react-native';
// Component
import HeadbarCpn from '../../../components/headbar/headbarCpn';
import Datalist from '../../../components/datalistCpn';
// Icon

// Style

const baseUrl = 'http://192.168.1.25/';
const keytype = { picking_type: 'pms' };
const url = `${baseUrl}erp_barcode/backend/picking/get_hd`;

export default class PMS1 extends React.Component {
	state = {
		persons: {},
		refrech: 'sbm'
	};
	// lifecycle
	componentDidMount() {
		axios.post(url, keytype).then((res) => {
			const persons = res.data.data.items;
			this.setState({ persons });
			// console.log( persons )
		});
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<HeadbarCpn
					onPressBack={() => this.props.navigation.goBack()}
					onPressDetail={() => this.props.navigation.navigate('Menu')}
					onPressUser={() => this.props.navigation.navigate('Profile')}
					Title={'รับสินค้า'}
				/>
				<View style={{ height: 650 }}>
					<Datalist
						dataObject={this.state.persons}
						dataRefrech={this.state.refrech}
						onPressBack={() => this.props.navigation.navigate('Menu')}
						onPressScan={() => this.props.navigation.navigate('Scanbarcode')}
					/>
				</View>
			</View>
		);
	}
}
