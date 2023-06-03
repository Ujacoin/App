import React, { useEffect } from 'react';
import { TouchableOpacity, View, SafeAreaView, ScrollView, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Image from 'react-native-fast-image'
import { ThemeInput } from '../../components/ThemeInput';
import { Space } from '../../components/Space';
import { themeImages } from '../../data/imgedata';
import { globalstyle } from '../../style/Style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './style';
import { Color, fontFamily, fontSize } from '../../common/Common';
import { Bottomtabdesign } from '../../components/bottomtab/Bottomtabdesign';
import { Image } from 'react-native';

function Wallet() {

    const navigation = useNavigation();




    return (
        <SafeAreaView style={globalstyle.safeAreaView}>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={globalstyle.loginflex}>
                    <View style={{ flex: 1 }}>
                        <ImageBackground
                            source={themeImages.mainbg}
                            resizeMode='cover'
                            style={{
                                height: 270,
                                flexDirection: 'row',
                                paddingTop: 50,
                            }}
                        >
                            <TouchableOpacity style={[globalstyle.backbuttoncontaiber, { marginLeft: 20 }]}
                                onPress={() => { navigation.goBack() }}>
                                <Ionicons name="ios-chevron-back-outline" size={25} color={Color.white} />
                            </TouchableOpacity>
                            <View style={{ paddingHorizontal: 20, flex: 1, }}>
                                <Text style={globalstyle.pageTitle}>$759</Text>
                                <Space spacenumber={2} />
                                <Text style={globalstyle.pagedesc} numberOfLines={2}>Available balance</Text>
                                <Space spacenumber={10} />
                            </View>
                            <View
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 20,
                                }}>
                                <Image
                                    style={{
                                        width: 64,
                                        height: 64,
                                        backgroundColor: Color.primarydarkgreen,
                                        borderRadius: 100,
                                    }}
                                    source={themeImages.Profile}
                                    resizeMode='cover'
                                />
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={[{ flex: 3, }]}>
                        <View style={[{ paddingHorizontal: 20, top: -100 }]}>

                            <View style={globalstyle.profilebtnrow}>
                                <TouchableOpacity style={styles.profiletopbtncontainer}>
                                    <View style={styles.btnbox}>
                                        <FontAwesome name="send" size={17} color={Color.white} />
                                    </View>
                                    <Space spacenumber={10} />
                                    <Text style={styles.btntetext}>Fund your account</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('Sendmoney') }}
                                    style={styles.profiletopbtncontainer}>
                                    <View style={styles.btnbox}>
                                        <Ionicons name="ios-card" size={17} color={Color.white} />
                                    </View>
                                    <Space spacenumber={10} />
                                    <Text style={styles.btntetext}>Set up Direct Deposit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('DigitalLibrary') }}
                                    style={styles.profiletopbtncontainer}>
                                    <View style={styles.btnbox}>
                                        <Ionicons name="ios-bar-chart" size={17} color={Color.white} />
                                    </View>
                                    <Space spacenumber={10} />
                                    <Text style={styles.btntetext}>Digital Library</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Space spacenumber={20} />
                                <Text style={{
                                    fontSize: fontSize.font16,
                                    fontFamily: fontFamily.semiBold,
                                    color: Color.gray,
                                    marginTop: 5,
                                    textAlign: 'center',
                                }}>
                                    No transactions yet
                                </Text>
                                <Space spacenumber={5} />
                                <Text style={{
                                    fontSize: fontSize.font12,
                                    fontFamily: fontFamily.light,
                                    color: Color.gray,
                                    textAlign: 'center',
                                }}>
                                    Fund your wallet to send money and more
                                </Text>

                            </View>

                        </View>

                    </View>
                </View>

            </ScrollView>
            <Bottomtabdesign active={'home'}/>
        </SafeAreaView>

    );
}

export default Wallet;