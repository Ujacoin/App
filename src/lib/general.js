import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-root-toast";

export const prepareData = (params) => {
    let ServerData={};
    for(let i=0;i<params.length;i++){
        ServerData[params[i].paramName]=params[i].value;
        if(params[i].validate){
            if(params[i].value === ""){
                Toast.show(params[i].ValidateMessage);
                return false;
            }else{
                if(params[i].confirmPass !== undefined){ 
                    if(params[i].confirmPass.value !== params[i].value){
                        Toast.show(params[i].confirmPass.ValidateMessage);
                        return false;
                    }
                }
            }
        }
    }
    // console.log("ServerData",ServerData)
    return ServerData;
}
export const LibCheckAuth = async (navigation,RoleNotAssignedScreen,RoleAssignedScreen) => {
    try {
      const value = await AsyncStorage.getItem('authData')
      if (value !== null) {
        // value previously stored
        if(JSON.parse(value).roleId==0){
            navigation.replace(RoleNotAssignedScreen)
        }else{
            navigation.replace(RoleAssignedScreen)
        }
      }
    } catch (e) {
      // error reading value
    }
  }