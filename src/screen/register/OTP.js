import React, { useState,useEffect } from 'react';
import { TouchableOpacity, View, SafeAreaView, ScrollView, Text,
    StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";
import RnOtpTimer from "rn-otp-timer";
import { LibonSubmitOTP } from '../../lib/OTP';

function OTP() {

    useEffect(() => {
        console.log("TempEmail",paramdata.params);
        setEmali(paramdata.params.email)
    }, [])
    const navigation = useNavigation();
    const paramdata=useRoute();
    const [value, setValue] = useState(0);
    const CELL_COUNT = 4;
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });
    const [email, setEmali] = React.useState("");

    // method
    const gotoOTP = () => {
        navigation.navigate('SignUp');
    }
    const OTPInCheck = async () => {
        const fcmtoken= await messaging().getToken();
        const params=[
            {
                value:email,
                validate:true,
                paramName:"email",
                ValidateMessage:"Email Required"

            },
            {
                value:value,
                validate:true,
                paramName:"otp",
                ValidateMessage:"OTP Required"

            },
        ];
        LibonSubmitOTP(navigation,params,"Login")
        // navigation.navigate("Forum")
    }
    return (
        <SafeAreaView style={globalstyle.safeAreaView}>
            <ScrollView>
                <View style={globalstyle.paddingView}>
                    <View style={registerstyle.imagecontainer}>
                        <Space spacenumber={10} />
                        <Lable title={'Welcome!'} />
                        <Space spacenumber={20} />
                        <SubLable title={'Paraktig iktiga. Äss. Pyling hegon. Kasamma pobel, påvagon.'} />
                        <Text style={globalstyle.simpletext}>Please provide following details for your new account.</Text>
                    </View>
                    <Space spacenumber={20} />
                    <CodeField
                        ref={ref}
                        {...props}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={(value) => {
                            console.log("value ----------------------------------->", value);
                            setValue(value)
                        }}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}
                            >
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                    
                    <Space spacenumber={10} />
                    <ThemeButton
                        backgroundColor={Color.themeScarlet}
                        title={'Submit'}
                        onPress={() => { OTPInCheck() }}
                        color={Color.themedarkblue}
                    />
                    
                    <Space spacenumber={5} />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

export default OTP;
const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: "center", fontSize: 25 },
    codeFieldRoot: {
      marginTop: 10,
      justifyContent: "center",
    },
    cell: {
      width: 40,
      height: 40,
      lineHeight: 37,
      fontSize: 20,
      marginHorizontal: 4,
      borderRadius: 10,
      borderWidth: 3,
      borderColor: "#EDECEA",
      textAlign: "center",
    },
    focusCell: {
      borderColor: "#000",
    },
  });