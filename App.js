import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Servicos from './src/telas/Servicos';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import estilosGlobal from './src/global/estilos';
import Carrinho from './src/telas/Carrinho';

export default function App() {
  return (
    <SafeAreaView style={estilosGlobal.preencher}>
      <StatusBar />
      <Carrinho />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    
  }
})


