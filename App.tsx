import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from "screens/ListScreen/ListScreen";



const Stack = createStackNavigator();

const App: React.FC = () => {
  return (

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

        </Stack.Navigator>
      </NavigationContainer>

  );
};

export default App;
