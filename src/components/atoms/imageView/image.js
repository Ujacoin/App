import React from 'react';
import {Image} from 'react-native';

const ImageView = (props, navigation) => {
  return (
    <Image
      source={props.img}
      style={{
        width: 86,
        height: 86,
        borderRadius: 86 / 2,
        marginRight: '2.5%',
      }}
    />
  );
};
export default ImageView;
