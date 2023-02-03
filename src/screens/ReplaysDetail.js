import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StatusBar, ImageBackground, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, emptyimage, fulllogo, headerback, left, loginimg, logo, message, Profilepic, right, search_icon, start, user1, user2, user3, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { AppTextInputSearch, ExcusiveResource, LatestReplays, Memberdata, Replaysitem, SearchFilter, Space } from '../common/commoncomponents';
import { FlatList } from 'react-native-gesture-handler';
import { useCallback } from 'react';
import { COLORS, fontFamily, fontsize } from '../common/commonitem';

const ReplaysDetail = ({ navigation }) => {
    const replaysitemData = [

        {
            id: 1,
            image: user1,
            name: 'Shequita Hall',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
        {
            id: 2,
            image: emptyimage,
            name: 'Ebony Lewis',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
        {
            id: 3,
            image: user2,
            name: 'Jasmine Walker',
            shortDesc:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        },
        {
            id: 4,
            image: user3,
            name: 'Lisa Ann',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
        {
            id: 5,
            image: user2,
            name: 'Tiana King',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ',
        },
        {
            id: 6,
            image: emptyimage,
            name: 'Jada Davis',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship',
        },
    ];


    const replaysitem = useCallback(({ item }) => {
        return (
            <Replaysitem {...item} />
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
                title='Back'
                iconleft={headerback}
                onPressLeft={() => {
                    navigation.goBack();
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
                            }}
                        >
                            {/* <View style={{ paddingHorizontal: 30, }}>
                                <Text style={allcommonstyle.pageTitle}>Replays</Text>
                                <Space spacenumber={2} />
                                <Text style={allcommonstyle.pagedesc} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                <Space spacenumber={10} />
                            </View> */}

                        </LinearGradient>
                    </View>

                    <View style={[{ flex: 3, }]}>
                        <View style={[{ paddingHorizontal: 20, top: -50 }]}>
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
                                    source={user1}
                                    resizeMode='cover'
                                />
                            </View>
                            <Space spacenumber={15} />
                            <Text  style={{
                                fontSize: fontsize.font20,
                                fontFamily: fontFamily.semiBold,
                                color: "#050A26",
                                marginTop: 5
                            }}>
                                Shequita Hall
                            </Text>
                            <Space spacenumber={5} />
                            <Text style={{
                                fontSize: fontsize.font12,
                                fontFamily: fontFamily.light,
                                color: COLORS.black,
                                lineHeight: fontsize.font16
                            }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Text>
                        </View>
                       
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};
export default ReplaysDetail;
const styles = StyleSheet.create({

})