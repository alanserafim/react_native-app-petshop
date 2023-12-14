import { KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import estilosGlobal from '../../global/estilos'

const TelaPadrao = ({children}) => {
  return (
    <KeyboardAvoidingView
        //behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={estilosGlobal.preencher}

      >
        {children}
      </KeyboardAvoidingView>
  )
}

export default TelaPadrao