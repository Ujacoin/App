import React from 'react';
import { Image, View, Text } from 'react-native';
import colors from '../../../../assets/color/colors';

const TextImageView = (props) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={props.img}
        style={{
          width: 120,
          height: 120,
          borderRadius: 120 / 2,
          marginHorizontal: 5,
        }}
      />
      <Text style={{ color: colors.black, fontSize: 14, fontFamily: "Inter", marginTop: 5 }}>
        {props.name}
      </Text>
    </View>
  );
};
export default TextImageView;

export const TextImageViewNew = (props) => {
  return (
    <View style={{ alignItems: 'flex-start',alignItems:'center', width: 150, }}>
      <Image
        source={{ uri: props.img }}
        style={{
          width: 130,
          height: 130,
          borderRadius: 120 / 1,
          marginHorizontal: 5,
        }}
      />
      <Text style={{ color: colors.black, fontSize: 15, fontFamily: "Inter", marginTop: 5 ,textAlign:'center'}}>
        {props.name}
      </Text>
    </View>
  );
}
