import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StatusBar, ImageBackground, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, emptyimage, fulllogo, group1, headerback, left, loginimg, logo, message, Profilepic, right, search_icon, start, user1, user2, user3, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { AppTextInputSearch, ExcusiveResource, LatestReplays, Memberdata, Replaysitem, SearchFilter, Space } from '../common/commoncomponents';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, Checkbox } from "react-native-paper";
import { boxShadow, COLORS, fontFamily, fontsize } from '../common/commonitem';

const Groupdetail = ({ navigation }) => {
    const [checked, setChecked] = React.useState(false);
    const daylist = [
        {
            id: 1,
            number: '1',
            date: '01/09/2022',

        },
        {
            id: 2,
            number: '2',
            date: '02/09/2022',
            active: true,

        },
        {
            id: 3,
            number: '3',
            date: '03/09/2022',

        },
        {
            id: 4,
            number: '4',
            date: '04/09/2022',

        },
        {
            id: 51,
            number: '5',
            date: '05/09/2022',

        },
        {
            id: 6,
            number: '6',
            date: '06/09/2022',

        },
        {
            id: 1,
            number: '7',
            date: '07/09/2022',

        },
        {
            id: 2,
            number: '8',
            date: '08/09/2022',

        },
        {
            id: 3,
            number: '9',
            date: '09/09/2022',

        },
        {
            id: 4,
            number: '10',
            date: '10/09/2022',

        },
        {
            id: 51,
            number: '11',
            date: '11/09/2022',

        },
        {
            id: 6,
            number: '12',
            date: '12/09/2022',

        },
    ]
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
    const GroupLeaddata = [

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
    ]
    const Resourcesdata = [

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
    ]
    const Discussiondata = [
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
    ]
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
                                height: 170,
                                // paddingHorizontal: 30,
                                paddingVertical: 20,
                                borderBottomRightRadius: 30,
                                borderBottomLeftRadius: 30,
                            }}
                        >
                            <View style={{ paddingHorizontal: 30, }}>
                                <Text style={allcommonstyle.pageTitle}>Saving 1o1</Text>
                                <Space spacenumber={2} />
                                <Text style={allcommonstyle.pagedesc} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                <Space spacenumber={10} />
                            </View>

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
                                    source={group1}
                                    resizeMode='cover'
                                />
                            </View>


                            <Space spacenumber={15} />
                            <View style={allcommonstyle.row}>
                                <View
                                    style={{
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        borderColor: COLORS.primarydarkgreen,
                                        paddingVertical: 5,
                                        paddingHorizontal: 12
                                    }}>
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            fontFamily: fontFamily.medium,
                                            color: COLORS.primarydarkgreen,
                                            fontSize: fontsize.font10,
                                        }}
                                    >Lorem Ipsum</Text>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        borderRadius: 5,
                                        backgroundColor: COLORS.primaryyellow,
                                        paddingVertical: 10,
                                        width: 90,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text style={{
                                        fontSize: fontsize.font10,
                                        fontFamily: fontFamily.semiBold,
                                        color: COLORS.white,
                                    }}>Joined</Text>
                                </TouchableOpacity>
                            </View>
                            <Space spacenumber={15} />
                            <Text style={{
                                fontSize: fontsize.font14,
                                fontFamily: fontFamily.semiBold,
                                color: "#050A26",
                                marginTop: 5
                            }}>
                                <MaterialCommunityIcons name="calendar-blank" color={COLORS.primaryyellow} />
                                <Space spacenumber={3} />
                                Due on AUG 13 2020, 10:59 AM
                            </Text>
                            <Space spacenumber={15} />
                            <View>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    {daylist.map((props) => {
                                        return (
                                            <TouchableOpacity
                                                onPress={() => { navigation.navigate('Groupdetail') }}
                                                style={{
                                                    backgroundColor: '#FFFFFF',
                                                    borderWidth: 1,
                                                    borderColor: props.active ? COLORS.primarydarkgreen : COLORS.white,
                                                    borderRadius: 10,
                                                    padding: 15,
                                                    alignItems: "center",
                                                    width: 120,
                                                    marginRight: 5,

                                                }}>
                                                <Text style={allcommonstyle.remberboxtext}>{props.number}</Text>
                                                <Space spacenumber={5} />
                                                <Text style={allcommonstyle.remberboxtext}>{props.date}</Text>

                                            </TouchableOpacity>
                                        )
                                    })}
                                </ScrollView>
                                <Space spacenumber={5} />
                                <View style={allcommonstyle.daypassedcontainer}>
                                    <Text style={[allcommonstyle.remberboxtext, { color: COLORS.white }]} >3 of days 5</Text>
                                    <Text style={[allcommonstyle.remberboxtext, { color: COLORS.white }]}>day passed</Text>
                                </View>
                                <Space spacenumber={5} />
                                <View style={allcommonstyle.forgotcontainer}
                                    onPress={() => {
                                        setChecked(!checked);
                                    }}>
                                    <TouchableOpacity
                                        style={allcommonstyle.remberbox}>
                                        <Checkbox.Android
                                            status={checked ? 'checked' : 'unchecked'}
                                            color={COLORS.primaryyellow}
                                            uncheckedColor={COLORS.inputtext}

                                        />
                                        <Text style={allcommonstyle.remberboxtext}>2001</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>

                            <Space spacenumber={5} />
                            <Text style={{
                                fontSize: fontsize.font12,
                                fontFamily: fontFamily.light,
                                color: COLORS.black,
                                lineHeight: fontsize.font16
                            }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Text>
                            {/* <View>
                                <Space spacenumber={15} />
                                <View style={allcommonstyle.row}>
                                    <Text style={{
                                        fontSize: fontsize.font15,
                                        fontFamily: fontFamily.semiBold,
                                        color: "#050A26",
                                        marginTop: 5
                                    }}>
                                        Meetings
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => { navigation.navigate('AddMeeting') }}
                                        style={{
                                            borderRadius: 5,
                                            backgroundColor: COLORS.primaryyellow,
                                            height: 30,
                                            width: 30,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <MaterialCommunityIcons name="plus" color={COLORS.white} size={20} />
                                    </TouchableOpacity>
                                </View>
                                <Space spacenumber={10} />
                                <View>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        {Meetingsdata.map((props) => {
                                            return (
                                                <View style={{
                                                    alignItems: "center",
                                                    backgroundColor: '#FFFFFF',
                                                    flexDirection: 'row',
                                                    height: 100,
                                                    width: 300,
                                                    marginBottom: 8,
                                                    overflow: 'hidden',
                                                    marginRight: 10,
                                                    borderRadius: 10,
                                                    ...boxShadow,
                                                }}>
                                                    <View
                                                        style={{
                                                            width: 80,
                                                            height: 100,
                                                            borderRadius: 5,
                                                        }}>
                                                        <Image
                                                            style={{
                                                                width: 80,
                                                                height: 100,
                                                                backgroundColor: COLORS.primarydarkgreen,
                                                                borderTopLeftRadius: 5,
                                                                borderBottomLeftRadius: 5,
                                                                position: "absolute"
                                                            }}
                                                            source={props.image}
                                                            resizeMode='cover'
                                                        />


                                                    </View>
                                                    <View style={{
                                                        marginLeft: 3,
                                                        flex: 1,
                                                        padding: 20,
                                                    }}>
                                                        <Text style={{
                                                            fontFamily: fontFamily.medium,
                                                            color: COLORS.primaryyellow,
                                                            fontSize: fontsize.font10,
                                                        }}>
                                                            {props.category}
                                                        </Text>
                                                        <Text style={{
                                                            fontSize: fontsize.font16,
                                                            fontFamily: fontFamily.semiBold,
                                                            color: "#050A26",
                                                            marginTop: 5
                                                        }}>
                                                            {props.name}
                                                        </Text>
                                                        <Text numberOfLines={2} style={{
                                                            fontSize: 11,
                                                            lineHeight: 15.5,
                                                            fontSize: fontsize.font12,
                                                            fontFamily: fontFamily.regular,
                                                            color: "#B3B3B3",
                                                            marginTop: 5
                                                        }}>
                                                            {props.shortDesc}
                                                        </Text>
                                                    </View>
                                                </View>
                                            )
                                        })}
                                    </ScrollView>
                                </View>
                            </View> */}
                            <View>
                                <Space spacenumber={15} />
                                <View style={allcommonstyle.row}>
                                    <Text style={{
                                        fontSize: fontsize.font15,
                                        fontFamily: fontFamily.semiBold,
                                        color: "#050A26",
                                        marginTop: 5
                                    }}>
                                        Resources
                                    </Text>
                                    <TouchableOpacity
                                        style={{
                                            borderRadius: 100,
                                            backgroundColor: COLORS.primaryyellow,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: 30,
                                            width: 30,
                                        }}
                                    >
                                        <Text style={{
                                            fontSize: fontsize.font12,
                                            fontFamily: fontFamily.semiBold,
                                            color: COLORS.white,
                                        }}
                                        >5</Text>
                                    </TouchableOpacity>
                                </View>
                                <Space spacenumber={10} />
                                <View>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        {Resourcesdata.map((props) => {
                                            return (
                                                <View style={{
                                                    backgroundColor: '#FFFFFF',
                                                    flexDirection: 'column',
                                                    width: 250,
                                                    marginBottom: 8,
                                                    overflow: 'hidden',
                                                    marginRight: 10,
                                                    borderRadius: 10,
                                                    ...boxShadow,
                                                }}>
                                                    <View
                                                        style={{
                                                            height: 130,
                                                            borderRadius: 5,
                                                        }}>
                                                        <Image
                                                            style={{
                                                                height: 130,
                                                                backgroundColor: COLORS.primarydarkgreen,
                                                                borderTopLeftRadius: 5,
                                                                borderBottomLeftRadius: 5,
                                                            }}
                                                            source={props.image}
                                                            resizeMode='cover'
                                                        />


                                                    </View>
                                                    <View style={{
                                                        marginLeft: 3,
                                                        flex: 1,
                                                        padding: 20,
                                                    }}>
                                                        <Text style={{
                                                            fontFamily: fontFamily.medium,
                                                            color: COLORS.primaryyellow,
                                                            fontSize: fontsize.font10,
                                                        }}>
                                                            {props.category}
                                                        </Text>
                                                        {/* <Space spacenumber={3} /> */}
                                                        <Text style={{
                                                            fontSize: fontsize.font16,
                                                            fontFamily: fontFamily.semiBold,
                                                            color: "#050A26",
                                                            marginTop: 5
                                                        }}>
                                                            {props.name}
                                                        </Text>
                                                        <Text numberOfLines={2} style={{
                                                            fontSize: 11,
                                                            lineHeight: 15.5,
                                                            fontSize: fontsize.font12,
                                                            fontFamily: fontFamily.regular,
                                                            color: "#B3B3B3",
                                                            marginTop: 5
                                                        }}>
                                                            {props.shortDesc}
                                                        </Text>
                                                    </View>
                                                    <TouchableOpacity
                                                        style={{
                                                            width: 40,
                                                            borderRadius: 100,
                                                            backgroundColor: '#F8F8F8',
                                                            height: 40,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            position: "absolute",
                                                            top: 5,
                                                            right: 5
                                                        }}
                                                    >
                                                        <MaterialCommunityIcons name="bookmark-outline" size={20} color={COLORS.black} />
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        })}
                                    </ScrollView>
                                </View>

                            </View>
                            <View>
                                <Space spacenumber={15} />
                                <View style={allcommonstyle.row}>
                                    <Text style={{
                                        fontSize: fontsize.font15,
                                        fontFamily: fontFamily.semiBold,
                                        color: "#050A26",
                                        marginTop: 5
                                    }}>
                                        Discussion
                                    </Text>
                                    <TouchableOpacity
                                        style={{
                                            borderRadius: 100,
                                            backgroundColor: COLORS.primaryyellow,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: 30,
                                            width: 30,
                                        }}
                                    >
                                        <Text style={{
                                            fontSize: fontsize.font12,
                                            fontFamily: fontFamily.semiBold,
                                            color: COLORS.white,
                                        }}
                                        >2</Text>
                                    </TouchableOpacity>
                                </View>
                                <Space spacenumber={10} />
                                <View>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        {Discussiondata.map((props) => {
                                            return (
                                                <View style={{
                                                    backgroundColor: '#FFFFFF',
                                                    flexDirection: 'column',
                                                    width: 250,
                                                    marginBottom: 8,
                                                    overflow: 'hidden',
                                                    marginRight: 10,
                                                    borderRadius: 10,
                                                    ...boxShadow,
                                                }}>
                                                    <View
                                                        style={{
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            borderRadius: 5,
                                                        }}>
                                                        <Image
                                                            style={{
                                                                height: 50,
                                                                width: 50,
                                                                borderRadius: 100,
                                                                backgroundColor: COLORS.primarydarkgreen,
                                                                borderTopLeftRadius: 5,
                                                                borderBottomLeftRadius: 5,
                                                            }}
                                                            source={props.image}
                                                            resizeMode='cover'
                                                        />
                                                        <Text
                                                            numberOfLines={1}
                                                            style={{
                                                                fontSize: fontsize.font16,
                                                                fontFamily: fontFamily.semiBold,
                                                                color: "#050A26",
                                                                marginHorizontal: 10,
                                                                flex: 1,
                                                            }}>
                                                            {props.name} {props.name} {props.name}
                                                        </Text>

                                                    </View>
                                                    <View style={{
                                                        marginLeft: 3,
                                                        flex: 1,
                                                        padding: 20,
                                                    }}>

                                                        <Text numberOfLines={2} style={{
                                                            fontSize: 11,
                                                            lineHeight: 15.5,
                                                            fontSize: fontsize.font12,
                                                            fontFamily: fontFamily.regular,
                                                            color: "#B3B3B3",
                                                            marginTop: 5
                                                        }}>
                                                            {props.shortDesc}
                                                        </Text>
                                                    </View>
                                                </View>
                                            )
                                        })}
                                    </ScrollView>
                                </View>
                                <TouchableOpacity onPress={() => { navigation.navigate('Discussion') }} style={[allcommonstyle.texthomebutton, { justifyContent: 'flex-end' }]}>
                                    <Text style={allcommonstyle.texthomebuttontext}>Open</Text>
                                    <Space spacenumber={4} />
                                    <MaterialCommunityIcons name="arrow-right" size={20} color={COLORS.primaryyellow} />
                                </TouchableOpacity>
                            </View>
                            {/* <View>
                                <Space spacenumber={15} />
                                <View style={allcommonstyle.row}>
                                    <Text style={{
                                        fontSize: fontsize.font15,
                                        fontFamily: fontFamily.semiBold,
                                        color: "#050A26",
                                        marginTop: 5
                                    }}>
                                        Group Lead
                                    </Text>
                                    <TouchableOpacity
                                        style={{
                                            borderRadius: 100,
                                            backgroundColor: COLORS.primaryyellow,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: 30,
                                            width: 30,
                                        }}
                                    >
                                        <Text style={{
                                            fontSize: fontsize.font12,
                                            fontFamily: fontFamily.semiBold,
                                            color: COLORS.white,
                                        }}
                                        >2</Text>
                                    </TouchableOpacity>
                                </View>
                                <Space spacenumber={10} />
                                <View>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        {GroupLeaddata.map((props) => {
                                            return (
                                                <View style={{
                                                    alignItems: "center",
                                                    backgroundColor: '#FFFFFF',
                                                    flexDirection: 'row',
                                                    height: 150,
                                                    width: 300,
                                                    marginBottom: 8,
                                                    overflow: 'hidden',
                                                    marginRight: 10,
                                                    borderRadius: 10,
                                                    ...boxShadow,
                                                }}>
                                                    <View
                                                        style={{
                                                            width: 100,
                                                            height: 150,
                                                            borderRadius: 5,
                                                        }}>
                                                        <Image
                                                            style={{
                                                                width: 100,
                                                                height: 150,
                                                                backgroundColor: COLORS.primarydarkgreen,
                                                                borderTopLeftRadius: 5,
                                                                borderBottomLeftRadius: 5,
                                                                position: "absolute"
                                                            }}
                                                            source={props.image}
                                                            resizeMode='cover'
                                                        />


                                                    </View>
                                                    <View style={{
                                                        marginLeft: 3,
                                                        flex: 1,
                                                        padding: 20,
                                                    }}>
                                                        <Text style={{
                                                            fontFamily: fontFamily.medium,
                                                            color: COLORS.primaryyellow,
                                                            fontSize: fontsize.font10,
                                                        }}>
                                                            {props.category}
                                                        </Text>
                                                        <Text style={{
                                                            fontSize: fontsize.font16,
                                                            fontFamily: fontFamily.semiBold,
                                                            color: "#050A26",
                                                            marginTop: 5
                                                        }}>
                                                            {props.name}
                                                        </Text>
                                                        <Text numberOfLines={2} style={{
                                                            fontSize: 11,
                                                            lineHeight: 15.5,
                                                            fontSize: fontsize.font12,
                                                            fontFamily: fontFamily.regular,
                                                            color: "#B3B3B3",
                                                            marginTop: 5
                                                        }}>
                                                            {props.shortDesc}
                                                        </Text>
                                                    </View>
                                                </View>
                                            )
                                        })}
                                    </ScrollView>
                                </View>

                            </View> */}
                            <View>
                                <Space spacenumber={15} />
                                <View style={allcommonstyle.row}>
                                    <Text style={{
                                        fontSize: fontsize.font15,
                                        fontFamily: fontFamily.semiBold,
                                        color: "#050A26",
                                        marginTop: 5
                                    }}>
                                         Your HBCU Members
                                    </Text>
                                    <TouchableOpacity
                                        style={{
                                            borderRadius: 100,
                                            backgroundColor: COLORS.primaryyellow,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: 30,
                                            width: 30,
                                        }}
                                    >
                                        <Text style={{
                                            fontSize: fontsize.font12,
                                            fontFamily: fontFamily.semiBold,
                                            color: COLORS.white,
                                        }}
                                        >2</Text>
                                    </TouchableOpacity>
                                </View>
                                <Space spacenumber={10} />
                                <View>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        {Meetingsdata.map((props) => {
                                            return (
                                                <View style={{
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
                                </View>

                            </View>
                        </View>

                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};
export default Groupdetail;
const styles = StyleSheet.create({

})