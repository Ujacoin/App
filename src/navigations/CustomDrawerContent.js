import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Pressable,
    StatusBar,
    ToastAndroid,
    ImageBackground,
    Image
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

const data = MENU;

const CustomDrawerContent = ({ navigation }) => {

    const [expanded, setExpanded] = React.useState(true);
    const [settingexpanded, setsettingExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const handlePress2 = () => setsettingExpanded(!settingexpanded);



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
                colors={[COLORS.linearGradient2, COLORS.linearGradient1]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={{
                    height: 140,
                    paddingHorizontal: 30,
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
            >

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
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderRadius: 100,
                    marginRight: 15,
                }}>
                    <Image
                        style={{ height: 72, width: 72, borderRadius: 100, }}
                        source={user1}
                        resizeMode='cover'
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text numberOfLines={2} style={{
                        fontSize: fontsize.font18,
                        fontFamily: fontFamily.extraBold,
                        color: COLORS.white,
                    }}>Maya</Text>
                    <Space spacenumber={2} />
                    <Text numberOfLines={1} style={allcommonstyle.pagedesc}>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</Text>
                </View>
            </LinearGradient>
            <View style={{
                backgroundColor: COLORS.white,
                // borderTopLeftRadius: 20,
                // borderTopEndRadius: 20,
                // top: -20,
            }}>
                <View style={styles.words}>
                    {data.map((item, index) => {
                        return (
                            <>
                                <TouchableOpacity
                                    style={styles.space}
                                    key={index}
                                    onPress={() => {
                                        navigation.replace(item.sub_menu ? '' : item.link);
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
                                            tintColor={COLORS.primaryyellow}
                                        />
                                    </View>
                                    {/* {item.sub_menu ?
                                    <View>
                                        {item.link === 'accountmenu' ?
                                            <Collapse
                                                onToggle={(e) => handlePress(e)}
                                            >
                                                <CollapseHeader>
                                                    <View style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        paddingRight: 20,
                                                    }}>
                                                        <View>
                                                            <Text style={styles.letter}>{item.name}</Text>
                                                        </View>
                                                        <View>
                                                            {
                                                                expanded === true ?
                                                                    <Feather name="chevron-down" size={25} color="black" /> :
                                                                    <Feather name="chevron-up" size={25} color="black" />
                                                            }

                                                        </View>
                                                    </View>

                                                </CollapseHeader>
                                                <CollapseBody>
                                                    {item.sub_menu.map(({ link, label, logout, countNo }, si) => (
                                                        <Pressable
                                                            key={index}
                                                            onPress={() => {
                                                                navigation.replace(link, { countNo });
                                                            }}
                                                        >
                                                            <Text style={styles.subitems}>{label}</Text>
                                                        </Pressable>
                                                    ))}
                                                </CollapseBody>
                                            </Collapse> : <></>
                                        }
                                        {item.link === 'settingmenu' ? <Collapse
                                            onToggle={(e) => handlePress2(e)}
                                        >
                                            <CollapseHeader>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    paddingRight: 20,
                                                }}>
                                                    <View>
                                                        <Text style={styles.letter}>{item.name}</Text>
                                                    </View>
                                                    <View>
                                                        {
                                                            settingexpanded === true ?
                                                                <Feather name="chevron-down" size={25} color="black" /> :
                                                                <Feather name="chevron-up" size={25} color="black" />
                                                        }

                                                    </View>
                                                </View>

                                            </CollapseHeader>
                                            <CollapseBody>
                                                {item.sub_menu.map(({ link, label, logout }, si) => (
                                                    <Pressable
                                                        key={index}
                                                        onPress={() => {
                                                            navigation.replace(logout ? doUserLogOut() : link);
                                                        }}>
                                                        <Text style={styles.subitems}>{label}</Text>
                                                    </Pressable>
                                                ))}
                                            </CollapseBody>
                                        </Collapse> :
                                            <></>
                                        }
                                    </View> :

                                    <Text style={styles.letter}>{item.name}</Text>
                                } */}
                                </TouchableOpacity>

                            </>

                        );
                    })}
                </View>
            </View>
        </ScrollView >
    );
};

export default CustomDrawerContent;
