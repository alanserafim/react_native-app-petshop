import { Text, TextInput, View } from 'react-native'
import React from 'react'

const CampoInteiro = ({valor, acao}) => {
  const numeroEmTexto = String(valor)
  return (
    <TextInput 
        keyboardType='number-pad'
        selectTextOnFocus
        value={numeroEmTexto}
        onChangeText={(novoValor) => {acao(novoValor)}}

    />
  )
}

export default CampoInteiro
