import { StyleSheet, Text, FlatList, View } from 'react-native'
import React from 'react'
import { servicos } from '../../mocks/servicos'
import Item from './Item'

const Servicos = () => {
  return (
    <View>
      <Text>Serviços</Text>
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
        removeClippedSubviews={false}
        />
    </View>
  )
}

export default Servicos

const styles = StyleSheet.create({})