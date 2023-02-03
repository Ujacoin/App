//import liraries
import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, StyleSheet, Pressable, Platform, TextInput, Image, Touchable, TouchableOpacity } from 'react-native';
import { styles } from 'react-native-element-dropdown/src/components/TextInput/styles';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';
import { Divider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { assignments, emptyimage, homebg, loginimg, pdf, right, user1, user2, user3, userimage } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { boxShadow, COLORS, fontFamily, fontsize } from './commonitem';
import { Buttonstyles } from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// create a component
export const Space = props => {
    const { spacenumber } = props;

    return (
        <View style={{ padding: spacenumber }}></View>
    );
};

// create a component
export const AppTextInput = props => {

    const { onChangeText, value, placeholder, label, imageicon, righticonname, changeIcon, secureTextEntry } = props;

    return (
        <View style={allcommonstyle.textinputmaincontainer}>

            <View style={allcommonstyle.inputwithicon}>
                <TextInput
                    style={allcommonstyle.input}
                    onChangeText={onChangeText}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                />
                {
                    righticonname ?
                        <TouchableOpacity style={allcommonstyle.righticon} onPress={() => changeIcon()}>
                            <Image
                                style={allcommonstyle.inputicon}
                                source={righticonname}
                                resizeMode='contain'
                                tintColor={COLORS.linearGradient1}
                            />
                        </TouchableOpacity>
                        : <></>
                }


            </View>

        </View>

    );
};


// create a component
export const AppTextInputSearch = props => {

    const { onChangeText, value, placeholder, multiline, imageicon, numberOfLines, changeIcon, secureTextEntry } = props;

    return (
        <View style={allcommonstyle.searchtextinputmaincontainer}>
            <View style={allcommonstyle.search_labelrow}>
                <Image
                    style={allcommonstyle.inputicon}
                    source={imageicon}
                    resizeMode='contain'
                />
                {/* <Text style={allcommonstyle.labeltext}>{label}</Text> */}
            </View>
            <View style={allcommonstyle.inputwithicon}>
                <TextInput
                    style={allcommonstyle.searchinput}
                    onChangeText={onChangeText}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                />

            </View>

        </View>

    );
};

// create a component
export const LatestReplays = (props) => {
    return (
        <View
            style={{
                backgroundColor: '#FFFFFF',
                height: 70,
                width: '100%',
                marginHorizontal: 5,
                marginVertical: 5,
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                ...boxShadow,
            }}>
            <Image
                style={{
                    width: 100,
                    height: "100%",
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                }}
                source={props.ReplaysImage}
                resizeMode='cover'
            />
            <View style={{ padding: 15, flex: 1 }}>
                <Text
                    numberOfLines={2}
                    style={{
                        fontSize: fontsize.font12,
                        fontFamily: fontFamily.semiBold,
                        color: COLORS.black,
                    }}>
                    {props.ReplaysTitle}
                </Text>
                <Text
                    numberOfLines={2}
                    style={{
                        fontSize: fontsize.font10,
                        fontFamily: fontFamily.thin,
                        color: COLORS.black,
                    }}>
                    {props.ReplaysTitle}
                </Text>
            </View>

        </View>
    );
}


// create a component
export const SearchFilter = (props) => {
    return (
        <View
            style={{
            }}>
            {props.selected &&
                <TouchableOpacity
                    style={{
                        paddingVertical: 7,
                        backgroundColor: COLORS.primaryyellow,
                        borderRadius: 100,
                        paddingHorizontal: 15,
                        marginHorizontal: 5,
                    }}
                >
                    <Text style={{
                        fontSize: fontsize.font10,
                        color: COLORS.grayNonSelected,
                        fontFamily: fontFamily.bold,
                        color: COLORS.black,
                    }}>
                        {props.FilterName}
                    </Text>
                </TouchableOpacity>

            }
            {!props.selected &&
                <TouchableOpacity
                    style={{
                        paddingVertical: 7,
                        backgroundColor: COLORS.transparent,
                        borderRadius: 100,
                        paddingHorizontal: 15,
                        marginHorizontal: 5,
                    }}
                >
                    <Text style={{
                        fontSize: fontsize.font10,
                        color: COLORS.grayNonSelected,
                        fontFamily: fontFamily.regular,
                        color: COLORS.black,
                    }}>
                        {props.FilterName}
                    </Text>
                </TouchableOpacity>
            }
        </View>
    );
}

// create a component
export const FormDataList = (props) => {
    return (
        <View style={[allcommonstyle.customCardView, { marginHorizontal: 20, paddingVertical: 20 }]}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>
                <Image
                    style={[allcommonstyle.roundImageBig, { width: 30, height: 30 }]}
                    source={props.ImageUrl}
                    resizeMode='contain'
                />
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginLeft: 10,

                }}>
                    <Text style={{
                        fontFamily: fontFamily.bold,
                        fontSize: fontsize.font12,

                    }}>
                        {props.Title}
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                    }}>
                        <Text style={{
                            fontFamily: fontFamily.regular,
                            fontSize: fontsize.font10,
                            color: "#BEBB30"
                        }}>
                            {props.UserName}
                        </Text>
                        <Text style={{
                            fontFamily: fontFamily.regular,
                            fontSize: fontsize.font10,
                            marginLeft: 10,
                            color: "#9C9999"
                        }}>
                            {props.Time}
                        </Text>
                    </View>
                </View>
                {props.isFavorite &&
                    <Image
                        style={{
                            width: 23,
                            height: 23,
                            position: "absolute",
                            right: 0,
                            top: 0,
                        }}
                        source={require("../assets/images/icons/bookmarked.png")}
                        resizeMode='contain'
                    />
                }
                {!props.isFavorite &&
                    <Image
                        style={{
                            width: 23,
                            height: 23,
                            position: "absolute",
                            right: 0,
                            top: 0,
                        }}
                        source={require("../assets/images/icons/bookmark.png")}
                        resizeMode='contain'
                    />
                }
            </View>
            <View style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 10,
            }}>
                <Text style={{
                    fontFamily: fontFamily.regular,
                    fontSize: fontsize.font11,
                    color: "#000000"
                }}>
                    {props.Description}
                </Text>
                <Text style={{
                    fontFamily: fontFamily.bold,
                    fontSize: fontsize.font11,
                    marginTop: 10,
                    color: COLORS.blue
                }}>
                    {props.Link}
                </Text>

            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: 20,
                flex: 3
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flex: 1
                }}>
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        source={require("../assets/images/icons/likes.png")}
                        resizeMode='contain'
                    />
                    <Text style={{
                        fontFamily: fontFamily.regular,
                        fontSize: fontsize.font10,
                        color: COLORS.grayMedium,
                        marginLeft: 10
                    }}>
                        {props.Likes} Likes
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flex: 1,
                }}>
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        source={require("../assets/images/icons/comments.png")}
                        resizeMode='contain'
                    />
                    <Text style={{
                        fontFamily: fontFamily.regular,
                        fontSize: fontsize.font10,
                        color: COLORS.grayMedium,
                        marginLeft: 10
                    }}>
                        {props.Comments} Replies
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flex: 1,
                }}>
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        source={require("../assets/images/icons/views.png")}
                        resizeMode='contain'
                    />
                    <Text style={{
                        fontFamily: fontFamily.regular,
                        fontSize: fontsize.font10,
                        color: COLORS.grayMedium,
                        marginLeft: 10
                    }}>
                        {props.Views} Views
                    </Text>
                </View>
            </View>
        </View>
    );
}

