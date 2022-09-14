import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export function NewTask() {
	return (
		<View style={styles.formContainer}>
			<TextInput
				style={styles.input}
				placeholder="Adicione uma nova tarefa"
				placeholderTextColor={'#808080'}
			/>
			<TouchableOpacity style={styles.addButton}>
				<Text>+</Text>
			</TouchableOpacity>
		</View>
	);
}
