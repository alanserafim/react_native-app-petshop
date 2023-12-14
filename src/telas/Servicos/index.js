import { FlatList, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { servicos } from '../../mocks/servicos'
import Item from './Item'
import estilosGlobal from '../../global/estilos'

const Servicos = () => {
  return (
      <KeyboardAvoidingView
        //behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={estilosGlobal.preencher}

      >
        <FlatList
          data={servicos}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={({ id }) => String(id)}
          removeClippedSubviews={false}
          />
      </KeyboardAvoidingView>
  )
}

export default Servicos
