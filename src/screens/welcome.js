import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { logo, splashimg } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { windowHeight } from '../common/responsive';
import { Space } from '../common/commoncomponents';
import { boxShadow, COLORS, fontFamily } from '../common/commonitem';

const Welcome = ({ navigation }) => {

  /*** BEGIN FROM HERE ***/
  useEffect(() => {
    setTimeout(
      function() {
        navigation.navigate("Login")
      }
      .bind(this),
      2000
    );
  }, [])


  /*** DESIGN HERE ***/
  const gonext = () => {
    navigation.navigate("Login")
  }

  return (
    <LinearGradient
      colors={[COLORS.linearGradient1, COLORS.linearGradient2,]}
      locations={[0.2, 0.9, 1, 1]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <MyStatusBar backgroundColor="black" barStyle={"light-content"} />
      <ScrollView style={{ zIndex: 9 }}>
        <View style={styles.flex}>
          <View style={styles.topcontainer}>
            <View style={styles.logontainer}>
              <Image
                style={styles.logoimage}
                source={logo}
                resizeMode='contain'
              />
            </View>
            <Space spacenumber={20} />
            <View>
              <Text style={allcommonstyle.weldescription}>THE</Text>
              <Space spacenumber={5} />
              <Text style={allcommonstyle.weltitle}>UJA<Text style={[allcommonstyle.weltitle,{fontFamily:fontFamily.regular}]}>COIN</Text></Text>
              <Text style={allcommonstyle.weldetail}>Buy some coin.
                Make some coin.</Text>
              <Space spacenumber={5} />
            </View>


          </View>

        </View>


      </ScrollView>
    </LinearGradient>
  );
};
export default Welcome;

const styles = StyleSheet.create({
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