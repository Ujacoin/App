import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Buttonstyles} from './Styles';
import * as RootNavigation from '../../navigations/RootNavigation';

const PrimaryButton = props => {
  return (
    <View style={{alignSelf:"center",marginVertical:20}}>
      <TouchableOpacity
        >
        <View style={Buttonstyles.btncontainer}>
          <Text style={Buttonstyles.btntextcon}>{props.btntext}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default PrimaryButton;
