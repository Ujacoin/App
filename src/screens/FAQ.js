import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, ImageBackground, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, emptyimage, fulllogo, left, search_icon, user, user1, userimage, } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { AppTextInputSearch, AppTextInput, Space } from '../common/commoncomponents';
import { COLORS, fontFamily, fontsize } from '../common/commonitem';
import globalStyle from '../styles/globalStyle';
import { PrimaryButton } from '../components/button/primarybutton';

const FAQ = ({ navigation }) => {
    const [search, setSearch] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [businessAddress, setBusinessAddress] = useState("");
    const [message, setmessage] = useState("");
    /*** DESIGN HERE ***/
    return (
        <SafeAreaView style={allcommonstyle.safeAreaViewcontainer}>
            <MyStatusBar backgroundColor="black" barStyle={"light-content"} />
            <Header
                addlogo
                iconRight='dots-three-vertical'
                userimage={userimage}
                onRightPress={() => {
                    navigation.navigate('CustomDrawerContent');
                }}
            />

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
                                height: 180,
                                paddingVertical: 20,
                            }}
                        >
                            <View style={{ paddingHorizontal: 30, }}>
                                <Text style={allcommonstyle.pageTitle}>Frequently Asked Questions</Text>
                                <Space spacenumber={2} />
                                <Text style={allcommonstyle.pagedesc} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                <Space spacenumber={10} />
                            </View>

                        </LinearGradient>
                    </View>

                    <View style={[{ flex: 3, }]}>
                        <View style={[{ paddingHorizontal: 20, top: -50 }]}>
                            <View
                                style={{
                                    width: '100%',
                                    height: 200,
                                    borderRadius: 5,
                                }}>
                                <Image
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: COLORS.primarydarkgreen,
                                        position: "absolute",
                                        borderRadius: 10,
                                    }}
                                    source={user1}
                                    resizeMode='cover'
                                />
                            </View>
                            <Space spacenumber={15} />
                            <Text style={{
                                fontSize: fontsize.font20,
                                fontFamily: fontFamily.semiBold,
                                color: "#050A26",
                                marginTop: 5
                            }}>
                                How can we help you ?
                            </Text>
                            <Space spacenumber={5} />

                            <TextInput
                                style={allcommonstyle.simpleinput}
                                value={search}
                                onChangeText={(value) => {
                                    setSearch({ ...UserData, search: value });
                                }}
                                placeholder="Ask a question"
                            ></TextInput>
                        </View>
                        <LinearGradient
                            colors={[COLORS.linearGradient2, COLORS.linearGradient1]}
                            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                            locations={[0, 0.8, 0.6]}
                            style={{
                                paddingHorizontal: 30,
                                paddingVertical: 20,
                                borderTopRightRadius: 0,
                                borderTopLeftRadius: 0,
                            }}
                        >
                            <Text style={{
                                fontSize: fontsize.font20,
                                fontFamily: fontFamily.semiBold,
                                color: COLORS.white,
                                marginTop: 5
                            }}>
                                Still Have A Question ?
                            </Text>
                            <Space spacenumber={5} />
                            <Text style={{
                                fontSize: fontsize.font12,
                                fontFamily: fontFamily.light,
                                color: COLORS.white,
                                lineHeight: fontsize.font16
                            }}>
                                Let us know and a team member will get back to you ASAP!
                            </Text>
                            <Space spacenumber={15} />
                            <TextInput
                                placeholder="Name"
                                placeholderTextColor={COLORS.gray}
                                style={[allcommonstyle.faqinput,]}
                                value={businessName}
                                onChangeText={(value) => {
                                    setBusinessName(value);
                                }}
                            />

                            <TextInput
                                placeholder="Email*"
                                placeholderTextColor={COLORS.gray}
                                style={[allcommonstyle.faqinput,]}
                                value={businessAddress}
                                onChangeText={(value) => {
                                    setBusinessAddress(value);
                                }}
                            />

                            <TextInput
                                placeholder="Your question / message "
                                placeholderTextColor={COLORS.gray}
                                multiline={Platform.OS === "ios" ? false : true}
                                numberOfLines={10}
                                textAlignVertical="top"
                                style={[allcommonstyle.faqinput,]}
                                value={message}
                                onChangeText={(value) => {
                                    setmessage(value);
                                }}
                            />
                            <Space spacenumber={15} />
                            <PrimaryButton btntext='Submit' />
                        </LinearGradient>

                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};
export default FAQ;
const styles = StyleSheet.create({

})