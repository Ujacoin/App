import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import globalStyle from '../../../styles/globalStyle';

import style from '../style';
import RoundedShortView from '../views/roundedShortView';

const LibraryView2 = (props, navigation) => {
  return (
    <TouchableOpacity style={style.libraryView}>
      <View style={{flexDirection: 'row'}}>
        <View style={style.libraryHeadingView}>
          <Text style={style.boldHeading}>13</Text>
        </View>
        <View style={style.libraryContentView}>
          <Text
            style={[
              globalStyle.groupSmallText,
              {fontSize: 12, paddingLeft: 20},
            ]}>
            {props.date.toUpperCase()}
          </Text>
          <Text style={[style.libraryTitle, {paddingTop: '5%'}]}>
            {props.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default LibraryView2;
