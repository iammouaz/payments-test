import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/configureStore'
import TodosBloc from '../../blocs/todosBloc'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from 'types/navigation.types'

export const useListScreenLogic = () => {
  const dispatch = useDispatch()
  const navigation: NavigationProp<RootStackParamList> = useNavigation()
  const todosBloc = new TodosBloc(dispatch, () => useSelector((state: RootState) => state))
  const todos = todosBloc.getTodos()

  const handleToggleTodo = (id: number) => {
    todosBloc.toggleTodo(id)
  }

  const handleAddButtonPress = () => {
    navigation.navigate('Add')
  }

  const completedTodos = todos.filter((todo) => todo.completed)
  const notCompletedTodos = todos.filter((todo) => !todo.completed)

  return { notCompletedTodos, handleToggleTodo, completedTodos, handleAddButtonPress }
}
