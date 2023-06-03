import React, { useEffect, useState } from 'react'
import { Image, View, SafeAreaView, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalstyle } from '../style/Style';
import { themeImages } from '../data/imgedata';
// import FastImage from 'react-native-fast-image';
import { styles } from './style';
import { Badge } from 'react-native-paper';
import { Space } from '../components/Space';
import { Badgeimg } from '../components/Badgeimg';
import { Color } from '../common/Common';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
function Menu() {

    const navigation = useNavigation();
    
    useEffect(() => {
        setNameEmail();
    }, [])
    const [Name,setName] = useState("")
    const [Email,setEmail] = useState("")
    const setNameEmail = async () =>  {
        
        const firstName = JSON.parse(await AsyncStorage.getItem("authData")).firstName;
        const email = JSON.parse(await AsyncStorage.getItem("authData")).email;
        setName(firstName)
        setEmail(email)
    }

    const doUserLogOut =  () => {
        navigation.replace("Welcome2");
        AsyncStorage.clear();
        // AsyncStorage.setItem("OnboardingVisited","true");
    };

    return (
        <SafeAreaView style={globalstyle.safeAreaView}>
            <ImageBackground
                style={{ height: '100%' }}
                source={themeImages.menubg}
                resizeMode='cover'
            >
                <TouchableOpacity
                    style={{
                        height: 40,
                        width: 40,
                        position: 'absolute',
                        right: 20,
                        top: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: Color.white,
                        borderRadius: 100,
                        zIndex:9999
                    }}
                    onPress={() => { navigation.goBack() }}
                >
                    <FontAwesome
                        name="close"
                        size={25}
                        color={Color.themeprimary}
                    />
                </TouchableOpacity>

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingHorizontal: 40,
                    }}
                >
                    <View>
                        <Space spacenumber={15} />
                        <Badgeimg
                            image={themeImages.Profile}
                        />

                    </View>

                    <View>
                        <Text style={[styles.profiledesctitle, { textAlign: 'center' }]}>My Account</Text>
                        <Space spacenumber={10} />
                        <Text style={styles.profileName}>{Name}</Text>
                        <Text style={styles.profiledesctitle}>{Email}</Text>
                    </View>

                </View>
                <View
                    style={{
                        flex: 3,
                        paddingLeft: 107,
                    }}
                >
                    {/* <TouchableOpacity
                        style={styles.menuitem} 
                        onPress={()=> { navigation.navigate('Coaches')}}
                    >
                        <Image
                            resizeMode='contain'
                            style={styles.menuimg}
                            source={themeImages.menu1} />
                        <Text style={styles.profiledesctitle}>Goals and Activities</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        style={styles.menuitem}
                        onPress={() => { navigation.navigate('Wallet') }}
                    >
                        <Image
                            resizeMode='contain'
                            style={styles.menuimg}
                            source={themeImages.menu2} />
                        <Text style={styles.profiledesctitle}>Wallet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuitem}
                    >
                        <Image
                            resizeMode='contain'
                            style={styles.menuimg}
                            source={themeImages.menu3} />
                        <Text style={styles.profiledesctitle}>Savings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuitem}
                        onPress={() => { navigation.navigate('Groups') }}
                    >
                        <Image
                            resizeMode='contain'
                            style={styles.menuimg}
                            source={themeImages.menu4} />
                        <Text style={styles.profiledesctitle}>Groups</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('DigitalLibrary') }}
                        style={styles.menuitem}
                    >
                        <Image
                            resizeMode='contain'
                            style={styles.menuimg}
                            source={themeImages.menu5} />
                        <Text style={styles.profiledesctitle}>Resources</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuitem}
                        onPress={() => { navigation.navigate('Member') }}
                    >
                        <Image
                            resizeMode='contain'
                            style={styles.menuimg}
                            source={themeImages.menu6} />
                        <Text style={styles.profiledesctitle}>Member</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuitem}
                        onPress={() => { navigation.navigate('Coaches') }}
                    >
                        <Image
                            resizeMode='contain'
                            style={styles.menuimg}
                            source={themeImages.menu6} />
                        <Text style={styles.profiledesctitle}>Coaches</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuitem}
                        onPress={() => { navigation.navigate('Account') }}
                    >
                        <Image
                            resizeMode='contain'
                            style={styles.menuimg}
                            source={themeImages.menu3} />
                        <Text style={styles.profiledesctitle}>My Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuitem}
                        onPress={() => { navigation.navigate('Faq') }}
                    >
                        <Image
                            resizeMode='contain'
                            style={styles.menuimg}
                            source={themeImages.menu7} />
                        <Text style={styles.profiledesctitle}>FAQ</Text>
                    </TouchableOpacity>
                    <Space spacenumber={10} />
                    <TouchableOpacity
                        style={styles.logoutbtn} 
                        onPress={()=>{
                            doUserLogOut()
                        }}
                    >
                        <Text style={styles.profiledesctitle}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>

    );
}

export default Menu;