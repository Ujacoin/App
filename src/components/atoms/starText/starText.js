import React from "react";
import { Text, View } from "react-native";
import style from "../style";
import FeatherIcon from "react-native-vector-icons/Feather";
import globalStyle from "../../../styles/globalStyle";
import colors from "../../../assets/color/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const StarText = (props, navigation) => {
  return (
    <View
      style={style.starView}
    >
      <Icon name="star" color={colors.gold} size={15} />
      <Text
        style={{
          color: colors.black,
          fontSize: 11,
          marginLeft: 20,
         
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};
export default StarText;
