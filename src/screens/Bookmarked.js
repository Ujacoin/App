import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, emptyimage, fulllogo, left, loginimg, logo, menu, message, Profilepic, right, search_icon, start, user1, user2, user3, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { AppTextInputSearch, ExcusiveResource, Fundingitem, Memberdata, Groupdata, Space, Librarydata } from '../common/commoncomponents';
import { windowHeight } from '../common/responsive';
import { PrimaryButton } from '../components/button/primarybutton';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useCallback } from 'react';
import { Picker } from '@react-native-picker/picker';
import { COLORS, fontFamily, fontsize } from '../common/commonitem';
import { back } from '../navigations/RootNavigation';
import { Menustyles } from '../components/header/Style';
import Ripple from 'react-native-material-ripple';

const Bookmarked = ({ navigation }) => {


    const ExcusiveReourceData = [
        {
            id: 1,
            image: user1,
            category: 'Same industry',
            name: 'Shequita Hall',
            short: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
        {
            id: 2,
            image: emptyimage,
            category: 'Same industry',
            name: 'Ebony Lewis',
            short: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
        {
            id: 3,
            image: user2,
            category: 'Same industry',
            name: 'Jasmine Walker',
            short: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
        {
            id: 4,
            image: user3,
            category: 'Same industry',
            name: 'Lisa Ann',
            short: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
        {
            id: 5,
            category: 'Lives in  Berlin',
            image: user2,
            name: 'Tiana King',
            short: 'Skinfulness',
            // shortDesc: `Denver, CO`,
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
        {
            id: 6,
            category: 'Marketing',
            image: emptyimage,
            name: 'Jada Davis',
            short: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
    ];
    const fundingitemData = [{
        id: 1,
        topbox: 'Lorem Ipsum',
        date: 'Opened Sun February  25, 2022 07:30',
        name: 'Shequita Hall',
        shortDesc:
            'Happy Friday, y’all! Check out this mentorship ..',
    },
    {
        id: 2,
        topbox: 'Lorem Ipsum',
        date: 'Opened Sun February  25, 2022 07:30',
        name: 'The Dyer Grant Program for Black- owned Businesses',
        shortDesc:
            'INDIANA MEMBERS!\nQualifying Black-owned businesses in Greater Fort Wayne with annual revenues less than $1 million can apply for grants in amounts of up to $25,000. Up to $200,000 will be available this grant cycle.',
    },
    {
        id: 3,
        topbox: 'Lorem Ipsum',
        date: 'Opened Sun February  24, 2022 07:30y',
        name: 'Jasmine Walker',
        shortDesc:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.Rackham.',
    },

    ];
    const groupdatalist = [
        {
            id: 1,
            image: user1,
            industry: 'Same industry',
            name: 'marketing and sales',
            sort: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 2,
            image: user2,
            industry: 'Same industry',
            name: 'Shequita Hall',
            sort: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 3,
            image: user3,
            industry: 'Same industry',
            name: 'Shequita Hall',
            sort: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 4,
            image: user2,
            industry: 'Same industry',
            name: 'Shequita Hall',
            sort: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },

    ];
    const librarydatalist = [
        {
            id: 1,
            image: user1,
            industry: 'Same industry',
            name: 'marketing and sales',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
            isFavorite: true,
        },
        {
            id: 2,
            image: user2,
            industry: 'Same industry',
            name: 'Shequita Hall',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
            isFavorite: false,
        },
        {
            id: 3,
            image: user3,
            industry: 'Same industry',
            name: 'Shequita Hall',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
            isFavorite: false,
        },
        {
            id: 4,
            image: user2,
            industry: 'Same industry',
            name: 'Shequita Hall',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
            isFavorite: true,
        },

    ];
    const memberdata = useCallback(({ item }) => {
        return (
            <Memberdata {...item} />
        );
    }, []);

    const fundingitem = useCallback(({ item }) => {
        return (
            <Fundingitem {...item} onPress={() => { navigation.navigate('FundingDetail') }} />
        );
    }, []);

    const groupdata = useCallback(({ item }) => {
        return (
            <Groupdata {...item} />
        );
    }, []);
    const librarydata = useCallback(({ item }) => {
        return (
            <Librarydata {...item} />
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
                addlogo
                // iconleft={menu}
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
                            start={{ x: 0.1, y: 0.5 }} end={{ x: 0.5, y: 1.3 }}
                            locations={[0, 0.9, 0.4]}
                            style={{
                                height: 100,
                                paddingVertical: 20,
                            }}
                        >
                            <Space spacenumber={13} />
                            <View style={{ paddingHorizontal: 30, }}>
                                <Text style={allcommonstyle.pageTitle}>Bookmarked</Text>

                            </View>
                        </LinearGradient>
                    </View>

                    <View style={[{ flex: 3, }]}>
                        <View style={[allcommonstyle.formcontaine]}>
                            <Space spacenumber={10} />
                            <View style={{ paddingHorizontal: 20 }}>
                                <Text style={allcommonstyle.Bookmarkedtitls}>
                                    Your HBCU Members
                                </Text>
                                <Space spacenumber={5} />
                                <FlatList
                                    data={ExcusiveReourceData}
                                    renderItem={memberdata}
                                    keyExtractor={keyExtractor}
                                    horizontal={false}
                                />
                            </View>
                            <Space spacenumber={10} />
                            <View style={{ paddingHorizontal: 20 }}>
                                <Text style={allcommonstyle.Bookmarkedtitls}>
                                    Events
                                </Text>
                                <Space spacenumber={10} />
                                <Text
                                    style={{
                                        color: COLORS.black,
                                        fontSize: fontsize.font14,
                                        fontFamily: fontFamily.regular,
                                        textAlign: "center",
                                    }}
                                >
                                    No Bookmarked Groups Found
                                </Text>
                            </View>
                            <Space spacenumber={10} />
                            <View style={{ paddingHorizontal: 20 }}>
                                <Text style={allcommonstyle.Bookmarkedtitls}>
                                    Scholarships and Grants
                                </Text>
                                <Space spacenumber={10} />
                                <FlatList
                                    data={fundingitemData}
                                    renderItem={fundingitem}
                                    keyExtractor={keyExtractor}
                                    horizontal={false}
                                />
                            </View>
                            <Space spacenumber={10} />
                            <View style={{ paddingHorizontal: 20 }}>
                                <Text style={allcommonstyle.Bookmarkedtitls}>
                                    Groups
                                </Text>
                                <Space spacenumber={10} />
                                <FlatList
                                    contentContainerStyle={{ paddingHorizontal: 0 }}
                                    numColumns={1}
                                    horizontal
                                    data={groupdatalist}
                                    renderItem={groupdata}
                                    keyExtractor={keyExtractor}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                            <Space spacenumber={10} />
                            <View style={{ paddingHorizontal: 20 }}>
                                <Text style={allcommonstyle.Bookmarkedtitls}>
                                    Library
                                </Text>
                                <Space spacenumber={10} />
                                <FlatList
                                    contentContainerStyle={{ paddingHorizontal: 0 }}
                                    numColumns={1}
                                    horizontal
                                    data={librarydatalist}
                                    renderItem={librarydata}
                                    keyExtractor={keyExtractor}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>


                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};
export default Bookmarked;