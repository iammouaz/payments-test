import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import store from "store/configureStore";
import ListScreen from "screens/ListScreen/ListScreen";
import AddScreen from "screens/AddScreen/AddScreen";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='To Do List'
          screenOptions={{
            headerStyle: {
              backgroundColor: "#3c87eb",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen name='To Do List' component={ListScreen} />
          <Stack.Screen name='Add' component={AddScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
