import React, { useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView, ImageBackground, SafeAreaView, Animated } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { search_icon, start, user1, user2, user3, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { SearchFilter, ExcusiveResource, LatestReplays, AppTextInputSearch, Space } from '../common/commoncomponents';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useCallback } from 'react';
import { boxShadow, COLORS, fontFamily, fontsize } from '../common/commonitem';

const DigitalLibrary = ({ navigation }) => {
    const flatListRef = React.useRef(null);
    const [search, setSearch] = useState("");
    const [forYoudropdown, setForYoudropdown] = useState("");
    const scrollX = React.useRef(new Animated.Value(0)).current;


    const ReplaysData = [
        {
            id: '1',
            ReplaysImage: user1,
            ReplaysTitle: "Planning Annual Strategic Initia..",
        },
        {
            id: '2',
            ReplaysImage: user1,
            ReplaysTitle: "Planning Annual Strategic Initia..",
        }, {
            id: '3',
            ReplaysImage: user1,
            ReplaysTitle: "Planning Annual Strategic Initia..",
        },
        {
            id: '4',
            ReplaysImage: user1,
            ReplaysTitle: "Planning Annual Strategic Initia..",
        }
    ];
    const ExcusiveReourceData = [
        {
            id: '1',
            image: user1,
            category: "Sales",
            title: "Salesforce Funnel",
            shortDesc: "Happy Friday, y’all! Check out this mentorship .."
        },
        {
            id: '2',
            image: user2,
            category: "Sales",
            title: "Salesforce Funnel",
            shortDesc: "Happy Friday, y’all! Check out this mentorship .."
        },
        {
            id: '3',
            image: user3,
            category: "Sales",
            title: "Salesforce Funnel",
            shortDesc: "Happy Friday, y’all! Check out this mentorship .."
        },
        {
            id: '4',
            image: user1,
            category: "Sales",
            title: "Salesforce Funnel",
            shortDesc: "Happy Friday, y’all! Check out this mentorship .."
        },
    ];
    const GroupLeaddata = [

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
    const latestReplayItem = useCallback(({ item }) => {
        return (
            <LatestReplays {...item} />

        );
    }, []);
    const excusiveResourcesItem = useCallback(({ item }) => {
        return (
            <ExcusiveResource {...item} />
        );
    }, []);
    const SearchFilterItemRander = useCallback(({ item }) => {
        return (

            <SearchFilter {...item} />

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
                                height: 240,
                                paddingVertical: 20,
                            }}
                        >
                            <View style={{ paddingHorizontal: 30, }}>

                                <AppTextInputSearch
                                    placeholder='What are you looking for?'
                                    label='What are you looking for?'
                                    imageicon={search_icon}
                                    value={search}
                                    onChangeText={(value) => {
                                        setSearch(value);
                                    }}

                                />

                            </View>
                        </LinearGradient>
                    </View>

                    <View style={[{ flex: 3, }]}>
                        <View style={[allcommonstyle.digitalcontaine, { top: -100 }]}>
                            <Text style={[allcommonstyle.pageTitle, { marginHorizontal: 20 }]}>You'll like it!</Text>
                            <Space spacenumber={10} />
                            <FlatList
                                style={{
                                    paddingHorizontal: 20
                                }}
                                showsHorizontalScrollIndicator={false}
                                data={ExcusiveReourceData}
                                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                                renderItem={excusiveResourcesItem}
                                keyExtractor={keyExtractor}
                                horizontal={true}
                            />
                            <Space spacenumber={10} />
                            <View style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                marginHorizontal: 20,
                            }}>
                                {GroupLeaddata.map((props) => {
                                    return (
                                        <TouchableOpacity
                                            style={{
                                                paddingVertical: 7,
                                                backgroundColor: COLORS.white,
                                                borderWidth: 1,
                                                borderColor: COLORS.primaryyellow,
                                                borderRadius: 100,
                                                paddingHorizontal: 15,
                                                marginRight: 10,
                                                marginBottom: 10,
                                            }}
                                        >
                                            <Text style={{
                                                fontSize: fontsize.font10,
                                                color: COLORS.grayNonSelected,
                                                fontFamily: fontFamily.bold,
                                                color: COLORS.primaryyellow,
                                            }}>
                                                {props.FilterName}
                                            </Text>
                                        </TouchableOpacity>)
                                })}
                            </View>
                            <Space spacenumber={10} />
                            <View
                                style={{
                                    backgroundColor: '#FFFFFF',

                                    marginHorizontal: 20,
                                    marginVertical: 5,
                                    borderRadius: 5,
                                }}>
                                <Image
                                    style={{
                                        width: '100%',
                                        height: 200,
                                        borderTopLeftRadius: 5,
                                        borderBottomLeftRadius: 5,
                                    }}
                                    source={user1}
                                    resizeMode='cover'
                                />
                                <View style={{ padding: 15, flex: 1 }}>
                                    <Text
                                        numberOfLines={2}
                                        style={{
                                            fontSize: fontsize.font15,
                                            fontFamily: fontFamily.semiBold,
                                            color: COLORS.black,
                                        }}>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                    </Text>
                                    <Space spacenumber={5} />
                                    <Text
                                        numberOfLines={2}
                                        style={{
                                            fontSize: fontsize.font12,
                                            fontFamily: fontFamily.thin,
                                            color: COLORS.black,
                                        }}>
                                        The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
                                    </Text>
                                </View>

                            </View>
                            <Space spacenumber={10} />
                            <View >
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    data={ReplaysData}
                                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 20 }}
                                    renderItem={latestReplayItem}
                                    keyExtractor={keyExtractor}
                                    horizontal={false}
                                />

                            </View>
                        </View>

                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};
export default DigitalLibrary;