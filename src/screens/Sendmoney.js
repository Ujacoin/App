import React, { useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, fulllogo, left, loginimg, logo, message, Profilepic, right, search_icon, start, user1, user2, user3, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { ResentcontactList, Contactlist, Space } from '../common/commoncomponents';
import { windowHeight } from '../common/responsive';
import { IconButton, PrimaryButton } from '../components/button/primarybutton';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useCallback } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Buttonstyles } from '../components/button/Styles';
import { COLORS } from '../common/commonitem';
import { Bottomtabdesign } from '../components/Bottomtab.js/Bottomtabdesign';

const Sendmoney = ({ navigation }) => {
    const [search, setSearch] = useState("");
    const Resentcontactdata = [
        {
            id: "1",
            ImageUrl: user1,
            firstname: 'Monica',
            number: '+091234457',
        },
        {
            id: "2",
            ImageUrl: user2,
            firstname: 'Monica',
            number: '+091234457',
        },
        {
            id: "3",
            ImageUrl: user3,
            firstname: 'Monica',
            number: '+091234457',
        },
        {
            id: "4",
            ImageUrl: user1,
            firstname: 'Monica',
            number: '+091234457',
        },
        {
            id: "5",
            ImageUrl: user3,
            firstname: 'Monica',
            number: '+091234457',
        }
    ];
    const Contactlistdata = [
        {
            id: "1",
            ImageUrl: user1,
            firstname: 'Monica',
            number: '+091234457',
        },
        {
            id: "2",
            ImageUrl: user2,
            firstname: 'Monica',
            number: '+091234457',
        },
        {
            id: "3",
            ImageUrl: user3,
            firstname: 'Monica',
            number: '+091234457',
        },
        {
            id: "4",
            ImageUrl: user2,
            firstname: 'Monica',
            number: '+091234457',
        },
        {
            id: "5",
            ImageUrl: user2,
            firstname: 'Monica',
            number: '+091234457',
        }
    ];
    const Contactalllist = useCallback(({ item }) => {
        return (
            <View>
                <Contactlist {...item} onPress={() => { navigation.navigate('MessageChatScreen') }} />
            </View>
        );
    }, []);
    const resentcontact = useCallback(({ item }) => {
        return (
            <View>
                <ResentcontactList {...item} />
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
            {/* Logo */}
            <Space spacenumber={15} />
            <View style={allcommonstyle.backheader}>
                <TouchableOpacity style={allcommonstyle.backbuttoncontaiber} onPress={() => { navigation.goBack() }}>
                    <Ionicons name="ios-chevron-back-outline" size={25} color={COLORS.black} />
                </TouchableOpacity>
                <Text style={allcommonstyle.backheadertext}>Send $450.00</Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ marginHorizontal: 20, paddingVertical: 40 }}>
                    <TextInput
                        style={allcommonstyle.simpleinput}
                        placeholder="To Recipient name or Email*"
                    ></TextInput>
                    <TextInput
                        style={allcommonstyle.simpleinput}
                        placeholder="Add note"
                    ></TextInput>
                    <Space spacenumber={10} />
                    <Text style={allcommonstyle.backheadertext}>Your bank details</Text>
                    <Space spacenumber={10} />
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={Resentcontactdata}
                        renderItem={resentcontact}
                        keyExtractor={keyExtractor}
                        horizontal={true}
                    />
                    <Space spacenumber={10} />
                    <Text style={allcommonstyle.backheadertext}>All contacts</Text>
                    <Space spacenumber={10} />
                    <FlatList
                        data={Contactlistdata}
                        renderItem={Contactalllist}
                        keyExtractor={keyExtractor}
                    // horizontal={true}
                    />
                </View>

            </ScrollView>
            {/* <Bottomtabdesign /> */}
        </SafeAreaView>
    );
};
export default Sendmoney;