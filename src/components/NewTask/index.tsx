import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { PlusCircle } from 'phosphor-react-native';
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
				<PlusCircle size={20} color="#ffffff" />
			</TouchableOpacity>
		</View>
	);
}
