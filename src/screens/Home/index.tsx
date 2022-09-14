import { View } from 'react-native';
import { Header } from '../../components/Header';
import { Info } from '../../components/Info';
import { NewTask } from '../../components/NewTask';
import { TaskList } from '../../components/TaskList';
import { styles } from './style';

export function Home() {
	return (
		<View style={styles.main}>
			<Header />
			<NewTask />
			<Info />
			<TaskList />
		</View>
	);
}
