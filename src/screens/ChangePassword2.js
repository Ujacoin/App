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
    Image,
    ImageBackground,
} from "react-native";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import globalStyle from "../styles/globalStyle";
import LinearGradient from "react-native-linear-gradient";
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import LoginHeader from "../components/header/loginHeader"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// external Colors
import colors from "../assets/color/colors";
import ApiMiddleware from "../middleware/api";
import { endPoint } from "../middleware/constants.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ripple from "react-native-material-ripple";
import Toast from "react-native-root-toast";
import { eye, fulllogo, loginimg, Passwordfill, passwordlock, user } from "../data/Imagedata";
import allcommonstyle from "../styles/allcommonstyle";
import { IconButton, PrimaryButton } from "../components/button/primarybutton";
import { COLORS, fontFamily } from "../common/commonitem";
import { AppTextInput, Space } from "../common/commoncomponents";
import { Divider, Checkbox } from "react-native-paper";
import Loader from "../components/Loader/Loader";
//Home Screen
const ChangePassword = ({ navigation }) => {
    //Internal Methods

    const [visibleLoader, setvisibleLoader] = useState(false);
    const [Password, setPassword] = useState("");
    const [oldPassword, setoldPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");


   
    return (
        <LinearGradient
            colors={["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"]}
            locations={[0.1, 0.4, 1, 1]}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
        >
            <Loader visible={visibleLoader} />
            <MyStatusBar backgroundColor="#FFFFFF" barStyle={"dark-content"} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={allcommonstyle.loginflex}>
                    <View style={{ flex: 1 }}>
                        <LinearGradient
                            colors={['#146E79', '#FFFA00']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 0, y: 0 }}
                        >
                            <ImageBackground source={loginimg} resizeMode="cover" style={allcommonstyle.logintop}>
                                <Image
                                    style={allcommonstyle.loginlogostyle}
                                    source={fulllogo}
                                    resizeMode='contain'
                                />
                            </ImageBackground>
                        </LinearGradient>
                    </View>

                    <View style={[allcommonstyle.whitecontainer, { flex: 3, }]}>
                        <Space spacenumber={25} />
                        <Text style={allcommonstyle.loginsignuptitle}>Change Password</Text>
                        <Text style={[allcommonstyle.description, { maxWidth: '70%' }]}>Tell us about yourself so we can customize your account</Text>
                        <Space spacenumber={15} />
                        <AppTextInput
                            placeholder='Enter Password'
                            label='Old Password'
                            imageicon={passwordlock}
                            value={oldPassword}
                            onChangeText={(value) => {
                                setoldPassword(value);
                            }}
                        />
                        <AppTextInput
                            placeholder='Enter Password'
                            label='New Password'
                            imageicon={passwordlock}
                            value={Password}
                            onChangeText={(value) => {
                                setPassword(value);
                            }}
                        />
                        <AppTextInput
                            placeholder='Enter Password'
                            label='Confirm Password'
                            imageicon={Passwordfill}
                            value={confirmPassword}
                            onChangeText={(value) => {
                                setconfirmPassword(value);
                            }}
                        />

                        <Space spacenumber={15} />
                        <PrimaryButton btntext='Change Password' />
                        <Space spacenumber={5} />

                    </View>
                </View>
            </ScrollView>

        </LinearGradient>
    );
};
export default ChangePassword;



