import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 24,
		marginRight: 24,
		marginTop: 32,
		marginBottom: 20,
	},
	infoContainer: {
		flexDirection: 'row',
	},
	info1: {
		color: '#4EA8DE',
		fontSize: 14,
		fontWeight: 'bold',
		marginRight: 8,
	},
	info2: {
		color: '#8284FA',
		fontSize: 14,
		fontWeight: 'bold',
		marginRight: 8,
	},
	counter: {
		color: '#FFFFFF',
		fontWeight: 'bold',
		backgroundColor: '#333333',
		paddingBottom: 2,
		paddingTop: 2,
		paddingRight: 8,
		paddingLeft: 8,
		borderRadius: 999,
	},
});
