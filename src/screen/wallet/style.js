
import { StyleSheet } from 'react-native';
import { boxShadow, Color, fontFamily, fontSize } from '../../common/Common';

export const styles = StyleSheet.create({
    infotext: {
        fontSize: fontSize.font12,
        color: Color.white,
        fontFamily: fontFamily.n300,
        textAlign: 'center'
    },
    detailname: {
        fontSize: fontSize.font14,
        color: Color.themeprimary,
        fontFamily: fontFamily.n600,
    },
    codetext: {
        fontSize: fontSize.font14,
        color: Color.black,
        fontFamily: fontFamily.n600,
    },
    rightcontainer: {
        width: 130,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bankdetailcontainer: {
        backgroundColor: Color.lightgrey,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 22,
        marginBottom: 10,
        borderRadius: 3,
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
    profiledesctitle: {
        fontSize: fontSize.font14,
        fontFamily: fontFamily.n400,
        color: Color.white,
        textAlign: 'center',
    },

    btntetext: {
        fontSize: fontSize.font12,
        fontFamily: fontFamily.n500,
        textAlign: 'center',
        color: Color.black,
    },
    btnbox: {
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.themeprimary,
        borderRadius: 5,
    },
    profilebtnrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 30,
    },
    profiletopbtncontainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        backgroundColor: Color.white,
        paddingVertical: 15,
        borderRadius: 10,
        ...boxShadow,
        padding: 10,
    },
    profilenametitle: {
        fontSize: fontSize.font20,
        fontFamily: fontFamily.n700,
        color: Color.white,
        textAlign: 'center',

    },
});
