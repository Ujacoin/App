import AsyncStorage from "@react-native-async-storage/async-storage";
import { CallAPICommonDML } from "./middleware/apiCalls";
import { endPoint } from "./middleware/constants";
import { prepareData } from "./general";


export const LibGetMyAccountList = async () => {
    let tag = "My Account";
    
    let AuthData = await AsyncStorage.getItem("authData");
    /** Calling API Start **/
    return CallAPICommonDML(
        endPoint.getMyProfile + "?memberid=" + JSON.parse(AuthData).memberId + "&myMemberId=" + JSON.parse(AuthData).memberId,
        endPoint.getMethod,
        {},
        tag
    ).then((res) => {
        console.log(tag + " Success -----------------",res);
        return res;
    });s
    /** Calling API End **/
}


export const LibSaveMyAccountList = async (params) => {
    let tag = "My Account";
    let ServerData = prepareData(params)
    let AuthData = await AsyncStorage.getItem("authData");
    /** Calling API Start **/
    return CallAPICommonDML(
        endPoint.updateprofile,
        endPoint.postMethod,
        ServerData,
        tag
    ).then((res) => {
        console.log(tag + " Success -----------------",res);
        return res;
    });
    /** Calling API End **/
}

export const getProfileById = async (memberId,ProfileMemberId) => {
    let tag = "Profile";
    /** Calling API Start **/
    return CallAPICommonDML(
        endPoint.getMyProfile+"?memberid="+ProfileMemberId+"&myMemberId="+memberId,
        endPoint.getMethod,
        {},
        tag
    ).then((res) => {
        // setMyProfile(res.data.result)
        
        // requestedBy = res.data.result.memberId;
        // setGoallist(res.data.result.boost?.split(","))
        console.log(tag+" Success -----------------",res.data.result);
        return res;
    });
    /** Calling API End **/
}