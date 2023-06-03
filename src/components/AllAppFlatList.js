//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, Platform, TextInput, Image, Touchable, TouchableOpacity } from 'react-native';
import { boxShadow, Color, fontFamily, fontSize } from '../common/Common';
import { themeImages } from '../data/imgedata';
import { globalstyle } from '../style/Style';
import { Space } from './Space';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { downloadData } from '../lib/middleware/apiCalls';

export const ResentcontactList = (props) => {
    return (
        <TouchableOpacity style={globalstyle.resentcontainer}>
            <View style={globalstyle.rightMessageListItem}>
                <Image
                    style={globalstyle.roundImageBig}
                    source={props.ImageUrl}
                    resizeMode='cover'
                />
            </View>
            <Space spacenumber={5} />
            <Text style={globalstyle.messageTitleUsername}>{props.firstname}</Text>
            <Text style={globalstyle.messageTitleReadMessage}>{props.number}</Text>
        </TouchableOpacity>
    );
}
export const Contactlist = (props) => {
    return (
        <TouchableOpacity style={globalstyle.contactcontainer}>
            <View style={{ width: 60 }}>
                <Image
                    style={globalstyle.roundImageBig}
                    source={props.ImageUrl}
                    resizeMode='cover'
                />
            </View>
            <Space spacenumber={5} />
            <View>
                <Text style={[globalstyle.messageTitleUsername, { color: Color.black }]}>{props.firstname}</Text>
                <Text style={globalstyle.messageTitleReadMessage}>{props.number}</Text>
            </View>

        </TouchableOpacity>
    );
}

