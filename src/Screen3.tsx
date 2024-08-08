import React, { useState } from 'react';
import { View, Text, Alert, TextInputComponent, Image } from 'react-native';
import { styles } from './apptheme/Apptheme';


export const Screen3 = () => {
 

  return (
    <View style={styles.container}>
      <Image 
          source={{ uri: 'https://imgv3.fotor.com/images/share/fotor-ai-generate-a-lifelike-dragon.jpg' ,width:1500,height:1500 }} 
          style={styles.image} 
        />
    </View>
  );
};

export default Screen3;