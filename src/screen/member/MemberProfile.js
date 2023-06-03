import React, { useState,useEffect } from 'react';
import { Alert, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import { Space } from '../../components/Space';
import { themeImages } from '../../data/imgedata';
import { registerstyle, styles } from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/header/Header';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Color, fontFamily, fontSize } from '../../common/Common';
import { ExcusiveResource, LatestReplays, Memberdata } from '../../components/AllAppFlatList';
import { Image } from 'react-native';
import Ripple from 'react-native-material-ripple';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { globalstyle } from '../../style/Style';
import { getProfileById } from '../../lib/Members';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MemberProfile() {

    const navigation = useNavigation();
    const paramdata=useRoute();
    useEffect(() => {
        getMembers();    
    }, [])
    const getMembers = async() =>{
        let AuthData=await AsyncStorage.getItem("authData");
        let res=await getProfileById(JSON.parse(AuthData).memberId,paramdata.params.memberId);
        console.log("res.result",res.status)
        if(res?.status === 200){
            console.log("res.result",res.data.result)
            setMyProfile(res.data.result)
        }
    }
    const [BookmarkStatus, seBookmarkStatus] = useState(true)
    const [myProfile,setMyProfile]=useState(
        // {
        //     id: 1,
        //     profileImage: themeImages.user1,
        //     roleName: 'Same industry',
        //     firstName: 'Shequita Hall',
        //     short: 'Skinfulness',
        //     aboutMe:
        //         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        //     aboutBusiness:
        //         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        // }
        {
            id: 1,
            profileImage: "",
            roleName: '---',
            firstName: '---',
            short: '---',
            aboutMe:
                'Loading ...',
            aboutBusiness:
                'Loading ...',
        }
    );
   
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
                    title='Member'
                    onLeftpress={() => { navigation.goBack(); }}
                    onRightpress={() => { navigation.navigate('Menu'); }}
                />
            </View>
            <ScrollView >
                <Space spacenumber={20} />
                <View style={[{ paddingHorizontal: 20, }]}>
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
                                backgroundColor: Color.primarydarkgreen,
                                position: "absolute",
                                borderRadius: 10,
                            }}
                            // source={{uri : myProfile?.profileImage}}
                            source={myProfile?.profileImage}
                            resizeMode='cover'
                        />
                    </View>
                    <Space spacenumber={10} />
                    <Text style={{
                        fontSize: fontSize.font20,
                        fontFamily: fontFamily.n600,
                        color: Color.black,
                    }}>
                        {myProfile?.firstName}
                    </Text>
                    <Space spacenumber={5} />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Messages') }}
                            style={{
                                borderRadius: 5,
                                backgroundColor: Color.themeprimary,
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{
                                fontSize: fontSize.font12,
                                fontFamily: fontFamily.n600,
                                color: Color.white,
                            }}>
                                Message
                            </Text>
                        </TouchableOpacity>
                        {/* <View
                            style={{
                                alignItems: "center",
                                justifyContent: 'space-around',
                                flexDirection: "row",
                            }}
                        >
                            {BookmarkStatus ? (
                                <Ripple
                                    rippleContainerBorderRadius={100}
                                    style={{
                                        height: 40,
                                        width: 40,
                                        alignItems: "center",
                                        marginRight: 6,
                                        backgroundColor: Color.white,
                                        justifyContent: "center",
                                        borderRadius: 100,
                                    }}
                                >
                                    <FontAwesome
                                        name="bookmark-o"
                                        size={25}
                                        color={Color.themeprimary}
                                    />
                                </Ripple>
                            ) : (
                                <Ripple
                                    rippleContainerBorderRadius={100}
                                    style={{
                                        height: 40,
                                        width: 40,
                                        alignItems: "center",
                                        marginRight: 6,
                                        backgroundColor: Color.white,
                                        justifyContent: "center",
                                        borderRadius: 100,
                                    }}
                                >
                                    <FontAwesome
                                        name="bookmark"
                                        size={25}
                                        color={Color.themeprimary}
                                    />
                                </Ripple>
                            )}
                        </View> */}
                    </View>
                    <Space spacenumber={5} />
                    <View>
                        <View style={globalstyle.row}>
                            <Text style={{
                                fontSize: fontSize.font16,
                                fontFamily: fontFamily.n700,
                                color: "#050A26",
                                marginTop: 5
                            }}>
                                About me
                            </Text>
                        </View>
                        <Space spacenumber={5} />
                        <Text style={{
                            fontSize: fontSize.font12,
                            fontFamily: fontFamily.n400,
                            color: Color.black,
                            lineHeight: fontSize.font16
                        }}>
                            {myProfile.aboutMe}
                        </Text>

                    </View>
                    <View>
                        <Space spacenumber={10} />
                        <View style={globalstyle.row}>
                            <Text style={{
                                fontSize: fontSize.font16,
                                fontFamily: fontFamily.n600,
                                color: "#050A26",
                                marginTop: 5
                            }}>
                                My business
                            </Text>
                        </View>
                        <Space spacenumber={5} />
                        <Text style={{
                            fontSize: fontSize.font12,
                            fontFamily: fontFamily.n400,
                            color: Color.black,
                            lineHeight: fontSize.font16
                        }}>
                            {myProfile.aboutBusiness}
                        </Text>

                    </View>
                    {/* <View>
                        <Space spacenumber={10} />
                        <View style={globalstyle.row}>
                            <Text style={{
                                fontSize: fontSize.font16,
                                fontFamily: fontFamily.n600,
                                color: "#050A26",
                                marginTop: 5
                            }}>
                                Mission
                            </Text>
                        </View>
                        <Space spacenumber={5} />
                        <Text style={{
                            fontSize: fontSize.font12,
                            fontFamily: fontFamily.n400,
                            color: Color.black,
                            lineHeight: fontSize.font16
                        }}>
                            
                        </Text>

                    </View> */}
                    {/* <View>
                        <Space spacenumber={10} />
                        <View style={globalstyle.row}>
                            <Text style={{
                                fontSize: fontSize.font16,
                                fontFamily: fontFamily.n600,
                                color: "#050A26",
                                marginTop: 5
                            }}>
                                Goals
                            </Text>
                        </View>
                        <Space spacenumber={5} />
                        {Goallist.map((res, i) => {
                            return (
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        marginHorizontal: 20,
                                        marginTop: 10,
                                        alignItems: 'flex-start',
                                        marginRight: 10
                                    }}
                                >
                                    <Icon name="circle" color={Color.primarydarkgreen} size={10} style={{ marginTop: 3, }} />
                                    <Text
                                        style={{
                                            color: Color.black,
                                            fontFamily: fontFamily.n500,
                                            fontSize: fontSize.font12,
                                            marginLeft: 20,
                                        }}
                                    >
                                        {res.goalName}
                                    </Text>
                                </View>
                            );
                        })}

                    </View> */}
                </View>


                <Space spacenumber={10} />
            </ScrollView>

        </SafeAreaView>

    );
}

export default MemberProfile;