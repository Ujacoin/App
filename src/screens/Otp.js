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
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { eye, fulllogo, headerback, loginimg, passwordlock, user } from "../data/Imagedata";
import allcommonstyle from "../styles/allcommonstyle";
import { IconButton, PrimaryButton } from "../components/button/primarybutton";
import { COLORS, fontFamily, fontsize } from "../common/commonitem";
import { AppTextInput, Space } from "../common/commoncomponents";
import Loader from "../components/Loader/Loader";
//Home Screen
const ForgotPassword = ({ navigation }) => {
    //Internal Methods

    const [visibleLoader, setvisibleLoader] = useState(false);
    const [value, setValue] = useState("");
    const CELL_COUNT = 4;
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const gotonext = () => {
        navigation.navigate('Otp')
    }

    return (
        <LinearGradient
            colors={["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"]}
            locations={[0.1, 0.4, 1, 1]}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 ,paddingHorizontal:20}}
        >
            <Loader visible={visibleLoader} />
            <MyStatusBar backgroundColor="#FFFFFF" barStyle={"dark-content"} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={allcommonstyle.loginflex}>


                    <Space spacenumber={20} />
                    <View style={globalStyle.loginheader}>
                        <Text style={styles.loginheaderTitle}>Email</Text>
                        <Space spacenumber={10} />
                        <Text style={styles.loginheaderDesc}>100% Privacy. Unsubscribe anytime.</Text>

                    </View>
                    <Space spacenumber={15} />
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
                    <Space spacenumber={40} />
                    <PrimaryButton btntext='Reset' onPress={gotonext} />

                </View>
            </ScrollView>

        </LinearGradient>
    );
};
export default ForgotPassword;
const styles = StyleSheet.create({

    loginheaderTitle: {
        fontSize: fontsize.font30,
        color: COLORS.black,
        fontFamily: fontFamily.black,
        alignSelf: "center",
        textAlign: "center",
    },
    loginheaderDesc: {
        fontSize: fontsize.font18,
        color: COLORS.black,
        fontFamily: fontFamily.semiBold,
        textAlign: "center",
    },
    loginheaderDesc1: {
        fontSize: fontsize.font12,
        color: COLORS.black,
        fontFamily: fontFamily.regular,
        textAlign: "left",
        opacity: 0.8,
    },
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
        borderColor: COLORS.lightGray,
        textAlign: "center",
    },
    focusCell: {
        borderColor: "#000",
    },
});



