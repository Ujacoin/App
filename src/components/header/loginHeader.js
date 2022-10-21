import React from "react";
import { Text, View } from "react-native";
import globalStyle from "../../styles/globalStyle";
const LoginHeader = (props) => {
  return (
    <View style={globalStyle.loginheader}>
      <Text style={globalStyle.loginheaderTitle}>{props.title}</Text>
      <Text style={globalStyle.loginheaderDesc}>Ready to invest in Yourself, Save for your Future, and Build Generational Wealth ?</Text>
      <Text style={globalStyle.loginheaderDesc1}>Please provide following to login your account.</Text>
    </View>
  );
};
export default LoginHeader;
