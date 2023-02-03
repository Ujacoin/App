import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, fulllogo, left, loginimg, logo, menu, message, Profilepic, right, search_icon, start, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { Completedgoal, Goaldata, SearchFilter, Space } from '../common/commoncomponents';
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

const GoalsActivities = ({ navigation }) => {

    const FilterData = [

        {
            selected: true,
            FilterName: "Goals",
        },
        {
            selected: false,
            FilterName: "Activities",
        },
    ];
    const FormData = [

        {
            id: 1,
            name: 'Submit Application for CERF Grant',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 1,
            name: 'Submit Application for CERF Grant',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 1,
            name: 'Submit Application for CERF Grant',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },

    ];
    const SearchFilterItemRander = useCallback(({ item }) => {
        return (
            <View>
                <SearchFilter {...item} />
            </View>
        );
    }, []);
    const goaldata = useCallback(({ item }) => {
        return (
            <View>
                <Goaldata {...item} />
            </View>
        );
    }, []);
    const completedgoal = useCallback(({ item }) => {
        return (
            <View>
                <Completedgoal {...item} />
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
                                height: 150,
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
                                <Text style={allcommonstyle.pageTitle}>Goals & Activities</Text>

                                <Space spacenumber={10} />
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
                            <Space spacenumber={5} />
                            <Text style={{
                                paddingHorizontal: 30,
                                fontFamily: fontFamily.bold,
                                color: COLORS.gray,
                                fontSize: fontsize.font10,
                            }}>
                                Due this week
                            </Text>
                            <Space spacenumber={5} />
                            <FlatList
                                data={FormData}
                                renderItem={goaldata}
                                keyExtractor={keyExtractor}
                            />
                        </View>
                        <View style={[allcommonstyle.formcontaine]}>
                            <Space spacenumber={5} />
                            <Text style={{
                                paddingHorizontal: 30,
                                fontFamily: fontFamily.bold,
                                color: COLORS.gray,
                                fontSize: fontsize.font10,
                            }}>
                                Completed
                            </Text>
                            <Space spacenumber={5} />
                            <FlatList
                                data={FormData}
                                renderItem={completedgoal}
                                keyExtractor={keyExtractor}
                            />
                        </View>

                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};
export default GoalsActivities;