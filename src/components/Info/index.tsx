import { Text, View } from 'react-native';
import { styles } from './style';

interface Props {
	numberOfTasksCreated: number;
	numberOfTasksCompleted: number;
}

export function Info({ numberOfTasksCreated, numberOfTasksCompleted }: Props) {
	return (
		<View style={styles.container}>
			<View style={styles.infoContainer}>
				<Text style={styles.info1}>Criadas</Text>
				<Text style={styles.counter}>{numberOfTasksCreated}</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.info2}>Concluídas</Text>
				<Text style={styles.counter}>{numberOfTasksCompleted}</Text>
			</View>
		</View>
	);
}
