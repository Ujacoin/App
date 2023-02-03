import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StatusBar, ImageBackground, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, emptyimage, fulllogo, headerback, left, loginimg, logo, message, Profilepic, right, search_icon, start, user1, user2, user3, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { Space } from '../common/commoncomponents';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { boxShadow, COLORS, fontFamily, fontsize } from '../common/commonitem';
import { PrimaryButton } from '../components/button/primarybutton';

const FundingDetail = ({ navigation }) => {



    /*** DESIGN HERE ***/
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
                                height: 100,
                                // paddingHorizontal: 30,
                                paddingVertical: 20,
                            }}
                        >
                            {/* <View style={{ paddingHorizontal: 30, }}>
                                <Text style={allcommonstyle.pageTitle}>Replays</Text>
                                <Space spacenumber={2} />
                                <Text style={allcommonstyle.pagedesc} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                <Space spacenumber={10} />
                            </View> */}

                        </LinearGradient>
                    </View>

                    <View style={[{ flex: 3, }]}>
                        <View style={{
                            top: -30,
                            backgroundColor: '#FFFFFF',
                            padding: 20,
                            marginHorizontal: 20,
                            overflow: 'hidden',
                            borderRadius: 10,
                            ...boxShadow,
                        }}>
                            <View
                                style={{
                                    alignSelf: 'flex-start',
                                    paddingHorizontal: 12,
                                    borderRadius: 5,
                                    backgroundColor: COLORS.primaryyellow,
                                    paddingVertical: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: 40,
                                }}>
                                <Text
                                    style={{
                                        fontFamily: fontFamily.medium,
                                        color: COLORS.white,
                                        fontSize: fontsize.font10,
                                    }}
                                >Lorem Ipsum</Text>
                            </View>
                            <Space spacenumber={5} />
                            <Text style={{
                                fontSize: fontsize.font20,
                                fontFamily: fontFamily.semiBold,
                                color: "#050A26",
                                marginTop: 5
                            }}>
                                Shequita Hall
                            </Text>
                            <Space spacenumber={5} />
                            <Text style={{
                                fontFamily: fontFamily.medium,
                                color: COLORS.primarydarkgreen,
                                fontSize: fontsize.font10,
                            }}>
                                Opened Sun February  22, 2022 07:30
                            </Text>
                            <Space spacenumber={5} />

                            <Text style={{
                                fontSize: fontsize.font12,
                                fontFamily: fontFamily.light,
                                color: COLORS.black,
                                lineHeight: fontsize.font16
                            }}>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.Rackham.
                            </Text>
                            <TouchableOpacity
                                style={{
                                    width: 40,
                                    borderRadius: 100,
                                    backgroundColor: '#F8F8F8',
                                    height: 40,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: "absolute",
                                    top: 5,
                                    right: 5
                                }}
                            >
                                <MaterialCommunityIcons name="bookmark-outline" size={20} color={COLORS.black} />
                            </TouchableOpacity>
                        </View>
                        <PrimaryButton btntext='Apply Now'  />
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};
export default FundingDetail;
const styles = StyleSheet.create({

})