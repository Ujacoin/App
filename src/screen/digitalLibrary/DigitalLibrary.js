import React, { useCallback,useEffect, useState } from 'react';
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
import { Color, fontFamily, fontSize } from '../../common/Common';
import { ExcusiveResource, LatestReplays } from '../../components/AllAppFlatList';
import { Image } from 'react-native';
import { LibgetDigitalLibData } from '../../lib/DigitalLib';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DigitalLibrary() {

    const navigation = useNavigation();
    useEffect(() => {
        getDigitalLib();
    }, [])
    const getDigitalLib = async()=>{
        const value = await AsyncStorage.getItem('authData')
        let res=await LibgetDigitalLibData("all", 0, "", "");
        console.log("res.result",res.status)
        if(res?.status === 200){
            console.log("res.result",res.data.result)
            if(res.data.result.length>0)
                setExcusiveReourceData(res.data.result)
        }
    }
    const [ExcusiveReourceData,setExcusiveReourceData] = useState([
        {
            digitalLibraryId: '1',
            featureImage: require('../../assets/img/dummyimg/d1.png'),
            categoryName: "---",
            title: "---",
            description: "Loading .."
        },
        // {
        //     digitalLibraryId: '2',
        //     createByProfile: require('../../assets/img/dummyimg/d2.png'),
        //     categoryName: "Sales",
        //     title: "How Digital Wallet Works",
        //     description: "Happy Friday, y’all! Check out this mentorship .."
        // },
        // {
        //     digitalLibraryId: '3',
        //     createByProfile: require('../../assets/img/dummyimg/d1.png'),
        //     categoryName: "Sales",
        //     title: "How wallet is safe",
        //     description: "Happy Friday, y’all! Check out this mentorship .."
        // },
    ]);
    const GroupLeaddata = [

        {
            selected: true,
            FilterName: "News",
        },
        {
            selected: false,
            FilterName: "Student Loans",
        },
        {
            selected: false,
            FilterName: "Education",
        },

        {
            selected: false,
            FilterName: "Grants",
        },
        {
            selected: false,
            FilterName: "Community",
        },
        {
            selected: false,
            FilterName: "More",
        },

    ];

    const ReplaysData = [
        {
            id: '1',
            ReplaysImage: require('../../assets/img/dummyimg/3.png'),
            ReplaysTitle: "How long will it take you to reach your goal?",
            Replaysdec: "By Isaiah Banston",
        },
        {
            id: '2',
            ReplaysImage: require('../../assets/img/dummyimg/4.jpg'),
            ReplaysTitle: "Finding a Side Hustle",
            Replaysdec: "By Clara Sanchez",
        }, {
            id: '3',
            ReplaysImage: require('../../assets/img/dummyimg/5.jpg'),
            ReplaysTitle: "How long will it take you to reach your goal?",
            Replaysdec: "By Isaiah Banston",
        },
        {
            id: '4',
            ReplaysImage: require('../../assets/img/dummyimg/6.jpg'),
            ReplaysTitle: "How long will it take you to reach your goal?",
            Replaysdec: "By Isaiah Banston",
        }
    ];
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
                    title='Digital Library'
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
                    <Text style={styles.seealltext}>See all</Text>
                </View>
                <Space spacenumber={10} />
                <ScrollView
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {ExcusiveReourceData.map((item, i) => {
                        return (
                            <ExcusiveResource {...item} key={i} />
                        )
                    })}
                </ScrollView>
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
                                    paddingVertical: 4,
                                    backgroundColor: Color.white,
                                    borderWidth: 1,
                                    borderColor: Color.themeprimary,
                                    borderRadius: 100,
                                    paddingHorizontal: 15,
                                    marginRight: 10,
                                    marginBottom: 10,
                                }}
                            >
                                <Text style={{
                                    fontSize: fontSize.font12,
                                    fontFamily: fontFamily.n500,
                                    color: Color.themeprimary,
                                }}>
                                    {props.FilterName}
                                </Text>
                            </TouchableOpacity>)
                    })}
                </View>
                <Space spacenumber={10} />
                <Text
                    style={{
                        paddingHorizontal: 20,
                        fontSize: fontSize.font20,
                        fontFamily: fontFamily.n700,
                        color: Color.black,
                    }}>
                    Featured Today
                </Text>
                <Space spacenumber={5} />
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
                        source={require('../../assets/img/dummyimg/video.png')}
                        resizeMode='cover'
                    />
                    <View style={{ padding: 15, flex: 1 }}>
                        <Text
                            numberOfLines={2}
                            style={{
                                fontSize: fontSize.font16,
                                fontFamily: fontFamily.n600,
                                color: Color.black,
                            }}>
                            Getting out of Student Loan Debt
                        </Text>
                        <Space spacenumber={2} />
                        {/* <Text
                            numberOfLines={2}
                            style={{
                                fontSize: fontSize.font12,
                                fontFamily: fontFamily.n400,
                                color: Color.black,
                            }}>
                            By Jennifer Brown
                        </Text> */}
                    </View>

                </View>
                <Space spacenumber={10} />
                {ReplaysData.map((item, i) => {
                    return (
                        <LatestReplays {...item} key={i} />
                    )
                })}
                <Space spacenumber={10} />
            </ScrollView>

        </SafeAreaView>

    );
}

export default DigitalLibrary;