import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Button from '../buttons/button';
import style from '../style';
import TaskTitleView from '../taskTitleView/taskTitleView';

const ProgressGoalView = (props, navigation) => {
  var r = 0;
  return (
    <TouchableOpacity
      onPress={() => {
        // navigation.navigate('TimelineItem');
      }}
      style={style.progressGoalView}>
      <TaskTitleView name={'GOAL'} cat={'WEB'} />

      <Text style={style.taskTitle}>{props.title}</Text>
      <View style={style.taskMembers}>
        {props.images.slice(0, 3).map((item, index) => {
          return (
            <Image
              source={item.url}
              style={[style.memberImage, {right: index == 0 ? null : (r += 5)}]}
            />
          );
        })}
        <Text
          style={
            style.memberCount
          }>{`${props.members} others working on the same goal`}</Text>
      </View>
      <View style={style.buttonsView}>
        <Button text={'Done!'} />
        <Button text={'Set new target date'} />
      </View>
    </TouchableOpacity>
  );
};
export default ProgressGoalView;
