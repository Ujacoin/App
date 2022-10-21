import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../assets/color/colors';
import style from '../style';
import * as RootNavigation from '../../../navigations/RootNavigation';

const NavButton2 = (props, {navigation}) => {
  return (
    <TouchableOpacity
      style={style.navContainer2}
      onPress={() => {
        props.action ? RootNavigation.navigate(props.action) : null;
      }}>
      <Text style={style.navText}>{props.text.toUpperCase()}</Text>
      <Icon name="arrow-right-circle" color={colors.black} size={15} />
    </TouchableOpacity>
  );
};
export default NavButton2;
