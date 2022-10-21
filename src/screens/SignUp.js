//react native Components
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
  StyleSheet,
} from "react-native";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//Internal Components
import SignupHeader from "../components/header/signupHeader"
import { Checkbox } from 'react-native-paper';

import globalStyle from "../styles/globalStyle";
import LinearGradient from "react-native-linear-gradient";
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// external Colors
import colors from "../assets/color/colors";
import ApiMiddleware from "../middleware/api";
import { endPoint } from "../middleware/constants.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ripple from "react-native-material-ripple";
import Toast from "react-native-root-toast";
//Home Screen
const Login = ({ navigation }) => {
  //Internal Methods

  const [isSelected, setSelection] = useState(false);
  const [openModal, setOpenModal] = useState(false)
  const enableContinueBtn = () => {
    //enable continue button if all condition is fulfilled
    if (isSelected != true) {
      setSelection(!isSelected);
    } else {
      setSelection(!isSelected);
    }
  };

  const [email, setEmail] = useState("");
  const [emailValidError, setEmailValidError] = useState("");
  const [Password, setPassword] = useState("");

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const handleValidEmail = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (val.length === 0) {
      setEmailValidError("email address must be enter");
    } else if (reg.test(val) === false) {
      setEmailValidError("enter valid email address");
    } else if (reg.test(val) === true) {
      setEmailValidError("");
    }
  };

  const [EmailNew, setEmailNew] = useState("");

  console.log("email ==-=------->", EmailNew);

  const onSubmitlogin = async (username, password) => {
    console.log("hereeeeee", Platform.OS);
    let fcmtoken = await AsyncStorage.getItem("fcmtoken");
    let tokan;
    if (fcmtoken) {
      tokan = fcmtoken;
    }
    let requireParams = {
      data: {
        username: username,
        password: password,
        deviceToken: tokan ? tokan : "",
      },
      method: endPoint.postMethod,
      endpoint: endPoint.login,
    };

    console.log(
      "requireParams ===================================",
      requireParams
    );
    ApiMiddleware(requireParams)
      .then((res) => {
        if (res.data.status == true) {
          console.log(
            "login api  response isssssssssssssssssssssssssssssssss",
            res.data
          );
          console.log("OnboardingVisited",AsyncStorage.getItem("OnboardingVisited"));
          AsyncStorage.getItem("OnboardingVisited").then((value) => {
            console.log("After OnboardingVisited",value);
            if(value !== null && value){
              navigation.navigate("HomePage");
            }else{
              AsyncStorage.setItem("OnboardingVisited","true");
              navigation.navigate("Onboarding");
            }
          })
          .then(res => {

          });
          // Alert.alert("Message",res.data.message);
          Toast.show(res.data.message);
          // setOpenModal(true);
          // if (res.data.result.isOnboarding) {
          // if(AsyncStorage.getItem("OnboardingVisited") == null){
          //   // navigation.navigate("HomePage");
          //   // navigation.navigate("Onboarding");
          // } else {
          //   // AsyncStorage.setItem("OnboardingVisited",true);
          //   // navigation.navigate("Onboarding");
          // }
        } else {
          console.log("errorrrrrrrrr isss", res.data);
          Alert.alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log("errorrrrrrrrrrrrrrrrrr ", err);
      });
  };

  //main JSX Screen
  return (
    <LinearGradient
      colors={["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"]}
      locations={[0.1, 0.4, 1, 1]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <MyStatusBar backgroundColor="#FFFFFF" barStyle={"dark-content"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Home Header*/}
        <SignupHeader title={"Welcome!"} />

        <View style={globalStyle.loginTextInput}>
          <TextInput
            style={globalStyle.placeholderTextlogin}
            value={EmailNew}
            editable={true}
            onChangeText={(value) => {
              console.log("valuee =", value);
              setEmailNew(value);
              // handleValidEmail(value);
            }}
            placeholder="Email"
          ></TextInput>
          {emailValidError ? <Text>{emailValidError}</Text> : null}
        </View>
        <View style={globalStyle.loginTextInput}>
          <View style={globalStyle.iconplaceholderTextlogin}>
            <TextInput
              style={{ flex: 1, }}
              placeholder="Password"
              secureTextEntry={passwordVisibility}
              value={Password}
              onChangeText={(value) => {
                setPassword(value);
              }}
            />
            <Ripple rippleContainerBorderRadius={100} onPress={handlePasswordVisibility} style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', marginLeft: 10, }}>
              <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Ripple>
          </View>
        </View>
        <View style={globalStyle.loginCheckbox}>
          <Checkbox.Android
            uncheckedColor={colors.gray}
            rippleColor={colors.gray}
            backgroundColor={colors.black}
            status={isSelected ? 'checked' : 'unchecked'}
            onPress={() => enableContinueBtn()}
            color={colors.gray}
          />
          <Text style={globalStyle.Interbold14}>
              <Text style={globalStyle.Interbold_tnc1}>
                  I have read and agree to Ujacoin’s{"\n"}
              </Text>
              <Text style={globalStyle.Interbold_tnc}>
                  Terms of  Service 
               </Text>
              <Text style={globalStyle.Interbold14}>
              &nbsp;and &nbsp;
               </Text>
              <Text style={globalStyle.Interbold_tnc}>
                   Privacy Policy.
               </Text>
          </Text>
        </View>

        <View style={[globalStyle.logo_container,{marginTop:30}]}>
          <TouchableOpacity style={[globalStyle.second_home_content_container,]} onPress={() => navigation.navigate("Login")}>
              <Text style={globalStyle.general_button2}>
              Sign up my Acccount
              </Text>
            </TouchableOpacity>
        </View>
        <View style={[globalStyle.logo_container,{marginTop:10}]}>
          <TouchableOpacity style={[globalStyle.second_home_content_container,]} onPress={() => navigation.navigate("Login")}>
              <Text style={globalStyle.general_button}>
              Sign up with Phone Number
              </Text>
            </TouchableOpacity>
        </View>
        <View style={globalStyle.loginheader}>
          <Text style={[globalStyle.Interbold_tnc1,{alignSelf: "center",textAlign: "center",marginTop:20}]}>Already have an account ? - </Text>
          <Text style={[globalStyle.Interbold_tnc,{alignSelf: "center",textAlign: "center",}]} onPress={() => navigation.navigate("Login")}>Login</Text>
        </View>
      </ScrollView>
      <Modal
        transparent
        animationType="slide"
        visible={openModal}
      >
        <View style={modalStyles.modalMainView}>

          {/* <View style={modalStyles.modalUnderView}> */}
          <LinearGradient
            colors={['rgba(255, 255, 255, 1)', 'rgba(254, 236, 241, 0.95)']}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={modalStyles.modalUnderView}
          >
            <TouchableOpacity
              onPress={() => setOpenModal(false)}
              activeOpacity={0.8}
              style={{ height: 20, width: 20, alignSelf: 'flex-end' }}>
              <Icon name="close" size={25} />
            </TouchableOpacity>
            <Text style={{ fontSize: 14, color: colors.black }}>Mark your calendar Sis! You’ve registered for Black Girl Therapy.</Text>
            <Text style={{ fontSize: 14, color: colors.black, marginTop: 20, fontWeight: "bold", marginBottom: 60 }}>Wed Aug 5, 1:00-2:00 PM </Text>
          </LinearGradient>
          {/* </View> */}

        </View>
      </Modal>
    </LinearGradient>
   );
};

export default Login;
const modalStyles = StyleSheet.create({
  msgText: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 50
  },
  modalUnderView: {
    //backgroundColor: 'rgba(255,255,255,0.95)',
    margin: 30,
    borderRadius: 0,
    paddingHorizontal: 50,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalMainView: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)' },
  buttonText: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
  },

});


