import React, { useEffect, useRef } from 'react';
import { View, Text, Image, TextInput, ImageBackground, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, emptyimage, fulllogo, headerback, left, loginimg, logo, message, Profilepic, right, search_icon, start, user1, user2, user3, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { AppTextInputSearch, ExcusiveResource, LatestReplays, Memberdata, Replaysitem, SearchFilter, Space } from '../common/commoncomponents';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { boxShadow, COLORS, fontFamily, fontsize } from '../common/commonitem';

const MessageChatScreen = ({ navigation }) => {
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);
    /*** DESIGN HERE ***/
    return (
        <SafeAreaView style={[allcommonstyle.safeAreaViewcontainer,{backgroundColor:COLORS.lightGray}]}>
            <MyStatusBar backgroundColor="black" barStyle={"light-content"} />
            <View style={allcommonstyle.chatbottomcontainer}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { navigation.goBack() }}>
                    <Image
                        source={headerback}
                        style={{ height: 20, width: 20, }}
                        tintColor={COLORS.primaryyellow} />
                    <Space spacenumber={5} />
                </TouchableOpacity>
                <View
                    style={{
                        width: 50,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: COLORS.primarydarkgreen,
                            borderRadius: 100,
                        }}
                        source={user1}
                        resizeMode='cover'
                    />
                </View>
                <Space spacenumber={5} />
                <View >
                    <Text style={{
                        fontSize: fontsize.font14,
                        fontFamily: fontFamily.semiBold,
                        color: "#050A26",
                    }}>
                        Maya
                    </Text>
                    <Text style={{
                        fontSize: fontsize.font10,
                        fontFamily: fontFamily.regular,
                        color: "#050A26",
                    }}>
                        Online
                    </Text>
                </View>

            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={allcommonstyle.loginflex}>


                    <View style={[{ flex: 1, }]}>
                        <View style={[{ paddingHorizontal: 20, }]}>
                            <Space spacenumber={15} />
                            <View style={{
                                paddingVertical: 8,
                                alignSelf: 'center',
                                borderRadius: 100,
                                paddingHorizontal: 50,
                                backgroundColor: COLORS.lightGold
                            }}>
                                <Text style={{
                                    fontSize: fontsize.font10,
                                    fontFamily: fontFamily.semiBold,
                                    color: COLORS.black,
                                    textAlign: 'center',
                                    lineHeight: fontsize.font16
                                }}>Yesterday</Text>
                            </View>
                            <Space spacenumber={10} />
                            <View>
                                <View style={{

                                    alignItems: 'flex-start',
                                    flexDirection: 'row',
                                }}>
                                    <View
                                        style={{
                                            width: 35,
                                            height: 35,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Image
                                            style={{
                                                width: 30,
                                                height: 30,
                                                backgroundColor: COLORS.primarydarkgreen,
                                                borderRadius: 100,
                                            }}
                                            source={user2}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <View style={{
                                        backgroundColor: COLORS.white,
                                        paddingVertical: 15,
                                        paddingHorizontal: 10,
                                        flex: 1,
                                        marginLeft: 10,
                                        ...boxShadow,
                                        marginBottom: 5,
                                        borderBottomLeftRadius: 15,
                                        borderBottomRightRadius: 15,
                                        borderTopRightRadius: 15,
                                    }}>
                                        <Text style={{
                                            fontSize: fontsize.font14,
                                            fontFamily: fontFamily.semiBold,
                                            color: "#050A26",
                                        }}>
                                            Shequita Hall
                                        </Text>
                                        <Text style={{
                                            fontSize: fontsize.font12,
                                            fontFamily: fontFamily.light,
                                            color: COLORS.black,
                                            lineHeight: fontsize.font16
                                        }}>"Write here or use @ to mention someone on the discussion.""Write here or use @ to mention someone on the discussion.""Write here or use @ to mention someone on the discussion.""Write here or use @ to mention someone on the discussion.""Write here or use @ to mention someone on the discussion.""Write here or use @ to mention someone on the discussion.""Write here or use @ to mention someone on the discussion.""Write here or use @ to mention someone on the discussion."</Text>
                                    </View>


                                </View>
                                <Text style={{
                                    fontSize: fontsize.font10,
                                    fontFamily: fontFamily.semiBold,
                                    color: COLORS.black,
                                    textAlign: 'right',
                                    lineHeight: fontsize.font16
                                }}>Due on AUG 13 2020, 10:59 AM</Text>
                            </View>
                            <Space spacenumber={10} />
                            <View>
                                <View style={{

                                    alignItems: 'flex-start',
                                    flexDirection: 'row-reverse',
                                }}>
                                    <View
                                        style={{
                                            width: 35,
                                            height: 35,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Image
                                            style={{
                                                width: 30,
                                                height: 30,
                                                backgroundColor: COLORS.primarydarkgreen,
                                                borderRadius: 100,
                                            }}
                                            source={user1}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <View style={{
                                        backgroundColor: COLORS.primaryyellow,
                                        paddingVertical: 15,
                                        paddingHorizontal: 10,
                                        flex: 1,
                                        marginRight: 10,
                                        ...boxShadow,
                                        marginBottom: 5,
                                        borderBottomLeftRadius: 15,
                                        borderTopLeftRadius: 15,
                                        borderTopRightRadius: 15,
                                    }}>
                                        <Text style={{
                                            fontSize: fontsize.font14,
                                            fontFamily: fontFamily.semiBold,
                                            color: COLORS.white,
                                        }}>
                                            You
                                        </Text>
                                        <Text style={{
                                            fontSize: fontsize.font12,
                                            fontFamily: fontFamily.light,
                                            color: COLORS.white,
                                            lineHeight: fontsize.font16
                                        }}>"Write here or use @ to mention someone on the discussion.</Text>
                                    </View>


                                </View>
                                <Text style={{
                                    fontSize: fontsize.font10,
                                    fontFamily: fontFamily.semiBold,
                                    color: COLORS.black,
                                    textAlign: 'left',
                                    lineHeight: fontsize.font16
                                }}>Due on AUG 13 2020, 10:59 AM</Text>
                            </View>
                            <Space spacenumber={10} />
                        </View>

                    </View>
                </View>

            </ScrollView>
            <View style={allcommonstyle.chatbottomcontainer}>
                <View
                    style={{
                        width: 50,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: COLORS.primarydarkgreen,
                            borderRadius: 100,
                        }}
                        source={user1}
                        resizeMode='cover'
                    />
                </View>
                <TextInput
                    placeholder='Type a message......'
                    multiline={true}
                    style={allcommonstyle.chatinput}
                    onChangeText={onChangeText}
                    value={text}
                />
                <View
                    style={{
                        width: 50,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...boxShadow,
                    }}>
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.white,
                            borderRadius: 100,
                        }}
                    >
                        <MaterialCommunityIcons name="send" color={COLORS.primaryyellow} size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default MessageChatScreen;
const styles = StyleSheet.create({

})