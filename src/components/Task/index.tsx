import { View, Text, TouchableOpacity } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Trash } from 'phosphor-react-native';
import { styles } from './style';

interface Props {
	taskDescription: string;
	handleRemoveTask: (taskDescription: string) => void;
	checkboxState: boolean;
	setCheckboxState: React.Dispatch<React.SetStateAction<boolean>>;
	handleCompleteTask: (taskDescription: string) => void;
}

export function Task({
	taskDescription,
	handleRemoveTask,
	checkboxState,
	setCheckboxState,
	handleCompleteTask,
}: Props) {
	return (
		<View style={styles.container}>
			<BouncyCheckbox
				size={25}
				fillColor="#4EA8DE"
				innerIconStyle={{ borderWidth: 1 }}
				isChecked={checkboxState}
				onPress={() => {
					setCheckboxState(!checkboxState);
					handleCompleteTask(taskDescription);
				}}
				text={taskDescription}
				textStyle={{
					fontSize: 14,
					color: '#F2F2F2',
					width: 220,
				}}
			/>
			<TouchableOpacity onPress={() => handleRemoveTask(taskDescription)}>
				<Text style={styles.buttonText}>
					<Trash size={20} color="#808080" />
				</Text>
			</TouchableOpacity>
		</View>
	);
}
