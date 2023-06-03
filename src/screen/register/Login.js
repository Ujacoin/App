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
import LibSubmitLogin from '../../lib/Login';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-root-toast';

function Login() {


    const navigation = useNavigation();
    const [email, setEmali] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [checked, setChecked] = React.useState(false);

    // method
    const gotoSignup = () => {
        navigation.navigate('SignUp');
    }
    const signInCheck = async () => {
        const fcmtoken= await messaging().getToken();
        const params=[
            {
                value:email,
                validate:true,
                paramName:"username",
                ValidateMessage:"Email Required"

            },
            {
                value:password,
                validate:true,
                paramName:"password",
                ValidateMessage:"Password Required"

            },
            {
                value:fcmtoken,
                validate:false,
                paramName:"fcmtoken",
                ValidateMessage:""

            }
        ];
        await AsyncStorage.setItem("EmailId", email);
        await AsyncStorage.setItem("Password", password);
        if(checked){
            LibSubmitLogin(navigation,params,"Home","Home")
        }else{
            Toast.show("Please read privacy policy and check first")
        }
        // navigation.navigate("Forum")
    }
    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);
        }
    };
    return (
        <SafeAreaView style={globalstyle.safeAreaView}>
            <ScrollView>
                <View style={globalstyle.paddingView}>
                    <View style={registerstyle.imagecontainer}>
                        <Space spacenumber={10} />
                        <Lable title={'Welcome!'} />
                        <Space spacenumber={20} />
                        <SubLable title={'Please enter your login details to access your account.'} />
                        {/* <Text style={globalstyle.simpletext}>Please provide following details for your new account.</Text> */}
                    </View>
                    <Space spacenumber={20} />
                    <ThemeInput
                        placeholder={'Email'}
                        value={email}
                        onChangeText={(email) => setEmali(email)}
                    />
                    <ThemeInput
                        placeholder={'Password'}
                        icon={rightIcon}
                        value={password}
                        secureTextEntry={passwordVisibility}
                        onChangeText={(password) => setPassword(password)}
                        iconPress={handlePasswordVisibility}
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
                        backgroundColor={Color.themedarkblue}
                        title={'Login'}
                        onPress={() => { signInCheck() }}
                        color={Color.themeScarlet}
                    />
                    {/* <ThemeButton
                        backgroundColor={Color.themedarkblue}
                        title={'Sign up with Phone Number'}
                        onPress={() => { gotoSignup }}
                        color={Color.themeScarlet}
                    /> */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={registerstyle.simpletext}>Don’t have an account?</Text>
                        <TouchableOpacity
                            onPress={gotoSignup}
                            style={registerstyle.textbtn}>
                            <Text style={registerstyle.textbtntext}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <Space spacenumber={5} />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

export default Login;