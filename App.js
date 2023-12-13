import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Servicos from './src/telas/Servicos';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

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


