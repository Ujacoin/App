// import React from 'react';
// import {
//     View,
//     Text,
//     ScrollView,
//     TouchableOpacity,
//     Pressable,
//     StatusBar,
//     ToastAndroid,
// } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Feather from 'react-native-vector-icons/Feather';
// import { MENU } from '../model/data';
// import styles from './style';
// import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
// import MyStatusBar from "../components/myStatusBar/MyStatusBar"
// import Toast from 'react-native-root-toast';
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const data = MENU;

// const CustomDrawerContent = ({ navigation }) => {

//     const [expanded, setExpanded] = React.useState(true);
//     const [settingexpanded, setsettingExpanded] = React.useState(true);
//     const handlePress = () => setExpanded(!expanded);
//     const handlePress2 = () => setsettingExpanded(!settingexpanded);

//     const doUserLogOut =  () => {
//         navigation.replace("Welcome");
//         AsyncStorage.clear();
//         AsyncStorage.setItem("OnboardingVisited","true");
//       };

//     return (
//         <ScrollView
//             style={[
//                 styles.container,
//                 {
//                     backgroundColor: 'rgba(255,255,255,1)',
//                 },
//             ]}
//             showsVerticalScrollIndicator={false}>
//             <MyStatusBar backgroundColor="#fff" barStyle={"dark-content"} />
//             <TouchableOpacity
//                 style={styles.iconn}
//                 onPress={() => {
//                     navigation.goBack();
//                 }}>
//                 <AntDesign name="close" size={25} color="black" />
//             </TouchableOpacity>
//             <View style={styles.words}>
//                 {data.map((item, index) => {
//                     return (
//                         <>
//                             <Pressable
//                                 style={styles.space}
//                                 key={index}
//                                 onPress={() => {
//                                     navigation.replace(item.sub_menu ? '' : item.link);
//                                     if(item.name==="Logout"){
//                                         doUserLogOut();
//                                     }
//                                 }}>
//                                 {item.sub_menu ?
//                                     <View>
//                                         {item.link === 'accountmenu' ?
//                                             <Collapse
//                                                 onToggle={(e) => handlePress(e)}
//                                             >
//                                                 <CollapseHeader>
//                                                     <View style={{
//                                                         flexDirection: 'row',
//                                                         alignItems: 'center',
//                                                         justifyContent: 'space-between',
//                                                         paddingRight: 20,
//                                                     }}>
//                                                         <View>
//                                                             <Text style={styles.letter}>{item.name}</Text>
//                                                         </View>
//                                                         <View>
//                                                             {
//                                                                 expanded === true ?
//                                                                     <Feather name="chevron-down" size={25} color="black" /> :
//                                                                     <Feather name="chevron-up" size={25} color="black" />
//                                                             }

//                                                         </View>
//                                                     </View>

//                                                 </CollapseHeader>
//                                                 <CollapseBody>
//                                                     {item.sub_menu.map(({ link, label, logout, countNo }, si) => (
//                                                         <Pressable
//                                                             key={index}
//                                                             onPress={() => {
//                                                                 navigation.replace(link, { countNo });
//                                                             }}
//                                                         >
//                                                             <Text style={styles.subitems}>{label}</Text>
//                                                         </Pressable>
//                                                     ))}
//                                                 </CollapseBody>
//                                             </Collapse> : <></>
//                                         }
//                                         {item.link === 'settingmenu' ? <Collapse
//                                             onToggle={(e) => handlePress2(e)}
//                                         >
//                                             <CollapseHeader>
//                                                 <View style={{
//                                                     flexDirection: 'row',
//                                                     alignItems: 'center',
//                                                     justifyContent: 'space-between',
//                                                     paddingRight: 20,
//                                                 }}>
//                                                     <View>
//                                                         <Text style={styles.letter}>{item.name}</Text>
//                                                     </View>
//                                                     <View>
//                                                         {
//                                                             settingexpanded === true ?
//                                                                 <Feather name="chevron-down" size={25} color="black" /> :
//                                                                 <Feather name="chevron-up" size={25} color="black" />
//                                                         }

//                                                     </View>
//                                                 </View>

