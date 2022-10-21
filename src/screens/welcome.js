import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import globalStyle from '../styles/globalStyle';
const Welcome = ({ navigation }) => {

  /*** BEGIN FROM HERE ***/
  useEffect(() => {
    setTimeout(
      function() {
        navigation.navigate("SecondHome")
      }
      .bind(this),
      2000
    );
  }, [])


/*** DESIGN HERE ***/
  return (
    <LinearGradient
      colors={["rgba(83, 19, 174, 1)", "rgba(57, 114, 162, 1)"]}
      locations={[0.2, 0.8, 1, 1]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
     style={{flex:1}}
    >
      <MyStatusBar backgroundColor="#5313AE"  barStyle={"light-content"} />
      <ScrollView style={globalStyle.welcomecontainer}>
        {/* Logo */}
        <View style={globalStyle.logo_container}>
            <Image
              style={globalStyle.image}
              source={require('../assets/images/18.png')}
            />
        </View>
        {/* Main */}
        <View style={globalStyle.logo_container}>
            <View style={globalStyle.content_container}>
                  <Text style={globalStyle.splacescreen_style1}>THE</Text>
                  <View>
                    <TouchableOpacity style={globalStyle.splacescreen_style2}>
                      <Text style={globalStyle.splacescreen_style3}>UJA</Text>
                      <Text style={globalStyle.splacescreen_style4}> COIN</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={globalStyle.splacescreen_style5}>Buy Some Coin.</Text>
                  <Text style={globalStyle.splacescreen_style5}>Make Some Coin.</Text>
            </View>
          </View>
      </ScrollView>
    </LinearGradient>
  );
};
export default Welcome;