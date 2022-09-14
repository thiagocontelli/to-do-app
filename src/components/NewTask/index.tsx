import { TextInput, TouchableOpacity, View } from 'react-native';
import { PlusCircle } from 'phosphor-react-native';
import { styles } from './style';

interface Props {
	onInputChange: (text: string) => void;
	handleAddTask: () => void;
	inputText: string;
}

export function NewTask({ onInputChange, handleAddTask, inputText }: Props) {
	return (
		<View style={styles.formContainer}>
			<TextInput
				style={styles.input}
				placeholder="Adicione uma nova tarefa"
				placeholderTextColor={'#808080'}
				onChangeText={onInputChange}
				value={inputText}
			/>
			<TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
				<PlusCircle size={20} color="#ffffff" />
			</TouchableOpacity>
		</View>
	);
}