//                                             </CollapseHeader>
//                                             <CollapseBody>
//                                                 {item.sub_menu.map(({ link, label, logout }, si) => (
//                                                     <Pressable
//                                                         key={index}
//                                                         onPress={() => {
//                                                             navigation.replace(logout ? doUserLogOut() : link);
//                                                         }}>
//                                                         <Text style={styles.subitems}>{label}</Text>
//                                                     </Pressable>
//                                                 ))}
//                                             </CollapseBody>
//                                         </Collapse> :
//                                             <></>
//                                         }
//                                     </View> :

//                                     <Text style={styles.letter}>{item.name}</Text>
//                                 }
//                             </Pressable>

//                         </>

//                     );
//                 })}
//             </View>
//         </ScrollView >
//     );
// };

// export default CustomDrawerContent;
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Pressable,
    StatusBar,
    ToastAndroid,
    ImageBackground,
    Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from "react-native-linear-gradient";
import Feather from 'react-native-vector-icons/Feather';
import { MENU } from '../model/data';
import styles from './style';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { fulllogo, homebg, loginimg, right, user1 } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { Space } from '../common/commoncomponents';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, fontFamily, fontsize } from '../common/commonitem';
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = MENU;

const CustomDrawerContent = ({ navigation }) => {
    const [userData, setUserData] = useState("");

    useEffect(() => {
        getMemeberData();
      }, []);
    const getMemeberData = async () => {
        let AuthData=await AsyncStorage.getItem("authData");
        setUserData(JSON.parse(AuthData));
        console.log("Memeber data: ",userData)
    }
    const [expanded, setExpanded] = React.useState(true);
    const [settingexpanded, setsettingExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const handlePress2 = () => setsettingExpanded(!settingexpanded);

    const doUserLogOut =  () => {
        navigation.replace("Welcome");
        AsyncStorage.clear();
        // AsyncStorage.setItem("OnboardingVisited","true");
    };

    return (
        <ScrollView
            style={[
                styles.container,
                {
                    backgroundColor: 'rgba(255,255,255,1)',
                },
            ]}
            showsVerticalScrollIndicator={false}>
            <MyStatusBar backgroundColor="#fff" barStyle={"dark-content"} />
            <LinearGradient
                colors={['#000', '#e1c6ef']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
            >

                <ImageBackground source={loginimg} resizeMode="cover" style={{
                    height: 150,
                    paddingHorizontal: 30,
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity
                        style={styles.iconn}
                        onPress={() => {
                            navigation.goBack();
                        }}>
                        <AntDesign name="close" size={15} color="black" />
                    </TouchableOpacity>
                    <View style={{
                        height: 75,
                        width: 75,
                        backgroundColor: COLORS.primarydarkgreen,
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        borderRadius: 10,
                        marginRight: 15,
                    }}>
                        <Image
                            style={{ height: 70, width: 70, borderRadius: 10, }}
                            source={{ uri : userData.profileImage}}
                            resizeMode='cover'
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text numberOfLines={2} style={{
                            fontSize: fontsize.font18,
                            fontFamily: fontFamily.extraBold,
                            color: COLORS.white,
                        }}>{userData.firstName}</Text>
                        <Space spacenumber={2} />
                        <Text numberOfLines={1} style={allcommonstyle.pagedesc}>{userData.aboutMe}</Text>
                    </View>


                </ImageBackground>
            </LinearGradient>

            <View style={styles.words}>
                {data.map((item, index) => {
                    return (
                        <>
                            <TouchableOpacity
                                style={styles.space}
                                key={index}
                                onPress={() => {
                                    navigation.replace(item.sub_menu ? '' : item.link);
                                    if(item.name==="Logout"){
                                        doUserLogOut();
                                    }
                                }}>
                                <View style={allcommonstyle.mainSettingsItem}>
                                    <View style={allcommonstyle.rightSettingsItem}>
                                        <View style={allcommonstyle.roundicon}></View>
                                        <Text style={{
                                            fontSize: fontsize.font12,
                                            fontFamily: fontFamily.regular,
                                            color: COLORS.primarydarkgreen,
                                        }}>{item.name}</Text>
                                    </View>
                                    <Image
                                        style={{
                                            height: 10,
                                            width: 10,
                                        }}
                                        source={right}
                                        resizeMode='contain'
                                    />
                                </View>
                            </TouchableOpacity>

                        </>

                    );
                })}
            </View>
        </ScrollView >
    );
};

export default CustomDrawerContent;
