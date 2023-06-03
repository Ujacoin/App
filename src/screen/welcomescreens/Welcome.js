import React, { useEffect } from 'react';
import { Alert, View, SafeAreaView, ScrollView, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Image from 'react-native-fast-image'
import { ThemeInput } from '../../components/ThemeInput';
import { Space } from '../../components/Space';
import { themeImages } from '../../data/imgedata';
import { globalstyle } from '../../style/Style';
import { registerstyle, welStyle } from './style';
import { ThemeButton } from '../../components/Button';
import { Color } from '../../common/Common';
import { Lable, SubLable } from '../../components/Lable';
import { Checkbox } from 'react-native-paper';
import Header from '../../components/header/Header';
import { Image } from 'react-native';

function Welcome() {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Welcome2');
        }, 2000); 
    }, []);


    return (
        <SafeAreaView style={globalstyle.safeAreaView}>
            <ImageBackground
                style={{ height: '100%' }}
                source={themeImages.welbg}
                resizeMode='cover'
            >
                <View
                    style={{
                        flex: 3,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        source={themeImages.logo}
                        resizeMode='contain'
                        style={{
                            height: 102,
                            width: 110,
                        }} />
                    <Text style={welStyle.apptitle}>UJCoin</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text style={welStyle.appsubtext}>Earn Some Coin.</Text>
                    <Text style={[welStyle.appsubtext, { color: Color.lightprimary }]}>Send some Coin.</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>

    );
}

export default Welcome;