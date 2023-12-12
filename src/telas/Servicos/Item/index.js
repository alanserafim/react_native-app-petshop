import { View, Text, Button } from 'react-native'
import React, { useState} from 'react'
import estilos from './estilos'
import CampoInteiro from '../../../componentes/CampoInteiro'

const Item = ({ nome, preco, descricao }) => {
  const [quantidade, setQuantidade] = useState(1)

  return (
    <>
    <View style={estilos.informacao}>
      <Text  style={estilos.nome}>{nome}</Text>
      <Text  style={estilos.descricao}>{descricao}</Text>
      <Text  style={estilos.preco}>{preco}</Text>
    </View>
    <View style={estilos.carrinho}>
      <View>
        <View style={estilos.valor}>
          <Text style={estilos.descricao}>Quantidade: </Text>
          <CampoInteiro valor={quantidade} acao={setQuantidade}/>
        </View>
        <View style={estilos.valor}>
          <Text style={estilos.descricao}>Preço: </Text>
          <Text style={estilos.preco}>0</Text>
        </View>
      </View>
      <Button title='Adicionar ao carrinho' />
    </View>
    <View style={estilos.divisor} />
    </>
  )
}

export default Item
