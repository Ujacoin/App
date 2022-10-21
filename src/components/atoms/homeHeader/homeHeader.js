import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../../../assets/color/colors";
import Logo from "../logo/logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from "../../../navigations/RootNavigation";
import style from "../style";
import Ripple from "react-native-material-ripple";


const getMember = async ({SetmemeberPhoto}) => {
  let memberData = await AsyncStorage.getItem("authData");
  let data = JSON.parse(memberData);
  SetmemeberPhoto(data.profileImage)
}
const HomeHeader = (props) => {
  const [memeberPhoto,SetmemeberPhoto]=useState("");
  getMember({SetmemeberPhoto});
  return (
    <View
      style={{
        flexDirection: "row",
        paddingTop: 30,
        paddingVertical: 5,
        paddingLeft: 20,
        backgroundColor: props.backgroundColor ? props.backgroundColor : 'transparent',
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 10,
      }}
    >
      <View
        style={{
          justifyContent: "center",

          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 28,

            color: "pink",

            fontFamily: "Inter-Regular",
          }}
        >{`S`}</Text>
      </View>

      <Text
        style={{
          fontSize: 12,

          color: colors.black,
        }}
        onPress={() => {
          RootNavigation.navigate("HomePage");
        }}
      >
        Home
      </Text>

      <Text
        style={{
          fontSize: 12,

          color: colors.black,
        }}
        onPress={() => {
          RootNavigation.navigate("Network Directory");
        }}
      >
        Members
      </Text>

      <Text
        style={{
          fontSize: 12,

          color: colors.black,
        }}
        onPress={() => {
          RootNavigation.navigate("Event");
        }}
      >
        Events
      </Text>
      <Ripple
        rippleContainerBorderRadius={100}
        style={{ height: 45, width: 45 }}
        onPress={() => {
          RootNavigation.navigate("Notification");
        }}
      >
        <View
          style={{
            backgroundColor: colors.red,
            width: 12,
            height: 12,
            position: "absolute",
            left: 30,
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 6,
            zIndex: 100,
          }}
        ></View>
        {/* <Text>{memeberPhoto}</Text> */}
        <Image
          // source={require("../../../assets/images/3.png")}
          source={{ uri: memeberPhoto }}
          style={{ width: 40, height: 40, borderRadius: 20 }}
          resizeMode="cover"
        />
      </Ripple>

      <Icon
        name="dots-vertical"
        size={30}
        onPress={() => {
          RootNavigation.navigate("Drawer");
        }}
      />
    </View>
  );
};

export default HomeHeader;
