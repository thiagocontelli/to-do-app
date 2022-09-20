import { FlatList, Text } from 'react-native';
import { EmptyList } from '../EmptyList';
import { Task } from '../Task';

interface TaskData {
	description: string;
	isConcluded: boolean;
	id: string;
}

interface Props {
	tasks: string[];
	handleRemoveTask: (taskDescription: string) => void;
	checkboxState: boolean;
	setCheckboxState: React.Dispatch<React.SetStateAction<boolean>>;
	handleCompleteTask: (taskDescription: string) => void;
}

export function TaskList({
	tasks,
	handleRemoveTask,
	checkboxState,
	setCheckboxState,
	handleCompleteTask,
}: Props) {
	return (
		<FlatList
			data={tasks}
			keyExtractor={(item) => item}
			renderItem={({ item }) => (
				<Task
					key={item}
					taskDescription={item}
					handleRemoveTask={() => handleRemoveTask(item)}
					checkboxState={checkboxState}
					setCheckboxState={setCheckboxState}
					handleCompleteTask={handleCompleteTask}
				/>
			)}
			showsVerticalScrollIndicator={false}
			ListEmptyComponent={() => <EmptyList />}
		/>
	);
}
