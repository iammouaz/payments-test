import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/configureStore";
import TodosBloc from "../../blocs/todosBloc";
import { RootStackParamList } from "types/navigation.types";
import { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export const useAddScreenLogic = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todosBloc = new TodosBloc(dispatch, () => useSelector((state: RootState) => state));
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const handleAddTodo = () => {
    if (text.trim()) {
      todosBloc.addTodo(text);
      navigation.goBack();
    }
  };
  return { handleAddTodo, setText, text };
};
