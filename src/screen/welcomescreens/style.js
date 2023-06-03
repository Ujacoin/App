import { StyleSheet } from 'react-native';
import { Color, fontFamily, fontSize } from '../../common/Common';

export const welStyle = StyleSheet.create({
    welcomedec:{
        fontSize: fontSize.font20,
        fontFamily: fontFamily.n400,
        color: Color.white,
        textAlign:'center',
        paddingHorizontal:30,
    },
    welcometitle:{
        fontSize: fontSize.font28,
        fontFamily: fontFamily.n600,
        color: Color.themeScarlet,
    },
    appsubtext: {
        fontSize: fontSize.font30,
        fontFamily: fontFamily.n700,
        color: Color.themeprimary,
        lineHeight:fontSize.font30,
    },
    apptitle: {
        fontSize: fontSize.font75,
        fontFamily: fontFamily.n900,
        color: Color.white,
    }
});
