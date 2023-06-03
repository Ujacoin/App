
import { StyleSheet } from 'react-native';
import { boxShadow, Color, fontFamily, fontSize } from '../../common/Common';

export const styles = StyleSheet.create({
    title: {
        fontSize: fontSize.font20,
        fontFamily: fontFamily.n700,
        color: Color.themeprimary,

    },
    seealltext: {
        fontSize: fontSize.font14,
        fontFamily: fontFamily.n400,
        color: Color.white,

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
