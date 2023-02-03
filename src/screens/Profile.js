import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, fulllogo, left, loginimg, logo, message, Profilepic, right, start, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { SettingsItem, Space } from '../common/commoncomponents';
import { windowHeight } from '../common/responsive';
import { PrimaryButton } from '../components/button/primarybutton';
import { COLORS } from '../common/commonitem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Bottomtabdesign } from '../components/Bottomtab.js/Bottomtabdesign';
const Profile = ({ navigation }) => {



    /*** DESIGN HERE ***/
    return (
        <SafeAreaView style={allcommonstyle.safeAreaViewcontainer}>
            <MyStatusBar backgroundColor="black" barStyle={"light-content"} />
            <LinearGradient
                colors={[COLORS.linearGradient2, COLORS.linearGradient1]}
                start={{ x: 0.0, y: 0.2 }} end={{ x: 0.4, y: 1.0 }}
                locations={[0, 0.8, 0.2]}
                style={{
                    flex: 1,
                }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Space spacenumber={20} />
                    <View >
                        <View style={allcommonstyle.backheader}>
                            <TouchableOpacity style={allcommonstyle.backbuttoncontaiber} onPress={() => { navigation.goBack() }}>
                                <Ionicons name="ios-chevron-back-outline" size={25} color={COLORS.white} />
                            </TouchableOpacity>
                        </View>
                        <Space spacenumber={10} />
                        <View>
                            <View style={allcommonstyle.profileimagecontainer}>
                                <Image
                                    style={allcommonstyle.profileimage}
                                    source={Profilepic}
                                    resizeMode='cover'
                                />
                            </View>
                            <Space spacenumber={10} />
                            <Text style={allcommonstyle.profilenametitle}>Tessa Smith</Text>
                            <Text style={allcommonstyle.profiledesctitle}>Seattle, WA</Text>
                            <Space spacenumber={10} />

                        </View>

                        <SettingsItem name='Upgrade account limit' lefticon='lock-closed' />
                        <SettingsItem name='Security' lefticon='privacy-tip' MaterialIcons />
                        <SettingsItem name='Notifications' lefticon='notifications-on' MaterialIcons />
                        <SettingsItem name='Forum' lefticon='information-circle' />
                        <SettingsItem name='Delete my account' lefticon='ios-trash' />

                    </View>
                    <Space spacenumber={10} />
                    <PrimaryButton btntext='Logout' backgroundColor={COLORS.black} />

                    <Space spacenumber={20} />
                </ScrollView>

            </LinearGradient>
            <Bottomtabdesign />
        </SafeAreaView>
    );
};
export default Profile;