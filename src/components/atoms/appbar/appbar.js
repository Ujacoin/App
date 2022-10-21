import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../../assets/color/colors';
import Logo from '../logo/logo';
import * as RootNavigation from '../../../navigations/RootNavigation';
import style from '../style';

const Appbar = (props, navigation) => {
  return props.screen == `home` ? (
    <View style={[style.appbar, {backgroundColor: props.color}]}>
      <Logo />
      <Icon
        onPress={() => {
          RootNavigation.navigate('Drawer');
        }}
        name={'menu'}
        color={colors.black}
        size={25}
      />
    </View>
  ) : (
    <View
      style={[
        style.appbar,
        {
          // paddingTop: '1%',
          // paddingBottom: '1%',
          backgroundColor: props.color,
        },
      ]}>
      <AntDesign
        name={props.left}
        color={props.iconColor}
        size={20}
        onPress={() => {
          RootNavigation.back();
        }}
      />

      {props.right ? (
        <AntDesign name={props.right} color={colors.black} size={20} />
      ) : null}
    </View>
  );
};

export default Appbar;
