
import { StyleSheet } from 'react-native';
import { boxShadow, Color, fontFamily, fontSize } from '../../common/Common';

export const styles = StyleSheet.create({
    faqtitle: {
        fontSize: fontSize.font13,
        fontFamily: fontFamily.n700,
        color: Color.themeprimary,
        flex: 1,
    },
    maintitlecontainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    expandedicon: {
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
    },
    faqcard: {
        marginHorizontal: 20,
      
        backgroundColor: '#F2F2F2',
        padding: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Color.themeprimary,
    }
});
