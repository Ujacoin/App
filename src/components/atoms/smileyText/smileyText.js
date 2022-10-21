import React from 'react';
import {Text, View} from 'react-native';
import style from '../style';
import FeatherIcon from "react-native-vector-icons/Feather";
import globalStyle from '../../../styles/globalStyle';
import colors from '../../../assets/color/colors';

const SmileyText = (props, navigation) => {
  return (
    <View
    style={style.pinkBkground}
  >
    <FeatherIcon name="smile" size={15} color={colors.gold} />
    <Text
      style={[globalStyle.InterRegular11gray,{marginLeft:10}]}
    >
     {props.title}
    </Text>
  </View>
  );
};
export default SmileyText;