// create a component
export const ExcusiveResource = (props) => {
    return (
        <View style={{
            flexDirection: 'column',
            backgroundColor: COLORS.white,
            ...boxShadow,
            marginRight: 10,
            width: 230,
            borderRadius: 15,
            marginBottom: 10,
        }}>
            <View
                style={{
                    backgroundColor: '#FFFFFF',
                    width: '100%',
                    height: 160,
                    borderRadius: 15,
                }}>
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                    }}
                    source={props.image}
                    resizeMode='cover'
                />
            </View>
            <View style={{
                padding: 9,

            }}>

                <Text style={{
                    fontSize: fontsize.font14,
                    fontFamily: fontFamily.semiBold,
                    color: COLORS.black,
                    marginTop: 5
                }}>
                    {props.title}
                </Text>
                <Text style={{
                    fontSize: fontsize.font12,
                    fontFamily: fontFamily.light,
                    color: COLORS.black,
                    marginTop: 5
                }}>
                    {props.shortDesc}
                </Text>
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginVertical: 5,
                }}>
                    <Ionicons name='star' size={12} color='yellow' />
                    <Text style={{
                        fontFamily: fontFamily.medium,
                        color: COLORS.gray,
                        marginLeft: 3,
                        fontSize: fontsize.font10,
                    }}>
                        4.9 - By Lea Thompson
                    </Text>
                </View>

                <TouchableOpacity style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginVertical: 10,
                }}>
                    <Image
                        style={{
                            width: 15,
                            height: 15,
                            marginRight: 5,
                        }}
                        source={require("../assets/images/icons/download.png")}
                        resizeMode='contain'
                        tintColor={COLORS.primaryyellow}
                    />
                    <Text style={{
                        fontSize: fontsize.font12,
                        fontFamily: fontFamily.semiBold,
                        color: COLORS.primaryyellow,
                    }}>Download</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
export const Memberdata = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            width: '100%',
            alignItems: "center",
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            height: 140,
            marginBottom: 8,
            overflow: 'hidden',
            borderRadius: 10,
            ...boxShadow,
        }}>
            <View
                style={{
                    width: 140,
                    height: 140,
                    borderRadius: 5,
                }}>
                <Image
                    style={{
                        width: 140,
                        height: 140,
                        backgroundColor: COLORS.primarydarkgreen,
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                        position: "absolute"
                    }}
                    source={props.image}
                    resizeMode='cover'
                />


            </View>
            <View style={{
                marginLeft: 3,
                flex: 1,
                padding: 20,
            }}>
                <Text style={{
                    fontFamily: fontFamily.medium,
                    color: COLORS.primaryyellow,
                    fontSize: fontsize.font10,
                }}>
                    {props.category}
                </Text>
                {/* <Space spacenumber={3} /> */}
                <Text style={{
                    fontSize: fontsize.font16,
                    fontFamily: fontFamily.semiBold,
                    color: "#050A26",
                    marginTop: 5
                }}>
                    {props.name}
                </Text>
                <Text numberOfLines={2} style={{
                    fontSize: 11,
                    lineHeight: 15.5,
                    fontSize: fontsize.font12,
                    fontFamily: fontFamily.regular,
                    color: "#B3B3B3",
                    marginTop: 5
                }}>
                    {props.shortDesc}
                </Text>
            </View>
            <TouchableOpacity
                style={{
                    width: 40,
                    borderRadius: 100,
                    backgroundColor: '#F8F8F8',
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: "absolute",
                    top: 5,
                    right: 5
                }}
            >
                <MaterialCommunityIcons name="bookmark-outline" size={20} color={COLORS.black} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}
