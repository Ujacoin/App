import React from 'react';
import {Text, View} from 'react-native';
import style from '../style';

const Logo = ({props, navigation}) => {
  return (
    <View style={style.logo}>
      <Text style={style.logoContent}>{`S`}</Text>
    </View>
  );
};
export default Logo;
