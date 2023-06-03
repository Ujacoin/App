import { CallAPICommonDML } from "./middleware/apiCalls";
import { endPoint } from "./middleware/constants";

export const LibgetFAQ = async () => {
    let tag = "FAQ";
    /** Calling API Start **/
    CallAPICommonDML(
        endPoint.geallfaqdetails+"?search=",
        endPoint.getMethod,
        {},
        tag
    ).then((res) => {
        // console.log(tag+" Success -----------------",res.data.result);
        // setFAQ(res.data.result)
        return res;
    });
    /** Calling API End **/
}