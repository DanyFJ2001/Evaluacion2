
import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { styles } from './apptheme/Apptheme';
import { Inputcomponent } from './components/Inputcomponents';
import { Buttoncomponent } from './components/Buttoncomponent';
import Screen1 from './Screen1';


export const Screen4 = ({ navigation }: any) => {
  const [form, setForm] = useState({ number1: '', number2: '' });
  const [result, setResult] = useState('');

  const handleSetvalues = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const Mayormenor = () => {
    const num1 = parseFloat(form.number1);
    const num2 = parseFloat(form.number2);


    if (num1 <= num2) {
      setResult(`${num1} es menor ${num2}`);
    } else {
      setResult(`${num1} es mayor que ${num2}`);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ingresa dos Números:</Text>
      <Inputcomponent
        placeholder="numero"
        handlesetvalue={handleSetvalues}
        name="number1"
      />
      <Inputcomponent
        placeholder="numero"
        handlesetvalue={handleSetvalues}
        name="number2"
      />
      <Buttoncomponent textbutton=">=" onpress={Mayormenor} />
      <Buttoncomponent textbutton="<=" onpress={() => navigation.navigate('Formulario2', { data: 'someData' })} />
      {result !== '' && <Text style={styles.result}>{result}</Text>}
      
    </View>
    

  );
};

export default Screen4;