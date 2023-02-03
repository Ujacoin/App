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



const Terms = ({ navigation }) => {

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
                                height: 100,
                                paddingVertical: 20,
                                borderBottomRightRadius: 27,
                                borderBottomLeftRadius: 27,
                            }}
                        >
                            <View style={{ paddingHorizontal: 30, }}>
                                <Text style={allcommonstyle.pageTitle}>Terms</Text>
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
                            <Text style={style.fullDescription} >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </Text>

                            <Text style={style.subtitle} >
                                What is Lorem Ipsum?
                            </Text>
                            <Text style={style.fullDescription} >
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
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
                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
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
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
                                </Text>
                            </View>


                            <Text style={style.subtitle} >Refund Policy</Text>
                            <Text style={style.fullDescription} >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </Text>
                        </View>
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};

export default Terms;
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