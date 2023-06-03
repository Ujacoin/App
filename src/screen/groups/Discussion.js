import React, { useEffect } from 'react';
import { TouchableOpacity, View, SafeAreaView, TextInput, ScrollView, Text, } from 'react-native';
// import Image from 'react-native-fast-image';
import { Space } from '../../components/Space';
import { themeImages } from '../../data/imgedata';
import { boxShadow, Color, fontFamily, fontSize, windowWidth } from '../../common/Common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { globalstyle } from '../../style/Style';
import Header from '../../components/header/Header';
import { Image } from 'react-native';

const Discussion = ({ navigation }) => {
    const [text, onChangeText] = React.useState("");
    return (
        <SafeAreaView style={[globalstyle.safeAreaViewcontainer, { backgroundColor: Color.white }]}>
            <View style={globalstyle.paddingView}>
                <Header
                    color={Color.black}
                    onLeftpress={() => { navigation.goBack(); }}
                />
            </View>

            <ScrollView
                contentContainerStyle={{
                }}
                showsVerticalScrollIndicator={false}>
                <View style={globalstyle.loginflex}>
                    <View style={[{ flex: 1, }]}>
                        <View style={[{ paddingHorizontal: 20, }]}>
                            <Space spacenumber={5} />
                            {/* <View style={{
                                paddingVertical: 8,
                                alignSelf: 'center',
                                borderRadius: 100,
                                paddingHorizontal: 50,
                                backgroundColor: Color.lightGold
                            }}>
                                <Text style={{
                                    fontSize: fontSize.font12,
                                    fontFamily: fontFamily.n600,
                                    color: Color.black,
                                    textAlign: 'center',
                                    lineHeight: fontSize.font16
                                }}>Yesterday</Text>
                            </View> */}
                            <Space spacenumber={10} />
                            <View>
                                <View style={{

                                    alignItems: 'flex-start',
                                    flexDirection: 'row',
                                }}>
                                    <View
                                        style={{
                                            width: 35,
                                            height: 35,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Image
                                            style={{
                                                width: 30,
                                                height: 30,
                                                backgroundColor: Color.themeprimary,
                                                borderRadius: 100,
                                            }}
                                            source={themeImages.Profile}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <View style={{
                                        backgroundColor: Color.white,
                                        paddingVertical: 15,
                                        paddingHorizontal: 10,
                                        flex: 1,
                                        marginLeft: 10,
                                        ...boxShadow,
                                        marginBottom: 5,
                                        borderBottomLeftRadius: 15,
                                        borderBottomRightRadius: 15,
                                        borderTopRightRadius: 15,
                                    }}>
                                        <Text style={{
                                            fontSize: fontSize.font14,
                                            fontFamily: fontFamily.n500,
                                            color: "#050A26",
                                        }}>
                                            Shequita Hall
                                        </Text>
                                        <Text style={{
                                            fontSize: fontSize.font12,
                                            fontFamily: fontFamily.light,
                                            color: Color.black,
                                            lineHeight: fontSize.font16
                                        }}>Hello</Text>
                                    </View>


                                </View>

                            </View>
                            {/* <Space spacenumber={10} />
                             <View style={{
                                paddingVertical: 8,
                                alignSelf: 'center',
                                borderRadius: 100,
                                paddingHorizontal: 50,
                                backgroundColor: Color.lightGold
                            }}>
                                <Text style={{
                                    fontSize: fontSize.font12,
                                    fontFamily: fontFamily.n600,
                                    color: Color.black,
                                    textAlign: 'center',
                                    lineHeight: fontSize.font16
                                }}>Today</Text>
                            </View> */}
                            <Space spacenumber={10} />
                            <View>
                                <View style={{

                                    alignItems: 'flex-start',
                                    flexDirection: 'row-reverse',
                                }}>
                                    <View
                                        style={{
                                            width: 35,
                                            height: 35,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Image
                                            style={{
                                                width: 30,
                                                height: 30,
                                                backgroundColor: Color.themeprimary,
                                                borderRadius: 100,
                                            }}
                                            source={themeImages.Profile}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <View style={{
                                        backgroundColor: Color.themeprimary,
                                        paddingVertical: 15,
                                        paddingHorizontal: 10,
                                        flex: 1,
                                        marginRight: 10,
                                        ...boxShadow,
                                        marginBottom: 5,
                                        borderBottomLeftRadius: 15,
                                        borderTopLeftRadius: 15,
                                        borderTopRightRadius: 15,
                                    }}>
                                        <Text style={{
                                            fontSize: fontSize.font14,
                                            fontFamily: fontFamily.n700,
                                            color: Color.white,
                                        }}>
                                            You
                                        </Text>
                                        <Text style={{
                                            fontSize: fontSize.font12,
                                            fontFamily: fontFamily.n200,
                                            color: Color.white,
                                            lineHeight: fontSize.font16
                                        }}>Hello</Text>
                                    </View>


                                </View>

                            </View>
                            <Space spacenumber={10} />
                            <View>
                                <View style={{

                                    alignItems: 'flex-start',
                                    flexDirection: 'row-reverse',
                                }}>
                                    <View
                                        style={{
                                            width: 35,
                                            height: 35,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Image
                                            style={{
                                                width: 30,
                                                height: 30,
                                                backgroundColor: Color.themeprimary,
                                                borderRadius: 100,
                                            }}
                                            source={themeImages.Profile}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <View style={{
                                        backgroundColor: Color.themeprimary,
                                        paddingVertical: 15,
                                        paddingHorizontal: 10,
                                        flex: 1,
                                        marginRight: 10,
                                        ...boxShadow,
                                        marginBottom: 5,
                                        borderBottomLeftRadius: 15,
                                        borderTopLeftRadius: 15,
                                        borderTopRightRadius: 15,
                                    }}>
                                        <Text style={{
                                            fontSize: fontSize.font14,
                                            fontFamily: fontFamily.n700,
                                            color: Color.white,
                                        }}>
                                            You
                                        </Text>
                                        <Text style={{
                                            fontSize: fontSize.font12,
                                            fontFamily: fontFamily.n200,
                                            color: Color.white,
                                            lineHeight: fontSize.font16
                                        }}>How are you</Text>
                                    </View>


                                </View>

                            </View>
                            <Space spacenumber={10} />
                            <View>
                                <View style={{

                                    alignItems: 'flex-start',
                                    flexDirection: 'row',
                                }}>
                                    <View
                                        style={{
                                            width: 35,
                                            height: 35,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Image
                                            style={{
                                                width: 30,
                                                height: 30,
                                                backgroundColor: Color.themeprimary,
                                                borderRadius: 100,
                                            }}
                                            source={themeImages.Profile}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <View style={{
                                        backgroundColor: Color.white,
                                        paddingVertical: 15,
                                        paddingHorizontal: 10,
                                        flex: 1,
                                        marginLeft: 10,
                                        ...boxShadow,
                                        marginBottom: 5,
                                        borderBottomLeftRadius: 15,
                                        borderBottomRightRadius: 15,
                                        borderTopRightRadius: 15,
                                    }}>
                                        <Text style={{
                                            fontSize: fontSize.font14,
                                            fontFamily: fontFamily.n500,
                                            color: "#050A26",
                                        }}>
                                            Shequita Hall
                                        </Text>
                                        <Text style={{
                                            fontSize: fontSize.font12,
                                            fontFamily: fontFamily.light,
                                            color: Color.black,
                                            lineHeight: fontSize.font16
                                        }}>Good, Thanks</Text>
                                    </View>


                                </View>

                            </View>
                        </View>

                    </View>
                </View>

            </ScrollView>
            <Space spacenumber={40} />
            <View style={globalstyle.chatbottomcontainer}>
                <View
                    style={{
                        width: 50,
                        height: 50,
                        alignItems: 'center',
                    }}>
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: Color.themeprimary,
                            borderRadius: 100,
                        }}
                        source={themeImages.Profile}
                        resizeMode='cover'
                    />
                </View>
                <TextInput
                    placeholder='Type a message......'
                    multiline={true}
                    style={globalstyle.chatinput}
                    onChangeText={onChangeText}
                    value={text}
                />
                <View
                    style={{
                        width: 50,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...boxShadow,
                    }}>
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: Color.white,
                            borderRadius: 100,
                        }}
                    >
                        <MaterialCommunityIcons
                            name="send"
                            color={Color.themeprimary}
                            size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Discussion;