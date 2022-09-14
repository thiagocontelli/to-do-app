import { Image, View } from 'react-native';
import { styles } from './style';

export function Header() {
	return (
		<View style={styles.container}>
			<Image source={require('../../../assets/Logo.png')} />
		</View>
	);
}
