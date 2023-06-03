const { CallAPICommonDML } = require("./middleware/apiCalls");
const { endPoint } = require("./middleware/constants");

export const LibgetDigitalLibData = async (filter, ordering, category_id, SearchText) => {
    let tag = "DIGITAL LIB";
    let APIUrl = endPoint.getDigitalLibraryUrl + "?ordering=" + ordering;
    if (filter === "all") {
        APIUrl = endPoint.getDigitalLibraryUrl + "?ordering=" + ordering;
    } else if (filter === "search") {
        APIUrl = endPoint.searchdigitallibrary + "?search=" + SearchText;
    } else if (filter === "category") {
        APIUrl = endPoint.getDigitalLibraryByCategoryUrl + "?category=" + category_id;
    } else if (filter === "foryou") {
        APIUrl = endPoint.getDigitalLibraryByCategoryUrl;
    }
    console.log(APIUrl, "-----", filter)
    /** Calling API Start **/
    if (APIUrl !== undefined) {
        return CallAPICommonDML(
            APIUrl,
            endPoint.getMethod,
            {},
            tag
        ).then((res) => {
            // console.log(tag + " Success -----------------", res.data.result);
            // setExcusiveReourceData(res.data.result)
            return res;
        });
    }
    /** Calling API End **/
}