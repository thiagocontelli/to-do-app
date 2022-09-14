import { View } from 'react-native';
import { styles } from './style';
import LogoSvg from '../../../svgs/LogoSvg';

export function Header() {
	return (
		<View style={styles.container}>
			<LogoSvg />
		</View>
	);
}
