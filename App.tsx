// Arquivo principal da aplicação.
// Esse arquivo configura a navegação entre as telas usando React Navigation.
// Fiz uma configuração bem simples pra deixar a estrutura mais clara.

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/HomeScreen';
import PriceScreen from './app/PriceScreen';

// Tipo para os parâmetros que serão passados entre as telas
export type AppStackParamList = {
  HomeScreen: {
    prodName?: string;
    initPrice?: number;
    rate?: number;
  } | undefined;
  PriceScreen: {
    prodName: string;
    initPrice: number;
    newPrice: number;
    rate: number;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PriceScreen" component={PriceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
