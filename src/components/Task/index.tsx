import { View, Text, TouchableOpacity } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Trash } from 'phosphor-react-native';
import { styles } from './style';

interface Props {
	taskId: string;
	taskIsConcluded: boolean;
	taskDescription: string;
	handleRemoveTask: (taskDescription: string) => void;
	checkboxState: boolean;
	setCheckboxState: React.Dispatch<React.SetStateAction<boolean>>;
	concludedCounter: number;
	setConcludedCounter: React.Dispatch<React.SetStateAction<number>>;
	handleConcluded: (taskDescription: string) => void;
}

export function Task({
	taskIsConcluded,
	taskId,
	taskDescription,
	handleRemoveTask,
	checkboxState,
	setCheckboxState,
	handleConcluded,
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
					handleConcluded(taskDescription);
				}}
				text={taskDescription}
				textStyle={{
					fontSize: 14,
					color: '#F2F2F2',
					width: 220,
				}}
			/>
			<TouchableOpacity onPress={() => handleRemoveTask(taskId)}>
				<Text style={styles.buttonText}>
					<Trash size={20} color="#808080" />
				</Text>
			</TouchableOpacity>
		</View>
	);
}
