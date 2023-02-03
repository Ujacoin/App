import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Space } from '../common/commoncomponents';
import { COLORS, fontFamily, fontsize } from '../common/commonitem';
import { windowHeight } from '../common/responsive';
import { PrimaryButton } from '../components/button/primarybutton';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { checkemail, headerback } from '../data/Imagedata';
import globalStyle from '../styles/globalStyle';

const EmailSignup = ({ navigation }) => {



    /*** DESIGN HERE ***/
    return (
        <SafeAreaView style={styles.container}>
            <MyStatusBar backgroundColor="#5313AE" barStyle={"light-content"} />
            <ScrollView style={globalStyle.welcomecontainer}>
                {/* Logo */}
                <Space spacenumber={20} />
                <View style={{ paddingHorizontal: 30, }}>
                    <TouchableOpacity style={{ height: 40, width: 40 }} onPress={() => { navigation.goBack() }}>
                        <Image
                            style={{ height: 30, width: 30 }}
                            source={headerback}
                            tintColor={COLORS.black}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                </View>
                <Space spacenumber={10} />
                <View style={globalStyle.logo_container}>
                    <Image
                        style={styles.checkemail}
                        source={checkemail}
                        resizeMode='contain'
                    />
                </View>
                <Space spacenumber={10} />
                <Text style={styles.loginheaderDesc1}>abc@gmail.com.</Text>

                <Space spacenumber={15} />
                <View style={globalStyle.logo_container}>
                    <View style={globalStyle.second_home_content_container}>
                        <Text style={styles.description}>
                            A programmable digital stable coin.
                            <Text style={{ fontFamily: fontFamily.regular, }}> Which can be used for instant, secure, and private transactions.</Text>
                        </Text>
                    </View>
                </View>
                <Space spacenumber={30} />
                <PrimaryButton btntext='Open email' backgroundColor={COLORS.primaryyellow} onPress={() => { navigation.navigate('Home') }} />
                <Space spacenumber={5} />
                <PrimaryButton btntext='Resend' backgroundColor={COLORS.black} onPress={() => { navigation.navigate('Otp') }} />
            </ScrollView>
        </SafeAreaView>
    );
};
export default EmailSignup;

const styles = StyleSheet.create({
    loginheaderDesc1: {
        fontSize: fontsize.font12,
        color: COLORS.black,
        fontFamily: fontFamily.regular,
        textAlign: "center",
        opacity: 0.8,
      },
    container: {

    },
    checkemail: {
        height: 300,
        width: '100%',
    },
    description: {
        fontSize: fontsize.font24,
        fontFamily: fontFamily.bold,
        color: COLORS.black,
    },
    logoimage: {
        height: 212,
        width: 212,
    },
    topcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flex: {
        height: windowHeight,
        flexDirection: 'column',
        paddingHorizontal: 60,
    }
})