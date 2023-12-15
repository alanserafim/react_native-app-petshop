import { FlatList } from 'react-native'
import React from 'react'
import { carrinho } from '../../mocks/carrinho'
import Item from './Item'
import TelaPadrao from '../../componentes/TelaPadrao'
import StatusCarrinho from '../.././componentes/StatusCarrinho'

const Carrinho = () => {
  const total = carrinho.reduce((soma, { preco, quantidade }) => soma + (preco * quantidade), 0)

  return (
    <>
      <StatusCarrinho total={total} />
      <FlatList
        data={carrinho}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
        removeClippedSubviews={false}
      />
    </>
  )
}

export default Carrinho
