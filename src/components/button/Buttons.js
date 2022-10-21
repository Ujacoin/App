//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';
import Ripple from 'react-native-material-ripple';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Buttonstyles} from './Styles';
// create a component
export const ImageButton = props => {
  const {backgroundColor, title, color, icon, onPress, isShadow} = props;

  return (
    <View style={Buttonstyles.container}>
      <Ripple
        rippleContainerBorderRadius={2}
        style={[
          Buttonstyles.buttonBody,
          isShadow ? Buttonstyles.shadowValue : {},
          {backgroundColor: backgroundColor},
        ]}
        onPress={onPress}>
        {icon ? (
          <AntDesign
            style={Buttonstyles.icon}
            name={icon}
            color={color}
            size={20}
          />
        ) : (
          <></>
        )}
        <Text
          style={[
            Buttonstyles.text,
            {color: color, paddingRight: icon ? 15 : 0},
          ]}>
          {title}
        </Text>
      </Ripple>
    </View>
  );
};

export const BorderButton = props => {
  const {backgroundColor, title, color, icon, onPress, isShadow} = props;

  return (
    <View style={Buttonstyles.container}>
      <Ripple
        rippleContainerBorderRadius={100}
        style={[
          Buttonstyles.borderbuttonBody,
          isShadow ? Buttonstyles.shadowValue : {},
          {backgroundColor: backgroundColor},
        ]}
        onPress={onPress}>
        <Text style={[Buttonstyles.borderbuttontext, {color: color}]}>
          {title}
        </Text>
      </Ripple>
    </View>
  );
};
