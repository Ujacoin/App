import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, fulllogo, left, loginimg, logo, message, Profilepic, right, search_icon, start, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { AppTextInputSearch, MessageList, OnlinePeopleList, SettingsItem, Space } from '../common/commoncomponents';
import { windowHeight } from '../common/responsive';
import { IconButton, PrimaryButton } from '../components/button/primarybutton';
import { useState } from 'react';
import { useCallback } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Buttonstyles } from '../components/button/Styles';
import { COLORS } from '../common/commonitem';

const Message = ({ navigation }) => {
    const [search, setSearch] = useState("");
    const OnlinePeopleData = [
        {
            id: "1",
            ImageUrl: require('../assets/images/online_people.png')
        },
        {
            id: "2",
            ImageUrl: require('../assets/images/online_people1.png')
        },
        {
            id: "3",
            ImageUrl: require('../assets/images/online_people2.png')
        },
        {
            id: "4",
            ImageUrl: require('../assets/images/online_people3.png')
        },
        {
            id: "5",
            ImageUrl: require('../assets/images/online_people4.png')
        }
    ];
    const MessageListData = [
        {
            id: "1",
            ImageUrl: require('../assets/images/online_people.png'),
            Name: "Monica Abrahams",
            LastMessage: "Yes I can’t wait too !es I can’t wait too !es I can’t wait too !",
            Time: "09:12",
            TotalUnreadMessage: "2"
        },
        {
            id: "2",
            ImageUrl: require('../assets/images/online_people1.png'),
            Name: "Monica Abrahams",
            LastMessage: "Yes I can’t wait too !",
            Time: "09:12",
            TotalUnreadMessage: "2"
        },
        {
            id: "3",
            ImageUrl: require('../assets/images/online_people2.png'),
            Name: "Monica Abrahams",
            LastMessage: "Yes I can’t wait too !",
            Time: "09:12",
            TotalUnreadMessage: "0"
        },
        {
            id: "1",
            ImageUrl: require('../assets/images/online_people3.png'),
            Name: "Monica Abrahams",
            LastMessage: "Yes I can’t wait too !",
            Time: "09:12",
            TotalUnreadMessage: "0"
        },
        {
            id: "1",
            ImageUrl: require('../assets/images/online_people4.png'),
            Name: "Monica Abrahams",
            LastMessage: "Yes I can’t wait too !",
            Time: "09:12",
            TotalUnreadMessage: "0"
        },
    ];
    const MessageListRander = useCallback(({ item }) => {
        return (
            <View>
                <MessageList {...item} onPress={() =>{navigation.navigate('MessageChatScreen')}}/>
            </View>
        );
    }, []);
    const OnlineListRander = useCallback(({ item }) => {
        return (
            <View>
                <OnlinePeopleList {...item} />
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
              addlogo
              iconRight='dots-three-vertical'
              userimage={userimage}
              onRightPress={() => {
                  navigation.navigate('CustomDrawerContent');
              }}/>
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
                                height: 270,
                                // paddingHorizontal: 30,
                                paddingVertical: 20,
                            }}
                        >
                            <View style={{ paddingHorizontal: 30, }}>
                                <Text style={allcommonstyle.pageTitle}>Message</Text>
                                {/* <Space spacenumber={2} />
                                <Text style={allcommonstyle.pagedesc} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text> */}
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

                            </View>
                            <FlatList
                                contentContainerStyle={{ paddingHorizontal: 30 }}
                                data={OnlinePeopleData}
                                renderItem={OnlineListRander}
                                keyExtractor={keyExtractor}
                                horizontal={true}
                            />
                        </LinearGradient>
                    </View>

                    <View style={[{ flex: 3, }]}>

                        <View style={[allcommonstyle.messagewhitecontainefr, { top: -30 }]}>

                            <FlatList
                                data={MessageListData}
                                renderItem={MessageListRander}
                                keyExtractor={keyExtractor}
                            // horizontal={true}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <TouchableOpacity
                        style={[Buttonstyles.btncontainer,
                        {
                            backgroundColor: COLORS.blue,
                            width: "100%",
                            marginLeft: 40,
                            marginRight: 40
                        }]}
                    >
                        <View style={allcommonstyle.rightSettingsItem}>
                            <Image
                                source={require("../assets/images/icons/sendmessage.png")}
                                style={{
                                    height: 20,
                                    width: 22
                                }}
                            />
                            <Text style={[Buttonstyles.btntextcon, { marginLeft: 10 }]}>Send Message</Text>
                        </View>
                    </TouchableOpacity>
                    {/* </View> */}
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};
export default Message;