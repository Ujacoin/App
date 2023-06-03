import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-root-toast';
import { CallAPICommonDML } from './middleware/apiCalls';
import { endPoint } from './middleware/constants';
import { prepareData } from './general';


const LibSubmitLogin = async (navigation,params,OnBoarding,SuccessScreen) => {
    let tag = "Login";

    let ServerData = prepareData(params)

    /** Calling API Start **/
    
    if(ServerData){
        CallAPICommonDML(
            endPoint.LoginAPIUrl,
            endPoint.postMethod,
            ServerData,
            tag
        ).then((res) => {
            // console.log(tag+" Success -----------------",res.data.result);
            if(res.status === 200){
            if(res.data.result.roleId == 0){
                navigation.replace(OnBoarding)
            }else{
                navigation.replace(SuccessScreen)
            }
            }else{
                // console.log(tag+" Fail -----------------",JSON.parse(res.request._response).message);
                Toast.show("Username or Password wrong...!");
            }
        });
    }
    /** Calling API End **/
}
export default LibSubmitLogin;