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
import { useRoute } from '@react-navigation/native';
// Component
import HeadbarCpn from '../../components/headbar/headbarCpn';

export default function Scanbarcode({ navigation, route }) {
	return (
		<View style={{ flex: 1 }}>
			<HeadbarCpn
				onPressBack={() => navigation.goBack()}
				onPressDetail={() => navigation.navigate('Menu')}
				onPressUser={() => navigation.navigate('Profile')}
				Title={'รับสินค้า'}
			/>
			<View style={{ height: 650 }}>
				<View style={{ marginLeft: 100, marginTop: 100 }}>
					<Text>text test </Text>
				</View>
			</View>
		</View>
	);
}
