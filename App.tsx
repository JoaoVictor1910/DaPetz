import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/Login.component';
import SignUpScreen from './src/components/SignUp.component';
import ListScreen from './src/components/List.component';
import ViewScreen from './src/components/View.component';
import FormScreen from './src/components/Form.component';
import { RootStackParamList } from './src/app/models/route.model';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="View" component={ViewScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