export const EventListdata = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                backgroundColor: '#FFFFFF',
                ...boxShadow,
                marginHorizontal: 5,
                marginBottom: 10,
                overflow: 'hidden',
                borderRadius: 10,

            }}>
            <View style={{ height: 150, width: '100%' }} >
                <Image source={props.image} style={{ height: 150, width: '100%' }} />
                {
                    props.paid ?
                        <View
                            style={{
                                backgroundColor: COLORS.linearGradient1,
                                position: 'absolute',
                                right: 10,
                                paddingHorizontal: 25,
                                ...boxShadow,
                                borderRadius: 5,
                                paddingVertical: 5,
                                bottom: -15,
                            }}
                        >
                            <Text
                             style={{
                                fontSize: fontsize.font12,
                                fontFamily: fontFamily.regular,
                                color: COLORS.white,
                            }}
                            >Paid</Text>
                        </View> :<></>}
                         {
                            props.free ?
                        <View
                            style={{
                                backgroundColor: COLORS.linearGradient2,
                                position: 'absolute',
                                right: 10,
                                paddingHorizontal: 25,
                                ...boxShadow,
                                borderRadius: 5,
                                paddingVertical: 5,
                                bottom: -15,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: fontsize.font12,
                                    fontFamily: fontFamily.regular,
                                    color: COLORS.white,
                                }}
                            >Free</Text>
                        </View>:<></>
                }

            </View>

            <View style={{
                marginLeft: 3,
                paddingLeft: 15,
                paddingRight: 15,
                paddingVertical: 15,

            }}>

                {/* <View
                    style={{
                        borderWidth: 1,
                        alignSelf: 'flex-start',
                        borderRadius: 5,
                        borderColor: COLORS.primarydarkgreen,
                        paddingVertical: 5,
                        paddingHorizontal: 12
                    }}>
                    <Text
                        numberOfLines={1}
                        style={{
                            fontFamily: fontFamily.medium,
                            color: COLORS.primarydarkgreen,
                            fontSize: fontsize.font10,
                        }}
                    >{props.industry}</Text>
                </View> */}
                <Space spacenumber={5} />
                <Text numberOfLines={1} style={{
                    fontFamily: fontFamily.medium,
                    color: COLORS.primaryyellow,
                    fontSize: fontsize.font10,
                }}>
                    {props.sort}
                </Text>
                <Text numberOfLines={1} style={{
                    fontSize: fontsize.font16,
                    fontFamily: fontFamily.semiBold,
                    color: COLORS.primarydarkgreen,
                    marginTop: 5
                }}>
                    {props.name}
                </Text>
                {/* <Space spacenumber={3} />
                <Text numberOfLines={2} style={{
                    fontSize: fontsize.font11,
                    fontFamily: fontFamily.regular,
                    color: COLORS.black,
                }}>
                    {props.shortDesc}
                </Text> */}
                <Space spacenumber={6} />
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                    <Image source={user1} style={{ height: 30, width: 30, borderRadius: 100, }} />
                    <Image source={user2} style={{ height: 30, width: 30, borderRadius: 100, left: -15 }} />
                    <Image source={user3} style={{ height: 30, width: 30, borderRadius: 100, left: -30 }} />
                </View>
            </View>

        </TouchableOpacity>
    );
}

