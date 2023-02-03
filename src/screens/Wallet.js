import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StatusBar, ImageBackground, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { addbookmarkedimg, bg, bookmarkedimg, dot, editprofile, emptyimage, fulllogo, left, loginimg, logo, message, Profilepic, right, search_icon, start, user1, user2, user3, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { AppTextInputSearch, ExcusiveResource, LatestReplays, Memberdata, Replaysitem, SearchFilter, Space } from '../common/commoncomponents';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Divider, Checkbox } from "react-native-paper";
import { boxShadow, COLORS, fontFamily, fontsize } from '../common/commonitem';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Bottomtabdesign } from '../components/Bottomtab.js/Bottomtabdesign';

const Wallet = ({ navigation }) => {
    const [Goallist, setGoallist] = useState([
        {
            id: 1,
            goalName: 'Hellp'
        },
        {
            id: 1,
            goalName: 'Hellp'
        },
        {
            id: 1,
            goalName: 'Hellp'
        }
    ]);
    return (
        <SafeAreaView style={allcommonstyle.safeAreaViewcontainer}>
            <MyStatusBar backgroundColor="black" barStyle={"light-content"} />
            <Header
                addlogo
                iconRight='dots-three-vertical'
                onRightPress={() => {
                    navigation.navigate('CustomDrawerContent');
                }} />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={allcommonstyle.loginflex}>
                    <View style={{ flex: 1 }}>
                        <LinearGradient
                            colors={[COLORS.linearGradient2, COLORS.linearGradient1]}
                            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                            locations={[0, 0.8, 0.6]}
                            style={{
                                height: 170,
                                // paddingHorizontal: 30,
                                flexDirection: 'row',
                                paddingVertical: 20,
                            }}
                        >
                            <View style={{ paddingHorizontal: 30, flex: 1, }}>
                                <Text style={allcommonstyle.pageTitle}>$759</Text>
                                <Space spacenumber={2} />
                                <Text style={allcommonstyle.pagedesc} numberOfLines={2}>Available balance</Text>
                                <Space spacenumber={10} />
                            </View>
                            <View
                                style={{
                                    width: 120,
                                    height: 120,
                                    padding: 5,
                                    borderRadius: 100,
                                }}>
                                <Image
                                    style={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: COLORS.primarydarkgreen,
                                        position: "absolute",
                                        borderRadius: 100,
                                    }}
                                    source={user1}
                                    resizeMode='cover'
                                />
                            </View>
                        </LinearGradient>
                    </View>

                    <View style={[{ flex: 3, }]}>
                        <View style={[{ paddingHorizontal: 20, top: -50 }]}>

                            <View style={allcommonstyle.profilebtnrow}>
                                <TouchableOpacity style={styles.profiletopbtncontainer}>
                                    <View style={styles.btnbox}>
                                        <FontAwesome name="send" size={17} color={COLORS.white} />
                                    </View>
                                    <Space spacenumber={10} />
                                    <Text style={styles.btntetext}>Fund your account</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('DirectDeposit') }}
                                    style={styles.profiletopbtncontainer}>
                                    <View style={styles.btnbox}>
                                        <Ionicons name="ios-card" size={17} color={COLORS.white} />
                                    </View>
                                    <Space spacenumber={10} />
                                    <Text style={styles.btntetext}>Set up Direct Deposit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('DigitalLibrary') }}
                                    style={styles.profiletopbtncontainer}>
                                    <View style={styles.btnbox}>
                                        <Ionicons name="ios-bar-chart" size={17} color={COLORS.white} />
                                    </View>
                                    <Space spacenumber={10} />
                                    <Text style={styles.btntetext}>Digital Library</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Space spacenumber={20} />
                                <Text style={{
                                    fontSize: fontsize.font15,
                                    fontFamily: fontFamily.semiBold,
                                    color: COLORS.gray,
                                    marginTop: 5,
                                    textAlign: 'center',
                                }}>
                                    No transactions yet
                                </Text>
                                <Space spacenumber={5} />
                                <Text style={{
                                    fontSize: fontsize.font12,
                                    fontFamily: fontFamily.light,
                                    color: COLORS.gray,
                                    lineHeight: fontsize.font16,
                                    textAlign: 'center',
                                }}>
                                    Fund your wallet to send money and more
                                </Text>

                            </View>

                        </View>

                    </View>
                </View>

            </ScrollView>
            <Bottomtabdesign />

        </SafeAreaView>
    );
};
export default Wallet;
const styles = StyleSheet.create({
    btntetext: {
        fontSize: fontsize.font12,
        fontFamily: fontFamily.regular,
        textAlign: 'center',
        color: COLORS.primarydarkgreen,
    },
    btnbox: {
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryyellow,
        borderRadius: 5,
    },
    profilebtnrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 30,
    },
    profiletopbtncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        backgroundColor: COLORS.white,
        paddingVertical: 15,
        borderRadius: 10,
        ...boxShadow,
        padding: 10,
    },
    profilenametitle: {
        fontSize: fontsize.font20,
        fontFamily: fontFamily.CandaraboldI,
        color: COLORS.black,
        textAlign: 'center',

    },
})