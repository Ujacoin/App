import React, { useEffect } from 'react';
import { Alert, View, SafeAreaView, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Image from 'react-native-fast-image'
import { themeImages } from '../../data/imgedata';
import { globalstyle } from '../../style/Style';
import { Color, windowWidth } from '../../common/Common';
import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { Space } from '../../components/Space';
import { ThemeButton } from '../../components/Button';
import { Image } from 'react-native';

function Email() {

    const navigation = useNavigation();
    return (
        <SafeAreaView style={globalstyle.safeAreaView}>
            <TouchableOpacity
                onPress={() => { navigation.goBack(); }}
                style={{
                    height: 50,
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    left: 10,
                    top: 10,
                    zIndex: 9999,

                }}>
                <Image
                    source={themeImages.Backicon}
                    tintColor={Color.black}
                    style={{
                        height: 28,
                        width: 28,
                    }} resizeMode='contain' />
            </TouchableOpacity>
            <View
                style={{
                    width: windowWidth,
                    height: 380,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                }}
            >
                <Image
                    style={{
                        height: 255,
                        width: 255,
                    }}
                    resizeMode='contain'
                    source={themeImages.emailbanner} />
            </View>
            <LinearGradient
                colors={['#6819B6', '#3981CA']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 2 }}
                style={{
                    flex: 1,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    paddingHorizontal: 20,

                }}
            >
                <Space spacenumber={20} />
                <Text style={globalstyle.Emailtitle}>Check your email for a confirmation link to continue. </Text>
                <Space spacenumber={20} />
                <ThemeButton
                    backgroundColor={Color.themeScarlet}
                    title={'Open email'}
                    onPress={() => { console.log('Email '); }}
                    color={Color.themedarkblue}
                />
                <ThemeButton
                    backgroundColor={Color.themedarkblue}
                    title={'Resend'}
                    onPress={() => { console.log('Resend'); }}
                    color={Color.themeScarlet}
                />
            </LinearGradient>
        </SafeAreaView>

    );
}

export default Email;