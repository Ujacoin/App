import React, { useEffect, useState } from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import allcommonstyle from '../styles/allcommonstyle';

const DirectDeposit = ({ navigation }) => {
    const [bankdetails, setbankdetails] = useState([
        {
            id: 1,
            name: '',
            code: '',
        },
        {
            id: 2,
            name: '',
            code: '',
        },
    ])
    /*** DESIGN HERE ***/
    return (
        <SafeAreaView style={styles.container}>
            <MyStatusBar backgroundColor="#5313AE" barStyle={"light-content"} />
            <ScrollView style={globalStyle.welcomecontainer}>
                {/* Logo */}
                <Space spacenumber={15} />
                <View style={allcommonstyle.backheader}>
                    <TouchableOpacity style={allcommonstyle.backbuttoncontaiber} onPress={() => { navigation.goBack() }}>
                        <Ionicons name="ios-chevron-back-outline" size={25} color={COLORS.black} />
                    </TouchableOpacity>
                    <Text style={allcommonstyle.backheadertext}>Direct Deposit</Text>
                </View>
                <Space spacenumber={10} />
                <View style={globalStyle.logo_container}>
                    <Image
                        style={styles.checkemail}
                        source={checkemail}
                        resizeMode='contain'
                    />
                </View>

                <Space spacenumber={15} />
                <View style={globalStyle.logo_container}>
                    <View style={globalStyle.second_home_content_container}>
                        <Text style={styles.description}>Get your paycheck early!</Text>
                        <Space spacenumber={5} />
                        <Text style={[styles.description, { fontFamily: fontFamily.light, }]}>With your UJACOIN account, you can get your paycheck 2 days early, tap the button below to update your payroll provider.</Text>
                    </View>
                </View>
                <Space spacenumber={20} />
                <PrimaryButton btntext='Get Direct Deposit Form' backgroundColor={COLORS.primaryyellow} onPress={() => { navigation.navigate('Sendmoney') }} />
                <Space spacenumber={20} />
                <View style={{ marginHorizontal: 20, }}>
                    <Text>Your bank details</Text>
                    <Space spacenumber={5} />
                    {bankdetails.map((props) => {
                        return (
                            <View style={styles.bankdetailcontainer}>
                                <Text style={styles.detailname}>Routing</Text>
                                <View style={styles.rightcontainer}>
                                    <Text style={styles.codetext}>173 664 393</Text>
                                    <TouchableOpacity>
                                        <Ionicons name="copy-outline" size={20} color={COLORS.gray} />
                                    </TouchableOpacity>

                                </View>
                            </View>
                        )
                    })}
                </View>
                <Space spacenumber={5} />
                <Text style={[styles.smalldescription]}>Banking services provided by metropolitan commercial bank Members FDIC</Text>
            </ScrollView>
        </SafeAreaView>
    );
};
export default DirectDeposit;

const styles = StyleSheet.create({
    smalldescription:{
        fontSize: fontsize.font12,
        color: COLORS.gray,
        textAlign:'center',
        fontFamily: fontFamily.regular,
    },
    detailname: {
        fontSize: fontsize.font14,
        color: COLORS.black,
        fontFamily: fontFamily.medium,
    },
    codetext: {
        fontSize: fontsize.font14,
        color: COLORS.gray,
        fontFamily: fontFamily.medium,
    },
    rightcontainer: {
        width: 130,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bankdetailcontainer: {
        backgroundColor: COLORS.lightGray,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 22,
        marginBottom: 10,
        borderRadius: 10,
    },
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
        height: 200,
        width: '100%',
    },
    description: {
        fontSize: fontsize.font14,
        fontFamily: fontFamily.semiBold,
        color: COLORS.black,
        textAlign: 'center',
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