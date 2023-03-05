import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "./pages/Welcome";
const Stack = createNativeStackNavigator();
function App(){
  
return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="welcomeScreen" component={Welcome} options={{headerShown:false}}></Stack.Screen>
      
    </Stack.Navigator>
  </NavigationContainer>
)
}
export default App;