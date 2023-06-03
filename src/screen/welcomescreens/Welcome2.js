import React, { useEffect } from 'react';
import { Alert, View, SafeAreaView, ScrollView, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Image from 'react-native-fast-image';
import { themeImages } from '../../data/imgedata';
import { globalstyle } from '../../style/Style';
import { welStyle } from './style';
import { Color } from '../../common/Common';
import { ThemeButton } from '../../components/Button';
import { Space } from '../../components/Space';
import { LibCheckAuth } from '../../lib/general';

function Welcome2() {

    const navigation = useNavigation();

    useEffect(() => {
        // console.log("WaitingList")
        LibCheckAuth(navigation,"Home","Home")
      }, [])    

    return (
        <SafeAreaView style={globalstyle.safeAreaView}>
            <ImageBackground
                style={{ height: '100%', paddingHorizontal: 45 }}
                source={themeImages.wel2bg}
                resizeMode='cover'
            >
                <View
                    style={{
                        flex: 2,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Text style={welStyle.welcometitle}>Welcome to Ujamaa Financial!</Text>
                    <Text style={welStyle.welcomedec}>Let's build your profile and get started!</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View style={{
                        width: '100%',
                    }}>
                        <Space spacenumber={40} />
                        <ThemeButton
                            backgroundColor={Color.themeScarlet}
                            title={'Next'}
                            onPress={() => { navigation.navigate('Login') }}
                            color={Color.themedarkblue}
                        />
                    </View>

                </View>
            </ImageBackground>
        </SafeAreaView>

    );
}

export default Welcome2;