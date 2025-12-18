import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import calculator from './modules/calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{`Calculator module says: ${calculator.hello()}`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
