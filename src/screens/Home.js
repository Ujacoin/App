//react native Components
import React, { useEffect, useState, useCallback } from "react";
import {
    ScrollView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Modal,
    Alert,
    StyleSheet,
    FlatList,
    Image,
    ImageBackground,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import PhotoGrid from "react-native-thumbnail-grid";
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// external Colors
import { emptyimage, eye, fulllogo, homebg, left, loginimg, logo, group1, group2, group3, group4, group5, user1, user2, user3, userimage, users, homebannerbg, homesecondscreen, homeicon1, homeicon2, homeicon3, homecoming, homeujabg, uja1, uja2, uja3, uja4, prom, graduations, springBreak } from "../data/Imagedata";
import allcommonstyle from "../styles/allcommonstyle";
import { boxShadow, COLORS, fontFamily, fontsize } from "../common/commonitem";
import { Matchesdata, Homegoaldata, Space, Serviceprovidersitem, Groupdata, Fundingdata, Librarydata, Memberdata, GroupListHorizontal, EventListdata } from "../common/commoncomponents";
import Loader from "../components/Loader/Loader";
import { Header } from "../components/header/Header";
import { color } from "react-native-reanimated";

//Home Screen
const Home = ({ navigation }) => {

    //Internal Methods

    const [visibleLoader, setvisibleLoader] = useState(false);
    const [selection, setSelection] = useState(1);
    const [showImage, setshowImage] = useState([]);
    const Meetingsdata = [

        {
            id: 1,
            image: homecoming,
            name: 'High account fees',
        },
        {
            id: 2,
            image: homeicon2,
            name: 'Too hard to meet minimum balance requirements',
        },
        {
            id: 3,
            image: homeicon3,
            name: 'Personal identification or credit issues',
        },
        {
            id: 4,
            image: homeicon2,
            name: 'Privacy concerns',
        },
        {
            id: 5,
            image: homeicon3,
            name: 'Mistrust of banks',
        },

    ];
    const images = [
        'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
        'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_960_720.jpg',
        'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg'
    ]
    const ExcusiveReourceData = [
        {
            id: 1,
            image: user1,
            category: 'Same industry',
            name: 'Shequita Hall',
            short: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
        {
            id: 2,
            image: emptyimage,
            category: 'Same industry',
            name: 'Ebony Lewis',
            short: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
        {
            id: 3,
            image: user2,
            category: 'Same industry',
            name: 'Jasmine Walker',
            short: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
    ];
    const memberdata = useCallback(({ item }) => {
        return (
            <Memberdata {...item} onPress={() => { navigation.navigate('MemberProfile') }} />
        );
    }, []);
    
    const keyExtractor = useCallback((item) => {
        return item.id;
    }, []);
    
    const GroupList = useCallback(({ item }) => {
        return (
            <GroupListHorizontal {...item} onPress={() => { navigation.navigate('MemberProfile') }} />
        );
    }, []);
    const groupdatalist = [
        {
            id: 1,
            image: group1,
            industry: 'Lorem Ipsum',
            name: 'Saving 1o1',
            sort: 'Dummy text',
            shortDesc:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        },
        {
            id: 1,
            image: group2,
            industry: 'Lorem Ipsum',
            name: 'Secure the Bag',
            sort: 'Dummy text',
            shortDesc:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        },
        {
            id: 1,
            image: group3,
            industry: 'Lorem Ipsum',
            name: 'Securing your coin and your side Hustle',
            sort: 'Dummy text',
            shortDesc:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        },
        {
            id: 1,
            image: group4,
            industry: 'Lorem Ipsum',
            name: 'Road to your best life',
            sort: 'Dummy text',
            shortDesc:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        },
        {
            id: 1,
            image: group5,
            industry: 'Lorem Ipsum',
            name: 'Securing Your Coin and a Sidehustle',
            sort: 'Dummy text',
            shortDesc:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        },
        {
            id: 1,
            image: group1,
            industry: 'Lorem Ipsum',
            name: 'Credit aint Free',
            sort: 'Dummy text',
            shortDesc:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        },
        {
            id: 1,
            image: group2,
            industry: 'Lorem Ipsum',
            name: 'Investments: Road to Your Best Life',
            sort: 'Dummy text',
            shortDesc:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
        },

    ];
    const eventdataData = [
        {
            id: 1,
            image: homecoming,
            industry: 'Marketing and Sales',
            free:true,
            name: 'Homecoming',
            sort: 'WED, AUG 12, 11:00 am',
            shortDesc:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, ',
        },
        {
            id: 2,
            image: prom,
            industry: 'Same industry',
            name: 'Prom',
            free:true,
            sort: 'WED, AUG 12, 11:00 am',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 3,
            image: graduations,
            industry: 'Same industry',
            name: 'Graduations',
            free:true,
            sort: 'WED, AUG 12, 11:00 am',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 4,
            image: springBreak,
            industry: 'Same industry',
            name: 'Uja Spring Break',
            paid:true,
            sort: 'WED, AUG 12, 11:00 am',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        
    ];

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

        {
            selected: false,
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

    const eventdataList = useCallback(({ item }) => {
        return (
            <EventListdata {...item} onPress={() => { navigation.navigate('Eventdetail') }} />
        );
    }, []);
    return (
        <LinearGradient
            colors={["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"]}
            locations={[0.1, 0.4, 1, 1]}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
        >
            <Loader visible={visibleLoader} />
            <MyStatusBar backgroundColor="#FFFFFF" barStyle={"dark-content"} />
            <Header
                addlogo
                // iconleft={menu}
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
                        <ImageBackground source={homebannerbg} resizeMode="cover" style={[allcommonstyle.paddingmainsection, { justifyContent: 'center' }]}>
                            <Text style={allcommonstyle.homepageTitle}><Text style={{ color: '#02e1ee', fontSize: 33 }}>Invest in </Text> <Text style={{ fontSize: 30 }}>Yourself</Text>, <Text style={{ color: '#b27bf2' }}>Save for</Text> your Future,<Text style={{ color: '#02e1ee', }}> and Build </Text>Generational Wealth</Text>
                            <Image source={homesecondscreen} style={{ height: 150, alignSelf: 'flex-start', width: 150 }} resizeMode='contain' />

                        </ImageBackground>
                        <View style={allcommonstyle.accountcontainer}>
                            <Text style={allcommonstyle.accsectiontitle}>UJAMAA account holders will be able to</Text>
                        </View>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 20 }}>
                            <View style={allcommonstyle.btnGroup}>

                                <TouchableOpacity style={[allcommonstyle.btn, selection === 1 ? { backgroundColor: "#401d62" } : null]} onPress={() => setSelection(1)}>
                                    <View
                                        style={{
                                            width: 100,
                                            height: 100,
                                            marginBottom: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Image
                                            style={{
                                                width: 60,
                                                height: 60,
                                                tintColor: selection === 1 ? '#fff' : '#401d62',
                                            }}
                                            source={homeicon1}
                                            resizeMode='cover'
                                        />


                                    </View>
                                    <View style={{
                                    }}>
                                        <Text style={{
                                            fontSize: fontsize.font11,
                                            fontFamily: fontFamily.regular,
                                            color: selection === 1 ? '#fff' : '#401d62',
                                            textAlign: 'center',
                                        }}>
                                            Have their cash deposits 100% protected and insured, accessible 24/7.
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[allcommonstyle.btn, selection === 2 ? { backgroundColor: "#401d62" } : null]} onPress={() => setSelection(2)}>
                                    <View
                                        style={{
                                            width: 100,
                                            height: 100,
                                            marginBottom: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Image
                                            style={{
                                                width: 60,
                                                height: 60,
                                                tintColor: selection === 2 ? '#fff' : '#401d62',
                                            }}
                                            source={homeicon2}
                                            resizeMode='cover'
                                        />


                                    </View>
                                    <View style={{
                                    }}>
                                        <Text style={{
                                            fontSize: fontsize.font11,
                                            fontFamily: fontFamily.regular,
                                            color: selection === 2 ? '#fff' : '#401d62',
                                            textAlign: 'center',
                                        }}>
                                            Pay bills, transfer money, send to friends & family, and receive your paycheck in stable digital currency and in cryptocurrency immediately available.
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[allcommonstyle.btn, selection === 3 ? { backgroundColor: "#401d62" } : null]} onPress={() => setSelection(3)}>
                                    <View
                                        style={{
                                            width: 100,
                                            height: 100,
                                            marginBottom: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Image
                                            style={{
                                                width: 60,
                                                height: 60,
                                                tintColor: selection === 3 ? '#fff' : '#401d62',
                                            }}
                                            source={homeicon3}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <View style={{
                                    }}>
                                        <Text style={{
                                            fontSize: fontsize.font11,
                                            fontFamily: fontFamily.regular,
                                            color: selection === 3 ? '#fff' : '#401d62',
                                            textAlign: 'center',
                                        }}>
                                            Lend, invest, and trade stable digital currency and crypto currency, to earn dividends and interest.
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                        <Space spacenumber={15} />
                        <View style={allcommonstyle.accountcontainer}>
                            <Text style={allcommonstyle.topsmallheader}>Memebers</Text>
                            <Text style={allcommonstyle.accsectiontitle}>OUR Recent joined members</Text>
                            <Text style={allcommonstyle.accsectionsubtetx}>Lorem</Text>
                        </View>

                        <FlatList
                                data={ExcusiveReourceData}
                                renderItem={memberdata}
                                keyExtractor={keyExtractor}
                                horizontal={false}
                            />
                        <Space spacenumber={15} />
                        <View style={allcommonstyle.accountcontainer}>
                            <Text style={allcommonstyle.topsmallheader}>Top Reasons</Text>
                            <Text style={allcommonstyle.accsectiontitle}>We’re on a mission to serve unbanked and underbanked communities.</Text>
                            <Text style={allcommonstyle.accsectionsubtetx}>Why are Black and Brown communities more likely to be underbanked?
                                In 1863 when the Emancipation Proclamation was signed, Black people in America held a little less than 1% of American wealth. Today that percentage is still the same.</Text>
                        </View>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 20 }}>
                            {Meetingsdata.map((props) => {
                                return (
                                    <View style={{
                                        marginTop: 15,
                                        width: 170,
                                        backgroundColor: COLORS.white,
                                        marginRight: 10,
                                        alignItems: 'center',
                                        // padding: 10,
                                        overflow: "hidden",
                                        paddingBottom: 10,
                                        ...boxShadow,
                                        borderRadius: 10,
                                        marginBottom: 10,
                                    }}>
                                        <View
                                            style={{
                                                width: '100%',
                                                height: 100,
                                                marginBottom: 10,
                                            }}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: 100,
                                                    backgroundColor: COLORS.primarydarkgreen,
                                                }}
                                                source={props.image}
                                                resizeMode='cover'
                                            />


                                        </View>
                                        <View style={{
                                            paddingHorizontal: 10,
                                        }}>
                                            <Text style={{
                                                fontSize: fontsize.font16,
                                                fontFamily: fontFamily.semiBold,
                                                color: "#401d62",
                                                textAlign: 'center',
                                            }}>
                                                {props.name}
                                            </Text>
                                        </View>
                                    </View>
                                )
                            })}
                        </ScrollView>
                        <Space spacenumber={15} />
                        <View style={allcommonstyle.accountcontainer}>
                            <Text style={allcommonstyle.topsmallheader}>Groups</Text>
                            <Text style={allcommonstyle.accsectiontitle}>OUR Recent group</Text>
                            <Text style={allcommonstyle.accsectionsubtetx}>Lorem</Text>
                        </View>

                        <FlatList
                                data={groupdatalist}
                                renderItem={GroupList}
                                keyExtractor={keyExtractor}
                                horizontal
                            />
                        <Space spacenumber={15} />
                        <View style={allcommonstyle.accountcontainer}>

                            <Text style={[allcommonstyle.accsectiontitle, { textAlign: 'center' }]}>A programmable and customizable account that allows you to use your funds </Text>
                            <Text style={{
                                marginHorizontal: 10,
                                fontSize: fontsize.font20,
                                fontFamily: fontFamily.bold,
                                color: COLORS.white,
                                backgroundColor: COLORS.newthemecolor,
                                paddingHorizontal: 20,
                                paddingVertical: 6,
                                borderRadius: 100,
                                textAlign: 'center',
                                alignSelf: 'center',
                            }}>the way you want.</Text>

                        </View>
                        <Space spacenumber={15} />
                        <ImageBackground
                            source={homeujabg}
                            resizeMode="cover"
                            style={{
                                height: 450,
                                width: '100%',
                                alignSelf: 'flex-end',
                            }}>
                            <Space spacenumber={100} />
                            <View style={{ width: '80%', padding: 30, alignSelf: 'flex-end', }}>
                                <Text
                                    style={{
                                        fontSize: fontsize.font14,
                                        fontFamily: fontFamily.medium,
                                        color: COLORS.white,
                                        textAlign: 'right',
                                    }}>THE</Text>
                                <Text
                                    style={{
                                        fontSize: fontsize.font20,
                                        fontFamily: fontFamily.bold,
                                        color: COLORS.white,
                                        textAlign: 'right',
                                    }}
                                >UJA<Text style={{ fontFamily: fontFamily.regular, }}>COIN</Text></Text>
                                <Text
                                    style={{
                                        fontSize: fontsize.font11,
                                        fontFamily: fontFamily.bold,
                                        color: COLORS.white,
                                        textAlign: 'right',
                                    }}
                                >Save some coin. Make some coin. Ujacoin</Text>
                                <Text
                                    style={{
                                        fontSize: fontsize.font11,
                                        fontFamily: fontFamily.regular,
                                        color: COLORS.white,
                                        textAlign: 'right',
                                    }}
                                >A programmable digital stable coin. Which can be used for instant, secure, and private transactions.</Text>

                                <TouchableOpacity style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    marginTop: 15,
                                }}>
                                    <Text
                                        style={{
                                            fontSize: fontsize.font14,
                                            fontFamily: fontFamily.black,
                                            color: COLORS.white,
                                            textAlign: 'right',
                                            lineHeight: 17,
                                        }}
                                    >Learn more </Text>
                                    <MaterialCommunityIcons name="arrow-right" size={20} color={COLORS.white} />
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                        <Space spacenumber={15} />
                        <View style={allcommonstyle.accountcontainer}>
                            <Text style={allcommonstyle.topsmallheader}>Events</Text>
                            <Text style={allcommonstyle.accsectiontitle}>OUR Recent Events</Text>
                            <Text style={allcommonstyle.accsectionsubtetx}>Lorem</Text>
                        </View>

                        <FlatList
                                data={eventdataData}
                                renderItem={eventdataList}
                                keyExtractor={keyExtractor}
                                horizontal={false}
                            />
                        <Space spacenumber={20} />
                        <View style={{ paddingHorizontal: 20, }}>

                            <Space spacenumber={5} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image source={uja1} style={{ width: '100%', height: 160, borderRadius: 10,flex:3, }} />
                                <Image source={uja2} style={{ width: '100%', height: 160, borderRadius: 10 ,flex:3,marginHorizontal:10}} />
                                <Image source={uja3} style={{ width: '100%', height: 160, borderRadius: 10 ,flex:3,}} />
                            </View>
                            <Space spacenumber={5} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image source={uja4} style={{ width: '100%', height: 200, borderRadius: 10 }} />
                            </View>
                        </View>

                    </View>

                    {/* <View style={[{ flex: 3, backgroundColor: COLORS.white, borderTopLeftRadius: 20, borderTopRightRadius: 20, top: -20 }]}>
                        <View>
                            <Space spacenumber={15} />
                            <View style={{ paddingHorizontal: 25 }}>
                                <Text style={[allcommonstyle.pagedesc, { color: COLORS.primaryyellow }]}>Connect with your Monthly Matches.</Text>
                                <Text style={[allcommonstyle.pageTitle, { color: COLORS.black, width: '80%' }]}>Hey UjaCoin Team! Let’s get to work!</Text>
                            </View>
                            <FlatList
                                contentContainerStyle={{ paddingHorizontal: 20 }}
                                numColumns={1}
                                horizontal
                                data={matchesdatalist}
                                renderItem={matchesdata}
                                keyExtractor={keyExtractor}
                                showsHorizontalScrollIndicator={false}
                            />
                            <TouchableOpacity style={[allcommonstyle.texthomebutton, { justifyContent: 'flex-end', marginRight: 20 }]}>
                                <Text style={allcommonstyle.texthomebuttontext}>All your matches</Text>
                                <Space spacenumber={4} />
                                <MaterialCommunityIcons name="arrow-right" size={20} color={COLORS.primaryyellow} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Space spacenumber={15} />
                            <View style={{ paddingHorizontal: 25 }}>
                                <Text style={[allcommonstyle.pagedesc, { color: COLORS.primaryyellow }]}>Member</Text>
                                <Text style={[allcommonstyle.pageTitle, { color: COLORS.black, width: '80%' }]}>Your HBCU Members</Text>
                            </View>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingHorizontal: 20 }}>
                                {Meetingsdata.map((props) => {
                                    return (
                                        <View style={{
                                            marginTop: 15,
                                            width: 170,
                                            backgroundColor: COLORS.white,
                                            marginRight: 10,
                                            alignItems: 'center',
                                            padding: 10,
                                            ...boxShadow,
                                            borderRadius: 10,
                                            marginBottom: 10,
                                        }}>
                                            <View
                                                style={{
                                                    width: 100,
                                                    height: 100,
                                                    marginBottom: 10,
                                                }}>
                                                <Image
                                                    style={{
                                                        width: 100,
                                                        height: 100,
                                                        backgroundColor: COLORS.primarydarkgreen,
                                                        borderRadius: 100,
                                                    }}
                                                    source={props.image}
                                                    resizeMode='cover'
                                                />


                                            </View>
                                            <View style={{
                                            }}>
                                                <Text numberOfLines={1} style={{
                                                    fontSize: fontsize.font16,
                                                    fontFamily: fontFamily.semiBold,
                                                    color: "#050A26",
                                                    textAlign: 'center',
                                                }}>
                                                    {props.name}
                                                </Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </ScrollView>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('Member') }}
                                style={[allcommonstyle.texthomebutton, { justifyContent: 'flex-end', marginRight: 20 }]}>
                                <Text style={allcommonstyle.texthomebuttontext}>All member</Text>
                                <Space spacenumber={4} />
                                <MaterialCommunityIcons name="arrow-right" size={20} color={COLORS.primaryyellow} />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Space spacenumber={15} />
                            <View style={{ paddingHorizontal: 25 }}>
                                <Text style={[allcommonstyle.pagedesc, { color: COLORS.primaryyellow }]}>Connect with your Monthly Matches.</Text>
                                <Text style={[allcommonstyle.pageTitle, { color: COLORS.black, width: '90%' }]}>Your group is meeting this afternoon.</Text>
                            </View>
                            <FlatList
                                contentContainerStyle={{ paddingHorizontal: 20 }}
                                numColumns={1}
                                horizontal
                                data={groupdatalist}
                                renderItem={groupdata}
                                keyExtractor={keyExtractor}
                                showsHorizontalScrollIndicator={false}
                            />
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('Group') }}
                                style={[allcommonstyle.texthomebutton, { justifyContent: 'flex-end', marginRight: 20 }]}>
                                <Text style={allcommonstyle.texthomebuttontext}>See all groups</Text>
                                <Space spacenumber={4} />
                                <MaterialCommunityIcons name="arrow-right" size={20} color={COLORS.primaryyellow} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Space spacenumber={15} />
                            <View style={{ paddingHorizontal: 25 }}>
                                <Text style={[allcommonstyle.pagedesc, { color: COLORS.primaryyellow }]}>Library</Text>
                                <Text style={[allcommonstyle.pageTitle, { color: COLORS.black, width: '90%' }]}>Check out library items for your industry.</Text>
                            </View>
                            <FlatList
                                contentContainerStyle={{ paddingHorizontal: 20 }}
                                numColumns={1}
                                horizontal
                                data={librarydatalist}
                                renderItem={librarydata}
                                keyExtractor={keyExtractor}
                                showsHorizontalScrollIndicator={false}
                            />
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('DigitalLibrary') }}
                                style={[allcommonstyle.texthomebutton, { justifyContent: 'flex-end', marginRight: 20 }]}>
                                <Text style={allcommonstyle.texthomebuttontext}>See all library</Text>
                                <Space spacenumber={4} />
                                <MaterialCommunityIcons name="arrow-right" size={20} color={COLORS.primaryyellow} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Space spacenumber={15} />
                            <View style={{ paddingHorizontal: 25 }}>
                                <Text style={[allcommonstyle.pagedesc, { color: COLORS.primaryyellow }]}>Funding opportuntiess</Text>
                                <Text style={[allcommonstyle.pageTitle, { color: COLORS.black }]}>Review your upcoming grant deadline.</Text>
                            </View>
                            <FlatList
                                contentContainerStyle={{ paddingHorizontal: 20 }}
                                numColumns={1}
                                horizontal
                                data={fundingitemdata}
                                renderItem={fundingdata}
                                keyExtractor={keyExtractor}
                                showsHorizontalScrollIndicator={false}
                            />
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('FundingList') }}
                                style={[allcommonstyle.texthomebutton, { justifyContent: 'flex-end', marginRight: 20 }]}>
                                <Text style={allcommonstyle.texthomebuttontext}>Sell all funding opportuntiess</Text>
                                <Space spacenumber={4} />
                                <MaterialCommunityIcons name="arrow-right" size={20} color={COLORS.primaryyellow} />
                            </TouchableOpacity>
                        </View>
                    </View> */}
                </View>
                <Space spacenumber={15} />
                <View>
                    <LinearGradient
                        colors={[COLORS.linearGradient2, COLORS.linearGradient1]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    >
                        <ImageBackground source={loginimg} resizeMode="cover" style={[allcommonstyle.logintop]}>
                            <Image
                                style={allcommonstyle.loginlogostyle}
                                source={logo}
                                resizeMode='contain'
                            />
                            <Text style={[allcommonstyle.weltitle,{fontSize:fontsize.font22}]}>UJA<Text style={[{ fontFamily: fontFamily.regular }]}>COIN</Text></Text>
                        </ImageBackground>
                    </LinearGradient>
                </View>

            </ScrollView>

        </LinearGradient>
    );
};
export default Home;



