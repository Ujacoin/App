import React, { useCallback,useEffect,useState } from 'react';
import { Alert, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Image from 'react-native-fast-image'
import { ThemeInput } from '../../components/ThemeInput';
import { Space } from '../../components/Space';
import { themeImages } from '../../data/imgedata';
import {styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/header/Header';
import { Color, fontFamily, fontSize } from '../../common/Common';
import { Coachesdata, ExcusiveResource, LatestReplays, Memberdata } from '../../components/AllAppFlatList';
import { Image } from 'react-native';
import { globalstyle } from '../../style/Style';
import { LibGetMembersList } from '../../lib/Members';

function Coaches() {

    const navigation = useNavigation();
    useEffect(() => {
        getMembers();    
    }, [])
    const getMembers = async() =>{
        let res=await LibGetMembersList(0,false,0,"",0,0);
        console.log("res.result",res.status)
        if(res?.status === 200){
            console.log("res.result",res.data.result)
            setCoachesdatalist(res.data.result)
        }
    } 
    const [coachesdatalist,setCoachesdatalist] = useState([
        {
            id: 1,
            profileImage: "",
            roleName: '---',
            firstName: '-',
            short: '-',
            aboutMe:
                'Loading ...',
        }
        // {
        //     id: 1,
        //     profileImage: themeImages.user6,
        //     roleName: 'Same industry',
        //     firstName: 'Shequita Hall',
        //     short: 'Skinfulness',
        //     aboutMe:
        //         'Happy Friday, y’all! Check out this mentorship ..',
        // }
        // ,{
        //     id: 2,
        //     profileImage: themeImages.user5,
        //     roleName: 'Same industry',
        //     firstName: 'Ebony Lewis',
        //     short: 'Skinfulness',
        //     aboutMe:
        //         'Happy Friday, y’all! Check out this mentorship ..',
        // },
        // {
        //     id: 3,
        //     profileImage: themeImages.user4,
        //     roleName: 'Same industry',
        //     firstName: 'Jasmine Walker',
        //     short: 'Skinfulness',
        //     aboutMe:
        //         'Happy Friday, y’all! Check out this mentorship ..',
        // },
        // {
        //     id: 4,
        //     profileImage: themeImages.user3,
        //     roleName: 'Same industry',
        //     firstName: 'Lisa Ann',
        //     short: 'Skinfulness',
        //     aboutMe:
        //         'Happy Friday, y’all! Check out this mentorship ..',
        // },
        // {
        //     id: 5,
        //     profileImage: themeImages.user2,
        //     category: 'Lives in  Berlin',
        //     firstName: 'Tiana King',
        //     short: 'Skinfulness',
        //     // shortDesc: `Denver, CO`,
        //     aboutMe:
        //         'Happy Friday, y’all! Check out this mentorship ..',
        // },
        // {
        //     id: 6,
        //     roleName: 'Marketing',
        //     profileImage: themeImages.user1,
        //     firstName: 'Jada Davis',
        //     short: 'Skinfulness',
        //     aboutMe:
        //         'Happy Friday, y’all! Check out this mentorship ..',
        // },
    ]);
 

   
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
                    title='Coaches'
                    onLeftpress={() => { navigation.goBack(); }}
                    onRightpress={() => { navigation.navigate('Menu'); }}
                />
            </View>
            <ScrollView > 
                <Space spacenumber={20} />
                <View style={styles.input}>
                    <Ionicons name="search" size={25} color={Color.white} />
                    <TextInput  
                        placeholderTextColor={Color.white}
                        placeholder="Search a topic or keyword"
                    />
                </View>
                <Space spacenumber={30} />
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30,
                }}>
                    <Text style={styles.title}>Let's Get Started!</Text>
                </View>
                <Space spacenumber={10} />
                    {coachesdatalist.map((item, i) => {
                        return (
                            <Coachesdata {...item} key={i} onPress={() => { navigation.navigate('Coachesprofile',item) }} />
                        )
                    })}
            
                <Space spacenumber={10} />
            </ScrollView>

        </SafeAreaView>

    );
}

export default Coaches;