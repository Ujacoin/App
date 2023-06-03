const { CallAPICommonDML } = require("./middleware/apiCalls");
const { endPoint } = require("./middleware/constants");

export const LibgetGoupList = async (category_id, Searchtext) => {
    let tag = "Group";
    let url = endPoint.getgrouplistbyfilter
    return CallAPICommonDML(
        url,
        endPoint.postMethod,
        {
            memberId: 0,
            categoryId: category_id,
            groupId: 0,
            isSaved: false,
            ordering: 0,
            searchTxt: Searchtext,
          },
        tag
    ).then((res) => {
        // setgroupdatalist(res.data.result)
        // console.log(tag + " Success -----------------", groupdatalist);
        return res;
    });
    /** Calling API End **/
}
export const LibgetGoupDetails = async (memberId,groupId) => {
    let tag = "Group Details";
    
    /** Calling API Start **/
    return CallAPICommonDML(
        endPoint.getgroupdetailsbyid+"?groupid="+groupId+"&memberId="+memberId,
        endPoint.getMethod,
        {},
        tag
    ).then((res) => {
        // setGroupDetails(res.data.result)
        // setDiscussiondata(res.data.result.lstGroupDiscussion)
        // setResourcesdata(res.data.result.lstGroupAttachmentViewModel)
        // setMemebersData(res.data.result.lstGroupJoinMembers)
        // // setMeetingsdata(res.data.result.lstGroupMeeting)
        // getGroupActivitiesDays();
        // console.log(tag+" Success -----------------",res);
        return res;
    });
    /** Calling API End **/
}