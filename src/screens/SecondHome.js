import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, Linking } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import globalStyle from '../styles/globalStyle';
const Welcome = ({ navigation }) => {
  
  /*** BEGIN FROM HERE ***/
  useEffect(() => {
    checkisLogin()
  }, [])


  const checkisLogin = async () => {
    /*** CHEKING LOGIN ***/
    // try {
    //   const value = await AsyncStorage.getItem('authData')
    //   if (value !== null) {
    //     console.log("CHECK LOGIN RESULT ====== ", value);
    //     // value previously stored
    //     navigation.navigate("HomePage")
    //   }
    // } catch (e) {
    //   // error reading value
    // }
  }

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
              style={globalStyle.second_home_logo}
              source={require('../assets/images/homesecondscreen.png')}
            />
        </View>
        
        <View style={globalStyle.logo_container}>
            <View style={globalStyle.second_home_content_container}>
                  <Text style={globalStyle.second_home_style1}>
                    <Text style={{fontWeight: "bold",fontWeight: "700",}}>A programmable digital stable coin.</Text> 
                    <Text> Which can be used for instant, secure, and private transactions.</Text>
                  </Text>
            </View>
         </View>
         <View style={globalStyle.logo_container}>
            <TouchableOpacity style={[globalStyle.second_home_content_container,{marginTop:100}]} onPress={() => navigation.navigate("Login")}>
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
export default Welcome;