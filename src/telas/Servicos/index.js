import { FlatList, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { servicos } from '../../mocks/servicos'
import Item from './Item'
import estilosGlobal from '../../global/estilos'

const Servicos = () => {
  return (

        <FlatList
          data={servicos}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={({ id }) => String(id)}
          removeClippedSubviews={false}
          />
  )
}

export default Servicos
