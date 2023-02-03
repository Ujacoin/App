import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Buttonstyles } from './Styles';
import * as RootNavigation from '../../navigations/RootNavigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../common/commonitem';
import { Image } from 'react-native';

export const PrimaryButton = props => {
  return (
    <View style={Buttonstyles.PrimaryButtoncontainer}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[Buttonstyles.btncontainer,{backgroundColor:props.backgroundColor ? props.backgroundColor : COLORS.primaryyellow}]}
      >
        <Text style={Buttonstyles.btntextcon}>{props.btntext}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const IconButton = props => {
  return (

    <TouchableOpacity style={Buttonstyles.roundbuttoncontainer} onPress={props.onPress}>
      <FontAwesome
        name={props.name}
        color={COLORS.white}
        size={15}
      />
    </TouchableOpacity>
  );
};
export const ImageButton = props => {
  return (

    <TouchableOpacity style={Buttonstyles.roundbuttoncontainer} onPress={props.onPress}>
      <Image
        source={props.name}
        color={COLORS.white}
        size={15}
      />
    </TouchableOpacity>
  );
};
