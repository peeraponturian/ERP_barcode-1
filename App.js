import React from 'react';
import { enableScreens } from 'react-native-screens';
enableScreens();
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Menu from './src/pages/Menu';
import Profile from './src/pages/Profile';
import PMS1 from './src/pages/menus/pms/PMS1';
// import Pmm2 from "./src/Screen/Menu/PM/PM-Menu2";
import SBM1 from './src/pages/menus/sbm/SBM1';
// import Sbm2 from "./src/Screen/Menu/SBM/SBM-Menu2";
// import Wh1 from "./src/Screen/Menu/WM/WH-Menu1";
// import Wh2 from "./src/Screen/Menu/WM/WH-Menu2";
// import Wh3 from "./src/Screen/Menu/WM/WH-Menu3";
// import Wh4 from "./src/Screen/Menu/WM/WH-Menu4";
// import Wh5 from "./src/Screen/Menu/WM/WH-Menu5";
// import Wh6 from "./src/Screen/Menu/WM/WH-Menu6";
// import O1 from "./src/Screen/Menu/Other/O-Menu1";
import Scanbarcode from "./src/pages/scanbarcode"
const Stack = createNativeStackNavigator();
const screenOptionStyle = { headerShown: false };
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={screenOptionStyle}>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Menu" component={Menu} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="PMS1" component={PMS1} />
				{/* <Stack.Screen name="Pmm2" component={Pmm2} /> */}
				<Stack.Screen name="SBM1" component={SBM1} />
				{/* <Stack.Screen name="Sbm2" component={Sbm2} />
				<Stack.Screen name="Wh1" component={Wh1} />
				<Stack.Screen name="Wh2" component={Wh2} />
				<Stack.Screen name="Wh3" component={Wh3} />
				<Stack.Screen name="Wh4" component={Wh4} />
				<Stack.Screen name="Wh5" component={Wh5} />
				<Stack.Screen name="Wh6" component={Wh6} />
				<Stack.Screen name="O1" component={O1} /> */}
				<Stack.Screen name="Scanbarcode" component={Scanbarcode} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
