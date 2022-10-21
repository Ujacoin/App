import React from "react";
import { View, Image } from "react-native";
import style from "../style";

const OnlineImage = (props, navigation) => {
  return (
    <View style={style.onlineView}>
      {props.type == "above" ? (
        <View style={style.smallcircle}></View>
      ) : (
        <View style={style.onlineImg}></View>
      )}

      <Image source={props.url} style={style.circleImg} resizeMode="cover" />
    </View>
  );
};

export default OnlineImage;
