import { StyleSheet } from 'react-native';
import { COLORS, fontFamily, fontsize } from '../common/commonitem';

const styles = StyleSheet.create({
    videoImg: {
        width: 130,
        height: 130,
        resizeMode: "contain",
        marginTop: 6,
        marginRight: 8,
        borderRadius: 2,
    },
    linkView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginHorizontal: 20,
        marginTop: 10,
        alignItems: "center",
    },
    contactView: {
        borderWidth: 2,
        borderColor: COLORS.teal,
        borderRadius: 5,
        padding: 10,
    },
    titleView: {
        flexDirection: "row",
        marginTop: 80,
        marginHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center",
    },
    firstImg: {
        height: 100,
        width: 100,
        position: "absolute",
        top: 140,
        left: 20,
        borderRadius: 50,
    },
    memberbackground: {
        height: 180,
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "row",
        padding: 20,
        paddingTop: 20,
    },
    container: {
        width: '100%',
        flex: 1,
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    iconn: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: '5%',
        paddingTop: '5%',
    },
    space: {
        paddingTop: '3.5%',
        paddingHorizontal: '3%',
        marginVertical: 3,
        borderRadius: 100,
        paddingBottom: '3.5%',
    },
    words: {
        paddingLeft: '10%',
    },
    letter: {
        fontFamily: fontFamily.semiBold,
        fontSize: fontsize.font18,
        color: 'black',
        letterSpacing: 0.22,
        textAlign: 'left',
    },
    subitems: {
        fontFamily: fontFamily.medium,
        fontSize: fontsize.font14,
        paddingHorizontal: 20,
        marginTop: 20,
        color: 'black',
        letterSpacing: 0.22,
        textAlign: 'left',
    }
});

export default styles;
