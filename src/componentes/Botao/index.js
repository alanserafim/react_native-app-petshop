import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import funcaoEstilosPadrao from './estilos'

const Botao = ({pequeno = false, invertido = false, valor , acao, estilos}) => {
    const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido)
  return (
    <TouchableOpacity
        onPress={acao}
        style={[estilosPadrao.botao, estilos]}
    >
      <Text style={estilosPadrao.valor}>{valor}</Text>
    </TouchableOpacity>
  )
}

export default Botao