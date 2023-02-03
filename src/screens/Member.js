import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StatusBar, Dimensions, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, emptyimage, fulllogo, left, loginimg, logo, message, Profilepic, right, search_icon, start, user1, user2, user3, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { AppTextInputSearch, ExcusiveResource, LatestReplays, Memberdata, SearchFilter, Space } from '../common/commoncomponents';
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
    const [indexButton, seIndexButton] = useState(0);


    const ExcusiveReourceData = [
        // {
        //     id: '1',
        //     image: user1,
        //     category: "Sales",
        //     title: "Salesforce Funnel",
        //     shortDesc: "Happy Friday, y’all! Check out this mentorship .."
        // },
        // {
        //     id: '2',
        //     image:user2,
        //     extension: "PDF",
        //     category: "Sales",
        //     title: "Salesforce Funnel",
        //     shortDesc: "Happy Friday, y’all! Check out this mentorship .."
        // },
        // {
        //     id: '3',
        //     image: user3,
        //     extension: "PDF",
        //     category: "Sales",
        //     title: "Salesforce Funnel",
        //     shortDesc: "Happy Friday, y’all! Check out this mentorship .."
        // },
        // {
        //     id: '4',
        //     image: emptyimage,
        //     extension: "PDF",
        //     category: "Sales",
        //     title: "Salesforce Funnel",
        //     shortDesc: "Happy Friday, y’all! Check out this mentorship .."
        // },
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

    const memberdata = useCallback(({ item }) => {
        return (
            <Memberdata {...item} onPress={() => { navigation.navigate('MemberProfile') }} />
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
                                paddingVertical: 20,
                            }}
                        >
                            <View style={{ paddingHorizontal: 30, }}>
                                <Text style={allcommonstyle.pageTitle}>Your HBCU Members</Text>
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

                            <FlatList
                                data={ExcusiveReourceData}
                                renderItem={memberdata}
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