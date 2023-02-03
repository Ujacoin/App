import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, Dimensions, ImageBackground, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { addbookmarkedimg, bg, bookmarkedimg, dot, emptyimage, fulllogo, headerback, left, loginimg, logo, message, Profilepic, right, search_icon, start, user1, user2, user3, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { AppTextInputSearch, ExcusiveResource, LatestReplays, Memberdata, Replaysitem, SearchFilter, Space } from '../common/commoncomponents';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { boxShadow, COLORS, fontFamily, fontsize } from '../common/commonitem';
import Ripple from 'react-native-material-ripple';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Eventdetail = ({ navigation }) => {
    const [BookmarkStatus, setBookmarkStatus] = useState();
    const [MemberList, setMemberList] = useState([
        {
            id: 1,
            memberprofile: user1,
        },
        {
            id: 2,
            memberprofile: user2,
        },
        {
            id: 3,
            memberprofile: user3,
        },
        {
            id: 4,
            memberprofile: user1,
        },
        {
            id: 5,
            memberprofile: user2,
        },
        {
            id: 6,
            memberprofile: user3,
        },
    ]);
    var r1 = 0;
    return (
        <SafeAreaView style={allcommonstyle.safeAreaViewcontainer}>
            <MyStatusBar backgroundColor="black" barStyle={"light-content"} />
            <Header
                title='Back'
                iconleft={headerback}
                onPressLeft={() => {
                    navigation.goBack();
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


                            <Space spacenumber={15} />
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        borderRadius: 20,
                                        backgroundColor: COLORS.primaryyellow,
                                        paddingVertical: 10,
                                        paddingHorizontal: 25,
                                        justifyContent: 'center',
                                        ...boxShadow,
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text style={{
                                        fontSize: fontsize.font10,
                                        fontFamily: fontFamily.semiBold,
                                        color: COLORS.white,
                                    }}>
                                        Register
                                    </Text>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        alignItems: "center",
                                        flexDirection: "row",
                                    }}
                                >
                                    {BookmarkStatus ? (
                                        <Ripple
                                            rippleContainerBorderRadius={100}
                                            style={{
                                                height: 35,
                                                width: 35,
                                                alignItems: "center",
                                                marginRight: 6,
                                                justifyContent: "center",
                                            }}
                                        >
                                            <FontAwesome
                                                name="bookmark-o"
                                                size={25}
                                                color={COLORS.lightGray}
                                            />
                                        </Ripple>
                                    ) : (
                                        <Ripple
                                            rippleContainerBorderRadius={100}
                                            style={{
                                                height: 35,
                                                width: 35,
                                                alignItems: "center",
                                                marginRight: 6,
                                                justifyContent: "center",
                                            }}
                                        >
                                            <FontAwesome
                                                name="bookmark"
                                                size={25}
                                                color={COLORS.primaryyellow}
                                            />
                                        </Ripple>
                                    )}
                                </View>
                            </View>
                            <Space spacenumber={15} />
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        color: COLORS.black,
                                        fontSize: fontsize.font30,
                                        fontFamily: fontFamily.bold
                                    }}
                                >
                                    Happy New Year
                                </Text>
                            </View>
                            <Space spacenumber={10} />
                            <Text
                                style={styles.subtitle}
                            >
                                Event Start Date
                            </Text>
                            <Space spacenumber={2} />
                            <Text
                                style={{
                                    color: COLORS.black,
                                    fontSize: fontsize.font12,
                                    fontFamily: fontFamily.regular,
                                }}
                            >
                                WED, AUG 12, 11:00 am
                            </Text>
                            <Space spacenumber={10} />
                            <Text
                                style={styles.subtitle}
                            >
                                Event End Date
                            </Text>
                            <Text
                                style={{
                                    color: COLORS.black,
                                    fontSize: fontsize.font12,
                                    fontFamily: fontFamily.regular,
                                }}
                            >
                                WED, AUG 27, 11:00 am
                            </Text>
                            <Space spacenumber={10} />
                            <View >

                                <Text
                                    style={styles.subtitle}
                                >
                                    Event Description
                                </Text>
                                <Text
                                    style={styles.detailtext}
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                </Text>
                            </View>
                            <Space spacenumber={10} />
                            <View >

                                <Text
                                    style={styles.subtitle}
                                >
                                    Event Address
                                </Text>
                                <Text
                                    style={styles.detailtext}
                                >
                                    Mallard Dr Uckfield, East Halton, TN22 5PW
                                </Text>
                            </View>
                            <Space spacenumber={10} />
                            <View >

                                <Text
                                    style={styles.subtitle}>
                                    Contact No
                                </Text>

                                <TouchableOpacity >
                                    <Text
                                        style={styles.detailtext}
                                    >01928 564729
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <Space spacenumber={10} />
                            <View
                                style={{ flexDirection: "row", }}
                            >
                                {MemberList.map((item, index) => {
                                    return (
                                        <Image
                                            key={index}
                                            source={item.memberprofile}
                                            style={[
                                                {
                                                    width: 26,
                                                    height: 26,
                                                    borderRadius: 26 / 2,
                                                },
                                                { right: index == 0 ? null : (r1 += 5) },
                                            ]}
                                        />
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
export default Eventdetail;
const styles = StyleSheet.create({
    title: {

    },
    subtitle: {
        color: COLORS.black,
        fontSize: fontsize.font12,
        fontFamily: fontFamily.bold,
    },
    detailtext: {
        color: COLORS.black,
        fontSize: fontsize.font12,
        fontFamily: fontFamily.regular,
    }
})