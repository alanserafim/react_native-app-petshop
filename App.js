import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Rotas from './src/rotas/Rotas';
import TelaPadrao from './src/componentes/TelaPadrao';
import Reactotron from 'reactotron-react-native';

Reactotron.configure().useReactNative().connect();
console.tron = Reactotron;

export default function App() {
  console.tron.log({
    curso: 'React Native',
    aluno: 'Alan'
  });

  return (
    <TelaPadrao>
      <Rotas />
    </TelaPadrao>
  )
}


