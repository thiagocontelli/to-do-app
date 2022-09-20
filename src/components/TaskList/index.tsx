import { FlatList, Text } from 'react-native';
import { EmptyList } from '../EmptyList';
import { Task } from '../Task';

interface TaskData {
	description: string;
	isConcluded: boolean;
	id: string;
}

interface Props {
	tasks: TaskData[];
	handleRemoveTask: (taskDescription: string) => void;
	checkboxState: boolean;
	setCheckboxState: React.Dispatch<React.SetStateAction<boolean>>;
	concludedCounter: number;
	setConcludedCounter: React.Dispatch<React.SetStateAction<number>>;
	handleCompleteTask: (taskDescription: string) => void;
}

export function TaskList({
	tasks,
	handleRemoveTask,
	checkboxState,
	setCheckboxState,
	concludedCounter,
	setConcludedCounter,
	handleCompleteTask,
}: Props) {
	return (
		<FlatList
			data={tasks}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<Task
					key={item.id}
					taskIsConcluded={item.isConcluded}
					taskId={item.id}
					taskDescription={item.description}
					handleRemoveTask={handleRemoveTask}
					checkboxState={checkboxState}
					setCheckboxState={setCheckboxState}
					handleCompleteTask={handleCompleteTask}
					concludedCounter={concludedCounter}
					setConcludedCounter={setConcludedCounter}
				/>
			)}
			showsVerticalScrollIndicator={false}
			ListEmptyComponent={() => <EmptyList />}
		/>
	);
}
