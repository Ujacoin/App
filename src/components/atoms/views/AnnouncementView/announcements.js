import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import TaskTitleView from '../taskTitleView/taskTitleView';
import * as RootNavigation from '../../../../navigations/RootNavigation';
import style from '../../style';
import colors from '../../../../assets/color/colors';
import Icon from 'react-native-vector-icons/Feather';

const AnnouncementView = (props, navigation) => {
  return (
    <TouchableOpacity style={style.announcementContainer}>
      <View style={style.innerContainer}>
        <View style={style.roundedView}>
          <Icon name={'film'} size={30} color={colors.white} />
        </View>
      </View>
      <View style={style.content}>
        <Text style={style.title}>Recording is available</Text>
        <Text style={style.time}>WED, AUG 04, 2020</Text>
      </View>
    </TouchableOpacity>
  );
};
export default AnnouncementView;