export const Replaysitem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPressCard} style={{
            width: '100%',
            alignItems: "center",
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            height: 140,
            marginBottom: 8,
            overflow: 'hidden',
            borderRadius: 10,
            ...boxShadow,
        }}>
            <View
                style={{
                    width: 140,
                    height: 140,
                    borderRadius: 5,
                }}>
                <Image
                    style={{
                        width: 140,
                        height: 140,
                        backgroundColor: COLORS.primarydarkgreen,
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                        position: "absolute"
                    }}
                    source={props.image}
                    resizeMode='cover'
                />


            </View>
            <View style={{
                marginLeft: 3,
                flex: 1,
                padding: 20,
            }}>
                {/* <Space spacenumber={3} /> */}
                <Text numberOfLines={1} style={{
                    fontSize: fontsize.font16,
                    fontFamily: fontFamily.semiBold,
                    color: "#050A26",
                    marginTop: 5
                }}>
                    {props.name}
                </Text>
                <Text numberOfLines={3} style={{
                    fontSize: 11,
                    lineHeight: 15.5,
                    fontSize: fontsize.font12,
                    fontFamily: fontFamily.regular,
                    color: "#B3B3B3",
                    marginTop: 5
                }}>
                    {props.shortDesc}
                </Text>
            </View>

        </TouchableOpacity>
    );
}
export const Fundingitem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            width: '100%',
            alignItems: "center",
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            marginBottom: 8,
            overflow: 'hidden',
            borderRadius: 10,
            ...boxShadow,
        }}>

            <View style={{
                marginLeft: 3,
                flex: 1,
                padding: 20,
            }}>
                <View
                    style={{
                        // borderWidth: 1,
                        alignSelf: 'flex-start',
                        // borderRadius: 5,
                        // borderColor: COLORS.primarydarkgreen,
                        // paddingVertical: 5,
                        paddingHorizontal: 12,
                        borderRadius: 5,
                        backgroundColor: COLORS.primaryyellow,
                        paddingVertical: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            fontFamily: fontFamily.medium,
                            color: COLORS.white,
                            fontSize: fontsize.font10,
                        }}
                    >{props.topbox}</Text>
                </View>


                <Space spacenumber={7} />
                <Text style={{
                    fontSize: fontsize.font16,
                    fontFamily: fontFamily.semiBold,
                    color: "#050A26",
                    marginTop: 5
                }}>
                    {props.name}
                </Text>
                <Space spacenumber={3} />
                <Text style={{
                    fontFamily: fontFamily.medium,
                    color: COLORS.primarydarkgreen,
                    fontSize: fontsize.font10,
                }}>
                    {props.date}
                </Text>
                <Text style={{
                    fontSize: fontsize.font12,
                    fontFamily: fontFamily.light,
                    color: COLORS.black,
                    marginTop: 5
                }}>
                    {props.shortDesc}
                </Text>
            </View>
            <TouchableOpacity
                style={{
                    width: 40,
                    borderRadius: 100,
                    backgroundColor: '#F8F8F8',
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: "absolute",
                    top: 5,
                    right: 5
                }}
            >
                <MaterialCommunityIcons name="bookmark-outline" size={20} color={COLORS.black} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

