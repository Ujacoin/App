import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import style from "../style";
import colors from "../../../assets/color/colors";
import globalStyle from "../../../styles/globalStyle";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";

import FeatherIcon from "react-native-vector-icons/Feather";

const SettingList = (props, { navigation, link }) => {
  // console.log("propos =========================>" , props);
  return (
    <TouchableOpacity
      style={style.setting}
      onPress={() => {
        if (link !== "") {
          console.log("inside");
          // navigation.navigate(link)
          props.nav();
        }
      }}
    >
      <View style={style.goldView}>
        {props.type == "Material" ? (
          <MaterialCommunityIcons
            name={props.name}
            size={15}
            color={colors.white}
          />
        ) : null}
        {props.type == "Simple" ? (
          <SimpleIcon name={props.name} size={15} color={colors.white} />
        ) : null}
        {props.type == "Feather" ? (
          <FeatherIcon name={props.name} size={15} color={colors.white} />
        ) : null}
        {props.type == "Antdesign" ? (
          <AntDesign name={props.name} size={15} color={colors.white} />
        ) : null}
      </View>
      <Text
        style={[globalStyle.InterRegular14gray, { flex: 10, marginLeft: 20 }]}
      >
        {props.title}
      </Text>
      <TouchableOpacity style={{ flex: 1 }}>
        <AntDesign name={"right"} color={colors.black} size={20} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
export default SettingList;
