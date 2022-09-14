import { Text, View } from 'react-native';
import { styles } from './style';

interface Props {
	created: number;
	concludedCounter: number;
}

export function Info({ created, concludedCounter }: Props) {
	return (
		<View style={styles.container}>
			<View style={styles.infoContainer}>
				<Text style={styles.info1}>Criadas</Text>
				<Text style={styles.counter}>{created}</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.info2}>Concluídas</Text>
				<Text style={styles.counter}>{concludedCounter}</Text>
			</View>
		</View>
	);
}
