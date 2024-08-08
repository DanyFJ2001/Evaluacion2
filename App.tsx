import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';
import { styles } from './src/apptheme/Apptheme';
import { Screen3 } from './src/Screen3';
import Screen4 from './src/Screen4';


const Stack = createStackNavigator(); 

const App = () => { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator 
        screenOptions={{
          headerTitleAlign: 'center', 
          headerStyle: styles.header,
          cardStyle: styles.contentinput
         
        }}
      > 
        <Stack.Screen  name="Inicio" component={Screen1} options={{ title: 'Inicio' }} 
        /> 
        <Stack.Screen  name="Imagen1"  component={Screen2} options={{ title: 'Imagen1' }} 

        />
        <Stack.Screen  name="Imagen2"  component={Screen3} options={{ title: 'Imagen2' }} 
        /> 
        <Stack.Screen  name="Formulario1"  component={Screen4} options={{ title: 'Formulario1' }} 
        
        /> 
         <Stack.Screen  name="Formulario2"  component={Screen4} options={{ title: 'Formulario2' }} 
        
        /> 
      </Stack.Navigator> 
    </NavigationContainer> 
  ); 
}; 
 
export default App;