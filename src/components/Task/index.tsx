import { View, Text, TouchableOpacity } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Trash } from 'phosphor-react-native';
import { styles } from './style';

interface Props {
	taskDescription: string;
	handleRemoveTask: (taskDescription: string) => void;
}

export function Task({ taskDescription, handleRemoveTask }: Props) {
	return (
		<View style={styles.container}>
			<BouncyCheckbox
				size={25}
				fillColor="#4EA8DE"
				innerIconStyle={{ borderWidth: 1 }}
				onPress={(isChecked: boolean) => {}}
			/>
			<Text style={styles.text}>{taskDescription}</Text>
			<TouchableOpacity onPress={() => handleRemoveTask(taskDescription)}>
				<Text style={styles.buttonText}>
					<Trash size={20} color="#808080" />
				</Text>
			</TouchableOpacity>
		</View>
	);
}
