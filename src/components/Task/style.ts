import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#262626',
		borderRadius: 8,
		borderColor: '#333333',
		borderStyle: 'solid',
		borderWidth: 1,
		paddingTop: 12,
		paddingBottom: 12,
		marginLeft: 24,
		marginRight: 24,
		marginBottom: 8,
	},
	text: {
		fontSize: 14,
		color: '#F2F2F2',
		width: 220,
	},
	buttonText: {
		width: 32,
		height: 32,
		// borderRadius: 4,
		// backgroundColor: '#333333',
		textAlign: 'center',
		textAlignVertical: 'center',
	},
});
