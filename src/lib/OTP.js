import Toast from "react-native-root-toast";
import { prepareData } from "./general";
import { CallAPICommonDML } from "./middleware/apiCalls";
import { endPoint } from "./middleware/constants";

export const LibonSubmitOTP = async (navigation,params,NextScreen) => {
    let tag = "OTP";
    
    let ServerData = prepareData(params)

    /** Calling API Start **/
    if(ServerData){
        CallAPICommonDML(
            endPoint.OTPAPIUrl,
            endPoint.postMethod,
            ServerData,
            tag
        ).then((res) => {
            console.log(tag+" Sucsscess -----------------",res);
            if(res.status === 200){
                Toast.show(res.data.result);
                navigation.replace(NextScreen)
            }else{
                console.log(tag+" Fail -----------------",JSON.parse(res.request._response).result);
                Toast.show("Verification failed...!");
            }
        });
    }
    /** Calling API End **/
}