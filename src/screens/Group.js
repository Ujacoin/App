import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StatusBar, Dimensions, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, emptyimage, fulllogo, group1, group2, group3, group4, group5, left, loginimg, logo, message, Profilepic, right, search_icon, start, user1, user2, user3, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { AppTextInputSearch, ExcusiveResource, LatestReplays, Groupdata, SearchFilter, Space } from '../common/commoncomponents';
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
import { boxShadow, COLORS, fontFamily, fontsize } from '../common/commonitem';

const Group = ({ navigation }) => {
    const [search, setSearch] = useState("");
    const [indexButton, seIndexButton] = useState(0);

    const groupdatalist = [
        {
            id: 1,
            image: group1,
            industry: 'Lorem Ipsum',
            name: 'Saving 1o1',
            sort: 'Dummy text',
            shortDesc:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        },
        {
            id: 1,
            image: group2,
            industry: 'Lorem Ipsum',
            name: 'Secure the Bag',
            sort: 'Dummy text',
            shortDesc:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        },
        {
            id: 1,
            image: group3,
            industry: 'Lorem Ipsum',
            name: 'Securing your coin and your side Hustle',
            sort: 'Dummy text',
            shortDesc:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        },
        {
            id: 1,
            image: group4,
            industry: 'Lorem Ipsum',
            name: 'Road to your best life',
            sort: 'Dummy text',
            shortDesc:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        },
        {
            id: 1,
            image: group5,
            industry: 'Lorem Ipsum',
            name: 'Securing Your Coin and a Sidehustle',
            sort: 'Dummy text',
            shortDesc:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        },
        {
            id: 1,
            image: group1,
            industry: 'Lorem Ipsum',
            name: 'Credit aint Free',
            sort: 'Dummy text',
            shortDesc:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        },
        {
            id: 1,
            image: group2,
            industry: 'Lorem Ipsum',
            name: 'Investments: Road to Your Best Life',
            sort: 'Dummy text',
            shortDesc:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
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
    const groupdata = useCallback(({ item }) => {
        return (
            <Groupdata {...item} />
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
                // title='Back'
                // iconleft={left}
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
                                // paddingHorizontal: 30,
                                paddingVertical: 20,
                            }}
                        >
                            <View style={{ paddingHorizontal: 30, }}>
                                <Text style={allcommonstyle.pageTitle}>Groups</Text>
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
                        <View style={[{ paddingHorizontal: 20, top: -40 }]}>
                            {groupdatalist.map((props) => {
                                return (

                                    <TouchableOpacity
                                        onPress={() => { navigation.navigate('Groupdetail') }}
                                        style={{
                                            backgroundColor: '#FFFFFF',
                                            ...boxShadow,
                                            marginBottom: 10,
                                            overflow: 'hidden',
                                            borderRadius: 10,

                                        }}>
                                        <View>
                                            <Image source={props.image} style={{ height: 150, width: '100%' }} />
                                        </View>
                                        <View style={{
                                            marginLeft: 3,
                                            paddingLeft: 15,
                                            paddingRight: 15,
                                            paddingVertical: 15,

                                        }}>

                                            <View
                                                style={{
                                                    borderWidth: 1,
                                                    alignSelf: 'flex-start',
                                                    borderRadius: 5,
                                                    borderColor: COLORS.primarydarkgreen,
                                                    paddingVertical: 5,
                                                    paddingHorizontal: 12
                                                }}>
                                                <Text
                                                    numberOfLines={1}
                                                    style={{
                                                        fontFamily: fontFamily.medium,
                                                        color: COLORS.primarydarkgreen,
                                                        fontSize: fontsize.font10,
                                                    }}
                                                >{props.industry}</Text>
                                            </View>
                                            <Space spacenumber={5} />
                                            <Text numberOfLines={1} style={{
                                                fontFamily: fontFamily.medium,
                                                color: COLORS.primaryyellow,
                                                fontSize: fontsize.font10,
                                            }}>
                                                {props.sort}
                                            </Text>
                                            <Text numberOfLines={1} style={{
                                                fontSize: fontsize.font16,
                                                fontFamily: fontFamily.semiBold,
                                                color: COLORS.primarydarkgreen,
                                                marginTop: 5
                                            }}>
                                                {props.name}
                                            </Text>
                                            <Space spacenumber={3} />
                                            <Text numberOfLines={2} style={{
                                                fontSize: fontsize.font11,
                                                fontFamily: fontFamily.regular,
                                                color: COLORS.black,
                                            }}>
                                                {props.shortDesc}
                                            </Text>
                                            <Space spacenumber={3} />
                                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                                                <Image source={user1} style={{ height: 30, width: 30, borderRadius: 100, }} />
                                                <Image source={user2} style={{ height: 30, width: 30, borderRadius: 100, left: -15 }} />
                                                <Image source={user3} style={{ height: 30, width: 30, borderRadius: 100, left: -30 }} />
                                            </View>
                                        </View>
                                        {props.isFavorite &&
                                            <Image
                                                style={{
                                                    width: 20,
                                                    height: 20,
                                                    position: "absolute",
                                                    right: 10,
                                                    top: 10,
                                                }}
                                                source={require("../assets/images/icons/bookmarked.png")}
                                                resizeMode='contain'
                                            />
                                        }
                                        {!props.isFavorite &&
                                            <Image
                                                style={{
                                                    width: 20,
                                                    height: 20,
                                                    position: "absolute",
                                                    right: 10,
                                                    top: 10,
                                                }}
                                                source={require("../assets/images/icons/bookmark.png")}
                                                resizeMode='contain'
                                            />
                                        }
                                    </TouchableOpacity>
                                )
                            })}
                        </View>

                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};
export default Group;
const styles = StyleSheet.create({

})