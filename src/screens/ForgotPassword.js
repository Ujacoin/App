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
import { Space } from '../common/commoncomponents';
import allcommonstyle from "../styles/allcommonstyle";
//Home Screen
const ForgotPassword = ({ navigation }) => {


    const [EmailNew, setEmailNew] = useState("");

    //main JSX Screen
    return (
        <SafeAreaView style={style.containermain}>
            <MyStatusBar backgroundColor="#FFFFFF" barStyle={"dark-content"} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Space spacenumber={20} />
                <View style={globalStyle.loginheader}>
                    <Text style={style.loginheaderTitle}>Forgot Password</Text>
                    <Space spacenumber={10} />
                    <Text style={[style.loginheaderDesc, { textAlign: 'center' }]}>Tell us about yourself so we can customize your account</Text>

                </View>
                <Space spacenumber={10} />
                <View style={style.loginTextInput}>
                    <TextInput
                        style={allcommonstyle.simpleinput}
                        value={EmailNew}
                        onChangeText={(value) => {
                            console.log("valuee =", value);
                            setEmailNew(value);
                        }}
                        placeholder="Enter First Name"
                    ></TextInput>

                </View>

                <Space spacenumber={25} />
                <PrimaryButton btntext='Reset' backgroundColor={COLORS.primaryyellow} onPress={() => { navigation.navigate('Otp') }} />

                <Space spacenumber={20} />
            </ScrollView>

        </SafeAreaView>
    );
};

export default ForgotPassword;
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


