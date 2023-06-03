import React, { useState } from 'react';
import { TouchableOpacity, View, SafeAreaView, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Image from 'react-native-fast-image'
import { ThemeInput } from '../../components/ThemeInput';
import { Space } from '../../components/Space';
import { themeImages } from '../../data/imgedata';
import { globalstyle } from '../../style/Style';
import { registerstyle } from './style';
import { ThemeButton } from '../../components/Button';
import { Color } from '../../common/Common';
import { Lable, SubLable } from '../../components/Lable';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import LibSubmitSignup from '../../lib/Signup';
import Toast from 'react-native-root-toast';

function SignUp() {

    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [emailValidError, setEmailValidError] = useState("");
    const [Password, setPassword] = useState("");
    const [Mobile, setMobile] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [confirmpasswordVisibility, setconfirmVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('');
    const [confirmrightIcon, setconfirmrightIcon] = useState('');
    const [EmailNew, setEmailNew] = useState("");
    const [checked, setChecked] = React.useState(false);

    // method
    const gotoSignup = () => {
        navigation.navigate('Login');
    }

    const signupAccount = async() => {
        const fcmtoken= await messaging().getToken();
        const params=[
            {
                value:FirstName,
                validate:true,
                paramName:"firstName",
                ValidateMessage:"First name Required"

            },
            {
                value:"",
                validate:false,
                paramName:"lastName",
                ValidateMessage:"Last name Required"

            },
            {
                value:Mobile,
                validate:false,
                paramName:"mobile",
                ValidateMessage:"Mobile No. Required"

            },
            {
                value:"",
                validate:false,
                paramName:"city",
                ValidateMessage:"City Required"

            },
            {
                value:"",
                validate:false,
                paramName:"address",
                ValidateMessage:"Address Required"

            },
            {
                value:"",
                validate:false,
                paramName:"country",
                ValidateMessage:"Country Required"

            },
            {
                value:"",
                validate:false,
                paramName:"state",
                ValidateMessage:"State Required"

            },
            {
                value:"",
                validate:false,
                paramName:"zipCode",
                ValidateMessage:"ZipCode Required"

            },
            {
                value:email,
                validate:true,
                paramName:"username",
                ValidateMessage:"Email Required"

            },
            {
                value:email,
                validate:true,
                paramName:"email",
                ValidateMessage:"Email Required"

            },
            {
                value:Password,
                validate:true,
                paramName:"password",
                ValidateMessage:"Password Required",
                confirmPass:{value:confirmPassword,
                    ValidateMessage:"Password & Confirm password should be matched",}

            },
            {
                value:fcmtoken,
                validate:false,
                paramName:"fcmtoken",
                ValidateMessage:""

            }
        ];
        AsyncStorage.setItem("TempEmail", email);
        if(checked){
            LibSubmitSignup(navigation,email,Password,params,"OTP")
        }else{
            Toast.show("Please read privacy policy and check first")
        }
        // navigation.navigate("OTP")
    }


    return (
        <SafeAreaView style={globalstyle.safeAreaView}>
            <ScrollView>
                <View style={globalstyle.paddingView}>
                    <View style={registerstyle.imagecontainer}>
                        <Space spacenumber={10} />
                        <Lable title={'Create Your Account'} />
                        <Space spacenumber={20} />
                        <Text style={globalstyle.simpletext}>Please provide following details for your new account.</Text>
                        <SubLable title={'Please complete your profile to start using the app.'} />
                    </View>
                    <Space spacenumber={20} />
                    <ThemeInput
                        value={email}
                        onChangeText={(value) => {
                            console.log("valuee =", value);
                            setEmail(value);
                        }}
                        placeholder="Enter Email"
                    />
                    <Space spacenumber={5} />
                    <Text style={[globalstyle.dashedstyle,{color:Color.black}]}> -- OR -- </Text>
                    <Space spacenumber={5} />
                    <ThemeInput
                        value={Mobile}
                        onChangeText={(value) => {
                            console.log("valuee =", value);
                            setMobile(value);
                        }}
                        placeholder="Enter Mobile"
                    />
                    <Space spacenumber={5} />
                    <Text style={[globalstyle.dashedstyle,{color:Color.black}]}> -- Basic Details -- </Text>
                    <Space spacenumber={5} />
                    <ThemeInput
                        value={FirstName}
                        onChangeText={(value) => {
                            console.log("valuee =", value);
                            setFirstName(value);
                        }}
                        placeholder="Enter Name"
                    />
                    <ThemeInput
                        value={Password}
                        onChangeText={(value) => {
                            console.log("valuee =", value);
                            setPassword(value);
                        }}
                        placeholder="Enter Password"
                    />
                    <ThemeInput
                        value={confirmPassword}
                        onChangeText={(value) => {
                            console.log("valuee =", value);
                            setconfirmPassword(value);
                        }}
                        placeholder="Confirm Password"
                    />
                    <Space spacenumber={15} />
                    <View
                        style={globalstyle.Checkboxcontainer1}
                    >
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                        <View
                            style={globalstyle.Checkboxcontainer2}
                        >
                            <Text style={registerstyle.simpletext}>I have read and agree to Ujamaa Financial </Text>
                            <TouchableOpacity
                                onPress={gotoSignup}
                                style={registerstyle.textbtn}>
                                <Text style={registerstyle.textbtntext}>Terms of Service </Text>
                            </TouchableOpacity>
                            <Text style={registerstyle.simpletext}>and </Text>
                            <TouchableOpacity
                                onPress={gotoSignup}
                                style={registerstyle.textbtn}>
                                <Text style={registerstyle.textbtntext}>Privacy Policy.</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Space spacenumber={15} />
                    <ThemeButton
                        backgroundColor={Color.themeScarlet}
                        title={'Set up my Account'}
                        onPress={() => { signupAccount() }}
                        color={Color.themedarkblue}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={registerstyle.simpletext}>Already have an account ?</Text>
                        <TouchableOpacity
                            onPress={gotoSignup}
                            style={registerstyle.textbtn}>
                            <Text style={registerstyle.textbtntext}> Login</Text>
                        </TouchableOpacity>
                    </View>
                    <Space spacenumber={20} />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

export default SignUp;