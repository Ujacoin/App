import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { boxShadow, Color, fontFamily, fontSize, linehight } from '../common/Common';
import { windowHeight } from "../common/responsive";

const allcommonstyle = StyleSheet.create({
    accsectionsubtetx:{
        fontSize: fontSize.font11,
        fontFamily: fontFamily.regular,
        paddingHorizontal: 10,
        color: Color.gray,
    },
    topsmallheader: {
        marginHorizontal: 10,
        fontSize: fontSize.font11,
        fontFamily: fontFamily.bold,
        color: Color.white,
        backgroundColor: Color.newthemecolor,
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius:100,
        marginBottom:10,
        alignSelf:'flex-start'
    },
    btnGroup: {
        flexDirection: 'row',
        alignItems: "center",
    },
    btn: {
        marginTop: 15,
        width: 170,
        backgroundColor: Color.white,
        marginRight: 10,
        alignItems: 'center',
        padding: 10,
        ...boxShadow,
        height: 220,
        borderRadius: 10,
        marginBottom: 10,
    },
    btnText: {
        textAlign: 'center',
        paddingVertical: 16,
        fontSize: 14
    },
    accsectiontitle: {
        fontSize: fontSize.font20,
        fontFamily: fontFamily.bold,
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
        borderBottomColor: Color.lightGray,
        borderBottomWidth: 1,
    },
    resentcontainer: {
        width: 90,
        marginRight: 10,
    },
    backheadertext: {
        fontSize: fontSize.font16,
        fontFamily: fontFamily.semiBold,
        color: Color.black,
    },
    backbuttoncontaiber: {
        height: 30,
        width: 60,
    },
    backheader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    ImageWrapper: {
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 10,
    },
    profileIconbg: {
        backgroundColor: Color.primarydarkgreen,
        borderRadius: 50,
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        position: 'absolute',
        right: -10,
        bottom: -10,
    },
    bgMainImageprofile: {
        width: 130,
        height: 130,
        backgroundColor: Color.primaryyellow,
        resizeMode: 'cover',
        borderRadius: 15,
    },
    dropdown: {
        marginVertical: 10,
        paddingHorizontal: 20,
        height: 60,
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 3,
        borderColor: Color.lightGray,
        padding: 12,
    },
    simpleinput: {
        paddingVertical: Platform.OS === "ios" ? 20 : 13,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: Color.lightGray,
        backgroundColor: Color.white,
        marginVertical: 10,
        paddingHorizontal: 20,
        fontSize: fontSize.font12,
        fontFamily: fontFamily.regular,
        color: Color.black,
    },
    loginTextInput: {
    },
    DatePickerPlaceHolder: {
        color: Color.black,
        paddingVertical: Platform.OS === "ios" ? 15 : 10,
        marginVertical: 3,
        paddingHorizontal: 20,
        fontSize: fontSize.font12,
        fontFamily: fontFamily.regular,
        color: Color.black,
    },
    DateTimeTextInput: {
        flexDirection: "row",
    },
    OpenDatePicker: {
        borderRadius: 10,
        borderWidth: 3,
        marginVertical: 10,
        borderColor: Color.lightGray,
        backgroundColor: Color.white,
        width: "49%",
        marginRight: 10,
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
    chatbottomcontainer: {
        backgroundColor: Color.white,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    daypassedcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: Color.primarydarkgreen,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    faqinput: {
        paddingVertical: Platform.OS === "ios" ? 20 : 10,
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: Color.black,
        backgroundColor: Color.white,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        alignText: "left",
        letterSpacing: 0.22,
    },
    textStylecontainerStyle: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.regular,
        color: Color.black,
    },
    DropDownPickercontainerStyle: {
        // borderWidth: 0,
        // borderBottomWidth: 1,
        // borderBottomColor: Color.primarylightgreen,
        // marginBottom: 20,
        marginBottom: 10,
        paddingVertical: 17,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Color.lightGray,
        backgroundColor: Color.white,
        marginVertical: 10,
        paddingHorizontal: 20,
        fontSize: fontSize.font12,
        fontFamily: fontFamily.regular,
        color: Color.black,

    },
    radiobuttonview: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Bookmarkedtitls: {
        fontSize: fontSize.font20,
        fontFamily: fontFamily.regular,
        color: Color.black,
    },
    carddesc: {
        fontSize: fontSize.font11,
        fontFamily: fontFamily.regular,
        color: Color.black,
    },
    goaltext: {
        fontFamily: fontFamily.medium,
        color: Color.primarydarkgreen,
        fontSize: fontSize.font10,
    },
    cardstyle: {
        backgroundColor: '#FFFFFF',
        ...boxShadow,
        marginHorizontal: 20,
        marginVertical: 15,
        overflow: 'hidden',
        borderRadius: 10,
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    GOALbox: {
        borderWidth: 1,
        alignSelf: 'flex-start',
        borderRadius: 5,
        borderColor: Color.primarydarkgreen,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    texthomebuttontext: {
        fontSize: fontSize.font14,
        fontFamily: fontFamily.extraBold,
        color: Color.black,
    },
    texthomebutton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pagedesc: {
        fontSize: fontSize.font10,
        fontFamily: fontFamily.regular,
        color: Color.white,
        width: 200,
        textAlign: 'left',
    },
    pageTitle: {
        fontSize: fontSize.font24,
        fontFamily: fontFamily.extraBold,
        color: Color.white,
    },
    homepageTitle: {
        fontSize: fontSize.font24,
        fontFamily: fontFamily.extraBold,
        color: Color.white,
        textTransform: 'uppercase',
        textAlign: 'right',
    },
    mainSettingsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomColor: Color.bordre,
        borderBottomWidth: 1,
    },
    rightSettingsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    Paginationwidthcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    roundicon: {
        height: 5,
        width: 5,
        backgroundColor: Color.primaryyellow,
        borderWidth: 1,
        borderColor: Color.primaryyellow,
        borderRadius: 100,
        marginRight: 10,
    },
    textSettingsItem: {
        fontSize: fontSize.font14,
        fontFamily: fontFamily.light,
        color: Color.white,
    },
    mainOnlineUserItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 70,
        justifyContent: 'space-between',
    },
    mainMessageListItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomColor: Color.bordre,
        borderBottomWidth: 1,
    },
    rightMessageListItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: "100%"
    },
    rightMessageListItemChild: {
        marginLeft: 10,
        flex: 1,
    },
    rightMessageListItemChild1: {
        width: 50,
        alignItems: 'center',
        justifyContent: "center",
    },
    messageTitleUsername: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.bold,
        color: Color.black,
        paddingHorizontal: 5,
    },
    messageTitleUnreadMessage: {
        fontSize: fontSize.font11,
        fontFamily: fontFamily.semiBold,
        color: Color.blue,
    },
    messageTitleReadMessage: {
        fontSize: fontSize.font11,
        fontFamily: fontFamily.semiBold,
        color: Color.grayLight,
    },
    messageTitleUnreadMessageCountRound: {
        height: 25,
        width: 25,
        padding: 4,
        borderRadius: 30 / 2,
        backgroundColor: Color.blue,
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
        marginTop: 5
    },
    messageTime: {
        fontSize: fontSize.font11,
        fontFamily: fontFamily.regular,
        color: Color.grayLight,
    },
    messageTitleUnreadMessageCount: {
        fontSize: fontSize.font11,
        fontFamily: fontFamily.regular,
        color: Color.white,
        lineHeight: 16,
    },
    textMessageListItem: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.bold,
        color: Color.primarydarkgreen,
    },
    btntetext: {
        fontSize: fontSize.font10,
        fontFamily: fontFamily.regular,
        color: Color.primarydarkgreen,
    },
    btnicon: {
        height: 20,
        width: 20,
    },
    btnbox: {
        // height: 42,
        // // width: '22%',
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#F8F8F8',
        // borderRadius: 100,
        marginBottom: 10,
    },
    profilebtnrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 30,
    },
    profiletopbtncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '22%',
        backgroundColor: Color.white,
        paddingVertical: 15,
        borderRadius: 10,
        ...boxShadow,
    },
    profilenametitle: {
        fontSize: fontSize.font20,
        fontFamily: fontFamily.semiBold,
        color: Color.white,
        textAlign: 'center',

    },
    profiledesctitle: {
        fontSize: fontSize.font14,
        fontFamily: fontFamily.light,
        color: Color.white,
        marginTop: 4,
        textAlign: 'center',
    },
    profileimage: {
        height: 100,
        width: 100,
    },
    profileimagecontainer: {
        height: 105,
        width: 105,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.white,
        borderRadius: 100,
    },
    
    profileimagenew: {
        height: 100,
        width: 100,
        borderRadius: 100,
    },
    profileediticonnew: {
        height: 40,
        width: 40,
        position:"absolute",
        bottom:0,
        right:0,
        padding:10
    },
    profileimagecontainernew: {
        height: 110,
        width: 110,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.white,
        borderRadius: 100,
    },
    profilewhitecontainefr: {
        backgroundColor: Color.white,
        borderRadius: 13,
        paddingHorizontal: 28,
        ...boxShadow,
        marginBottom: 15,
        marginHorizontal: 20,
    },
    messagewhitecontainefr: {
        backgroundColor: Color.white,
        borderRadius: 13,
        paddingHorizontal: 28,
        ...boxShadow,
        marginBottom: 15,
        marginHorizontal: 20,
    },
    onlineRound: {
        backgroundColor: "#0A8C08",
        height: 10,
        width: 10,
        borderRadius: 180,
        borderWidth: 0.5,
        borderColor: "#FFFFFF",
        position: "absolute",
        bottom: 4,
        right: 15
    },
    toproundcontainer: {
        height: '30%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    forgotcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    remberbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    remberboxtext: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.regular,
        color: Color.black,
    },
    textinputmaincontainer: {
        marginBottom: 10,
        paddingVertical: Platform.OS === "ios" ? 20 : 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Color.lightGray,
        backgroundColor: Color.white,
        marginVertical: 10,
        paddingHorizontal: 20,
        fontSize: fontSize.font12,
        fontFamily: fontFamily.regular,
        color: Color.black,
    },
    searchtextinputmaincontainer: {
        borderBottomWidth: 1,
        borderBottomColor: Color.search_background,
        backgroundColor: Color.search_background,
        borderRadius: 20,
        marginBottom: 20,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    righticon: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputwithicon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.regular,
        color: Color.black,
        flex: 1,
    },
    searchinput: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.regular,
        color: Color.search_text,
        flex: 1,
        placeholderTextColor: "white"
    },
    inputicon: {
        height: 15,
        width: 15,
    },
    roundImageBig: {
        height: 60,
        width: 60,
        borderRadius: 50,
    },
    roundImageSmall: {
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    labeltext: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.light,
        marginLeft: 8,
        color: Color.inputtext,
    },
    labelrow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    search_labelrow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    rowDivider: {
        flex: 1,
        marginHorizontal: 10,
        backgroundColor: Color.lightGray,

    },
    ortext: {
        width: 30,
        textAlign: 'center',
        fontSize: fontSize.font16,
        fontFamily: fontFamily.bold,
        color: Color.lightGray,
    },
    socialiconrow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbuttonrow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginsignuptitle: {
        fontSize: fontSize.font28,
        fontFamily: fontFamily.bold,
        color: Color.primaryyellow,
    },
    description: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.light,
        color: Color.black,
    },
    whitecontainer: {
        backgroundColor: Color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        top: -30,
        paddingHorizontal: 28,
        // justifyContent: 'center',
    },
    loginlogostyle: {
        height: 55,
    },
    loginflex: {
        flexDirection: 'column',
    },
    logintop: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',

    },
    settingtop: {
        height: 260,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 27,
        borderBottomLeftRadius: 27,

    },
    messagetop: {
        height: 320,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 27,
        borderBottomLeftRadius: 27,

    },
    settingbigheight: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 27,
        borderBottomLeftRadius: 27,

    },
    formbigheight: {
        height: 450,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 27,
        borderBottomLeftRadius: 27,

    },
    startedtext: {
        fontSize: fontSize.font14,
        fontFamily: fontFamily.semiBold,
        color: Color.white,
    },
    weldescription: {
        fontSize: fontSize.font20,
        fontFamily: fontFamily.light,
        color: Color.white,
    },
    weltitle: {
        fontSize: fontSize.font53,
        fontFamily: fontFamily.black,
        lineHeight: linehight.linehight53,
        color: Color.white,
    },
    weldetail: {
        fontSize: fontSize.font30,
        fontFamily: fontFamily.bold,
        color: Color.white,
    },
    image: {
        width: '100%',
        height: 344,
        borderRadius: 32,
        zIndex: 99,

    },
    safeAreaViewcontainer: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: Color.white,
    },
    /******/
    formcontaine: {
        backgroundColor: Color.transparent,
        // top: -270,
    },
    digitalcontaine: {
        backgroundColor: Color.transparent,
        marginBottom: 15,
    },
    degital_lib_nametitle: {
        fontSize: fontSize.font24,
        fontFamily: fontFamily.extraBold,
        lineHeight: linehight.linehight53,
        color: Color.white,
        top: -75,

    },
    message_title: {
        fontSize: fontSize.font25,
        fontFamily: fontFamily.CandaraboldI,
        color: Color.white,
        top: -220,
        marginHorizontal: 30,
        fontWeight: "700",
        textAlign: 'left',

    },
    degital_lib_namelatestreplay: {
        top: -70,
        fontSize: fontSize.font18,
        fontFamily: fontFamily.extraBold,
        lineHeight: linehight.linehight53,
        color: Color.white,

    },
    degital_lib_name_excusive_resource: {
        fontSize: fontSize.font16,
        fontFamily: fontFamily.semiBold,
        color: Color.purpal,
        width: "60%",
        textAlign: 'left',

    },
    dropdown_for_you: {
        fontFamily: fontFamily.regular,
        color: Color.black,
        width: 140,
        height: 50,
        backgroundColor: Color.green_code,
        borderColor: Color.green_code,
        borderRadius: 10,
        borderWidth: 1,
        fontSize: 5,
        fontWeight: "700",
        position: "absolute",
        right: 0,
    },
    dropdown_item_for_you: {
        fontFamily: fontFamily.regular,
        color: Color.black,
    },
    degital_lib_namedesc: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.CandaraboldI,
        color: Color.white,
        top: -70,
        width: 200,
        fontWeight: "400",
        textAlign: 'left',

    },
    customCardView: {
        backgroundColor: Color.white,
        borderRadius: 13,
        paddingHorizontal: 20,
        ...boxShadow,
        marginBottom: 15,
    },

});
export default allcommonstyle;