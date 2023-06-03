import React, { useCallback, useEffect, useState } from 'react';
import { Alert, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Image from 'react-native-fast-image'
import { ThemeInput } from '../../components/ThemeInput';
import { Space } from '../../components/Space';
import { themeImages } from '../../data/imgedata';
import { registerstyle, styles } from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/header/Header';
import { Color, boxShadow, fontFamily, fontSize } from '../../common/Common';
import { ExcusiveResource, LatestReplays, Memberdata } from '../../components/AllAppFlatList';
import { Image } from 'react-native';
import { globalstyle } from '../../style/Style';
import { LibGetMembersList } from '../../lib/Members';
import allcommonstyle from '../../style/allcommonstyle';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Home() {

    const navigation = useNavigation();

    useEffect(() => {

    }, [])
    const [selection, setSelection] = useState(1);
    
    const Meetingsdata = [

        {
            id: 1,
            image: themeImages.homecoming,
            name: 'High account fees',
        },
        {
            id: 2,
            image: themeImages.homecoming,
            name: 'Too hard to meet minimum balance requirements',
        },
        {
            id: 3,
            image: themeImages.homecoming,
            name: 'Personal identification or credit issues',
        },
        {
            id: 4,
            image: themeImages.homecoming,
            name: 'Privacy concerns',
        },
        {
            id: 5,
            image: themeImages.homecoming,
            name: 'Mistrust of banks',
        },

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
                    title='Welcome'
                    removeback={true}
                    onLeftpress={() => { navigation.goBack(); }}
                    onRightpress={() => { navigation.navigate('Menu'); }}
                />
            </View>
            <ScrollView >
                {/* <Space spacenumber={10} /> */}
                <Image
                    style={{
                        width:"100%",
                        height:300,
                    }}
                    source={themeImages.banner}
                    resizeMode='stretch'
                />
                <Space spacenumber={10} />
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30,
                }}>
                    <Text style={styles.title}>Let's Get Started!</Text>
                </View>
                <Space spacenumber={10} />
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 20 }}>
                    <View style={allcommonstyle.btnGroup}>

                        <TouchableOpacity style={[allcommonstyle.btn, selection === 1 ? { backgroundColor: "#FFFFFF" } : null]} onPress={() => setSelection(1)}>
                            <View
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    marginBottom: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        // tintColor: selection === 1 ? '#fff' : '#401d62',
                                    }}
                                    source={themeImages.slide1}
                                    resizeMode='cover'
                                />


                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[allcommonstyle.btn, selection === 1 ? { backgroundColor: "#FFFFFF" } : null]} onPress={() => setSelection(1)}>
                            <View
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    marginBottom: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        // tintColor: selection === 1 ? '#fff' : '#401d62',
                                    }}
                                    source={themeImages.slide2}
                                    resizeMode='cover'
                                />


                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[allcommonstyle.btn, selection === 1 ? { backgroundColor: "#FFFFFF" } : null]} onPress={() => setSelection(1)}>
                            <View
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    marginBottom: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        // tintColor: selection === 1 ? '#fff' : '#401d62',
                                    }}
                                    source={themeImages.slide3}
                                    resizeMode='cover'
                                />


                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[allcommonstyle.btn, selection === 1 ? { backgroundColor: "#FFFFFF" } : null]} onPress={() => setSelection(1)}>
                            <View
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    marginBottom: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        // tintColor: selection === 1 ? '#fff' : '#401d62',
                                    }}
                                    source={themeImages.slide4}
                                    resizeMode='cover'
                                />


                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[allcommonstyle.btn, selection === 1 ? { backgroundColor: "#FFFFFF" } : null]} onPress={() => setSelection(1)}>
                            <View
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    marginBottom: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        // tintColor: selection === 1 ? '#fff' : '#401d62',
                                    }}
                                    source={themeImages.slide5}
                                    resizeMode='cover'
                                />


                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={[allcommonstyle.btn, selection === 2 ? { backgroundColor: "#401d62" } : null]} onPress={() => setSelection(2)}>
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
                                    source={themeImages.homeicon2}
                                    resizeMode='cover'
                                />


                            </View>
                            <View style={{
                            }}>
                                <Text style={{
                                    fontSize: fontSize.font11,
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
                                    source={themeImages.homeicon3}
                                    resizeMode='cover'
                                />
                            </View>
                            <View style={{
                            }}>
                                <Text style={{
                                    fontSize: fontSize.font11,
                                    fontFamily: fontFamily.regular,
                                    color: selection === 3 ? '#fff' : '#401d62',
                                    textAlign: 'center',
                                }}>
                                    Lend, invest, and trade stable digital currency and crypto currency, to earn dividends and interest.
                                </Text>
                            </View>
                        </TouchableOpacity> */}
                    </View>
                </ScrollView>
                {/* <Space spacenumber={15} />
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
                                backgroundColor: Color.white,
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
                                            backgroundColor: Color.primarydarkgreen,
                                        }}
                                        source={props.image}
                                        resizeMode='cover'
                                    />


                                </View>
                                <View style={{
                                    paddingHorizontal: 10,
                                }}>
                                    <Text style={{
                                        fontSize: fontSize.font16,
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
                </ScrollView> */}
                <Space spacenumber={15} />
                {/* <View style={allcommonstyle.accountcontainer}>

                    <Text style={[allcommonstyle.accsectiontitle, { textAlign: 'center' }]}>A programmable and customizable account that allows you to use your funds </Text>
                    <Text style={{
                        marginHorizontal: 10,
                        fontSize: fontSize.font20,
                        fontFamily: fontFamily.bold,
                        color: Color.white,
                        backgroundColor: Color.newthemecolor,
                        paddingHorizontal: 20,
                        paddingVertical: 6,
                        borderRadius: 100,
                        textAlign: 'center',
                        alignSelf: 'center',
                    }}>the way you want.</Text>

                </View> */}
                <View style={allcommonstyle.accountcontainer}>

                <Text style={[allcommonstyle.accsectiontitle, { textAlign: 'center' }]}>
                Ujamaa.Financial is here to help you
                </Text>
                <Text style={{
                    marginHorizontal: 10,
                    fontSize: fontSize.font20,
                    fontFamily: fontFamily.bold,
                    color: Color.white,
                    backgroundColor: Color.newthemecolor,
                    paddingHorizontal: 20,
                    paddingVertical: 6,
                    borderRadius: 100,
                    textAlign: 'center',
                    alignSelf: 'center',
                }}>live your best life</Text>
                
                <Text style={[allcommonstyle.accsectiontitle, { textAlign: 'center' }]}>
                one transaction at a time.
                </Text>
                </View>
                <Space spacenumber={15} />
                <ImageBackground
                    source={themeImages.homeujabg}
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
                                fontSize: fontSize.font14,
                                fontFamily: fontFamily.medium,
                                color: Color.white,
                                textAlign: 'right',
                            }}>THE</Text>
                        <Text
                            style={{
                                fontSize: fontSize.font20,
                                fontFamily: fontFamily.bold,
                                color: Color.white,
                                textAlign: 'right',
                            }}
                        >Ujamaa<Text style={{ fontFamily: fontFamily.regular, }}>Financial</Text></Text>
                        <Text
                            style={{
                                fontSize: fontSize.font11,
                                fontFamily: fontFamily.bold,
                                color: Color.white,
                                textAlign: 'right',
                            }}
                        >Save some coin. Make some coin. Ujamaa Financial</Text>
                        <Text
                            style={{
                                fontSize: fontSize.font11,
                                fontFamily: fontFamily.regular,
                                color: Color.white,
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
                                    fontSize: fontSize.font14,
                                    fontFamily: fontFamily.black,
                                    color: Color.white,
                                    textAlign: 'right',
                                    lineHeight: 17,
                                }}
                            >Learn more </Text>
                            <MaterialCommunityIcons name="arrow-right" size={20} color={Color.white} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <Space spacenumber={15} />
            </ScrollView>

        </SafeAreaView>

    );
}

export default Home;