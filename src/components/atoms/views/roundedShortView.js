import React from 'react';
import {Text, View} from 'react-native';
import style from '../style';

const RoundedShortView = (props, navigation) => {
  return (
    <View style={style.taskView1}>
      <Text style={style.taskCategory}>{props.name.toUpperCase()}</Text>
    </View>
  );
};
export default RoundedShortView;
