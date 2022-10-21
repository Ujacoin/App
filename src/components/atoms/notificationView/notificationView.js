import React from "react";
import { Text, View, Image } from "react-native";
import style from "../style";
import FeatherIcon from "react-native-vector-icons/Feather";
import globalStyle from "../../../styles/globalStyle";
import colors from "../../../assets/color/colors";

const NotificationView = (props, navigation) => {
  return (
    <View style={[style.notificationView,{width:'100%'}]}>
      <View style={{ flexDirection: "row", flexWrap: 'wrap' }}>
        <View style={{marginHorizontal:10,}}>
          <Image
            resizeMode="cover"
            style={style.notificationImg}
            source={require("../../../assets/images/3.png")}
          />

        </View>

        <View style={[style.descView, { width: '85%' }]} >

          <Text style={globalStyle.InterRegular11graytitle}>
            {props.text}
          </Text>
          <Text style={globalStyle.InterRegular11gray}>{props.time}</Text>
        </View>
      </View>
    </View>
  );
};
export default NotificationView;

export const NotificationViewNew = (props, navigation) => {
  let { requestData, acceptrejectCallback, onReffer } = props;
  return (
    <View style={style.notificationView}>
      <View style={{ flexDirection: "row" }}>
        <View style={style.desc}>
          <Text style={globalStyle.InterRegular11graytitle}>
            {props.point}
          </Text>
        </View>

        <View style={style.descView}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: '100%',
            }}
          >
            <Text style={globalStyle.InterRegular11gray}>{props.name}</Text>
            {

            }
            <Text
              style={globalStyle.InterRegular11graytitle}
              onPress={() => {
                acceptrejectCallback(requestData, true);
              }}
            >
              {"Accept"}
            </Text>

            <Text
              style={globalStyle.InterRegular11gray}
              onPress={() => {
                acceptrejectCallback(requestData, false);
              }}
            >
              {"Reject"}
            </Text>

            <Text style={globalStyle.InterRegular11gray}
              onPress={() => {
                onReffer(requestData)
              }}
            >{"Refer"}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
