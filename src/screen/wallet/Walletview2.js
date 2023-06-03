import React, { useState } from 'react';
import { Alert, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Image from 'react-native-fast-image'
import { ThemeInput } from '../../components/ThemeInput';
import { Space } from '../../components/Space';
import { themeImages } from '../../data/imgedata';
import { globalstyle } from '../../style/Style';
import { registerstyle, styles } from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/header/Header';
import { Color, fontFamily, fontSize, windowWidth } from '../../common/Common';
import { ExcusiveResource, LatestReplays } from '../../components/AllAppFlatList';
import LinearGradient from 'react-native-linear-gradient';
import { ThemeButton } from '../../components/Button';
import { Image } from 'react-native';

function Walletview2() {

    const navigation = useNavigation();

    const [bankdetails, setbankdetails] = useState([
        {
            id: 1,
            name: 'Routing',
            code: '041 215 663',
        },
        {
            id: 2,
            name: 'Account Number',
            code: '88 8369356',
        },
    ])
    return (
        <SafeAreaView style={[globalstyle.safeAreaView, { backgroundColor: Color.white }]}>


            <View style={globalstyle.paddingView}>
                <Header
                    color={Color.black}
                    title='Direct deposit'
                    onLeftpress={() => { navigation.goBack(); }}
                    onRightpress={() => { navigation.navigate('Menu'); }}
                />
            </View>
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
                        height: 195,
                        width: 195,
                    }}
                    resizeMode='contain'
                    source={themeImages.directdeposit} />
                <Space spacenumber={20} />
                <Text style={[globalstyle.Emailtitle, { color: Color.black }]}>Get your paycheck early!</Text>
                <Space spacenumber={5} />
                <Text style={[globalstyle.remberboxtext, { textAlign: 'center', paddingHorizontal: 30, }]}>Polisocial tetran autoss. Kronas eurodehis, i nåns till huvirade, liksom degången. </Text>
                <Space spacenumber={20} />
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
                <ThemeButton
                    backgroundColor={Color.themedarkblue}
                    title={'Get Direct Deposit Form'}
                    onPress={() => { console.log('Resend'); }}
                    color={Color.themeScarlet}
                />
                <Space spacenumber={5} />
                <Text style={globalstyle.lable}>Your bank details</Text>
                <Space spacenumber={5} />
                {bankdetails.map((props) => {
                    return (
                        <View style={styles.bankdetailcontainer}>
                            <Text style={styles.detailname}>{props.name}</Text>
                            <View style={styles.rightcontainer}>
                                <Text style={styles.codetext}>{props.code}</Text>
                                <TouchableOpacity>
                                    <Ionicons name="copy-outline" size={20} color={Color.gray} />
                                </TouchableOpacity>

                            </View>
                        </View>
                    )
                })}
                {/* <Space spacenumber={5} /> */}
                <Text style={styles.infotext}>Banking services provided by metropolitan commercial bank; Members FDIC</Text>
            </LinearGradient>
        </SafeAreaView>

    );
}

export default Walletview2;