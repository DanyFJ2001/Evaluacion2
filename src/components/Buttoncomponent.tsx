import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../apptheme/Apptheme';


interface Props {
  textbutton: string;
  onpress: () => void;
}

export const Buttoncomponent = ({ textbutton, onpress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
      <Text >{textbutton}</Text>
    </TouchableOpacity>
  )
}