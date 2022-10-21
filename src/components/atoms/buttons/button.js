import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from '../style';

const Button = (props, navigation) => {
  return (
    <TouchableOpacity style={style.button}>
      <Text style={style.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};
export default Button;
