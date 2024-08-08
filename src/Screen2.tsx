import React, { useState } from 'react';
import { View, Text, Alert, TextInputComponent, Image } from 'react-native';
import { styles } from './apptheme/Apptheme';


export const Screen2 = () => {
 

  return (
    <View style={styles.container}>
      <Image 
          source={{ uri: 'https://servisoftcorp.com/wp-content/uploads/2019/02/aplicaciones-moviles-apps-servisoftcorp.com_.jpg' }} 
          style={styles.image} 
        />
    </View>
  );
};

export default Screen2;