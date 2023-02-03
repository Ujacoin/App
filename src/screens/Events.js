import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StatusBar, Dimensions, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, brunch, diadeLosMuertos, dot, emptyimage, fulllogo, graduations, homebg, homecoming, left, loginimg, logo, message, Profilepic, prom, quinceaneraReDo, right, search_icon, silentDanceParty, springBreak, start, user1, user2, user3, userimage, users, whiteParty } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { AppTextInputSearch, EventListdata, SearchFilter, Space } from '../common/commoncomponents';
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

const Events = ({ navigation }) => {
    const [search, setSearch] = useState("");
    const [indexButton, seIndexButton] = useState(0);


    const eventdataData = [
        {
            id: 1,
            image: homecoming,
            industry: 'Marketing and Sales',
            free:true,
            name: 'Homecoming',
            sort: 'WED, AUG 12, 11:00 am',
            shortDesc:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, ',
        },
        {
            id: 2,
            image: prom,
            industry: 'Same industry',
            name: 'Prom',
            free:true,
            sort: 'WED, AUG 12, 11:00 am',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 3,
            image: graduations,
            industry: 'Same industry',
            name: 'Graduations',
            free:true,
            sort: 'WED, AUG 12, 11:00 am',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 4,
            image: springBreak,
            industry: 'Same industry',
            name: 'Uja Spring Break',
            paid:true,
            sort: 'WED, AUG 12, 11:00 am',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 5,
            image: silentDanceParty,
            industry: 'Same industry',
            name: 'Silent Dance Party',
            paid:true,
            sort: 'WED, AUG 12, 11:00 am',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 6,
            image: brunch,
            industry: 'Uja Brunch',
            name: 'Uja Brunch',
            paid:true,
            sort: 'WED, AUG 12, 11:00 am',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 7,
            image: whiteParty,
            industry: 'Uja Brunch',
            name: 'The Uja White Party',
            sort: 'WED, AUG 12, 11:00 am',
            paid:true,
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 8,
            image: quinceaneraReDo,
            industry: 'Uja Brunch',
            name: 'Quinceanera ReDo',
            sort: 'WED, AUG 12, 11:00 am',
            paid:true,
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 9,
            image: diadeLosMuertos,
            industry: 'Uja Brunch',
            name: 'Dia de Los Muertos',
            paid:true,
            sort: 'WED, AUG 12, 11:00 am',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
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

    const eventdataList = useCallback(({ item }) => {
        return (
            <EventListdata {...item} onPress={() => { navigation.navigate('Eventdetail') }} />
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
                                <Text style={allcommonstyle.pageTitle}>Events</Text>
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
                        <View style={[{ paddingHorizontal: 15, top: -40 }]}>

                            <FlatList
                                data={eventdataData}
                                renderItem={eventdataList}
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
export default Events;
const styles = StyleSheet.create({

})