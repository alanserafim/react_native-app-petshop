import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Servicos from './src/telas/Servicos';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Servicos />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    
  }
})


