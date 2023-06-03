import React, { useEffect } from 'react';
import { TouchableOpacity, View, SafeAreaView, ScrollView, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
// import Image from 'react-native-fast-image';
import { Space } from '../../components/Space';
import { themeImages } from '../../data/imgedata';
import { globalstyle } from '../../style/Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './style';
import { Color, fontFamily, fontSize } from '../../common/Common';
import { Bottomtabdesign } from '../../components/bottomtab/Bottomtabdesign';
import { SettingsItem } from '../../components/SettingsItem';
import { ThemeButton } from '../../components/Button';
import { Image } from 'react-native';

function Walletprofile() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={globalstyle.safeAreaView}>
            <LinearGradient
                colors={[Color.liniar1, Color.liniar2]}
                start={{ x: 0, y: 2 }}
                end={{ x: 0, y: 0 }}
                style={{
                    flex: 1,
                }}
            >
                <ImageBackground
                    source={themeImages.mainbg}
                    resizeMode='cover'
                    style={{
                        height: 270,
                        flexDirection: 'row',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        left: 0,
                    }}
                ></ImageBackground>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Space spacenumber={20} />
                    <View >
                        <View style={globalstyle.backheader}>
                            <TouchableOpacity style={globalstyle.backbuttoncontaiber} onPress={() => { navigation.goBack() }}>
                                <Ionicons name="ios-chevron-back-outline" size={25} color={Color.white} />
                            </TouchableOpacity>
                        </View>
                        <Space spacenumber={10} />
                        <View>
                            <View style={styles.profileimagecontainer}>
                                <Image
                                    style={styles.profileimage}
                                    source={themeImages.Profile}
                                    resizeMode='cover'
                                />
                            </View>
                            <Space spacenumber={10} />
                            <Text style={styles.profilenametitle}>Tessa Smith</Text>
                            <Text style={styles.profiledesctitle}>Seattle, WA</Text>
                            <Space spacenumber={10} />
                        </View>

                        <SettingsItem name='Upgrade account limit' lefticon='lock-closed' />
                        <SettingsItem name='Security' lefticon='privacy-tip' MaterialIcons />
                        <SettingsItem name='Notifications' lefticon='notifications-on' MaterialIcons />
                        <SettingsItem
                            name='Forum'
                            lefticon='information-circle'
                            onPress={() => { navigation.navigate('Forum') }} />
                        <SettingsItem name='Delete my account' lefticon='ios-trash' />

                    </View>
                    <Space spacenumber={10} />
                    <View style={{ paddingHorizontal: 30, }}>
                        <ThemeButton
                            backgroundColor={Color.themeScarlet}
                            title={'Logout'}
                            onPress={() => { navigation.navigate('Home') }}
                            color={Color.themedarkblue}
                        />
                    </View>
                    <Space spacenumber={20} />
                </ScrollView>

            </LinearGradient>
            <Bottomtabdesign active={'Profile'} />
        </SafeAreaView>

    );
}

export default Walletprofile;