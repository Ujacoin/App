
import { StyleSheet } from 'react-native';
import { Color, fontFamily, fontSize } from '../common/Common';

export const styles = StyleSheet.create({
    logoutbtn: {
        borderWidth: 2,
        alignSelf:'flex-start',
        paddingHorizontal:20,
        paddingVertical:8,
        borderRadius:5,
        borderColor:Color.lightprimary,
    },
    menuimg: {
        marginRight: 14,
        height: 20,
        width: 20
    },
    menuitem: {
        flexDirection: 'row',
        paddingVertical: 5,
        marginBottom: 15,
    },
    profileName: {
        fontSize: fontSize.font20,
        fontFamily: fontFamily.n700,
        color: Color.white,
    },
    profiledesctitle: {
        fontSize: fontSize.font16,
        fontFamily: fontFamily.n200,
        color: Color.white,
    },

});
