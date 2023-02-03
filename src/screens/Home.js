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
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// external Colors
import { emptyimage, eye, fulllogo, homebg, left, loginimg, logo,  group1, group2, group3, group4, group5, user1, user2, user3, userimage, users } from "../data/Imagedata";
import allcommonstyle from "../styles/allcommonstyle";
import { boxShadow, COLORS, fontFamily, fontsize } from "../common/commonitem";
import { Matchesdata, Homegoaldata, Space, Serviceprovidersitem, Groupdata, Fundingdata, Librarydata } from "../common/commoncomponents";
import Loader from "../components/Loader/Loader";
import { Header } from "../components/header/Header";

//Home Screen
const Home = ({ navigation }) => {

    //Internal Methods

    const [visibleLoader, setvisibleLoader] = useState(false);

    const matchesdatalist = [
        {
            id: 1,
            image: user1,
            industry: 'Same industry',
            name: 'Shequita Hall',
            sort: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 2,
            image: user2,
            industry: 'Same industry',
            name: 'Shequita Hall',
            sort: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 3,
            image: user3,
            industry: 'Same industry',
            name: 'Shequita Hall',
            sort: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },
        {
            id: 4,
            image: user2,
            industry: 'Same industry',
            name: 'Shequita Hall',
            sort: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
        },

    ];
    const ExcusiveReourceData = [
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
    const ServiceprovidersData = [
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
        {
            id: 4,
            image: user3,
            category: 'Same industry',
            name: 'Lisa Ann',
            short: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
        {
            id: 5,
            category: 'Lives in  Berlin',
            image: user2,
            name: 'Tiana King',
            short: 'Skinfulness',
            // shortDesc: `Denver, CO`,
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
        {
            id: 6,
            category: 'Marketing',
            image: emptyimage,
            name: 'Jada Davis',
            short: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
    ];
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
    const fundingitemdata = [
        {
            id: 1,
            name: 'Submit Application for CERF Grant',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
            isFavorite: true,
        },
        {
            id: 1,
            name: 'Submit Application for CERF Grant',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
            isFavorite: false,
        },
        {
            id: 1,
            name: 'Submit Application for CERF Grant',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
            isFavorite: true,
        },
    ];
    const librarydatalist = [
        {
            id: 1,
            image: user1,
            industry: 'Same industry',
            name: 'marketing and sales',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
            isFavorite: true,
        },
        {
            id: 2,
            image: user2,
            industry: 'Same industry',
            name: 'Shequita Hall',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
            isFavorite: false,
        },
        {
            id: 3,
            image: user3,
            industry: 'Same industry',
            name: 'Shequita Hall',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
            isFavorite: false,
        },
        {
            id: 4,
            image: user2,
            industry: 'Same industry',
            name: 'Shequita Hall',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship.',
            isFavorite: true,
        },

    ];
    const Meetingsdata = [

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
        {
            id: 4,
            image: user3,
            category: 'Same industry',
            name: 'Lisa Ann',
            short: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
        {
            id: 5,
            category: 'Lives in  Berlin',
            image: user2,
            name: 'Tiana King',
            short: 'Skinfulness',
            // shortDesc: `Denver, CO`,
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
        {
            id: 6,
            category: 'Marketing',
            image: emptyimage,
            name: 'Jada Davis',
            short: 'Skinfulness',
            shortDesc:
                'Happy Friday, y’all! Check out this mentorship ..',
        },
    ];
    const gotonext = () => {
        navigation.navigate('OpenForm')
    }
    const homegoal = useCallback(({ item }) => {
        return (
            <Homegoaldata {...item} />
        );
    }, []);
    const fundingdata = useCallback(({ item }) => {
        return (
            <Fundingdata {...item} />
        );
    }, []);
    const matchesdata = useCallback(({ item }) => {
        return (
            <Matchesdata {...item} />
        );
    }, []);
    const serviceprovidersitem = useCallback(({ item }) => {
        return (
            <Serviceprovidersitem {...item} />
        );
    }, []);
    const groupdata = useCallback(({ item }) => {
        return (
            <Groupdata {...item} />
        );
    }, []);
    const librarydata = useCallback(({ item }) => {
        return (
            <Librarydata {...item} />
        );
    }, []);

    const keyExtractor = useCallback((item) => {
        return item.id;
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
                        <ImageBackground source={homebg} resizeMode="cover" style={allcommonstyle.logintop}>
                            <LinearGradient
                                colors={[COLORS.linearGradient2, COLORS.linearGradient1]}
                                start={{ x: 0, y: 0.8 }}
                                end={{ x: 0, y: 0 }}
                                style={{ height: '100%', width: '100%', paddingLeft: 40, paddingRight: 85, justifyContent: 'center' }}
                            >

                                <Text style={allcommonstyle.pageTitle}>Talk to the UjaCoin Team</Text>
                                <Space spacenumber={2} />
                                <Text style={allcommonstyle.pagedesc}>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</Text>
                                <Space spacenumber={6} />
                                <TouchableOpacity style={allcommonstyle.texthomebutton}>
                                    <Text style={allcommonstyle.texthomebuttontext}>Contact Us</Text>
                                    <Space spacenumber={4} />
                                    <MaterialCommunityIcons name="arrow-right" size={20} color={COLORS.black} />
                                </TouchableOpacity>
                            </LinearGradient>
                        </ImageBackground>
                    </View>

                    <View style={[{ flex: 3, backgroundColor: COLORS.white, borderTopLeftRadius: 20, borderTopRightRadius: 20, top: -20 }]}>
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
                        {/* <View>
                            <Space spacenumber={15} />
                            <View style={{ paddingHorizontal: 25 }}>
                                <Text style={[allcommonstyle.pagedesc, { color: COLORS.primaryyellow }]}>Goals & Activities</Text>
                                <Text style={[allcommonstyle.pageTitle, { color: COLORS.black }]}>How‘s your progress on this goal?</Text>
                            </View>
                            <FlatList
                                numColumns={1}
                                horizontal
                                data={ExcusiveReourceData}
                                renderItem={homegoal}
                                keyExtractor={keyExtractor}
                                showsHorizontalScrollIndicator={false}
                            />
                            <TouchableOpacity style={[allcommonstyle.texthomebutton, { justifyContent: 'flex-end', marginRight: 20 }]}>
                                <Text style={allcommonstyle.texthomebuttontext}>All your goals</Text>
                                <Space spacenumber={4} />
                                <MaterialCommunityIcons name="arrow-right" size={20} color={COLORS.primaryyellow} />
                            </TouchableOpacity>
                        </View> */}

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
                        {/* <View>
                            <Space spacenumber={15} />
                            <View style={{ paddingHorizontal: 25 }}>
                                <Text style={[allcommonstyle.pagedesc, { color: COLORS.primaryyellow }]}>Here are 3 that we recommend.</Text>
                                <Text style={[allcommonstyle.pageTitle, { color: COLORS.black, width: '90%' }]}>Need a graphic designer?</Text>
                            </View>
                            <FlatList
                                contentContainerStyle={{ paddingHorizontal: 20 }}
                                numColumns={1}
                                horizontal
                                data={ServiceprovidersData}
                                renderItem={serviceprovidersitem}
                                keyExtractor={keyExtractor}
                                showsHorizontalScrollIndicator={false}
                            />
                            <TouchableOpacity style={[allcommonstyle.texthomebutton, { justifyContent: 'flex-end', marginRight: 20 }]}>
                                <Text style={allcommonstyle.texthomebuttontext}>View all vetted service providers</Text>
                                <Space spacenumber={4} />
                                <MaterialCommunityIcons name="arrow-right" size={20} color={COLORS.primaryyellow} />
                            </TouchableOpacity>
                        </View> */}

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
                    </View>
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
                {/* <View>
                    <ImageBackground source={homebg} resizeMode="cover" style={allcommonstyle.logintop}>
                        <LinearGradient
                            colors={['rgba(20, 110, 121 , 0.4)', 'rgba(255, 250, 0, 0.4)']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 0, y: 0 }}
                            style={{ height: '100%', width: '100%', paddingLeft: 40, paddingRight: 85, justifyContent: 'center' }}
                        >

                            <View >
                                <Image
                                    style={{ height: 55, backgroundColor: "red", alignItems: 'center' }}
                                    source={fulllogo}
                                    resizeMode='contain'
                                />
                            </View>
                            <Space spacenumber={2} />
                            <Text style={allcommonstyle.pagedesc}>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</Text>
                            <Space spacenumber={6} />
                            <TouchableOpacity style={allcommonstyle.texthomebutton}>
                                <Text style={allcommonstyle.texthomebuttontext}>Contact Us</Text>
                                <Space spacenumber={4} />
                                <MaterialCommunityIcons name="arrow-right" size={20} color={COLORS.primaryyellow} />
                            </TouchableOpacity>
                        </LinearGradient>
                    </ImageBackground>
                </View> */}
            </ScrollView>

        </LinearGradient>
    );
};
export default Home;



