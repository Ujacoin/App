//import liraries
import React from 'react';
import {View, Text, StyleSheet, Platform, Pressable} from 'react-native';
import {Menustyles} from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../../assets/color/colors';
import Ripple from 'react-native-material-ripple';

// create a component
export const Header = props => {
  const {
    title,
    textAlign = 'left',
    iconleft,
    iconRight,
    onPressLeft,
    onRightPress,
  } = props;

  return (
    <View style={Menustyles.container}>
      <Ripple
        rippleContainerBorderRadius={100}
        onPress={onPressLeft}
        style={Menustyles.itemContainer}>
        <Ionicons name={iconleft} size={30} color={COLORS.black} />
      </Ripple>
      <Text style={[Menustyles.title, {textAlign: textAlign}]}>{title}</Text>

      <Ripple
        rippleContainerBorderRadius={100}
        onPress={iconRight ? onRightPress : null}
        style={Menustyles.itemContainer}>
        <AntDesign name={iconRight} size={25} color={COLORS.black} />
      </Ripple>
    </View>
  );
};
