import { View, Text, TouchableOpacity } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { styles } from './style';

interface Props {
	name: string;
}

export function Task({ name }: Props) {
	return (
		<View style={styles.container}>
			<BouncyCheckbox
				size={25}
				fillColor="#4EA8DE"
				innerIconStyle={{ borderWidth: 1 }}
				onPress={(isChecked: boolean) => {}}
			/>
			<Text style={styles.text}>{name}</Text>
			<TouchableOpacity>
				<Text style={styles.buttonText}>🗑</Text>
			</TouchableOpacity>
		</View>
	);
}
