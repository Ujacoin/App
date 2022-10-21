import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from '../../style';
import * as RootNavigation from '../../../../navigations/RootNavigation';

const PdfContainer = (props, navigation) => {
  return (
    <TouchableOpacity style={style.pdfcontainer}>
      <View style={style.pdfimgwidth}>
        <Image
          source={require('../../../../assets/images/pdf.png')}
          style={style.pdfimg}
        />
      </View>
      <View style={style.pdfnamewidth}>
        <View style={style.flexrow}>
          <Text numberOfLines={1} style={[style.pdfname]}>
            {props.resource.title}
          </Text>
          <Text style={style.pdfsize}>{props.resource.size}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default PdfContainer;
