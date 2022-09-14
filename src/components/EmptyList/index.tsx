import { Text, View } from 'react-native';
import { styles } from './style';

export function EmptyList() {
	return (
		<View style={styles.container}>
			<Text style={styles.icon}>📝</Text>
			<Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
			<Text style={styles.text}>
				Crie tarefas e organize seus itens a fazer
			</Text>
		</View>
	);
}
