import { FlatList, Text } from 'react-native';
import { EmptyList } from '../EmptyList';
import { Task } from '../Task';

interface Props {
	tasks: string[];
	handleRemoveTask: (taskDescription: string) => void;
}

export function TaskList({ tasks, handleRemoveTask }: Props) {
	return (
		<FlatList
			data={tasks}
			keyExtractor={(item) => item}
			renderItem={({ item }) => (
				<Task
					key={item}
					taskDescription={item}
					handleRemoveTask={handleRemoveTask}
				/>
			)}
			showsVerticalScrollIndicator={false}
			ListEmptyComponent={() => <EmptyList />}
		/>
	);
}
