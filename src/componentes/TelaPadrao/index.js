import { KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import estilosGlobal, { cores } from '../../global/estilos'
import estilos from './estilos'

const TelaPadrao = ({ children }) => {
  return (
    <>
    <SafeAreaView style={estilos.ajusteTela}>
      <StatusBar backgroundColor={cores.roxo}/>
      <KeyboardAvoidingView
        //behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={estilosGlobal.preencher}

      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
    <SafeAreaView style={estilos.ajusteTelaBaixo} />
    </>
  )
}

export default TelaPadrao