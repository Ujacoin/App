import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../../assets/color/colors';
import globalStyle from '../../../../styles/globalStyle';

import style from '../../style';
import RoundedShortView from '../roundedShortView';

const GroupLeadView = (props, navigation) => {
  return (
    <TouchableOpacity style={style.libraryView}>
      <View style={{flexDirection: 'row'}}>
        <View style={style.libraryHeadingView}>
          <Image
            source={require('../../../../assets/images/8.jpg')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={style.libraryContentView}>
          <Text style={style.libraryTitle}>{'Kristin Watson'}</Text>
          <Text style={[globalStyle.Interbookfont14]}>
            {'Sistahbiz Ambassador'}
          </Text>
          <Text
            style={[
              globalStyle.groupSmallText,
              {paddingTop: '2.5%', paddingLeft: 20, color: colors.gray},
            ]}>
            {'Integer sit accumsan varius eu odio. Non pellentesque purus...'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default GroupLeadView;
