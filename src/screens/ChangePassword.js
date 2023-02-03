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
import { PrimaryButton } from '../components/button/primarybutton';
//Internal Components
import SignupHeader from "../components/header/signupHeader"
import { Checkbox } from 'react-native-paper';
// import { TextInput } from 'react-native-paper';
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
import { COLORS, fontFamily, fontsize } from "../common/commonitem";
import { SafeAreaView } from "react-native";
import { AppTextInput, Space } from "../common/commoncomponents";
import { Passwordfill, passwordlock } from "../data/Imagedata";

//Home Screen
const ChangePassword = ({ navigation }) => {
    const [visibleLoader, setvisibleLoader] = useState(false);
    const [Password, setPassword] = useState("");
    const [oldPassword, setoldPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");


    //main JSX Screen
    return (
        <SafeAreaView style={style.containermain}>
            <MyStatusBar backgroundColor="#FFFFFF" barStyle={"dark-content"} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Space spacenumber={20} />
                <View style={globalStyle.loginheader}>
                    <Text style={style.loginheaderTitle}>Change Password</Text>
                    <Space spacenumber={10} />
                    <Text style={style.loginheaderDesc}>Tell us about yourself so we can customize your account</Text>

                </View>
                <Space spacenumber={10} />
                <Space spacenumber={15} />
                <AppTextInput
                    placeholder='Enter Password'
                    righticonname={passwordlock}
                    value={oldPassword}
                    onChangeText={(value) => {
                        setoldPassword(value);
                    }}
                />
                <AppTextInput
                    placeholder='Enter Password'
                    righticonname={passwordlock}
                    value={Password}
                    onChangeText={(value) => {
                        setPassword(value);
                    }}
                />
                <AppTextInput
                    placeholder='Enter Password'
                    righticonname={Passwordfill}
                    value={confirmPassword}
                    onChangeText={(value) => {
                        setconfirmPassword(value);
                    }}
                />

                <Space spacenumber={15} />
                <PrimaryButton btntext='Change Password' />
                <Space spacenumber={20} />
            </ScrollView>

        </SafeAreaView>
    );
};

export default ChangePassword;
const style = StyleSheet.create({
    
    loginheader: {
        alignItems: 'center'
    },
    Checkboxrow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    loginheaderTitle: {
        fontSize: fontsize.font30,
        color: colors.black,
        fontFamily: fontFamily.black,
        alignSelf: "center",
        textAlign: "center",
    },
    loginheaderDesc: {
        fontSize: fontsize.font18,
        color: colors.black,
        fontFamily: fontFamily.semiBold,
        textAlign: "left",
    },
    loginheaderDesc1: {
        fontSize: fontsize.font12,
        color: colors.black,
        fontFamily: fontFamily.regular,
        textAlign: "left",
        opacity: 0.8,
    },
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
    containermain: {
        flex: 1,
        paddingHorizontal: 40,
        backgroundColor: COLORS.white,
    },

});


