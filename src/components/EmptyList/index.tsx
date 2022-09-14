import { Text, View } from 'react-native';
import { styles } from './style';
import { ListChecks } from 'phosphor-react-native';

export function EmptyList() {
	return (
		<View style={styles.container}>
			<ListChecks size={60} color="#808080" />
			<Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
			<Text style={styles.text}>
				Crie tarefas e organize seus itens a fazer
			</Text>
		</View>
	);
}
