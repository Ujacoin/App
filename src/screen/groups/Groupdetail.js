import React, { useState, useEffect } from 'react';
import { Alert, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// import Image from 'react-native-fast-image'
import { ThemeInput } from '../../components/ThemeInput';
import { Space } from '../../components/Space';
import { themeImages } from '../../data/imgedata';
import { globalstyle } from '../../style/Style';
import { registerstyle, styles } from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/header/Header';
import { boxShadow, Color, fontFamily, fontSize } from '../../common/Common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, Checkbox } from "react-native-paper";
import { Image } from 'react-native';
import { LibgetGoupDetails } from '../../lib/Group';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DigitalLibraryitem, Discussionitem, Groupmemberitem } from '../../components/AllAppFlatList';

function Groupdetail() {

    const navigation = useNavigation();
    const paramdata = useRoute();
    useEffect(() => {
        getGroupDetails();    
    }, [])
    const getGroupDetails = async () => {
        const value = await AsyncStorage.getItem('authData')
        let res = await LibgetGoupDetails(JSON.parse(value).memberId, paramdata.params);
        console.log("res.result", res.status)
        if (res?.status === 200) {
            console.log("res.result", res.data.result)
            setGroupDetails(res.data.result)
            // setResourcesdata(res.data.result.lstGroupAttachmentViewModel)
            // setMemebersData(res.data.result.lstGroupJoinMembers)
        }
    }
    const [groupDetails, setGroupDetails] = React.useState({
        id: 1,
        groupIconPath: themeImages.group1,
        categoryName: 'Lorem Ipsum',
        groupName: 'Saving 1o1',
        date: 'AUG 13 2020',
        description:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
    });

    const Groupmember = [

        {
            id: 1,
            image: themeImages.user1,
            name: 'Shequita Hall',
        },
        {
            id: 2,
            image: themeImages.user2,
            name: 'Ebony Lewis',
        },
        {
            id: 3,
            image: themeImages.user3,
            name: 'Jasmine Walker',
        },
        {
            id: 4,
            image: themeImages.user4,
            name: 'Lisa Ann',
        },
        {
            id: 5,
            image: themeImages.user5,
            name: 'Tiana King',
        },
        {
            id: 6,
            image: themeImages.user6,
            name: 'Jada Davis',
        },
    ];

    const DigitalLibraryData = [
        {
            id: '1',
            image: require('../../assets/img/dummyimg/d1.png'),
            category: "Sales",
            title: "Money Management",
            shortDesc: "Happy Friday, y’all! Check out this mentorship .."
        },
        {
            id: '2',
            image: require('../../assets/img/dummyimg/d2.png'),
            category: "Sales",
            title: "How Digital Wallet Works",
            shortDesc: "Happy Friday, y’all! Check out this mentorship .."
        },
        {
            id: '3',
            image: require('../../assets/img/dummyimg/d1.png'),
            category: "Sales",
            title: "How wallet is safe",
            shortDesc: "Happy Friday, y’all! Check out this mentorship .."
        },
    ];
    const Discussiondata = [
        {
            id: 1,
            image: themeImages.Profile,
            category: 'Same industry',
            name: 'What are your goals for the class?',
            short: 'Skinfulness',
            shortDesc:
                'Shequita Hall,Ebony Lewis,Jasmine Walker...',
        },
        {
            id: 2,
            image: themeImages.Profile,
            category: 'Same industry',
            name: 'What are your goals for the class?',
            short: 'Skinfulness',
            shortDesc:
                'Shequita Hall,Ebony Lewis,Jasmine Walker...',
        },
        {
            id: 3,
            image: themeImages.Profile,
            category: 'Same industry',
            name: 'What are your goals for the class?',
            short: 'Skinfulness',
            shortDesc:
                'Shequita Hall,Ebony Lewis,Jasmine Walker...',
        },
    ]

    return (
        <SafeAreaView style={[globalstyle.safeAreaView, { backgroundColor: Color.white }]}>

            <Image
                source={themeImages.digitalbg}
                style={{
                    height: 360,
                    width: '100%',
                    position: 'absolute',
                    alignSelf: 'center',
                    top: 0,
                    zIndex: -9999999,
                }} />
            <View style={globalstyle.paddingView}>
                <Header
                    title={groupDetails.groupName}
                    onLeftpress={() => { navigation.goBack(); }}
                    onRightpress={() => { navigation.navigate('Menu'); }}
                />
            </View>
            <ScrollView >
                <Space spacenumber={20} />


                <View style={[{ paddingHorizontal: 20 }]}>
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
                                backgroundColor: Color.themeprimary,
                                position: "absolute",
                                borderRadius: 10,
                            }}
                            source={groupDetails.groupIconPath}
                            resizeMode='cover'
                        />
                    </View>
                    <Space spacenumber={15} />
                    <View style={globalstyle.row}>
                        <Text
                            numberOfLines={1}
                            style={globalstyle.dectext}
                        >{groupDetails.categoryName}</Text>
                        <Text
                            numberOfLines={1}
                            style={globalstyle.detailtitle}
                        >{groupDetails.groupName}</Text>
                        <Space spacenumber={5} />
                        <TouchableOpacity
                            style={{
                                borderRadius: 5,
                                backgroundColor: Color.themeprimary,
                                paddingVertical: 10,
                                width: 90,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{
                                fontSize: fontSize.font12,
                                fontFamily: fontFamily.n600,
                                color: Color.white,
                            }}>Joined</Text>
                        </TouchableOpacity>
                    </View>
                    <Space spacenumber={10} />
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <MaterialCommunityIcons name="calendar-blank" color={Color.primaryyellow} />
                        <Text style={{
                            marginLeft: 6,
                            fontSize: fontSize.font14,
                            fontFamily: fontFamily.n600,
                            color: "#050A26",
                        }}>
                            {groupDetails.date}
                        </Text>
                    </View>
                    <Space spacenumber={5} />
                    <Text style={globalstyle.dectext}>
                        {groupDetails.description}
                    </Text>

                    <View>
                        <Space spacenumber={15} />
                        <View style={globalstyle.row}>
                            <Text style={globalstyle.title}>
                                Resources
                            </Text>
                        </View>
                        <Space spacenumber={5} />
                        <View>
                            <ScrollView
                                contentContainerStyle={{ paddingRight: 20 }}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                {DigitalLibraryData.map((item, i) => {
                                    return (
                                        <DigitalLibraryitem {...item} key={i} />
                                    )
                                })}
                            </ScrollView>
                        </View>

                    </View>
                    <Space spacenumber={10} />
                    <View>
                        <View style={globalstyle.row}>
                            <Text style={globalstyle.title}>
                                Discussion
                            </Text>

                        </View>
                        <Space spacenumber={5} />
                        <View>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {Discussiondata.map((item, i) => {
                                    return (
                                        <Discussionitem {...item} key={i} />
                                    )
                                })}
                            </ScrollView>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate('Discussion') }} style={[globalstyle.texthomebutton, { justifyContent: 'flex-end' }]}>
                            <Text style={globalstyle.texthomebuttontext}>Open</Text>
                            <Space spacenumber={4} />
                            <MaterialCommunityIcons name="arrow-right" size={20} color={Color.primaryyellow} />
                        </TouchableOpacity>
                    </View>
                    <Space spacenumber={10} />
                    <View>


                        <Text style={globalstyle.title}>
                            Group Members
                        </Text>
                        <Space spacenumber={5} />
                        <View>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {Groupmember.map((item, i) => {
                                    return (
                                        <Groupmemberitem {...item} key={i} />
                                    )
                                })}
                            </ScrollView>
                        </View>

                    </View>
                </View>
                <Space spacenumber={10} />

            </ScrollView>

        </SafeAreaView >

    );
}

export default Groupdetail;