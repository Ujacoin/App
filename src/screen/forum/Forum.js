import React, { useState } from 'react';
import { Alert, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Text,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Image from 'react-native-fast-image'
import { ThemeInput } from '../../components/ThemeInput';
import { Space } from '../../components/Space';
import { themeImages } from '../../data/imgedata';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/header/Header';
import { Color, fontFamily, fontSize } from '../../common/Common';
import { Forumpost, Connectionlist } from '../../components/AllAppFlatList';
import { globalstyle } from '../../style/Style';
import { styles } from './styles';

function Forum() {

    const navigation = useNavigation();

    const [selection, setSelection] = useState(1);

    const ExcusiveReourceData = [
        {
            id: '1',
            image: require('../../assets/img/dummyimg/d1.png'),
            category: "Sales",
            title: "Money Management",
            date: "Dana Williams-Fry • 2 days ago",
            shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Nunc sit amet lectus ligula. Aliquam placerat..."
        },
        {
            id: '1',
            image: require('../../assets/img/dummyimg/d1.png'),
            category: "Sales",
            title: "Money Management",
            date: "Dana Williams-Fry • 2 days ago",
            shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Nunc sit amet lectus ligula. Aliquam placerat..."
        },

    ];
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
            ReplaysTitle: "Jennifer Thompson",
            Replaysdec: "Entrepreneur",
        },
        {
            id: '2',
            ReplaysImage: require('../../assets/img/dummyimg/3.png'),
            ReplaysTitle: "Carla Sanchez",
            Replaysdec: "Product Manager",
        }, {
            id: '3',
            ReplaysImage: require('../../assets/img/dummyimg/3.png'),
            ReplaysTitle: "Elijah Liam",
            Replaysdec: "Artist",
        },
    ];
    return (
        <SafeAreaView style={[globalstyle.safeAreaView, { backgroundColor: Color.white }]}>

            <Image
                source={themeImages.digitalbg}
                style={{
                    height: 160,
                    width: '100%',
                    position: 'absolute',
                    alignSelf: 'center',
                    top: 0,
                    zIndex: -9999999,
                }} />
            <View style={globalstyle.paddingView}>
                <Header
                    title='Forum'
                    onLeftpress={() => { navigation.goBack(); }}
                    onRightpress={() => { 
                        console.log("sdsds")
                        navigation.navigate('Menu'); 
                    }}
                />
            </View>
            <ScrollView >
                <Space spacenumber={20} />

                <View style={{
                    paddingHorizontal: 30,
                }}>
                    <Text style={styles.title}>Hi, Natacha !</Text>
                    <Text style={styles.seealltext}>Find topics that you want to read. </Text>
                </View>
                <Space spacenumber={10} />
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={[styles.btn, selection === 1 ? { backgroundColor: "#fff" } : null]} onPress={() => setSelection(1)}>
                        <Text style={[styles.btnText, selection === 1 ? { color: Color.black } : null]}>Community</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, selection === 2 ? { backgroundColor: "#fff" } : null]} onPress={() => setSelection(2)}>
                        <Text style={[styles.btnText, selection === 2 ? { color: Color.black } : null]}>Feature Request</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, selection === 3 ? { backgroundColor: "#fff" } : null]} onPress={() => setSelection(3)}>
                        <Text style={[styles.btnText, selection === 3 ? { color: Color.black } : null]}>Your posts</Text>
                    </TouchableOpacity>
                </View>
                <Space spacenumber={10} />
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30,
                }}>
                    <Text style={styles.title}>Popular posts</Text>
                    <Text style={styles.seealltext}>See all</Text>
                </View>
                <Space spacenumber={10} />
                <View style={{ paddingHorizontal: 20, }}>
                    {ExcusiveReourceData.map((item, i) => {
                        return (
                            <>
                                <Forumpost {...item} key={i} />
                                <Space spacenumber={10} />
                            </>

                        )
                    })}
                </View>
                <Space spacenumber={10} />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginHorizontal: 20,
                }}>
                    {GroupLeaddata.map((props, i) => {
                        return (
                            <TouchableOpacity
                                key={i}
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
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30,
                }}>
                    <Text style={styles.title}>Connection (170)</Text>
                    <Text style={styles.seealltext}>See all</Text>
                </View>

                <Space spacenumber={10} />
                {ReplaysData.map((item, i) => {
                    return (
                        <Connectionlist {...item} key={i} />
                    )
                })}
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
                            // width: '100%',
                            height: 200,
                            borderTopLeftRadius: 5,
                            borderBottomLeftRadius: 5,
                        }}
                        source={require('../../assets/img/background/forum.png')}
                    // resizeMode='cover'
                    />
                    <View style={{ padding: 15, flex: 1 }}>
                        <Text
                            numberOfLines={2}
                            style={{
                                fontSize: fontSize.font16,
                                fontFamily: fontFamily.n600,
                                color: Color.black,
                            }}>
                            Share Invite your friends!
                        </Text>
                        <Space spacenumber={2} />
                        <Text
                            numberOfLines={2}
                            style={{
                                fontSize: fontSize.font12,
                                fontFamily: fontFamily.n400,
                                color: Color.black,
                            }}>
                            Invite friends register on our app. For every
                            user you invite. you can earn up $35
                        </Text>
                        <Space spacenumber={10} />
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: fontSize.font16,
                                fontFamily: fontFamily.n600,
                                color: Color.themeprimary,
                            }}>Invite Now</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <Space spacenumber={10} />
            </ScrollView>

        </SafeAreaView>

    );
}

export default Forum;