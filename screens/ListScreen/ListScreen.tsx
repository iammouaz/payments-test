import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import Checkbox from 'expo-checkbox'
import { useListScreenLogic } from './useListScreenLogic'

const ListScreen: React.FC = () => {
  const { completedTodos, handleAddButtonPress, handleToggleTodo, notCompletedTodos } =
    useListScreenLogic()

  return (
    <View style={styles.container}>
      <FlatList
        data={notCompletedTodos}
        renderItem={({ item }) => (
          <View style={styles.teskRow}>
            <Checkbox value={item.completed} onValueChange={() => handleToggleTodo(item.id)} />
            <Text style={styles.taskText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <FlatList
        data={completedTodos}
        renderItem={({ item }) => (
          <View style={styles.teskRow}>
            <Checkbox value={item.completed} onValueChange={() => handleToggleTodo(item.id)} />
            <Text style={styles.taskText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<Text style={styles.sectionHeader}>Completed</Text>}
      />

      <TouchableOpacity style={styles.floatingButton} onPress={handleAddButtonPress}>
        <Text style={styles.plusSign}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 30,
  },
  sectionHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: '#3c87eb',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3c87eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusSign: {
    fontSize: 24,
    color: '#ffffff',
  },
  taskText: {
    color: '#3c87eb',
  },
  teskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
})

export default ListScreen
