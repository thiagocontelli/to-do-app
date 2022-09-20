import { useState } from 'react';
import { Alert, View } from 'react-native';
import { Header } from '../../components/Header';
import { Info } from '../../components/Info';
import { NewTask } from '../../components/NewTask';
import { TaskList } from '../../components/TaskList';
import { styles } from './style';

export function Home() {
	const [tasks, setTasks] = useState<string[]>([]);
	const [inputText, setInputText] = useState('');
	const [checkboxState, setCheckboxState] = useState(false);

	const [completedTask, setCompletedTask] = useState<string[]>([]);

	function onInputChange(text: string) {
		setInputText(text);
	}

	function handleAddTask() {
		if (inputText.trim() !== '') {
			setTasks([...tasks, inputText]);
			setInputText('');
			setCheckboxState(false);
		} else {
			Alert.alert('Campo vazio', 'Você não pode adicionar uma tarefa vazia.');
			setInputText('');
		}
	}

	function handleRemoveTask(taskDescription: string) {
		Alert.alert('Remover tarefa', 'Deseja remover tarefa?', [
			{
				text: 'Não',
				style: 'cancel',
			},
			{
				text: 'Sim',
				onPress: () => removeTask(taskDescription),
			},
		]);
	}

	function removeTask(taskDescription: string) {
		setTasks((prevState) =>
			prevState.filter((task) => task !== taskDescription)
		);
		setCompletedTask((prevState) =>
			prevState.filter((task) => task !== taskDescription)
		);
	}

	function handleCompleteTask(taskDescription: string) {
		if (completedTask.includes(taskDescription)) {
			const updatedCompletedTasks = completedTask.filter(
				(task) => task !== taskDescription
			);
			setCompletedTask(updatedCompletedTasks);
		} else {
			setCompletedTask((prevState) => [...prevState, taskDescription]);
		}
	}

	return (
		<View style={styles.main}>
			<Header />
			<NewTask
				onInputChange={onInputChange}
				handleAddTask={handleAddTask}
				inputText={inputText}
			/>
			<Info
				numberOfTasksCreated={tasks.length}
				numberOfTasksCompleted={completedTask.length}
			/>
			<TaskList
				tasks={tasks}
				handleRemoveTask={handleRemoveTask}
				checkboxState={checkboxState}
				setCheckboxState={setCheckboxState}
				handleCompleteTask={handleCompleteTask}
			/>
		</View>
	);
}
