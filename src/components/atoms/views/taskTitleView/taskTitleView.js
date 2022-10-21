import React from 'react';
import {View} from 'react-native';
import RoundedShortView from '../roundedShortView';
import ShortView from '../shortView';
const TaskTitleView = (props, navigation) => {
  return (
    <View style={{flexDirection: 'row', left: '7%',alignItems:"center"}}>
      <ShortView name={props.name} />
      <RoundedShortView name={props.cat} />
    </View>
  );
};
export default TaskTitleView;
