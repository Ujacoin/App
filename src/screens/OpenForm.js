import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, fulllogo, headerback, left, loginimg, logo, message, Profilepic, right, search_icon, start, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { AppTextInputSearch, ExcusiveResource, FormDataList, LatestReplays, SearchFilter, SettingsItem, Space } from '../common/commoncomponents';
import { windowHeight } from '../common/responsive';
import { PrimaryButton } from '../components/button/primarybutton';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useCallback } from 'react';
import { Picker } from '@react-native-picker/picker';

const OpenForm = ({ navigation }) => {

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

    ];
    const FormData = [

        {
            Id: "1",
            ImageUrl: require('../assets/images/online_people.png'),
            UserName: "Monica Abrahams",
            Title: "Experience Listens. Be Heard.",
            Time: "1hr ago",
            Description: "Happy Friday, y’all! Check out this mentorship and grant opportunity from the BOSS Impact Fund. Deadline to apply is February 25, 2022.",
            Link: "https://www.bossimpactfund.com/",
            Likes: "25",
            Comments: "20",
            Views: "200",
            isFavorite: true,

        },
        {
            Id: "2",
            ImageUrl: require('../assets/images/online_people.png'),
            UserName: "Monica Abrahams",
            Title: "Experience Listens. Be Heard.",
            Time: "1hr ago",
            Description: "Happy Friday, y’all! Check out this mentorship and grant opportunity from the BOSS Impact Fund. Deadline to apply is February 25, 2022.",
            Link: "https://www.bossimpactfund.com/",
            Likes: "25",
            Comments: "20",
            Views: "200",
            isFavorite: false,

        },
        {
            Id: "3",
            ImageUrl: require('../assets/images/online_people.png'),
            UserName: "Monica Abrahams",
            Title: "Experience Listens. Be Heard.",
            Time: "1hr ago",
            Description: "Happy Friday, y’all! Check out this mentorship and grant opportunity from the BOSS Impact Fund. Deadline to apply is February 25, 2022.",
            Link: "https://www.bossimpactfund.com/",
            Likes: "25",
            Comments: "20",
            Views: "200",
            isFavorite: false,

        },
        {
            Id: "4",
            ImageUrl: require('../assets/images/online_people.png'),
            UserName: "Monica Abrahams",
            Title: "Experience Listens. Be Heard.",
            Time: "1hr ago",
            Description: "Happy Friday, y’all! Check out this mentorship and grant opportunity from the BOSS Impact Fund. Deadline to apply is February 25, 2022.",
            Link: "https://www.bossimpactfund.com/",
            Likes: "25",
            Comments: "20",
            Views: "200",
            isFavorite: false,

        }

    ];
    const SearchFilterItemRander = useCallback(({ item }) => {
        return (
            <View>
                <SearchFilter {...item} />
            </View>
        );
    }, []);
    const FormDataRander = useCallback(({ item }) => {
        return (
            <View>
                <FormDataList {...item} />
            </View>
        );
    }, []);

    const keyExtractor = useCallback((item) => {
        return item.id;
    }, []);

    const [search, setSearch] = useState("");
    const [forYoudropdown, setForYoudropdown] = useState("");

    /*** DESIGN HERE ***/
    return (
        <SafeAreaView style={allcommonstyle.safeAreaViewcontainer}>
            <MyStatusBar backgroundColor="black" barStyle={"light-content"} />
            <Header
                title='Back'
                iconleft={headerback}
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
                            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                            locations={[0, 0.8, 0.6]}
                            style={{
                                height: 270,
                                paddingVertical: 20,
                                borderBottomRightRadius: 27,
                                borderBottomLeftRadius: 27,
                            }}
                        >
                            <View style={{ paddingHorizontal: 30, }}>
                                <Text style={allcommonstyle.pageTitle}>Open Forum</Text>
                                <Space spacenumber={2} />
                                <Text style={allcommonstyle.pagedesc} numberOfLines={2}>Anyone can see this info when they communicate with you</Text>
                                <Space spacenumber={10} />
                                <AppTextInputSearch
                                    placeholder='What are you looking for?'
                                    label='What are you looking for?'
                                    imageicon={search_icon}
                                    value={search}
                                    onChangeText={(value) => {
                                        setSearch(value);
                                    }}

                                />
                                <FlatList
                                    data={FilterData}
                                    renderItem={SearchFilterItemRander}
                                    keyExtractor={keyExtractor}
                                    horizontal={true}
                                />
                            </View>
                        </LinearGradient>
                    </View>

                    <View style={[{ flex: 3, }]}>
                        <View style={[allcommonstyle.formcontaine]}>
                            <FlatList
                                style={{
                                    top: -30,
                                }}
                                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                                data={FormData}
                                renderItem={FormDataRander}
                                keyExtractor={keyExtractor}
                            // horizontal={true}
                            />
                        </View>

                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};
export default OpenForm;