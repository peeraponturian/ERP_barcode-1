import { StyleSheet } from 'react-native';

export const datalistModalStyle = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
		flex: 1,
		justifyContent: 'center'
	},
	// View
	view: {
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
		borderColor: '#5787A4',
		// borderBottomLeftRadius: 5,
		borderRadius: 5,
		// borderTopLeftRadius: 5,
		// borderWidth: 1,
		height: 40,
		marginRight: 10,
		marginTop: 10,
		paddingHorizontal: 20
	},
	toCancel: {
		alignItems: 'center',
		backgroundColor: '#A9A9A9',
		borderColor: '#5787A4',
		// borderBottomRightRadius: 5,
		borderRadius: 5,
		// borderTopRightRadius: 5,
		// borderWidth: 1,
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
	}
});
