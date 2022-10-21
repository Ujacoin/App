import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import globalStyle from '../../../../styles/globalStyle';

import style from '../../style';
import * as RootNavigation from '../../../../navigations/RootNavigation';

const UpcomingAssigment = (props, navigation) => {
  return (
    <TouchableOpacity
      style={style.libraryView}
      onPress={() => {
        RootNavigation.navigate(props.action, {asg: props.asg});
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
            {props.asg.due.toUpperCase()}
          </Text>
          <Text style={[style.libraryTitle, {paddingTop: '5%'}]}>
            {props.asg.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default UpcomingAssigment;
