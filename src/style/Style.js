import { StyleSheet } from 'react-native';
import { Color, fontFamily, fontSize } from '../common/Common';

export const globalstyle = StyleSheet.create({
    dectext:{
        fontSize: fontSize.font12,
        fontFamily: fontFamily.light,
        color: Color.black,
        lineHeight: fontSize.font16
    },
    detailtitle: {
        fontFamily: fontFamily.n600,
        color: Color.themeprimary,
        fontSize: fontSize.font20,
    },
    title: {
        fontSize: fontSize.font18,
        fontFamily: fontFamily.n700,
        color: Color.themeprimary,

    },
    seealltext: {
        fontSize: fontSize.font14,
        fontFamily: fontFamily.n400,
        color: Color.white,

    },
    inputlable: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.semiBold,
        color: Color.black,
    },
    chatinput: {
        minHeight: 40,
        flex: 1,
        fontSize: fontSize.font12,
        fontFamily: fontFamily.regular,
        color: Color.black,
    },
    chatbottomcontainer1:{
        backgroundColor: Color.white,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    chatbottomcontainer: {
        backgroundColor: Color.white,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        position:'absolute',
        bottom:0,
        flexDirection: 'row',

    },
    safeAreaViewcontainer: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: Color.white,
    },
    lable: {
        fontSize: fontSize.font14,
        fontFamily: fontFamily.n700,
        color: Color.white,
    },
    Emailtitle: {
        fontSize: fontSize.font20,
        fontFamily: fontFamily.n800,
        color: Color.white,
        textAlign: 'center',
    },
    texthomebuttontext: {
        fontSize: fontSize.font14,
        fontFamily: fontFamily.n800,
        color: Color.themeprimary,
        marginRight: 10,
    },
    texthomebutton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    remberbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    remberboxtext: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.n500,
        color: Color.black,
    },
    profiledesctitle: {
        fontSize: fontSize.font14,
        fontFamily: fontFamily.n400,
        color: Color.white,
        textAlign: 'center',
    },
    roundImageBig: {
        height: 46,
        width: 46,
        borderRadius: 50,
    },
    messageTitleReadMessage: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.n600,
        color: Color.grayLight,
    },
    messageTitleUsername: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.n600,
        color: Color.black,
        paddingHorizontal: 5,
    },
    backheadertext: {
        fontSize: fontSize.font20,
        fontFamily: fontFamily.n600,
        color: Color.black,
    },
    backbuttoncontaiber: {
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    accsectiontitle: {
        fontSize: fontSize.font20,
        fontFamily: fontFamily.n700,
        color: Color.newthemecolor,
        textAlign: 'left',
        paddingHorizontal: 10,
        textTransform: 'uppercase',
    },
    accountcontainer: {
        paddingHorizontal: 10,
    },
    paddingmainsection: {
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    iconcontainer: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: "center",
        marginRight: 15,
    },
    contactcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomColor: Color.border,
        borderBottomWidth: 1,
        paddingHorizontal: 10,
    },
    resentcontainer: {
        width: 90,
        marginRight: 10,
    },
    simpleinput: {
        paddingVertical: Platform.OS === "ios" ? 20 : 13,
        borderWidth: 1,
        borderColor: Color.border,
        backgroundColor: Color.inputbg,
        marginVertical: 10,
        paddingHorizontal: 20,
        fontSize: fontSize.font13,
        fontFamily: fontFamily.n400,
        color: Color.black,
    },
    profilebtnrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 30,
    },
    pagedesc: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.regular,
        color: Color.white,
        width: 200,
        textAlign: 'left',
    },
    pageTitle: {
        fontSize: fontSize.font32,
        fontFamily: fontFamily.n700,
        color: Color.white,
    },
    loginflex: {
        flexDirection: 'column',
    },
    dashedstyle: {
        alignContent: "center",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center"
    },
    paddingView: {
        paddingHorizontal: 30,
    },
    Checkboxcontainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    Checkboxcontainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        flex: 1
    },
    safeAreaView: {
        backgroundColor: Color.skybg,
        flex: 1,
    },
    pv20: {
        paddingVertical: 20
    },
    simpletext: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.n400,
        color: Color.black,
    }
});
