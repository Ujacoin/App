import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../../assets/color/colors';

import style from '../../style';
import RoundedShortView from '../roundedShortView';
import * as RootNavigation from '../../../../navigations/RootNavigation';

const AssignmentView = (props, navigation) => {
  return (
    <TouchableOpacity
      style={style.asgView}
      onPress={() => {
        RootNavigation.navigate('AssignmentDetail', {asg: props.asg});
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={[
            style.asgImgView,
            {
              backgroundColor: props.asg.isClosed
                ? colors.primary
                : colors.julep,
            },
          ]}>
          <Image source={props.asg.img} style={style.libraryImg} />
        </View>
        <View style={style.asgContentView}>
          <RoundedShortView name={props.asg.type} />
          <Text style={style.libraryTitle}>{props.asg.title}</Text>
          <Text style={style.libraryType}>{props.asg.due}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default AssignmentView;
