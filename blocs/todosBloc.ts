import { Dispatch } from 'redux'
import { RootState } from '../store/configureStore'
import { addTodo, toggleTodo } from '../store/todosSlice'

class TodosBloc {
  private dispatch: Dispatch
  private getState: () => RootState

  constructor(dispatch: Dispatch, getState: () => RootState) {
    this.dispatch = dispatch
    this.getState = getState
  }

  addTodo = (text: string) => {
    this.dispatch(addTodo(text))
  }

  toggleTodo = (id: number) => {
    this.dispatch(toggleTodo(id))
  }

  getTodos = () => {
    return this.getState().todos.todos
  }
}

export default TodosBloc
