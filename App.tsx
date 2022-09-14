import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home/index';
import { useFonts } from 'expo-font';

export default function App() {
	return (
		<>
			<StatusBar barStyle="light-content" />
			<Home />
		</>
	);
}
