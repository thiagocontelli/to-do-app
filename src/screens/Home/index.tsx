import { useState } from 'react';
import { Alert, View } from 'react-native';
import { Header } from '../../components/Header';
import { Info } from '../../components/Info';
import { NewTask } from '../../components/NewTask';
import { TaskList } from '../../components/TaskList';
import { styles } from './style';

interface TaskData {
	description: string;
	isConcluded: boolean;
	id: string;
}

export function Home() {
	const [tasks, setTasks] = useState<TaskData[]>([]);
	const [inputText, setInputText] = useState('');
	const [created, setCreated] = useState(0);
	const [concludedCounter, setConcludedCounter] = useState(0);
	const [checkboxState, setCheckboxState] = useState(false);

	function onInputChange(text: string) {
		setInputText(text);
	}

	function handleAddTask() {
		if (inputText !== '') {
			const newTask = {
				description: inputText,
				isConcluded: false,
				id: String(Math.random()),
			};
			setTasks([...tasks, newTask]);
			setInputText('');
			setCreated(tasks.length + 1);
		} else {
			Alert.alert('Campo vazio', 'Você não pode adicionar uma tarefa vazia.');
		}
	}

	function handleRemoveTask(taskId: string) {
		Alert.alert('Remover tarefa', 'Deseja remover tarefa?', [
			{
				text: 'Não',
				style: 'cancel',
			},
			{
				text: 'Sim',
				onPress: () => {
					setTasks((prevState) =>
						prevState.filter((task) => task.id !== taskId)
					);
					setCreated(tasks.length - 1);
					setConcludedCounter((prevState) => (prevState -= 1));
				},
			},
		]);
	}

	function handleConcluded(taskIsConcluded: boolean, taskId: string) {
		if (taskIsConcluded) {
			setConcludedCounter((prevState) => (prevState -= 1));

			const newTasks = tasks.map((el, i, arr) => {
				if (el.id === taskId) {
					return { ...el, isConcluded: false };
				}
				return el;
			});

			setTasks(newTasks);
		}

		if (taskIsConcluded === false) {
			setConcludedCounter((prevState) => (prevState += 1));
			const newTasks = tasks.map((el, i, arr) => {
				if (el.id === taskId) {
					return { ...el, isConcluded: true };
				}
				return el;
			});

			setTasks(newTasks);
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
			<Info created={created} concludedCounter={concludedCounter} />
			<TaskList
				tasks={tasks}
				handleRemoveTask={handleRemoveTask}
				checkboxState={checkboxState}
				setCheckboxState={setCheckboxState}
				handleConcluded={handleConcluded}
				concludedCounter={concludedCounter}
				setConcludedCounter={setConcludedCounter}
			/>
		</View>
	);
}
