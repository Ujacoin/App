import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import globalStyle from '../../../../styles/globalStyle';

import style from '../../style';
import RoundedShortView from '../roundedShortView';
import * as RootNavigation from '../../../../navigations/RootNavigation';

const UpcomingMeeting = (props, navigation) => {
  return (
    <TouchableOpacity
      style={style.libraryView}
      onPress={() => {
        props.action ? RootNavigation.navigate(props.action) : null;
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={style.libraryHeadingView}>
          <Text style={style.boldHeading}>13</Text>
        </View>
        <View style={style.libraryContentView}>
          <Text
            style={[
              globalStyle.groupSmallText,
              {fontSize: 12, paddingLeft: 20},
            ]}>
            {props.meeting.due.toUpperCase()}
          </Text>
          <Text style={[style.libraryTitle, {paddingTop: '5%'}]}>
            {props.meeting.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default UpcomingMeeting;
