import { FlatList, Text } from 'react-native';
import { EmptyList } from '../EmptyList';
import { Task } from '../Task';

export function TaskList() {
	const tasks = ['Essa é uma tarefa'];

	return (
		<FlatList
			data={tasks}
			keyExtractor={(item) => item}
			renderItem={({ item }) => <Task key={item} name={item} />}
			showsVerticalScrollIndicator={false}
			ListEmptyComponent={() => <EmptyList />}
		/>
	);
}
