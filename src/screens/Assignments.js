import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, fulllogo, left, loginimg, logo, menu, message, Profilepic, right, search_icon, start, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { Completedgoal, Goaldata, Assignmentsdataitem, Space } from '../common/commoncomponents';
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

const Assignments = ({ navigation }) => {

    const assignmentsdata = [

        {
            id: 1,
            name: 'Submit Application for CERF Grant',
            type:
                'Group',
            date: 'No Due date',
        },
        {
            id: 1,
            name: 'Submit Application for CERF Grant',
            type:
                'Individual',
            date: 'No Due date',
        },
        {
            id: 1,
            name: 'Submit Application for CERF Grant',
            type:
                'Individual',
            date: 'No Due date',
        },
        {
            id: 1,
            name: 'Submit Application for CERF Grant',
            type:
                'Group',
            date: 'No Due date',
        },
        {
            id: 1,
            name: 'Submit Application for CERF Grant',
            type:
                'Individual',
            date: 'No Due date',
        },
        {
            id: 1,
            name: 'Submit Application for CERF Grant',
            type:
                'Individual',
            date: 'No Due date',
        },

    ];
    const assignmentsdataitem = useCallback(({ item }) => {
        return (
            <View>
                <Assignmentsdataitem {...item} />
            </View>
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
                                height: 120,
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
                                <Text style={allcommonstyle.pageTitle}>Assignments</Text>

                            </View>
                        </LinearGradient>
                    </View>

                    <View style={[{ flex: 3, }]}>
                        <View style={[allcommonstyle.formcontaine]}>
                            <Space spacenumber={5} />
                            <FlatList
                                data={assignmentsdata}
                                renderItem={assignmentsdataitem}
                                keyExtractor={keyExtractor}
                            />
                        </View>


                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};
export default Assignments;