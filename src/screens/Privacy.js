//react native Components
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet, StatusBar, FlatList, SafeAreaView } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import { boxShadow, COLORS, fontFamily, fontsize } from '../common/commonitem';
import allcommonstyle from "../styles/allcommonstyle";
import { Space } from "../common/commoncomponents";
import MyStatusBar from "../components/myStatusBar/MyStatusBar";
import { Header } from "../components/header/Header";
import { left, userimage } from "../data/Imagedata";



const Privacy = ({ navigation }) => {

    //main JSX Screen
    return (
        <SafeAreaView style={allcommonstyle.safeAreaViewcontainer}>
            <MyStatusBar backgroundColor="black" barStyle={"light-content"} />
            <Header 
                addlogo
                iconRight='dots-three-vertical'
                userimage={userimage}
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
                                height: 150,
                                paddingVertical: 20,
                            }}
                        >
                            <View style={{ paddingHorizontal: 30, }}>
                                <Text style={allcommonstyle.pageTitle}>Privacy Policy</Text>
                                <Space spacenumber={2} />
                                <Text numberOfLines={2} style={allcommonstyle.pagedesc} >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                                <Space spacenumber={10} />
                            </View>
                        </LinearGradient>
                    </View>

                    <View style={[{ flex: 3, }]}>
                        <View style={{
                            backgroundColor: '#FFFFFF',
                            flexDirection: 'column',
                            marginHorizontal: 20,
                            padding: 20,
                            borderRadius: 10,
                            ...boxShadow,
                            top: -30,
                        }}>
                            <Text style={style.subtitle} >
                                PERSONAL INFORMATION WE COLLECT
                            </Text>
                            <Text style={style.fullDescription} >
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </Text>

                            <Text style={style.fullDescription} >
                                We collect Device Information using the following technologies:
                            </Text>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    marginTop: 10,
                                }}
                            >
                                <Icon name="circle" size={10} color={COLORS.black} style={{ width: 20, marginRight: 0, marginTop: 2, }} />
                                <Text style={[style.fullDescription, { marginTop: 0 }]} >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    marginTop: 10,
                                }}
                            >
                                <Icon name="circle" size={10} color={COLORS.black} style={{ width: 20, marginRight: 0, marginTop: 2, }} />
                                <Text style={[style.fullDescription, { marginTop: 0 }]} >
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    marginTop: 10,
                                }}
                            >
                                <Icon name="circle" size={10} color={COLORS.black} style={{ width: 20, marginRight: 0, marginTop: 2, }} />
                                <Text style={[style.fullDescription, { marginTop: 0 }]}>
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </Text>
                            </View>

                        </View>
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};

export default Privacy;
const style = StyleSheet.create({
    subtitle: {
        fontFamily: fontFamily.medium,
        fontSize: fontsize.font15,
        color: COLORS.black,
        paddingBottom: 0,
        marginTop: 20,
    },
    fullDescription: {
        fontFamily: fontFamily.regular,
        color: "#333333",
        letterSpacing: 0.216667,
        fontSize: fontsize.font12,
        marginTop: 20,
    },
})