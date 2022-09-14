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
	const [created, setCreated] = useState(0);

	function onInputChange(text: string) {
		setInputText(text);
	}

	function handleAddTask() {
		if (tasks.includes(inputText)) {
			Alert.alert('Tarefa já existe', 'Essa tarefa já existe na sua lista.');
		} else {
			setTasks((prevState) => [...prevState, inputText]);
			setInputText('');
			setCreated(tasks.length + 1);
		}

		inputText === '' &&
			Alert.alert('Campo vazio', 'Você não pode adicionar uma tarefa vazia.');
	}

	function handleRemoveTask(taskDescription: string) {
		Alert.alert('Remover tarefa', 'Deseja remover tarefa?', [
			{
				text: 'Não',
				style: 'cancel',
			},
			{
				text: 'Sim',
				onPress: () => {
					setTasks((prevState) =>
						prevState.filter((task) => task !== taskDescription)
					);
					setCreated(tasks.length - 1);
				},
			},
		]);
	}

	return (
		<View style={styles.main}>
			<Header />
			<NewTask
				onInputChange={onInputChange}
				handleAddTask={handleAddTask}
				inputText={inputText}
			/>
			<Info created={created} />
			<TaskList tasks={tasks} handleRemoveTask={handleRemoveTask} />
		</View>
	);
}
