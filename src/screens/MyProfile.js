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

const MyProfile = ({ navigation }) => {
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
                                paddingVertical: 20,
                            }}
                        >
                            <View style={{ paddingHorizontal: 30, }}>
                                <Text style={allcommonstyle.pageTitle}>Maya</Text>
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
                            <View style={allcommonstyle.profilebtnrow}>

                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('EditProfile') }}
                                    style={allcommonstyle.profiletopbtncontainer}>
                                    <View style={allcommonstyle.btnbox}>
                                        {/* <Image
                                            style={allcommonstyle.btnicon}
                                            source={editprofile}
                                            resizeMode='contain'
                                            tintColor={COLORS.primaryyellow}
                                        /> */}
                                        <FontAwesome name="edit" size={17} color={COLORS.primaryyellow} />
                                    </View>
                                    <Text style={allcommonstyle.btntetext}>Edit Profile</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={allcommonstyle.profiletopbtncontainer}>
                                    <View style={allcommonstyle.btnbox}>
                                        <FontAwesome name="users" size={17} color={COLORS.primaryyellow} />
                                    </View>
                                    <Text style={allcommonstyle.btntetext}>Connected</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('Message') }}
                                    style={allcommonstyle.profiletopbtncontainer}>
                                    <View style={allcommonstyle.btnbox}>
                                        <Icon name="android-messages" size={17} color={COLORS.primaryyellow} />
                                    </View>
                                    <Text style={allcommonstyle.btntetext}>Message</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('Bookmarked') }}
                                    style={allcommonstyle.profiletopbtncontainer}>
                                    <View style={allcommonstyle.btnbox}>
                                        <FontAwesome name="bookmark" size={17} color={COLORS.primaryyellow} />
                                    </View>
                                    <Text style={allcommonstyle.btntetext}>Bookmark</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <View style={allcommonstyle.row}>
                                    <Text style={{
                                        fontSize: fontsize.font15,
                                        fontFamily: fontFamily.semiBold,
                                        color: "#050A26",
                                        marginTop: 5
                                    }}>
                                        About me
                                    </Text>
                                    {/* <TouchableOpacity
                                        onPress={() => { navigation.navigate('AddMeeting') }}
                                        style={{
                                            borderRadius: 5,
                                            backgroundColor: COLORS.primaryyellow,
                                            height: 30,
                                            width: 30,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <MaterialCommunityIcons name="plus" color={COLORS.white} size={20} />
                                    </TouchableOpacity> */}
                                </View>
                                <Space spacenumber={5} />
                                <Text style={{
                                    fontSize: fontsize.font12,
                                    fontFamily: fontFamily.light,
                                    color: COLORS.black,
                                    lineHeight: fontsize.font16
                                }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Text>

                            </View>
                            <View>
                                <Space spacenumber={10} />
                                <View style={allcommonstyle.row}>
                                    <Text style={{
                                        fontSize: fontsize.font15,
                                        fontFamily: fontFamily.semiBold,
                                        color: "#050A26",
                                        marginTop: 5
                                    }}>
                                        My business
                                    </Text>
                                </View>
                                <Space spacenumber={5} />
                                <Text style={{
                                    fontSize: fontsize.font12,
                                    fontFamily: fontFamily.light,
                                    color: COLORS.black,
                                    lineHeight: fontsize.font16
                                }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Text>

                            </View>
                            <View>
                                <Space spacenumber={10} />
                                <View style={allcommonstyle.row}>
                                    <Text style={{
                                        fontSize: fontsize.font15,
                                        fontFamily: fontFamily.semiBold,
                                        color: "#050A26",
                                        marginTop: 5
                                    }}>
                                        Mission
                                    </Text>
                                </View>
                                <Space spacenumber={5} />
                                <Text style={{
                                    fontSize: fontsize.font12,
                                    fontFamily: fontFamily.light,
                                    color: COLORS.black,
                                    lineHeight: fontsize.font16
                                }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Text>

                            </View>
                            <View>
                                <Space spacenumber={10} />
                                <View style={allcommonstyle.row}>
                                    <Text style={{
                                        fontSize: fontsize.font15,
                                        fontFamily: fontFamily.semiBold,
                                        color: "#050A26",
                                        marginTop: 5
                                    }}>
                                        Goals
                                    </Text>
                                </View>
                                <Space spacenumber={5} />
                                {Goallist.length !== 0 &&
                                    Goallist.map((res, i) => {
                                        return (
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    justifyContent: "flex-start",
                                                    marginHorizontal: 20,
                                                    marginTop: 10,
                                                    alignItems: 'flex-start',
                                                    marginRight: 10
                                                }}
                                            >
                                                <Icon name="circle" color={COLORS.primarydarkgreen} size={10} style={{ marginTop: 3, }} />
                                                <Text
                                                    style={{
                                                        color: COLORS.black,
                                                        fontFamily: fontFamily.regular,
                                                        fontSize: fontsize.font12,
                                                        marginLeft: 20,
                                                    }}
                                                >
                                                    {res.goalName}
                                                </Text>
                                            </View>
                                        );
                                    })}

                            </View>
                        </View>

                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};
export default MyProfile;
const styles = StyleSheet.create({

})