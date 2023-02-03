import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, emptyimage, fulllogo, left, loginimg, logo, menu, message, Profilepic, right, search_icon, start, user1, user2, user3, userimage, users, } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { Completedgoal, Goaldata, SearchFilter, Space, ExcusiveResource,Attachmentitem } from '../common/commoncomponents';
import { windowHeight } from '../common/responsive';
import { PrimaryButton } from '../components/button/primarybutton';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useCallback } from 'react';
import { Picker } from '@react-native-picker/picker';
import { boxShadow, COLORS, fontFamily, fontsize } from '../common/commonitem';
import { back } from '../navigations/RootNavigation';
import { Menustyles } from '../components/header/Style';
import Ripple from 'react-native-material-ripple';

const Goalsdetail = ({ navigation }) => {

    const ExcusiveReourceData = [
        {
            id: '1',
            filepath: require("../assets/images/replays.png"),
            extension: "PDF",
            category: "Sales",
            title: "Salesforce Funnel",
            shortDesc: "Happy Friday, y’all! Check out this mentorship .."
        },
        {
            id: '2',
            filepath: require("../assets/images/replays.png"),
            extension: "PDF",
            category: "Sales",
            title: "Salesforce Funnel",
            shortDesc: "Happy Friday, y’all! Check out this mentorship .."
        },
        {
            id: '3',
            filepath: require("../assets/images/replays.png"),
            extension: "PDF",
            category: "Sales",
            title: "Salesforce Funnel",
            shortDesc: "Happy Friday, y’all! Check out this mentorship .."
        },
        {
            id: '4',
            filepath: require("../assets/images/replays.png"),
            extension: "PDF",
            category: "Sales",
            title: "Salesforce Funnel",
            shortDesc: "Happy Friday, y’all! Check out this mentorship .."
        },
    ];
    const attachmentitemData = [
        {
            id: 1,
            name: 'A neque vitae faucibus nisi viverra...pdf',
            shortDesc:
                '345.33 kB',
        },
        {
            id: 2,
            name: 'A neque vitae faucibus nisi viverra...pdf',
            shortDesc:
                '345.33 kB',
        },
        {
            id: 3,
            name: 'A neque vitae faucibus nisi viverra...pdf',
            shortDesc:
                '345.33 kB',
        },
        {
            id: 4,
            name: 'A neque vitae faucibus nisi viverra...pdf',
            shortDesc:
                '345.33 kB',
        },
        {
            id: 5,
            name: 'A neque vitae faucibus nisi viverra...pdf',
            shortDesc:
                '345.33 kB',
        },
        {
            id: 6,
            name: 'A neque vitae faucibus nisi viverra...pdf',
            shortDesc:
                '345.33 kB',
        },
    ];
    const excusiveResourcesItem = useCallback(({ item }) => {
        return (
            <ExcusiveResource {...item} />
        );
    }, []);
    const attachmentitem = useCallback(({ item }) => {
        return (
            <Attachmentitem {...item} />
        );
    }, []);
    
    const keyExtractor = useCallback((item) => {
        return item.id;
    }, []);


    /*** DESIGN HERE ***/
    return (
        <SafeAreaView style={allcommonstyle.safeAreaViewcontainer}>
            <MyStatusBar backgroundColor="black" barStyle={"light-content"} />
            <Header
                iconleft={menu}
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
                            colors={["#BEBB30", "#146E79"]}
                            start={{ x: 0.1, y: 0.5 }} end={{ x: 0.5, y: 1.3 }}
                            locations={[0, 0.9, 0.4]}
                            style={{
                                height: 190,
                                marginBottom: 120,
                                paddingVertical: 20,
                                borderBottomRightRadius: 27,
                                borderBottomLeftRadius: 27,
                            }}
                        >
                            <View style={{ paddingHorizontal: 30, }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={left} style={{ height: 10, width: 15, }} />
                                    <Space spacenumber={5} />
                                    <Text style={{
                                        fontSize: fontsize.font15,
                                        fontFamily: fontFamily.light,
                                        color: COLORS.white,
                                    }}>Back</Text>
                                </TouchableOpacity>
                                <Text style={allcommonstyle.pageTitle}>Submit Application for CERF Grant</Text>

                                <Space spacenumber={10} />

                            </View>
                        </LinearGradient>
                        <View style={[allcommonstyle.cardstyle, { bottom: 0, position: 'absolute', right: 0, left: 0 }]}>

                            <View
                                style={[allcommonstyle.GOALbox, {}]}>
                                <Text
                                    style={allcommonstyle.goaltext}
                                >GOAL</Text>
                            </View>
                            <Space spacenumber={5} />
                            <Text style={allcommonstyle.carddesc}>
                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio.
                            </Text>


                        </View>
                    </View>

                    <View style={[{ flex: 3, }]}>

                        <View style={[allcommonstyle.formcontaine]}>
                            <View style={[{}]}>
                                <Text style={[allcommonstyle.degital_lib_name_excusive_resource, { paddingHorizontal: 20, }]}>Attachment</Text>
                                <Space spacenumber={5} />
                                <FlatList
                                    contentContainerStyle={{ paddingHorizontal: 20, }}
                                    data={attachmentitemData}
                                    numColumns={1}
                                    renderItem={attachmentitem}
                                    keyExtractor={keyExtractor}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                            <Space spacenumber={10} />
                            <View style={[{}]}>
                                <Text style={[allcommonstyle.degital_lib_name_excusive_resource, { paddingHorizontal: 20, }]}>Exlusive Resources</Text>
                                <Space spacenumber={5} />
                                <FlatList
                                    contentContainerStyle={{ paddingHorizontal: 20, }}
                                    data={ExcusiveReourceData}
                                    renderItem={excusiveResourcesItem}
                                    keyExtractor={keyExtractor}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                            <Space spacenumber={30} />

                        </View>


                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};
export default Goalsdetail;