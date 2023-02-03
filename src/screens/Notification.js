import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar, FlatList, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, fulllogo, left, loginimg, logo, message, Profilepic, right, start, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { NotificationView, Space } from '../common/commoncomponents';

const Notification = ({ navigation }) => {


    const DATA = [
        {
            text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
            time: "1 hour, 12 minutes ago",
        },
        {
            text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
            time: "1 hour, 12 minutes ago",
        },

        {
            text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
            time: "1 hour, 12 minutes ago",
        },

        {
            text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
            time: "1 hour, 12 minutes ago",
        },



    ];
    /*** DESIGN HERE ***/
    return (
        <SafeAreaView style={allcommonstyle.safeAreaViewcontainer}>
            <MyStatusBar backgroundColor="black" barStyle={"light-content"} />
            <Header title='Notification' iconleft={left} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <NotificationView {...item} />
                    )}
                />

            </ScrollView>

        </SafeAreaView>
    );
};
export default Notification;