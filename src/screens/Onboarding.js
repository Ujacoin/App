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
    SafeAreaView,
} from "react-native";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import globalStyle from "../styles/globalStyle";
import LinearGradient from "react-native-linear-gradient";
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import LoginHeader from "../components/header/loginHeader"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// external Colors
import { RadioButton } from 'react-native-paper';
import { eye, fulllogo, loginimg, logo, Passwordfill, passwordlock, user } from "../data/Imagedata";
import allcommonstyle from "../styles/allcommonstyle";
import { IconButton, PrimaryButton } from "../components/button/primarybutton";
import { COLORS, fontFamily, fontsize } from "../common/commonitem";
import { AppTextInput, Space } from "../common/commoncomponents";
import { Divider, Checkbox } from "react-native-paper";
import Loader from "../components/Loader/Loader";
import DropDownPicker from 'react-native-dropdown-picker';
//Home Screen
const Signup = ({ navigation }) => {
    const [visibleLoader, setvisibleLoader] = useState(false);
    const [businessName, setBusinessName] = useState("");
    const [businessAddress, setBusinessAddress] = useState("");
    const [checked, setChecked] = React.useState(false);
    const [field, setField] = React.useState(false);
    const [radionchecked, setRadionchecked] = React.useState('first');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    //main JSX Screen
    return (
        <SafeAreaView style={style.containermain}>
            <MyStatusBar backgroundColor="#FFFFFF" barStyle={"dark-content"} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Space spacenumber={20} />
                <View style={globalStyle.loginheader}>
                    <Text style={style.loginheaderTitle}>On Boarding</Text>
                    <Space spacenumber={10} />
                    <Text style={style.loginheaderDesc}>Let’s get to know each other. Tell us about your business.</Text>
                </View>
                <Space spacenumber={10} />
                <Space spacenumber={15} />
                <AppTextInput
                    placeholder='Enter Business Name'
                    value={businessName}
                    righticonname={eye}
                    onChangeText={(value) => {
                        setBusinessName(value);
                    }}
                />
                {/* <Space spacenumber={5} /> */}
                <AppTextInput
                    placeholder='Enter Business Address'
                    value={businessAddress}
                    righticonname={eye}
                    onChangeText={(value) => {
                        setBusinessAddress(value);
                    }}
                />
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={allcommonstyle.DropDownPickercontainerStyle}
                    textStyle={allcommonstyle.textStylecontainerStyle}
                    placeholder='Select'
                    placeholderStyle={[allcommonstyle.textStylecontainerStyle, { color: COLORS.grayLight }]}
                />
                <Space spacenumber={5} />
                <View style={allcommonstyle.forgotcontainer}
                    onPress={() => {
                        setChecked(!checked);
                    }}>
                    <TouchableOpacity
                        style={allcommonstyle.remberbox}>
                        <Checkbox.Android
                            status={checked ? 'checked' : 'unchecked'}
                            color={COLORS.primaryyellow}
                            uncheckedColor={COLORS.inputtext}

                        />
                        <Text style={allcommonstyle.remberboxtext}>Field-1</Text>
                    </TouchableOpacity>

                </View>
                <View style={allcommonstyle.forgotcontainer}>
                    <TouchableOpacity
                        style={allcommonstyle.remberbox}
                        onPress={() => {
                            setField(!field);
                        }}>
                        <Checkbox.Android
                            status={field ? 'checked' : 'unchecked'}
                            color={COLORS.primaryyellow}
                            uncheckedColor={COLORS.inputtext}

                        />
                        <Text style={allcommonstyle.remberboxtext}>Field-2</Text>
                    </TouchableOpacity>

                </View>
                <Space spacenumber={15} />
                <View >
                    <TouchableOpacity style={allcommonstyle.radiobuttonview} onPress={() => setRadionchecked('first')}>
                        <RadioButton
                            value="first"
                            status={radionchecked === 'first' ? 'checked' : 'unchecked'}
                            color={COLORS.primaryyellow}
                        />
                        <Text style={allcommonstyle.remberboxtext}>Select One</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={allcommonstyle.radiobuttonview} onPress={() => setRadionchecked('second')}>
                        <RadioButton
                            value="second"
                            status={radionchecked === 'second' ? 'checked' : 'unchecked'}
                            color={COLORS.primaryyellow}
                        />
                        <Text style={allcommonstyle.remberboxtext}>Select two</Text>
                    </TouchableOpacity>
                </View>
                <Space spacenumber={15} />

                <PrimaryButton btntext='Submit' />
            </ScrollView>

        </SafeAreaView>
    );
};

export default Signup;
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
        color: COLORS.black,
        fontFamily: fontFamily.black,
        alignSelf: "center",
        textAlign: "center",
    },
    loginheaderDesc: {
        fontSize: fontsize.font18,
        color: COLORS.black,
        fontFamily: fontFamily.semiBold,
        textAlign: "left",
    },
    loginheaderDesc1: {
        fontSize: fontsize.font12,
        color: COLORS.black,
        fontFamily: fontFamily.regular,
        textAlign: "left",
        opacity: 0.8,
    },
    msgText: {
        fontSize: 20,
        color: COLORS.black,
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
        color: COLORS.white,
        fontWeight: 'bold',
    },
    containermain: {
        flex: 1,
        paddingHorizontal: 40,
        backgroundColor: COLORS.white,
    },

});