export const Attachmentitem = (props) => {
    return (
        <View style={{
            alignItems: "center",
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            height: 90,
            width: 320,
            marginVertical: 5,
            marginRight: 20,
            overflow: 'hidden',
            ...boxShadow,
            borderRadius: 10,
        }}>
            <View
                style={{
                    width: 80,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Image
                    style={{
                        width: 60,
                        height: 60,
                    }}
                    source={pdf}
                    resizeMode='cover'
                />


            </View>
            <View style={{
                flex: 1,
            }}>
                <Text style={{
                    fontSize: fontsize.font11,
                    fontFamily: fontFamily.regular,
                    color: "#050A26",
                    marginTop: 5
                }}>
                    {props.name}
                </Text>
                <Text numberOfLines={2} style={{
                    fontSize: 11,
                    lineHeight: 15.5,
                    fontSize: fontsize.font12,
                    fontFamily: fontFamily.regular,
                    color: "#B3B3B3",
                    marginTop: 5
                }}>
                    {props.shortDesc}
                </Text>
            </View>
        </View>
    );
}

export const Serviceprovidersitem = (props) => {
    return (
        <View style={{
            // width: '100%',
            alignItems: "center",
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            height: 120,
            marginVertical: 15,
            width: 310,
            marginRight: 10,
            overflow: 'hidden',
            borderRadius: 10,
            ...boxShadow,
        }}>
            <View
                style={{
                    width: 100,
                    height: '100%',
                    borderRadius: 5,
                    backgroundColor: COLORS.primarydarkgreen,
                }}>
                <Image
                    style={{
                        width: 100,
                        height: '100%',
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                        position: "absolute"
                    }}
                    source={props.image}
                    resizeMode='cover'
                />


            </View>
            <View style={{
                marginLeft: 3,
                flex: 1,
                padding: 10,
            }}>
                <Text numberOfLines={1} style={{
                    fontFamily: fontFamily.medium,
                    color: COLORS.primaryyellow,
                    fontSize: fontsize.font10,
                }}>
                    {props.category}
                </Text>
                {/* <Space spacenumber={3} /> */}
                <Text numberOfLines={1} style={{
                    fontSize: fontsize.font16,
                    fontFamily: fontFamily.semiBold,
                    color: "#050A26",
                    marginTop: 5
                }}>
                    {props.name}
                </Text>
                <Text numberOfLines={2} style={{
                    fontSize: 11,
                    lineHeight: 15.5,
                    fontSize: fontsize.font12,
                    fontFamily: fontFamily.regular,
                    color: COLORS.black,
                    marginTop: 5
                }}>
                    {props.shortDesc}
                </Text>
            </View>
            {/* <TouchableOpacity
                style={{
                    width: 40,
                    borderRadius: 100,
                    backgroundColor: '#F8F8F8',
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: "absolute",
                    top: 5,
                    right: 5
                }}
            >
                <MaterialCommunityIcons name="bookmark-outline" size={20} color={COLORS.black} />
            </TouchableOpacity> */}
        </View>
    );
}

export const Homegoaldata = (props) => {
    return (
        <View style={{
            backgroundColor: '#FFFFFF',
            ...boxShadow,
            marginHorizontal: 20,
            marginVertical: 15,
            overflow: 'hidden',
            borderRadius: 10,
            paddingVertical: 25,
        }}>

            <View style={{
                marginLeft: 3,
                paddingLeft: 25,
                paddingRight: 40,

            }}>

                <View
                    style={{
                        borderWidth: 1,
                        alignSelf: 'flex-start',
                        borderRadius: 5,
                        borderColor: COLORS.primarydarkgreen,
                        paddingVertical: 5,
                        paddingHorizontal: 12
                    }}>
                    <Text
                        style={{
                            fontFamily: fontFamily.medium,
                            color: COLORS.primarydarkgreen,
                            fontSize: fontsize.font10,
                        }}
                    >GOAL</Text>
                </View>
                <Space spacenumber={5} />
                <Text>
                    <Text style={{
                        fontFamily: fontFamily.light,
                        color: COLORS.black,
                        fontSize: fontsize.font10,
                    }}>
                        Target Date:
                    </Text>
                    <Space spacenumber={2} />
                    <Text style={{
                        fontFamily: fontFamily.semiBold,
                        color: COLORS.black,
                        fontSize: fontsize.font10,
                    }}>
                        Aug 9
                    </Text>
                    <Space spacenumber={5} />
                    <Text style={{
                        fontFamily: fontFamily.medium,
                        color: COLORS.primaryyellow,
                        fontSize: fontsize.font10,
                    }}>
                        Change
                    </Text>
                </Text>

                {/* <Space spacenumber={3} /> */}
                <Text style={{
                    fontSize: fontsize.font16,
                    fontFamily: fontFamily.semiBold,
                    color: COLORS.primarydarkgreen,
                    marginTop: 5
                }}>
                    {props.name}
                </Text>
                <Space spacenumber={3} />
                <Text numberOfLines={2} style={{
                    fontSize: fontsize.font11,
                    fontFamily: fontFamily.regular,
                    color: COLORS.black,
                }}>
                    {props.shortDesc}
                </Text>
            </View>
            <Space spacenumber={10} />
            <View style={{ paddingHorizontal: 20, }}>
                <Divider />
                <Space spacenumber={10} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                        <Image source={user1} style={{ height: 30, width: 30, borderRadius: 100, }} />
                        <Image source={user2} style={{ height: 30, width: 30, borderRadius: 100, left: -15 }} />
                        <Image source={user3} style={{ height: 30, width: 30, borderRadius: 100, left: -30 }} />
                        <Text numberOfLines={2} style={{
                            fontSize: fontsize.font9,
                            fontFamily: fontFamily.regular,
                            color: COLORS.black,
                        }}>
                            3 others working on this
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            borderRadius: 5,
                            backgroundColor: COLORS.primaryyellow,
                            paddingVertical: 10,
                            width: 90,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{
                            fontSize: fontsize.font10,
                            fontFamily: fontFamily.semiBold,
                            color: COLORS.white,
                        }}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
export const Fundingdata = (props) => {
    return (
        <View style={{
            backgroundColor: '#FFFFFF',
            ...boxShadow,
            marginRight: 10,
            marginVertical: 15,
            overflow: 'hidden',
            borderRadius: 10,
            paddingVertical: 25,
        }}>

            <View style={{
                marginLeft: 3,
                paddingLeft: 25,
                paddingRight: 40,

            }}>

                <View
                    style={{
                        // borderWidth: 1,
                        alignSelf: 'flex-start',
                        // borderRadius: 5,
                        // borderColor: COLORS.primarydarkgreen,
                        // paddingVertical: 5,
                        paddingHorizontal: 12,
                        borderRadius: 5,
                        backgroundColor: COLORS.primaryyellow,
                        paddingVertical: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            fontFamily: fontFamily.medium,
                            color: COLORS.white,
                            fontSize: fontsize.font10,
                        }}
                    >GOAL</Text>
                </View>
                <Space spacenumber={5} />

                <Text style={{
                    fontSize: fontsize.font16,
                    fontFamily: fontFamily.semiBold,
                    color: COLORS.primarydarkgreen,
                    marginTop: 5
                }}>
                    {props.name}
                </Text>
                <Space spacenumber={3} />
                <Text numberOfLines={2} style={{
                    fontSize: fontsize.font11,
                    fontFamily: fontFamily.regular,
                    color: COLORS.black,
                }}>
                    {props.shortDesc}
                </Text>

            </View>
            {props.isFavorite &&
                <Image
                    style={{
                        width: 20,
                        height: 20,
                        position: "absolute",
                        right: 10,
                        top: 10,
                    }}
                    source={require("../assets/images/icons/bookmarked.png")}
                    resizeMode='contain'
                />
            }
            {!props.isFavorite &&
                <Image
                    style={{
                        width: 20,
                        height: 20,
                        position: "absolute",
                        right: 10,
                        top: 10,
                    }}
                    source={require("../assets/images/icons/bookmark.png")}
                    resizeMode='contain'
                />
            }
        </View>
    );
}


export const Matchesdata = (props) => {
    return (
        <View style={{
            backgroundColor: '#FFFFFF',
            ...boxShadow,
            marginRight: 10,
            width: 310,
            marginVertical: 15,
            overflow: 'hidden',
            borderRadius: 10,

        }}>
            <View>
                <Image source={props.image} style={{ height: 200, width: '100%' }} />
            </View>
            <View style={{
                marginLeft: 3,
                paddingLeft: 25,
                paddingRight: 40,
                paddingVertical: 15,

            }}>

                <View
                    style={{
                        borderWidth: 1,
                        alignSelf: 'flex-start',
                        borderRadius: 5,
                        borderColor: COLORS.primarydarkgreen,
                        paddingVertical: 5,
                        paddingHorizontal: 12
                    }}>
                    <Text
                        numberOfLines={1}
                        style={{
                            fontFamily: fontFamily.medium,
                            color: COLORS.primarydarkgreen,
                            fontSize: fontsize.font10,
                        }}
                    >{props.industry}</Text>
                </View>
                <Space spacenumber={5} />
                <Text numberOfLines={1} style={{
                    fontFamily: fontFamily.medium,
                    color: COLORS.primaryyellow,
                    fontSize: fontsize.font10,
                }}>
                    {props.sort}
                </Text>
                <Text numberOfLines={1} style={{
                    fontSize: fontsize.font16,
                    fontFamily: fontFamily.semiBold,
                    color: COLORS.primarydarkgreen,
                    marginTop: 5
                }}>
                    {props.name}
                </Text>
                <Space spacenumber={3} />
                <Text numberOfLines={2} style={{
                    fontSize: fontsize.font11,
                    fontFamily: fontFamily.regular,
                    color: COLORS.black,
                }}>
                    {props.shortDesc}
                </Text>
            </View>

        </View>
    );
}

export const Groupdata = (props) => {
    return (
        <View style={{
            backgroundColor: '#FFFFFF',
            ...boxShadow,
            marginRight: 10,
            width: 250,
            marginVertical: 15,
            overflow: 'hidden',
            borderRadius: 10,

        }}>
            <View>
                <Image source={props.image} style={{ height: 150, width: '100%' }} />
            </View>
            <View style={{
                marginLeft: 3,
                paddingLeft: 15,
                paddingRight: 15,
                paddingVertical: 15,

            }}>

                <View
                    style={{
                        borderWidth: 1,
                        alignSelf: 'flex-start',
                        borderRadius: 5,
                        borderColor: COLORS.primarydarkgreen,
                        paddingVertical: 5,
                        paddingHorizontal: 12
                    }}>
                    <Text
                        numberOfLines={1}
                        style={{
                            fontFamily: fontFamily.medium,
                            color: COLORS.primarydarkgreen,
                            fontSize: fontsize.font10,
                        }}
                    >{props.industry}</Text>
                </View>
                <Space spacenumber={5} />
                <Text numberOfLines={1} style={{
                    fontFamily: fontFamily.medium,
                    color: COLORS.primaryyellow,
                    fontSize: fontsize.font10,
                }}>
                    {props.sort}
                </Text>
                <Text numberOfLines={1} style={{
                    fontSize: fontsize.font16,
                    fontFamily: fontFamily.semiBold,
                    color: COLORS.primarydarkgreen,
                    marginTop: 5
                }}>
                    {props.name}
                </Text>
                <Space spacenumber={3} />
                <Text numberOfLines={2} style={{
                    fontSize: fontsize.font11,
                    fontFamily: fontFamily.regular,
                    color: COLORS.black,
                }}>
                    {props.shortDesc}
                </Text>
                <Space spacenumber={3} />
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                    <Image source={user1} style={{ height: 30, width: 30, borderRadius: 100, }} />
                    <Image source={user2} style={{ height: 30, width: 30, borderRadius: 100, left: -15 }} />
                    <Image source={user3} style={{ height: 30, width: 30, borderRadius: 100, left: -30 }} />
                </View>
            </View>

        </View>
    );
}
export const Librarydata = (props) => {
    return (
        <View style={{
            backgroundColor: '#FFFFFF',
            ...boxShadow,
            marginRight: 10,
            width: 200,
            marginVertical: 15,
            overflow: 'hidden',
            borderRadius: 10,

        }}>
            <View>
                <Image source={props.image} style={{ height: 100, width: '100%' }} />
            </View>
            <View style={{
                marginLeft: 3,
                paddingLeft: 15,
                paddingRight: 15,
                paddingVertical: 15,

            }}>

                <View
                    style={{
                        borderWidth: 1,
                        alignSelf: 'flex-start',
                        borderRadius: 5,
                        borderColor: COLORS.primarydarkgreen,
                        paddingVertical: 5,
                        paddingHorizontal: 12
                    }}>
                    <Text
                        numberOfLines={1}
                        style={{
                            fontFamily: fontFamily.medium,
                            color: COLORS.primarydarkgreen,
                            fontSize: fontsize.font10,
                        }}
                    >{props.industry}</Text>
                </View>
                {/* <Space spacenumber={5} /> */}
                {/* <Text numberOfLines={1} style={{
                    fontFamily: fontFamily.medium,
                    color: COLORS.primaryyellow,
                    fontSize: fontsize.font10,
                }}>
                    {props.sort}
                </Text> */}
                <Text numberOfLines={1} style={{
                    fontSize: fontsize.font16,
                    fontFamily: fontFamily.semiBold,
                    color: COLORS.primarydarkgreen,
                    marginTop: 5
                }}>
                    {props.name}
                </Text>
                <Space spacenumber={3} />
                <Text numberOfLines={2} style={{
                    fontSize: fontsize.font11,
                    fontFamily: fontFamily.regular,
                    color: COLORS.black,
                }}>
                    {props.shortDesc}
                </Text>

                {props.isFavorite &&
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            position: "absolute",
                            right: 10,
                            top: 10,
                        }}
                        source={require("../assets/images/icons/bookmarked.png")}
                        resizeMode='contain'
                    />
                }
                {!props.isFavorite &&
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            position: "absolute",
                            right: 10,
                            top: 10,
                        }}
                        source={require("../assets/images/icons/bookmark.png")}
                        resizeMode='contain'
                    />
                }
            </View>

        </View>
    );
}

