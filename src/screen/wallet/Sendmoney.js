import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView,  SafeAreaView } from 'react-native';
import { ResentcontactList, Contactlist } from '../../components/AllAppFlatList';
import { themeImages } from '../../data/imgedata';
import { globalstyle } from '../../style/Style';
import { Space } from '../../components/Space';
import { Color, fontSize } from '../../common/Common';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Sendmoney = ({ navigation }) => {

    const Resentcontactdata = [
        {
            id: "1",
            ImageUrl: themeImages.Profile,
            firstname: 'Jennifer',
            number: '+091234457',
        },
        {
            id: "2",
            ImageUrl: themeImages.Profile,
            firstname: 'Jeff',
            number: '+091234457',
        },
        {
            id: "3",
            ImageUrl: themeImages.Profile,
            firstname: 'Angela',
            number: '+091234457',
        },
        {
            id: "4",
            ImageUrl: themeImages.Profile,
            firstname: 'Patricia',
            number: '+091234457',
        },
        {
            id: "5",
            ImageUrl: themeImages.Profile,
            firstname: 'Monica',
            number: '+091234457',
        }
    ];
    const Contactlistdata = [
        {
            id: "1",
            ImageUrl: themeImages.Profile,
            firstname: 'Jennifer Thompson',
            number: '+091234457',
        },
        {
            id: "2",
            ImageUrl: themeImages.Profile,
            firstname: 'Carla Sanchez',
            number: '+091234457',
        },
        {
            id: "3",
            ImageUrl: themeImages.Profile,
            firstname: 'Benjamin Ramassamy',
            number: '+091234457',
        },
        {
            id: "4",
            ImageUrl: themeImages.Profile,
            firstname: 'Elijah Liam ',
            number: '+091234457',
        },
        {
            id: "5",
            ImageUrl: themeImages.Profile,
            firstname: 'Monica',
            number: '+091234457',
        }
    ];

    return (
        <SafeAreaView style={[globalstyle.safeAreaView, { backgroundColor: Color.white }]}>
            <Space spacenumber={15} />
            <View style={globalstyle.backheader}>
                <TouchableOpacity style={globalstyle.backbuttoncontaiber} onPress={() => { navigation.goBack() }}>
                    <Ionicons name="ios-chevron-back-outline" size={25} color={Color.black} />
                </TouchableOpacity>
                <Text style={globalstyle.backheadertext}>Send $457.34</Text>
                <TouchableOpacity style={globalstyle.backbuttoncontaiber} onPress={() => { navigation.navigate('Menu') }}>
                    <Ionicons name="menu" size={25} color={Color.black} />
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ paddingVertical: 40 }}>
                    <View style={{ paddingHorizontal: 45, }}>
                        <TextInput
                            style={globalstyle.simpleinput}
                            placeholder="To Recipient name or Email*"
                        ></TextInput>
                        <TextInput
                            style={globalstyle.simpleinput}
                            placeholder="Add note"
                        ></TextInput>
                    </View>
                    <Space spacenumber={10} />
                    <View style={{ paddingLeft: 40, }}>
                        <Text style={[globalstyle.backheadertext,{fontSize:fontSize.font14}]}>Recent</Text>
                        <Space spacenumber={10} />
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {Resentcontactdata.map((item, i) => {
                                return (
                                    <ResentcontactList {...item} key={i} />

                                )
                            })}
                        </ScrollView>
                    </View>
                    <Space spacenumber={10} />
                    <View style={{ paddingHorizontal: 40, }}>
                        <Text style={[globalstyle.backheadertext,{fontSize:fontSize.font14}]}>All contacts</Text>
                        <Space spacenumber={10} />
                        <ScrollView
                        >
                            {Contactlistdata.map((item, i) => {
                                return (
                                    <Contactlist {...item} key={i} />
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};
export default Sendmoney;