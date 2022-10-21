import { StyleSheet } from "react-native";
import colors from "../assets/color/colors";

const globalStyle = StyleSheet.create({
  
  placeholderTextlogin:{
    // width:'50%',
    paddingVertical:Platform.OS === "ios" ? 20 : 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    backgroundColor:colors.white,
    marginVertical: 10,
    paddingHorizontal: 20,
     },
  mainContainer: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  groupSmallText: {
    fontFamily: "Interbook",
    fontSize: 11,

    color: colors.black,
    textAlignVertical: "top",
    letterSpacing: 0.22,
  },
  Interbookfont14: {
    fontFamily: "Interbook",
    fontSize: 14,
    color: colors.black,
    textAlignVertical: "top",
    letterSpacing: 0.22,
  },
  Interbold20: {
    fontFamily: "Inter-Bold",
    fontSize: 20,

    color: colors.black,
    alignText: "left",
    textAlignVertical: "bottom",
    letterSpacing: 0.22,
  },
  Interbold11: {
    fontFamily: "Inter-Bold",
    fontSize: 12,
    color: colors.black,
  },
  Interbold20white: {
    fontFamily: "Inter-Bold",
    fontSize: 20,

    color: colors.white,
    alignText: "left",
    textAlignVertical: "bottom",
    letterSpacing: 0.22,
  },
  Interbold14: {
    fontFamily: "Inter-Bold",
    fontSize: 14,
    color: "rgba(28, 25, 57, 0.8)",
    alignText: "left",
  },
  Interbold_tnc1: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
    lineHeight:16,
    color: "rgba(28, 25, 57, 0.8)",
    alignText: "left",
  },
  Interbold_tnc: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
    color: "rgba(83, 19, 174, 1)",
    alignText: "left",
    fontWeight:"bold",
  },
  MainHeading: {
    fontFamily: "Inter-Bold",
    fontSize: 18,
    color: colors.black,
    alignText: "left",
    marginVertical: 10,
    // letterSpacing: 0.22,
  },
  InterRegular11gray: {
    fontFamily: "Inter",
    fontSize: 12,
    color: colors.black,
    paddingVertical:10,
    alignText: "left",
    letterSpacing: 0.22,
    // flex:1,
    minHight:60,
    
  },
  InterRegular11graytitle:{
    fontFamily: "Inter",
    fontSize: 13,
    color: colors.dark,
    alignText: "left",
    letterSpacing: 0.22,
    flex:1,
    marginBottom:5,
  },
  InterRegular14gray: {
    paddingVertical:Platform.OS === "ios" ? 20 : 10,
    fontFamily: "Inter",
    fontSize: 14,
    color: colors.gray,
    alignText: "left",
    letterSpacing: 0.22,
  },
  InterRegular14white: {
    fontFamily: "Inter",
    fontSize: 14,

    color: colors.white,
    alignText: "left",
    letterSpacing: 0.22,
  },
  InterRegular11white: {
    fontFamily: "Inter",
    fontSize: 11,

    color: colors.white,
    alignText: "left",
    letterSpacing: 0.22,
  },
  fontOperattaBold8: {
    color: colors.black,
    fontSize: 30,
    fontFamily: "Inter",

    letterSpacing: 0.22,
    alignText: "left",
  },
  fontOperatta20Bold8: {
    color: colors.black,
    fontSize: 20,
    fontFamily: "Inter",

    letterSpacing: 0.22,
  },
  InterBlack30: {
    fontSize: 30,
    letterSpacing: 0.216667,
    color: colors.black,
    fontFamily: "Bon Vivant Family Script",
  },
  MemberHeading: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.sistaPink,
    marginBottom: 5,
  },
  imgaddbtn: {
    borderWidth: 1,
    borderColor: colors.lightGold,
    backgroundColor:'#fafafa',
    borderStyle: 'dashed',
    height: 100,
    width: "100%",
    borderRadius: 10,
    marginVertical:10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  /******************** Specially For Group Start *********************/
  group_activity_main_layout:{
    flexDirection: "row",
    flex:1
  },
  group_activity_touchability:{
      backgroundColor: colors.white,
      height: 90,
      flex:1,
  },
  group_activity_main_view:{
    flex:1,
    width:80,
    borderStyle:"solid",
    borderColor:colors.gray,
    borderRightWidth:1,
    paddingRight:9,
    paddingBotton:10
  },
  group_activity_main_view_focused:{
    flex:1,
    width:80,
    borderStyle:"solid",
    borderColor:colors.green,
    borderRightWidth:1,
    paddingRight:9,
    paddingBotton:10
  },
  group_activity_main_view_selected:{
    flex:1,
    width:80,
    borderStyle:"solid",
    borderColor:colors.gray,
    borderWidth:3,
    paddingRight:9,
    paddingBotton:10
  },
  group_activity_right_icon_visible:{
    left:30,
    textAlign:"right"
  },
  group_activity_right_icon_hide:{
    left:30,
    textAlign:"right",
    opacity:0
  },
  group_activity_day:{
    textAlign:"center",
    color: colors.black,
    fontSize: 17,
    fontFamily: "Inter-Bold",
  },
  group_activity_day_focued:{
    textAlign:"center",
    color: colors.green,
    fontSize: 18,
    fontFamily: "Inter-Bold",
  },
  group_activity_date:{ 
    textAlign:"center",
    color: colors.gray,
    fontSize: 10,
    fontFamily: "Inter-Bold",
    marginTop:10,
    marginBottom:17
  },
  group_activity_date_selected:{
    textAlign:"center",
    fontSize: 10,
    fontFamily: "Inter-Bold",
    backgroundColor:colors.black,
    color:colors.white,
    marginTop:10,
    left:5,
    padding:1,
    borderRadius:20
  },
  /******************** Specially For Group End *********************/

  /****************************************/
  /***********NEW STYLE START HERE*********/
  /****************************************/
  logo_container:{
    flex: 1,
    alignItems: "center",
  },
  content_container:{
      justifyContent: "center",
      textAlign: "center",
      // width:200,
      marginTop:20,
  },
  splacescreen_style1: {
    fontFamily: "Inter",
    fontSize: 25,
    lineHeight: 25.2,
    color: colors.white,
    fontWeight: "200",
  },
  splacescreen_style2: {
    flexDirection: "row",
  },
  splacescreen_style3: {
    fontFamily: "Inter",
    fontSize: 70,
    lineHeight: 70.2,
    color: colors.white,
    fontWeight: "900",
  },
  splacescreen_style4: {
    fontFamily: "Inter",
    fontSize: 70,
    lineHeight: 70.2,
    color: colors.white,
    fontWeight: "100",
  },
  splacescreen_style5: {
    fontFamily: "Inter",
    fontSize: 35,
    lineHeight: 35.2,
    color: colors.white,
    fontWeight: "700",
    marginTop:2,
  },
  splacescreen_image: {
    flex: 1,
    width: 258,
    height: 308,
    marginTop:180,

  },
  second_home_content_container:{
      justifyContent: "center",
      textAlign: "center",
      // width:300,
      marginStart:30,
      marginEnd:30,
      marginTop:0,
      flex:1
  },
  second_home_style1: {
    fontFamily: "Inter",
    fontSize: 24,
    lineHeight: 33.2,
    color: colors.white,
    fontWeight: "300",
    marginTop:100,
    flexDirection: "row",
  },
  second_home_logo:{
      marginTop:70
  },
  general_button:{
    backgroundColor: "#1C1939",
    color:colors.white,
    fontSize:20,
    width:300,
    fontWeight: "700",
    alignSelf: 'stretch',
    textAlign: "center",
    borderRadius:10,
    padding:15
  },
  general_button2:{
    backgroundColor: "rgba(83, 19, 174, 1)",
    color:colors.white,
    fontSize:20,
    width:300,
    fontWeight: "700",
    alignSelf: 'stretch',
    textAlign: "center",
    borderRadius:10,
    padding:15
  },
  cloud_left:{
    position:"absolute",
    bottom:0,
    left:0
  },
  cloud_right:{
    position:"absolute",
    bottom:65,
    right:-10
  },
  image: {
    flex: 1,
    width: 213,
    height: 212,
    marginTop:180,

  },
  loginTextInput: {
    // backgroundColor: colors.white,
    marginVertical: 0,
    paddingHorizontal: 40,
  },
  placeholderTextlogin: {
    // width:'50%',
    color: colors.black,
    paddingVertical: Platform.OS === "ios" ? 20 : 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#7165E3",
    fontWeight:"bold",
    backgroundColor: "rgba(113, 101, 227, 0.2)",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  iconplaceholderTextlogin: {
    // width:'50%',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    color: colors.black,
    paddingVertical: Platform.OS === "ios" ? 10 : 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    backgroundColor: colors.white,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  loginCheckbox: {
    // backgroundColor: colors.white,
    marginVertical: 20,
    paddingHorizontal: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  loginheader: {
    //width: windowWidth,
    // backgroundColor: colors.white,
  },
  loginheaderTitle: {
    fontSize: 35,
    color: colors.black,
    fontFamily: "Inter-Bold",
    fontWeight: "bold",
    letterSpacing: 0.22,
    lineHeight: 38.2,
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 20,
    textAlign: "center",
  },
  loginheaderDesc: {
    fontSize: 22,
    width:300,
    color: colors.black,
    fontWeight: "800",
    fontFamily: "Inter",
    letterSpacing: 0.22,
    lineHeight: 22.2,
    alignSelf: "center",
    marginBottom: 20,
    textAlign: "center",
  },
  loginheaderDesc1: {
    fontSize: 16,
    width:300,
    color: "#1C1939",
    fontFamily: "Inter",
    letterSpacing: 0.22,
    lineHeight: 16,
    alignSelf: "center",
    marginBottom: 20,
    marginTop:20,
    textAlign: "center",
  },
});
export default globalStyle;
