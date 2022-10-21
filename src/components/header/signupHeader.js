import React from "react";
import { View,Text } from "react-native";
import globalStyle from "../../styles/globalStyle";
const SignupHeader = (props) => {
  return (
    <View style={globalStyle.loginheader}>
      <Text style={globalStyle.loginheaderTitle}>{props.title}</Text>
      <Text style={globalStyle.loginheaderDesc}>Ready to invest in Yourself, Save for your Future, and Build Generational Wealth ?</Text>
      <Text style={globalStyle.loginheaderDesc1}>Please provide following details for your new account.</Text>
    </View>
  );
};
export default SignupHeader;
