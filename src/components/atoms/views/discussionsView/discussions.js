import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import TaskTitleView from '../taskTitleView/taskTitleView';
import * as RootNavigation from '../../../../navigations/RootNavigation';
import style from '../../style';
import colors from '../../../../assets/color/colors';
import Icon from 'react-native-vector-icons/Feather';
import globalStyle from '../../../../styles/globalStyle';
import {IMAGES} from '../../../../model/data';
let r1 = 0;
const DiscussionView = (props, navigation) => {
  return (
    <TouchableOpacity style={style.discussionContainer}>
      <Text style={[style.libraryTitle, {paddingLeft: '5%'}]}>
        Ask for help in resources
      </Text>
      <Text style={[globalStyle.groupSmallText, {paddingLeft: '5%'}]}>
        I am wondering if anyone has any resources or knows any platforms
        that...
      </Text>
      <View style={style.membersImagesView}>
        {IMAGES.slice(0, 3).map((item, index) => {
          return (
            <Image
              key={index}
              source={item.url}
              style={[
                style.memberImages,
                {right: index == 0 ? null : (r1 += 5)},
              ]}
            />
          );
        })}
      </View>
    </TouchableOpacity>
  );
};
export default DiscussionView;
