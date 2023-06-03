import { CallAPICommonDML } from "./middleware/apiCalls";
import { endPoint } from "./middleware/constants";


export const LibGetMembersList = async (memberId,isSaved,searchText,ordering,roleId) => {
    let tag = "Members";
    let bookmarkBy = 0;
    if (isSaved) {
        bookmarkBy = memberId;
    }
    /** Calling API Start **/
    return CallAPICommonDML(
        endPoint.getmemberlist+"?ordering=0&memberId="+memberId+"&isSaved="+isSaved,
        endPoint.getMethod,
        {},
        tag
    ).then((res) => {
        // setMemeberListData(res.data.result)
        console.log(tag + " Success -----------------");
        return res;
    });s
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