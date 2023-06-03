
import { StyleSheet } from 'react-native';
import { boxShadow, Color, fontFamily, fontSize } from '../../common/Common';

export const styles = StyleSheet.create({
    btnGroup: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: Color.lightprimary,
        marginHorizontal: 30,
        paddingVertical:4,
        paddingHorizontal:5,
    },
    btn: {
        flex: 1,
        borderRightWidth: 0.25,
        borderLeftWidth: 0.25,
        borderColor: '#6B7280'
    },
    btnText: {
        textAlign: 'center',
        paddingVertical: 9,
        fontSize: 9,
    },
    title: {
        fontSize: fontSize.font20,
        fontFamily: fontFamily.n700,
        color: Color.themeprimary,

    },
    seealltext: {
        fontSize: fontSize.font14,
        fontFamily: fontFamily.n400,
        color: Color.black,

    },
    input: {
        borderWidth: 1,
        backgroundColor: 'rgba(225, 255, 225, 0.3)',
        borderColor: Color.white,
        color: Color.white,
        marginHorizontal: 30,
        paddingHorizontal: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        // paddingVertical:5,
    },
});
