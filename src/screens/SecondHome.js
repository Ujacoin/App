import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Space } from '../common/commoncomponents';
import { COLORS, fontFamily, fontsize } from '../common/commonitem';
import { windowHeight } from '../common/responsive';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import globalStyle from '../styles/globalStyle';

const SecondHome = ({ navigation }) => {



  /*** DESIGN HERE ***/
  return (
    <LinearGradient
      colors={[COLORS.linearGradient1, COLORS.linearGradient2]}
      locations={[0.2, 0.9, 1, 1]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <MyStatusBar backgroundColor="#5313AE" barStyle={"light-content"} />
      <ScrollView style={globalStyle.welcomecontainer}>
        {/* Logo */}
        <View style={globalStyle.logo_container}>
          <Image
            style={globalStyle.second_home_logo}
            source={require('../assets/images/homesecondscreen.png')}
          />
        </View>
        <Space spacenumber={30} />
        <View style={globalStyle.logo_container}>
          <View style={globalStyle.second_home_content_container}>
            <Text style={styles.description}>
              A programmable digital stable coin.
              <Text style={{ fontFamily: fontFamily.regular }}> Which can be used for instant, secure, and private transactions.</Text>
            </Text>
          </View>
        </View>
        <Space spacenumber={30} />
        <View style={globalStyle.logo_container}>
          <TouchableOpacity style={[globalStyle.second_home_content_container]} onPress={() => navigation.navigate("SignUp")}>
            <Text style={globalStyle.general_button} >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Image
        style={globalStyle.cloud_left}
        source={require('../assets/images/cloudleft.png')}
      />
      <Image
        style={globalStyle.cloud_right}
        source={require('../assets/images/cloudright.png')}
      />
    </LinearGradient>
  );
};
export default SecondHome;

const styles = StyleSheet.create({
  description: {
    fontSize: fontsize.font24,
    fontFamily: fontFamily.bold,
    color: COLORS.white,
  },
  logoimage: {
    height: 212,
    width: 212,
  },
  topcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    height: windowHeight,
    flexDirection: 'column',
    paddingHorizontal: 60,
  }
})