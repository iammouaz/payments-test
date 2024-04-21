import { Dispatch } from "redux";
import { RootState } from "../store/configureStore";
import { addTodo, toggleTodo } from "../store/todosSlice";
import TodosBloc from "../blocs/todosBloc";


describe("TodosBloc", () => {
  let mockDispatch: jest.MockedFunction<Dispatch>;
  let mockGetState: jest.Mock<RootState>;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockGetState = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should dispatch addTodo action correctly", () => {
    const todosBloc = new TodosBloc(mockDispatch, mockGetState);
    const text = "Test Todo";

    todosBloc.addTodo(text);

    expect(mockDispatch).toHaveBeenCalledWith(addTodo(text));
  });

  it("should dispatch toggleTodo action correctly", () => {
    const todosBloc = new TodosBloc(mockDispatch, mockGetState);
    const id = 1;

    todosBloc.toggleTodo(id);

    expect(mockDispatch).toHaveBeenCalledWith(toggleTodo(id));
  });

  it("should return todos correctly", () => {
    const todos = [{ id: 1, text: "Test Todo", completed: false }];
    mockGetState.mockReturnValueOnce({ todos: { todos } });

    const todosBloc = new TodosBloc(mockDispatch, mockGetState);

    expect(todosBloc.getTodos()).toEqual(todos);
  });
});
