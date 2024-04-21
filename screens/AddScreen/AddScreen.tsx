import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useAddScreenLogic } from './useAddScreenLogic'

const AddScreen: React.FC = () => {
  const { handleAddTodo, setText, text } = useAddScreenLogic()

  return (
    <View style={styles.container}>
      <TextInput placeholder='Enter your task' onChangeText={setText} value={text} />
      <Button title='Add' onPress={handleAddTodo} />
    </View>
  )
}

export default AddScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 30,
  },
})
