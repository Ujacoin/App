import React, { useState,useEffect } from 'react';
import { Alert, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
import { ExcusiveResource, LatestReplays } from '../../components/AllAppFlatList';
import { Image } from 'react-native';
import { LibgetGoupList } from '../../lib/Group';

function Groups() {

    const navigation = useNavigation();
    useEffect(() => {
        getGroups(0,"");    
    }, [])
    const getGroups = async(category_id, Searchtext)=>{
        let res=await LibgetGoupList(category_id, Searchtext);
        console.log("res",res)
        if(res?.status === 200){
            console.log("res.result",res.data.result)
            setgroupdatalist(res.data.result)
        }
    }

    const [groupdatalist, setgroupdatalist] = useState([
        {
            id: 1,
            groupIconPath: "",
            categoryName: '---',
            groupName: '---',
            sort: '---',
            description:
                'Loading ...',
        },
        // {
        //     id: 1,
        //     groupIconPath: themeImages.group1,
        //     categoryName: 'Lorem Ipsum',
        //     groupName: 'Saving 1o1',
        //     sort: 'Dummy text',
        //     description:
        //         'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        // },
        // {
        //     id: 1,
        //     groupIconPath: themeImages.group2,
        //     categoryName: 'Lorem Ipsum',
        //     groupName: 'Secure the Bag',
        //     sort: 'Dummy text',
        //     description:
        //         'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        // },
        // {
        //     id: 1,
        //     groupIconPath: themeImages.group3,
        //     categoryName: 'Lorem Ipsum',
        //     groupName: 'Securing your coin and your side Hustle',
        //     sort: 'Dummy text',
        //     description:
        //         'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        // },
        // {
        //     id: 1,
        //     groupIconPath: themeImages.group4,
        //     categoryName: 'Lorem Ipsum',
        //     groupName: 'Road to your best life',
        //     sort: 'Dummy text',
        //     description:
        //         'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        // },
        // {
        //     id: 1,
        //     groupIconPath: themeImages.group5,
        //     categoryName: 'Lorem Ipsum',
        //     groupName: 'Securing Your Coin and a Sidehustle',
        //     sort: 'Dummy text',
        //     description:
        //         'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        // },
        // {
        //     id: 1,
        //     groupIconPath: themeImages.group1,
        //     categoryName: 'Lorem Ipsum',
        //     groupName: 'Credit aint Free',
        //     sort: 'Dummy text',
        //     description:
        //         'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        // },
        // {
        //     id: 1,
        //     groupIconPath: themeImages.group2,
        //     categoryName: 'Lorem Ipsum',
        //     groupName: 'Investments: Road to Your Best Life',
        //     sort: 'Dummy text',
        //     description:
        //         'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        // },

    ]);
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
                    title='Group'
                    onLeftpress={() => { navigation.goBack(); }}
                    onRightpress={() => { navigation.navigate('Menu'); }}
                />
            </View>
            <ScrollView >
                <Space spacenumber={20} />
                <View style={styles.input}>
                    <Ionicons name="search" size={25} color={Color.white} />
                    <TextInput
                        placeholderTextColor={Color.white}
                        placeholder="Search a topic or keyword"
                    />
                </View>
                <Space spacenumber={30} />
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30,
                }}>
                    <Text style={styles.title}>Let's Get Started!</Text>
                </View>
                <Space spacenumber={10} />
                <View style={[{ paddingHorizontal: 20, }]}>
                    {groupdatalist.map((props) => {
                        return (

                            <TouchableOpacity
                                onPress={() => { navigation.navigate('Groupdetail',props.groupId) }}
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    ...boxShadow,
                                    marginBottom: 10,
                                    overflow: 'hidden',
                                    borderRadius: 10,

                                }}>
                                <View>
                                    <Image source={props.groupIconPath} style={{ height: 150, width: '100%' }} />
                                </View>
                                <View style={{
                                    marginLeft: 3,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    paddingVertical: 15,

                                }}>
                                    <Text numberOfLines={1} style={{
                                        fontSize: fontSize.font16,
                                        fontFamily: fontFamily.n600,
                                        color: Color.themeprimary,
                                        marginTop: 5
                                    }}>
                                        {props.groupName}
                                    </Text>
                                    <Space spacenumber={3} />
                                    <Text numberOfLines={2} style={{
                                        fontSize: fontSize.font12,
                                        fontFamily: fontFamily.n500,
                                        color: Color.black,
                                    }}>
                                        {props.description}
                                    </Text>
                                    {/* <Space spacenumber={5} />
                                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                                        <Image source={themeImages.Profile} style={{ height: 30, width: 30, borderRadius: 100, }} />
                                        <Image source={themeImages.Profile} style={{ height: 30, width: 30, borderRadius: 100, left: -15 }} />
                                        <Image source={themeImages.Profile} style={{ height: 30, width: 30, borderRadius: 100, left: -30 }} />
                                    </View> */}
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <Space spacenumber={10} />

            </ScrollView>

        </SafeAreaView >

    );
}

export default Groups;