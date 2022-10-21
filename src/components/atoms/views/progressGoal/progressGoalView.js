import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, FlatList } from "react-native";
import Button from "../../buttons/button";
import style from "../../style";
import TaskTitleView from "../taskTitleView/taskTitleView";
import * as RootNavigation from "../../../../navigations/RootNavigation";
import ThinButton from "../../buttons/thinButton";
const ProgressGoalView = (props, navigation) => {
  const button = ["Done!", "Set new target date"];
  var r = 0;
  const [clicked, setClicked] = useState(false);
  const [indx, setIndx] = useState(0);
  return (
    <TouchableOpacity
      onPress={() => {
        // RootNavigation.navigate('Drawer', {});
      }}
      style={style.progressGoalView}
    >
      <TaskTitleView name={"GOAL"} cat={props.task.category} />

      <Text style={style.taskTitle}>{props.task.task}</Text>
      <View style={style.taskMembers}>
        {props.task.members.map((item, index) => {
          return (
            <Image
              key={index}
              source={item}
              style={[
                style.memberImage,
                { right: index == 0 ? null : (r += 5) },
              ]}
            />
          );
        })}
        <Text
          style={style.memberCount}
        >{`${props.task.members.length} others working on the same goal`}</Text>
      </View>
      <View style={style.buttonsView}>
        {button.map((item, index) => {
          return (
            <ThinButton
              text={item}
              isFirst={indx == index ? clicked : false}
              click={() => {
                setClicked(true), setIndx(index);
              }}
            />
          );
        })}
      </View>
    </TouchableOpacity>
  );
};
export default ProgressGoalView;
