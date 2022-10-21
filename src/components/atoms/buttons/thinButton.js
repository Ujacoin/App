import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import colors from '../../../assets/color/colors';
import style from '../style';

const ThinButton = (props, navigation) => {
  return (
    <TouchableOpacity
      style={[
        style.thinButtonView,
        {backgroundColor: props.isFirst ? colors.black : null},
        !props.isFirst ? {borderWidth: 1, borderColor: colors.secondary} : null,
      ]}
      onPress={props.click}
      >
      <Text
        style={[
          style.thinButtonText,
          {color: props.isFirst ? colors.white : colors.secondary},
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
export default ThinButton;
