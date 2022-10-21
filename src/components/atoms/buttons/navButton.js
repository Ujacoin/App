import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from '../style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import deviceInfoModule from 'react-native-device-info';
import colors from '../../../assets/color/colors';

const NavButton = (props, {navigation}) => {
  const version = deviceInfoModule.getSystemVersion();
  return (
    <TouchableOpacity
      onPress={() => {
        // navigation.navigate('TimelineItem');
      }}
      style={[style.navContainer,
        // {bottom: version == 11 ? '15%' : '30%'}
    ]}
      >
      <Text style={style.navText}>{props.text.toUpperCase()}</Text>
      <Icon name="arrow-right-circle" color={colors.black} size={15} />
    </TouchableOpacity>
  );
};
export default NavButton;
