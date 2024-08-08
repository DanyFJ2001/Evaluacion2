import { StackScreenProps } from '@react-navigation/stack'; 
import React from 'react'; 
import { Image, View, Text, TouchableOpacity } from 'react-native'; 
import { styles } from './apptheme/Apptheme';
import { Buttoncomponent } from './components/Buttoncomponent';


export const Screen1 = ({ navigation }: any) => { 
  return ( 
    <View style={styles.container}>  
      <Text style={styles.contentBody}>Bienvenido</Text> 
      <View>
       
      </View>
      <Buttoncomponent textbutton="Imagen1" onpress={() => navigation.navigate('Imagen1', { data: 'someData' })} />
      <Buttoncomponent textbutton="Imagen2" onpress={() => navigation.navigate('Imagen2', { data: 'someData' })} />
      <Buttoncomponent textbutton="Formulario1" onpress={() => navigation.navigate('Formulario1', { data: 'someData' })} />
      <Buttoncomponent textbutton="Formulario2" onpress={() => navigation.navigate('Formulario2', { data: 'someData' })} />
        
    </View> 
  ); 
};

export default Screen1;