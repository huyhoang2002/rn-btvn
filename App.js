import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegisterForm from './screens/RegisterForm';
import Header from './components/commons/Header'

export default function App() {
  return (
    <View>
      <Header />
      <RegisterForm />
    </View>
  );
}