export const Goaldata = (props) => {
    return (
        <>
            <View style={{
                backgroundColor: '#FFFFFF',
                ...boxShadow,
                marginHorizontal: 20,
                overflow: 'hidden',
                borderRadius: 13,
                paddingVertical: 25,
            }}>
                <View style={{
                    backgroundColor: COLORS.primarydarkgreen,
                    width: 12,
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    // height:'100%',
                }}></View>
                <View style={{
                    marginLeft: 3,
                    paddingLeft: 30,
                    paddingRight: 40,

                }}>
                    <Text>
                        <Text style={{
                            fontFamily: fontFamily.light,
                            color: COLORS.black,
                            fontSize: fontsize.font10,
                        }}>
                            Target Date:
                        </Text>
                        <Space spacenumber={2} />
                        <Text style={{
                            fontFamily: fontFamily.semiBold,
                            color: COLORS.black,
                            fontSize: fontsize.font10,
                        }}>
                            Aug 9
                        </Text>
                        <Space spacenumber={5} />
                        <Text style={{
                            fontFamily: fontFamily.medium,
                            color: COLORS.primaryyellow,
                            fontSize: fontsize.font10,
                        }}>
                            Change
                        </Text>
                    </Text>

                    {/* <Space spacenumber={3} /> */}
                    <Text style={{
                        fontSize: fontsize.font16,
                        fontFamily: fontFamily.semiBold,
                        color: COLORS.primarydarkgreen,
                        marginTop: 5
                    }}>
                        {props.name}
                    </Text>
                    <Space spacenumber={5} />
                </View>
                <View style={{ paddingLeft: 30, paddingRight: 20, }}>
                    <Divider />
                    <Space spacenumber={5} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                            <Image source={user1} style={{ height: 30, width: 30, borderRadius: 100, }} />
                            <Image source={user2} style={{ height: 30, width: 30, borderRadius: 100, left: -15 }} />
                            <Image source={user3} style={{ height: 30, width: 30, borderRadius: 100, left: -30 }} />
                            <Text numberOfLines={2} style={{
                                fontSize: fontsize.font9,
                                fontFamily: fontFamily.regular,
                                color: COLORS.black,
                            }}>
                                3 others working on this
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={{
                                borderRadius: 5,
                                backgroundColor: COLORS.primaryyellow,
                                paddingVertical: 10,
                                width: 90,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{
                                fontSize: fontsize.font10,
                                fontFamily: fontFamily.semiBold,
                                color: COLORS.white,
                            }}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Space spacenumber={5} />
        </>
    );
}
export const Assignmentsdataitem = (props) => {
    return (
        <>
            <ImageBackground
                source={assignments}
                imageStyle={{ borderRadius: 12 }}
                resizeMode="cover"
                style={{
                    height: 160,
                    marginHorizontal: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <LinearGradient
                    colors={['rgba(0, 0, 0 , 0.74)', 'rgba(0, 0, 0, 0.75)']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    style={{ height: '100%', width: '100%', paddingLeft: 40, paddingRight: 85, justifyContent: 'center', borderRadius: 12 }}
                >

                    <Text style={{
                        fontSize: fontsize.font16,
                        fontFamily: fontFamily.extraBold,
                        color: COLORS.white,
                    }}>{props.name}</Text>
                    <Space spacenumber={2} />
                    <Text style={{
                        fontSize: fontsize.font14,
                        fontFamily: fontFamily.regular,
                        color: COLORS.primaryyellow,
                    }}>{props.type}</Text>
                    <Space spacenumber={15} />
                    <Text style={{
                        fontSize: fontsize.font14,
                        fontFamily: fontFamily.regular,
                        color: '#8E8E8E',
                    }}>{props.date}</Text>
                </LinearGradient>
                <TouchableOpacity
                    style={{
                        width: 40,
                        borderRadius: 100,
                        backgroundColor: 'transparent',
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: "absolute",
                        top: 5,
                        right: 5
                    }}
                >
                    <MaterialCommunityIcons name="dots-vertical" size={20} color={COLORS.white} />
                </TouchableOpacity>
            </ImageBackground>
            <Space spacenumber={5} />
        </>
    );
}

export const Completedgoal = (props) => {
    return (
        <>
            <View style={{
                backgroundColor: '#FFFFFF',
                ...boxShadow,
                marginHorizontal: 20,
                overflow: 'hidden',
                borderRadius: 13,
                paddingVertical: 25,
            }}>
                <View style={{
                    backgroundColor: COLORS.gray,
                    width: 12,
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    // height:'100%',
                }}></View>
                <View style={{
                    marginLeft: 3,
                    paddingLeft: 30,
                    paddingRight: 40,

                }}>
                    <Text style={{
                        fontFamily: fontFamily.lightI,
                        color: COLORS.black,
                        fontSize: fontsize.font10,
                    }}>
                        Completed Yesterday
                    </Text>
                    <Text style={{
                        fontSize: fontsize.font16,
                        fontFamily: fontFamily.semiBold,
                        color: COLORS.primarydarkgreen,
                        marginTop: 5
                    }}>
                        {props.name}
                    </Text>
                </View>

            </View>
            <Space spacenumber={5} />
        </>
    );
}
export const SettingsItem = (props) => {
    return (
        <TouchableOpacity style={allcommonstyle.mainSettingsItem}>
            <View style={allcommonstyle.rightSettingsItem}>
                <View style={allcommonstyle.iconcontainer}>
                    {
                        props.MaterialIcons ?
                            <MaterialIcons name={props.lefticon} size={25} color={COLORS.white} /> :
                            <Ionicons name={props.lefticon} size={25} color={COLORS.white} />
                    }

                </View>

                <Text style={allcommonstyle.textSettingsItem}>{props.name}</Text>
            </View>
            <Ionicons name="ios-chevron-forward" size={25} color={COLORS.white} />
        </TouchableOpacity>
    );
}


export const ResentcontactList = (props) => {
    return (
        <TouchableOpacity style={allcommonstyle.resentcontainer}>
            <View style={allcommonstyle.rightMessageListItem}>
                <Image
                    style={allcommonstyle.roundImageBig}
                    source={props.ImageUrl}
                    resizeMode='cover'
                />
            </View>
            <Space spacenumber={5} />
            <Text style={allcommonstyle.messageTitleUsername}>{props.firstname}</Text>
            <Text style={allcommonstyle.messageTitleReadMessage}>{props.number}</Text>
        </TouchableOpacity>
    );
}
export const Contactlist = (props) => {
    return (
        <TouchableOpacity style={allcommonstyle.contactcontainer}>
            <View style={{ width: 60 }}>
                <Image
                    style={allcommonstyle.roundImageBig}
                    source={props.ImageUrl}
                    resizeMode='cover'
                />
            </View>
            <Space spacenumber={5} />
            <View>
                <Text style={[allcommonstyle.messageTitleUsername, { color: COLORS.black }]}>{props.firstname}</Text>
                <Text style={allcommonstyle.messageTitleReadMessage}>{props.number}</Text>
            </View>

        </TouchableOpacity>
    );
}
export const OnlinePeopleList = (props) => {
    return (
        <TouchableOpacity style={allcommonstyle.mainOnlineUserItem}>
            <View style={allcommonstyle.rightMessageListItem}>
                <Image
                    style={allcommonstyle.roundImageBig}
                    source={props.ImageUrl}
                    resizeMode='contain'
                />
                <View style={allcommonstyle.onlineRound}></View>
            </View>
        </TouchableOpacity>
    );
}
export const MessageList = (props) => {
    return (
        <TouchableOpacity style={allcommonstyle.mainMessageListItem} onPress={props.onPress}>

            <Image
                style={allcommonstyle.roundImageBig}
                source={props.ImageUrl}
                resizeMode='contain'
            />
            <View style={allcommonstyle.rightMessageListItemChild}>
                <Text numberOfLines={1} style={allcommonstyle.messageTitleUsername}>
                    {props.Name}
                </Text>
                {props.TotalUnreadMessage !== "0" &&
                    <Text numberOfLines={2} style={allcommonstyle.messageTitleUnreadMessage}>
                        {props.LastMessage}
                    </Text>
                }
                {props.TotalUnreadMessage == "0" &&
                    <Text numberOfLines={2} style={allcommonstyle.messageTitleReadMessage}>
                        {props.LastMessage}
                    </Text>
                }
            </View>
            <View style={allcommonstyle.rightMessageListItemChild1}>
                <Text style={allcommonstyle.messageTime}>
                    {props.Time}
                </Text>
                {props.TotalUnreadMessage !== "0" &&
                    <View style={allcommonstyle.messageTitleUnreadMessageCountRound}>
                        <Text style={allcommonstyle.messageTitleUnreadMessageCount}>
                            {props.TotalUnreadMessage}
                        </Text>
                    </View>
                }
            </View>
        </TouchableOpacity>
    );
}

export const NotificationView = (props) => {
    return (
        <View style={[{
            backgroundColor: "#fff",
            paddingVertical: 15,
            alignSelf: "flex-start",
            borderBottomColor: COLORS.lightGray,
            borderBottomWidth: 1,
            ...boxShadow,
            borderRadius: 5,
            marginVertical: 5,
            marginHorizontal: 15,
        }]}>
            <View style={{ flexDirection: "row", }}>
                <View style={{
                    marginHorizontal: 5, height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: "center",
                }}>
                    <Image
                        resizeMode="cover"
                        style={{
                            height: 35,
                            width: 35,
                            borderRadius: 17.5,
                        }}
                        source={user1}
                    />

                </View>

                <View style={[{
                    paddingHorizontal: 20,
                    paddingRight: 20,
                    width: '85%'
                }]} >

                    <Text nu style={{
                        fontFamily: fontFamily.regular,
                        color: COLORS.black,
                        fontSize: fontsize.font15,
                    }}>
                        {props.text}
                    </Text>
                    <Text style={{
                        fontFamily: fontFamily.semiBold,
                        color: COLORS.primarydarkgreen,
                        fontSize: fontsize.font11,
                        marginTop: 5,
                    }}>{props.time}</Text>
                </View>
            </View>
        </View >
    );
};