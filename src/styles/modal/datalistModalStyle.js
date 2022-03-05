import { StyleSheet } from 'react-native';

export const datalistModalStyle = StyleSheet.create({
	// Page
	container: {
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
		flex: 1,
		justifyContent: 'center'
	},
	// View
	viewModal: {
		alignItems: 'center',
		backgroundColor: '#f5f5fa',
		borderColor: '#5787A4',
		borderRadius: 20,
		borderWidth: 3,
		flex: 1,
		flexDirection: 'column',
		margin: 100,
		padding: 5,
		width: 400
	},
	viewLayoutText: {
		flex: 3
	},
	viewLayoutFlatlist: {
		borderBottomWidth: 1,
		borderColor: 'rgba(0,0,0,0.3)',
		borderTopWidth: 1,
		flex: 4
	},
	viewFLCard: {
		alignItems: 'flex-start',
		backgroundColor: '#fff',
		borderColor: 'grey',
		borderRadius: 5,
		borderWidth: 1,
		flexDirection: 'column',
		marginBottom: 10
	},
	viewQuantity: {
		alignSelf: 'flex-end',
		flexDirection: 'row',
		marginBottom: 5,
		marginRight: 10
	},
	viewNumber: {
		marginLeft: 10,
		marginBottom: 5
	},
	// TouchableOpacity
	toSubmit: {
		alignItems: 'center',
		backgroundColor: '#1E90FF',
		borderRadius: 5,
		height: 40,
		marginRight: 10,
		marginTop: 10,
		paddingHorizontal: 20
	},
	toCancel: {
		alignItems: 'center',
		backgroundColor: '#DC143C',
		borderRadius: 5,
		height: 40,
		marginLeft: 10,
		marginTop: 10,
		paddingHorizontal: 20
	},
	// Text
	textTitle: {
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 10,
		marginVertical: 3,
		width: 315
	},
	textActual: {
		color: 'rgba(0,0,0,0.5)',
		fontSize: 15,
		fontWeight: 'bold'
	},
	textProductLogsQty: {
		color: '#000',
		fontSize: 15,
		fontWeight: 'bold',
		textAlign: 'right'
	},
	textRequestQty: {
		color: '#000',
		fontSize: 15,
		fontWeight: 'bold'
	},
	textPickingProductUnit: {
		color: 'rgba(0,0,0,0.5)',
		fontSize: 15,
		fontWeight: 'bold'
	},
	textSubmit: {
		color: '#FFFFFF',
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 1,
		marginVertical: 7
	},
	textcancel: {
		color: '#FFFFFF',
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 1,
		marginVertical: 7
	},
	// Flatlist
	flatlistCard: {
		fontWeight: 'bold',
		height: 50,
		marginTop: 5,
		marginBottom: 5,
		width: 340
	},
	// Component
	// View
	viewTitleModal: {
		flex: 1
	},
	viewLayout: {
		flexDirection: 'row'
	},
	view: {
		height: 30,
		marginBottom: 5,
		marginTop: 5,
		width: 100
	},
	viewDisplay:{
		backgroundColor: '#fff',
		borderColor: '#D3D3D3',
		borderWidth: 1,
		height: 30,
		marginBottom: 5,
		marginTop: 5,
		width: 240
	},
	// Text
	textTitleModal: {
		color: '#5787A4',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
		marginTop: 10,
		paddingRight: 255,
		textAlign: 'center'
	},
	text:{
		color: '#5787A4',
		fontWeight: 'bold',
		padding: 3
	},
	textDisplay:{
		color: '#5787A4',
		justifyContent: 'center',
		padding: 3,
		textAlign: 'center'
	},
	// ScrollView
	svDisplay:{
		backgroundColor: '#fff',
		borderColor: '#D3D3D3',
		borderWidth: 1,
		height: 30,
		marginBottom: 5,
		marginTop: 5,
		width: 100
	},
});
