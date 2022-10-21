import React from 'react';
import {Image, Text, View} from 'react-native';
import style from '../style';
const TaskTitleView = (props, navigation) => {
  return (
    <View style={{flexDirection: 'row', left: '7%'}}>
      <View style={style.taskView}>
        <Text style={style.taskText1}>{props.name}</Text>
      </View>
      <View style={style.taskView1}>
        <Text style={style.taskCategory}>{props.cat}</Text>
      </View>
    </View>
  );
};
export default TaskTitleView;
