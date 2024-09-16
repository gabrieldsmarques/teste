import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LabsListScreen from './tabs/labs';
import AgendamentoScreen from './tabs/agendamento';

const Stack = createStackNavigator();

const App = () => {
  // Estado que armazena os laboratórios
  const [labs, setLabs] = useState([
    { id: '1', name: 'Nome do Lab', location: 'Hotel Tecnológico' },
    { id: '2', name: 'Nome do Lab', location: 'Hotel Tecnológico' },
    { id: '3', name: 'Nome do Lab', location: 'Hotel Tecnológico' },
    { id: '4', name: 'Nome do Lab', location: 'Hotel Tecnológico' },
  ]);

  // Função que adiciona um novo laboratório
  const addLab = (newLab) => {
    setLabs([...labs, newLab]);  // Adiciona o novo lab à lista
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LabsList">
        {/* Remove o header da tela LabsList */}
        <Stack.Screen
          name="LabsList"
          options={{ headerShown: false }}  // Aqui desativa o header da tela
        >
          {props => <LabsListScreen {...props} labs={labs} />}
        </Stack.Screen>
        <Stack.Screen name="Agendamento">
          {props => <AgendamentoScreen {...props} addLab={addLab} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