// create a component
export const ExcusiveResource = (props) => {
    return (
        <View style={{
            // flexDirection: 'column',
            backgroundColor: Color.white,
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
                    source={props.featureImage}
                    resizeMode='cover'
                />
            </View>
            <View style={{
                padding: 9,

            }}>

                <Text style={{
                    fontSize: fontSize.font16,
                    fontFamily: fontFamily.n600,
                    color: Color.black,
                    marginTop: 5
                }}>
                    {props.title}
                </Text>
                <Text style={{
                    fontSize: fontSize.font12,
                    fontFamily: fontFamily.n400,
                    color: Color.black,
                    marginTop: 5
                }}>
                    {props.description}
                </Text>
                {/* <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginVertical: 5,
                }}>
                    <Ionicons name='star' size={12} color='#FFC90A' />
                    <Text style={{
                        fontFamily: fontFamily.n500,
                        color: Color.gray,
                        marginLeft: 5,
                        fontSize: fontSize.font12,
                    }}>
                        4.9 - By Lea Thompson
                    </Text>
                </View> */}

                <TouchableOpacity style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginVertical: 10,
                }}
                    onPress={()=>{
                        downloadData(props?.lstDigitalLibraryAttachment[0]?.fileName)
                    }}
                >
                    <Image
                        style={{
                            width: 15,
                            height: 15,
                            marginRight: 5,
                        }}
                        source={themeImages.download}
                        resizeMode='contain'
                        tintColor={Color.primaryyellow}
                    />
                    <Text style={{
                        fontSize: fontSize.font12,
                        fontFamily: fontFamily.n600,
                        color: Color.themeprimary,
                    }}>Download</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

// create a component
export const LatestReplays = (props) => {
    return (
        <View
            style={{
                backgroundColor: '#FFFFFF',
                marginHorizontal: 20,
                marginVertical: 5,
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                // ...boxShadow,
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
                        fontSize: fontSize.font14,
                        fontFamily: fontFamily.n600,
                        color: Color.black,
                    }}>
                    {props.ReplaysTitle}
                </Text>
                <Space spacenumber={5} />
                <Text
                    numberOfLines={2}
                    style={{
                        fontSize: fontSize.font12,
                        fontFamily: fontFamily.n400,
                        color: Color.black,
                    }}>
                    {props.Replaysdec}
                </Text>
            </View>

        </View>
    );
}

// create a component
export const Connectionlist = (props) => {
    return (
        <View
            style={{
                backgroundColor: '#FFFFFF',
                marginHorizontal: 20,
                marginVertical: 5,
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                // ...boxShadow,
            }}>
            <Image
                style={{
                    width: 46,
                    height: 46,
                    borderRadius:100,
                }}
                source={props.ReplaysImage}
                resizeMode='cover'
            />
            <View style={{ padding: 15, flex: 1 }}>
                <Text
                    numberOfLines={2}
                    style={{
                        fontSize: fontSize.font14,
                        fontFamily: fontFamily.n600,
                        color: Color.black,
                    }}>
                    {props.ReplaysTitle}
                </Text>
                <Text
                    numberOfLines={2}
                    style={{
                        fontSize: fontSize.font12,
                        fontFamily: fontFamily.n400,
                        color: Color.black,
                    }}>
                    {props.Replaysdec}
                </Text>
            </View>

        </View>
    );
}


// create a component
export const Forumpost = (props) => {
    return (
        <View style={{
            // flexDirection: 'column',
            backgroundColor: Color.white,
            ...boxShadow,
            marginRight: 10,
            borderRadius: 15,
            marginBottom: 10,
        }}>
            <View
                style={{
                    backgroundColor: '#FFFFFF',
                    flexDirection: 'row',
                }}>
                <Image
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 100,
                        marginRight: 15,
                    }}
                    source={props.image}
                    resizeMode='cover'
                />
                <View style={{ flex: 1 }}>
                    <Text style={{
                        fontSize: fontSize.font16,
                        fontFamily: fontFamily.n600,
                        color: Color.black,
                    }}>
                        {props.title}
                    </Text>
                    <Text style={{
                        fontSize: fontSize.font12,
                        fontFamily: fontFamily.n400,
                        color: Color.black,
                    }}>
                        {props.date}
                    </Text>
                </View>
            </View>
            <View style={{
                padding: 9,

            }}>


                <Text style={{
                    fontSize: fontSize.font12,
                    fontFamily: fontFamily.n400,
                    color: Color.black,
                    marginTop: 5
                }}>
                    {props.shortDesc}
                </Text>

                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                }}>
                    <TouchableOpacity style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginRight: 10,
                    }}>
                        <Image
                            style={{
                                width: 10,
                                height: 10,
                                marginRight: 10,
                            }}
                            source={themeImages.like}
                            resizeMode='contain'
                        />
                        <Text style={{
                            fontSize: fontSize.font12,
                            fontFamily: fontFamily.n600,
                            color: Color.gray,
                        }}>114 likes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                        <Image
                            style={{
                                width: 10,
                                height: 10,
                                marginRight: 10,
                            }}
                            source={themeImages.comments}
                            resizeMode='contain'
                        />
                        <Text style={{
                            fontSize: fontSize.font12,
                            fontFamily: fontFamily.n600,
                            color: Color.gray,
                        }}>27 comments</Text>
                    </TouchableOpacity>
                </View>


            </View>
            {props.isFavorite &&
                <TouchableOpacity style={{
                    width: 40,
                    borderRadius: 100,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: "absolute",
                    top: 5,
                    right: 5
                }}>
                    <MaterialCommunityIcons name='bookmark' size={20} color={Color.gray} />
                </TouchableOpacity>
            }
            {!props.isFavorite &&
                <TouchableOpacity
                    style={{
                        width: 40,
                        borderRadius: 100,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: "absolute",
                        top: 5,
                        right: 5
                    }}
                >
                    <MaterialCommunityIcons name='bookmark-outline' size={20} color={Color.themeprimary} />
                </TouchableOpacity>

            }
        </View>
    );
}

