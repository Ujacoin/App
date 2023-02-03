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
const Completeprofile = ({ navigation }) => {
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
                    console.log("OnboardingVisited", AsyncStorage.getItem("OnboardingVisited"));
                    AsyncStorage.getItem("OnboardingVisited").then((value) => {
                        console.log("After OnboardingVisited", value);
                        if (value !== null && value) {
                            navigation.navigate("HomePage");
                        } else {
                            AsyncStorage.setItem("OnboardingVisited", "true");
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
        <SafeAreaView style={style.containermain}>
            
            <MyStatusBar backgroundColor="#FFFFFF" barStyle={"dark-content"} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Space spacenumber={20} />
                <View style={globalStyle.loginheader}>
                    <Text style={style.loginheaderTitle}>Account Created!</Text>
                    <Space spacenumber={10} />
                    <Text style={style.loginheaderDesc1}>Your account has been created successfully.</Text>
                    <Text style={style.loginheaderDesc}>Please complete your profile to start using the app.</Text>

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
                    {emailValidError ? <Text>{emailValidError}</Text> : null}

                </View>
                <View style={style.loginTextInput}>
                    <TextInput
                        style={allcommonstyle.simpleinput}
                        value={EmailNew}
                        onChangeText={(value) => {
                            console.log("valuee =", value);
                            setEmailNew(value);
                        }}
                        placeholder="Enter Last Name"
                    ></TextInput>
                    {emailValidError ? <Text>{emailValidError}</Text> : null}

                </View>
                <View style={style.loginTextInput}>
                    <TextInput
                        style={allcommonstyle.simpleinput}
                        value={EmailNew}
                        onChangeText={(value) => {
                            console.log("valuee =", value);
                            setEmailNew(value);
                        }}
                        placeholder="Choose your username"
                    ></TextInput>
                    {emailValidError ? <Text>{emailValidError}</Text> : null}

                </View>
                <View style={style.loginTextInput}>
                    <TextInput
                        style={allcommonstyle.simpleinput}
                        value={Password}
                        onChangeText={(value) => {
                            console.log("valuee =", value);
                            setEmailNew(value);
                        }}
                        placeholder="City, State"
                    ></TextInput>


                </View>
                <Space spacenumber={10} />
                <PrimaryButton btntext='Continue' backgroundColor={COLORS.primaryyellow} onPress={() => { navigation.navigate('EmailSignup') }} />
                <Space spacenumber={20} />
            </ScrollView>

        </SafeAreaView>
    );
};

export default Completeprofile;
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


