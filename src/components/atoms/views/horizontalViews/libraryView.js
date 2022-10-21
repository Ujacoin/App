import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import style from '../../style';
import RoundedShortView from '../../views/roundedShortView';

const LibraryView = (props, navigation) => {
  return (
    <TouchableOpacity style={style.libraryView}>
      <View style={{flexDirection: 'row'}}>
        <View style={style.libraryImgView}>
          <Image source={props.library.img} style={style.libraryImg} />
        </View>
        <View style={style.libraryContentView}>
          <RoundedShortView name={props.library.category} />
          <Text style={style.libraryTitle}>{props.library.title}</Text>
          <Text style={style.libraryType}>{props.library.type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default LibraryView;