export const Memberdata = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            // width: '100%',
            marginHorizontal:20,
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
                        backgroundColor: Color.primarydarkgreen,
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                        position: "absolute"
                    }}
                    // source={{ uri : props.profileImage}}
                    source={props.profileImage}
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
                    color: Color.themeprimary,
                    fontSize: fontSize.font12,
                }}>
                    {props.roleName}
                </Text>
                <Text style={{
                    fontSize: fontSize.font16,
                    fontFamily: fontFamily.n600,
                    marginTop: 5,
                    color:Color.black,
                }}>
                    {props.firstName}
                </Text>
                <Text numberOfLines={2} style={{
                    fontSize: fontSize.font12,
                    fontFamily: fontFamily.n400,
                    color: Color.black,
                    marginTop: 5,
                }}>
                    {props.aboutMe}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export const Coachesdata = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            // width: '100%',
            marginHorizontal:20,
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
                        backgroundColor: Color.primarydarkgreen,
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                        position: "absolute"
                    }}
                    source={{ uri : props.profileImage}}
                    // source={props.profileImage}
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
                    color: Color.themeprimary,
                    fontSize: fontSize.font12,
                }}>
                    {props.roleName}
                </Text>
                <Text style={{
                    fontSize: fontSize.font16,
                    fontFamily: fontFamily.n600,
                    marginTop: 5,
                    color:Color.black,
                }}>
                    {props.firstName}
                </Text>
                <Text numberOfLines={2} style={{
                    fontSize: fontSize.font12,
                    fontFamily: fontFamily.n400,
                    color: Color.black,
                    marginTop: 5,
                }}>
                    {props.aboutMe}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

// create a component
export const DigitalLibraryitem = (props) => {
    return (
        <View style={{
            // flexDirection: 'column',
            backgroundColor: Color.white,
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
                    fontSize: fontSize.font16,
                    fontFamily: fontFamily.n600,
                    color: Color.black,
                    marginTop: 5
                }}>
                    {props.title}
                </Text>
                <Text style={{
                    fontSize: fontSize.font12,
                    fontFamily: fontFamily.n400,
                    color: Color.black,
                    marginTop: 5
                }}>
                    {props.shortDesc}
                </Text>
                {/* <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginVertical: 5,
                }}>
                    <Ionicons name='star' size={12} color='#FFC90A' />
                    <Text style={{
                        fontFamily: fontFamily.n500,
                        color: Color.gray,
                        marginLeft: 5,
                        fontSize: fontSize.font12,
                    }}>
                        4.9 - By Lea Thompson
                    </Text>
                </View> */}

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
                        source={themeImages.download}
                        resizeMode='contain'
                        tintColor={Color.primaryyellow}
                    />
                    <Text style={{
                        fontSize: fontSize.font12,
                        fontFamily: fontFamily.n600,
                        color: Color.themeprimary,
                    }}>Download</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

export const Discussionitem = (props) => {
    return (
        <View style={{
            backgroundColor: '#FFFFFF',
            flexDirection: 'column',
            width: 250,
            marginBottom: 8,
            marginRight: 10,
            borderRadius: 10,
            ...boxShadow,
            padding: 10,
        }}>
            <Text
                numberOfLines={1}
                style={{
                    fontSize: fontSize.font16,
                    fontFamily: fontFamily.n600,
                    color: Color.black,
                }}>
                {props.name}
            </Text>
            <Space spacenumber={5} />
            <Text numberOfLines={2} style={{
                fontSize: fontSize.font12,
                fontFamily: fontFamily.n400,
                color: Color.black,
            }}>
                {props.shortDesc}
            </Text>
        </View>
    );
}


export const Groupmemberitem = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onpress ? props.onpress: null}
            style={{
                width: 170,
                backgroundColor: Color.white,
                marginRight: 10,
                alignItems: 'center',
                padding: 10,
                ...boxShadow,
                borderRadius: 10,
                marginBottom: 10,
            }}>
            <View
                style={{
                    width: 100,
                    height: 100,
                    marginBottom: 10,
                }}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: Color.themeprimary,
                        borderRadius: 100,
                    }}
                    source={props.image}
                    resizeMode='cover'
                />


            </View>
            <View style={{
            }}>
                <Text numberOfLines={1} style={{
                    fontSize: fontSize.font16,
                    fontFamily: fontFamily.n600,
                    color: "#050A26",
                    textAlign: 'center',
                }}>
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}