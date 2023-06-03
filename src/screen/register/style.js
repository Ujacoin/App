
import { StyleSheet } from 'react-native';
import { Color, fontFamily, fontSize } from '../../common/Common';

export const registerstyle = StyleSheet.create({
    orborder: {
        height: 1,
        flex:1,
        backgroundColor:Color.divider,
        marginVertical:30,
    },
    orbordertext:{
        fontSize: fontSize.font14,
        fontFamily: fontFamily.n400,
        color: Color.themeblack,
        backgroundColor:Color.dividertextbg,
        marginHorizontal:10,
        paddingHorizontal:10,
        paddingVertical:3,
    },
    orcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    simpletext: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.n400,
        color: Color.black,
    },
    textbtntext: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.n700,
        color: Color.themeprimary,
    },
    textbtn: {
        // alignItems: 'center',
        // alignSelf: 'center',
        // flex:1,
    },
    logininput: {
        backgroundColor: Color.white,
    },
    formrowgroup: {
        backgroundColor: Color.white,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: Color.themelight,
        marginBottom: 10,
    },
    imagecontainer: {
       
        paddingVertical: 15,
    },
});
