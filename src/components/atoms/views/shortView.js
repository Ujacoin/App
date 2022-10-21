import React from 'react';
import {Text, View} from 'react-native';
import colors from '../../../assets/color/colors';
import style from '../style';

const ShortView = (props, navigation) => {
  return (
    <View
      style={[
        style.taskView,
        props.color ? {backgroundColor: props.color} : null,
      ]}>
      <Text style={style.taskText1}>{props.name}</Text>
    </View>
  );
};
export default ShortView;
