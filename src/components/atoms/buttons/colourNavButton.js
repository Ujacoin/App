import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from '../style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import deviceInfoModule from 'react-native-device-info';
import colors from '../../../assets/color/colors';

const ColorNavButton = (props, {navigation  }, params) => {

  console.log("params ===================>", props.params , props.screenName);
  const version = deviceInfoModule.getSystemVersion();
  return (
    <TouchableOpacity
      onPress={() => {
        // log
        props.navigation.navigate(props.screenName, {...props.params} );
      }}
      style={style.colornavContainer}>
      <Text style={style.colornavText}>{props.text}</Text>
      <Icon name="arrow-right" color={colors.sistaPink} size={15} />
    </TouchableOpacity>
  );
};
export default ColorNavButton;
