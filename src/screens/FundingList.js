import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StatusBar, Dimensions, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, emptyimage, fulllogo, left, loginimg, logo, message, Profilepic, right, search_icon, start, user1, user2, user3, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { AppTextInputSearch, Fundingitem, SearchFilter, Space } from '../common/commoncomponents';
import { windowHeight } from '../common/responsive';
import { PrimaryButton } from '../components/button/primarybutton';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useCallback } from 'react';
import { ExpandingDot } from "react-native-animated-pagination-dots"
import { Picker } from '@react-native-picker/picker';
import * as RootNavigation from '../navigations/RootNavigation';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { COLORS, fontFamily, fontsize } from '../common/commonitem';

const Member = ({ navigation }) => {
    const [search, setSearch] = useState("");


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
    {
        id: 4,
        topbox: 'Lorem Ipsum',
        date: 'Opened Sun February  12, 2022 07:30',
        name: 'Lisa Ann',
        shortDesc:
            'Happy Friday, y’all! Check out this mentorship ..',
    },
    {
        id: 5,
        topbox: 'Goal',
        date: 'Opened Sun February  23, 2022 07:30',
        name: 'Tiana King',
        shortDesc:
            'Happy Friday, y’all! Check out this mentorship ..',
    },
    {
        id: 6,
        topbox: 'Lorem Ipsum',
        category: 'Opened Sun February  22, 2022 07:30',
        name: 'Jada Davis',
        shortDesc:
            'Happy Friday, y’all! Check out this mentorship ..',
    },
    ];

    const FilterData = [

        {
            selected: true,
            FilterName: "Today",
        },
        {
            selected: false,
            FilterName: "Populer",
        },
        {
            selected: false,
            FilterName: "New topic",
        },

        {
            selected: false,
            FilterName: "Today",
        },
        {
            selected: false,
            FilterName: "Populer",
        },
        {
            selected: false,
            FilterName: "New topic",
        },

    ];

    const SearchFilterItemRander = useCallback(({ item }) => {
        return (

            <SearchFilter {...item} />

        );
    }, []);

    const fundingitem = useCallback(({ item }) => {
        return (
            <Fundingitem {...item} onPress={() => { navigation.navigate('FundingDetail') }} />
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
                // title='Back'
                // iconleft={left}
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
                                // paddingHorizontal: 30,
                                paddingVertical: 20,
                            }}
                        >
                            <View style={{ paddingHorizontal: 30, }}>
                                <Text style={allcommonstyle.pageTitle}>Scholarships and Grants</Text>
                                <Space spacenumber={2} />
                                <Text style={allcommonstyle.pagedesc} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                <Space spacenumber={10} />
                                {/* <AppTextInputSearch
                                    placeholder='What are you looking for?'
                                    label='What are you looking for?'
                                    imageicon={search_icon}
                                    value={search}
                                    onChangeText={(value) => {
                                        setSearch(value);
                                    }}

                                /> */}
                            </View>

                            {/* <FlatList
                                contentContainerStyle={{ paddingHorizontal: 30, }}
                                horizontal
                                data={FilterData}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={keyExtractor}
                                renderItem={SearchFilterItemRander}
                            /> */}
                        </LinearGradient>
                    </View>

                    <View style={[{ flex: 3, }]}>
                        <View style={[{ paddingHorizontal: 20, top: -30 }]}>
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
                                    source={user3}
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
                                Let’s Start Here
                            </Text>
                            <Space spacenumber={5} />
                            <Text style={{
                                fontSize: fontsize.font12,
                                fontFamily: fontFamily.light,
                                color: COLORS.black,
                                lineHeight: fontsize.font16
                            }}>
                                Hey girl, we have a lot of work to do. There’s a lot of loans and
                                grants out there that could help your business grow. Here’s a quick
                                video to show you how to use this board to get it done!
                            </Text>
                        </View>
                        <View style={[{ paddingHorizontal: 20, }]}>

                            <FlatList
                                data={fundingitemData}
                                renderItem={fundingitem}
                                keyExtractor={keyExtractor}
                                horizontal={false}
                            />



                        </View>

                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};
export default Member;
const styles = StyleSheet.create({

})