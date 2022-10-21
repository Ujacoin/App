import React from "react";
import { View, Image, Text, Pressable,TouchableOpacity } from "react-native";
import colors from "../../../assets/color/colors";
import globalStyle from "../../../styles/globalStyle";
import style from "../style";

const ChatView = (props, navigation) => {
  return (
    <View style={style.chatView}>
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="cover"
          style={style.chatImg}
          source={require("../../../assets/images/3.png")}
        />
      </View>
      <View style={{ flexDirection: "column", flex: 7 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text style={globalStyle.Interbold11}> Monica Abrahams </Text>
          <Text style={globalStyle.Interbold11}>11:02</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text style={globalStyle.Interbold11}>Yes I can’t wait too !</Text>
          <Text style={[globalStyle.InterRegular11white, style.goldCircle]}>
            3
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatView;

export const ChatViewNew = (props) => {
  const { memberDetails, navigation } = props;

  // console.log("memberDetails ==============================>", memberDetails);
  return (
    <View style={style.chatView}>
      <TouchableOpacity
        style={style.chatView}
        onPress={() => {
          navigation.navigate("Conversation", {
            reciverId: memberDetails.memberId,
            RfirstName: memberDetails.firstName,
            RlastName: memberDetails.lastName,
            RprofileImage: memberDetails.profileImage,
          });
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            resizeMode="cover"
            style={style.chatImg}
            source={{ uri: memberDetails.profileImage }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            flex: 7,
            paddingVertical:15,
            borderBottomColor: colors.lightGray,
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 10,
            }}
          >
            <Text style={globalStyle.Interbold11}>
              {" "}
              {memberDetails.firstName + " " + memberDetails.lastName}{" "}
            </Text>
            {/*  <Text style={globalStyle.Interbold11}>11:02</Text> &*/}
          </View>

           {/*   <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 10,
            }}
          >
            <Text style={globalStyle.Interbold11}>
              Yes I can’t wait too !
            </Text>
            <Text style={[globalStyle.InterRegular11white, style.goldCircle]}>
              3
            </Text>
          </View>*/}
        </View>
      </TouchableOpacity>
    </View>
  );
};
