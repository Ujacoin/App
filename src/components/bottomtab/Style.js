import { StyleSheet } from "react-native";
import { boxShadow, Color, fontFamily, fontSize } from "../../common/Common";
export const Menustyles = StyleSheet.create({
    centerbutton: {
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.white,
        borderRadius:10,
    },
    logoicon: {
        width: 35,
        height: 35,
    },
    logoContainer: {
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
    },
    userproimage: {
        width: 35,
        height: 35,
    },
    userimagContainer: {
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
    },
    leftcontainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    lefticon: {
        width: 16,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "blue",
        width: '100%',
        paddingVertical: 15,
        justifyContent: 'space-between',

        paddingHorizontal: 20,

    },
    rightitemContainer: {
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.transparentlight,
        borderRadius: 100,
        marginLeft: 10,
    },
    itemContainer: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: fontSize.font16,
        fontFamily: fontFamily.light,
        color: Color.white,
    },
    bottotabbg: {
        backgroundColor: Color.white,
        justifyContent: 'space-between',
        padding: 25,
        ...boxShadow,
        flexDirection: 'row',
        alignItems:'center',
    }
});
