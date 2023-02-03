import { StyleSheet } from "react-native";
import { boxShadow, COLORS, fontFamily, fontsize } from "../../common/commonitem";
export const Menustyles = StyleSheet.create({
  logoicon:{
    width: 35,
    height: 35,
  },
  logoContainer:{
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:COLORS.primarylightgreen,
    // borderRadius:100,
    // ...boxShadow,
  },
  userproimage:{
    width: 35,
    height: 35,
    borderRadius:100,
  },
  userimagContainer:{
    width: 39,
    height: 39,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:100,
    overflow:'hidden',
    backgroundColor:COLORS.white,
  },
  leftcontainer:{
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
    width:'100%',
    paddingVertical:15,
    justifyContent:'space-between',
    
    paddingHorizontal:20,
    
  },
  rightitemContainer:{
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:COLORS.transparentlight,
    borderRadius:100,
    marginLeft:10,
  },
  itemContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: fontsize.font15,
    fontFamily: fontFamily.light,
    color: COLORS.white,
  },
});
