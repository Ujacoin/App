import Toast from 'react-native-root-toast';
import { CallAPICommonDML } from './middleware/apiCalls';
import { endPoint } from './middleware/constants';
import { prepareData } from './general';


const LibSubmitSignup = async (navigation,email,Password,params,OTPScreen) => {
    let tag = "Signup";

    let ServerData = prepareData(params)

    /** Calling API Start **/
    if(ServerData){
      CallAPICommonDML(
          endPoint.signUpAPIUrl,
          endPoint.postMethod,
          ServerData,
          tag
      ).then((res) => {
          console.log(tag+" Success -----------------",res.status);
          if(res.status === 200){
            Toast.show(res.data.result);
            navigation.replace(OTPScreen,{email:email,password:Password,"ForgotPass":false})
          }else{
            console.log(tag+" Success -----------------",JSON.parse(res.request._response));
            Toast.show(JSON.parse(res.request._response).message);
          }

      });
    }
    /** Calling API End **/
}
export default LibSubmitSignup;