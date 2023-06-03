import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert, PermissionsAndroid, Platform } from "react-native";
import RNFetchBlob from "rn-fetch-blob";
import ApiMiddleware from "./api";
import { endPoint } from "./constants";

export const CallAPICommonDML = async (url,method,params,tag) => {
    let fcmtoken = "";//await AsyncStorage.getItem("fcmtoken");
    // let tokan;
    // if (fcmtoken) {
    //   tokan = fcmtoken;
    // }
    let AuthData=await AsyncStorage.getItem("authData");
    let head="";
    // console.log("AuthData",AuthData);
    console.log("params",params);
    // console.log("url",url);
    // console.log("signUpAPIUrl",endPoint.signUpAPIUrl);
    // console.log("OTPAPIUrl",endPoint.OTPAPIUrl);
    if(AuthData !== null){
      try{
        if(endPoint.signUpAPIUrl !== url && url !== endPoint.OTPAPIUrl){
          head='Bearer '+JSON.parse(AuthData).token;
        }
      }catch(e){

      }
    }
    // console.log("token",head)
    if (Object.keys(params).length == 0) {
      params=null;
    }
    let requireParams = {
      data: params,
      method: method,
      endpoint: url,
      headers:{
        'Accept': '*/*',
        'Authorization': head
      }
    };
    // console.log("requireParams",requireParams)
    return ApiMiddleware(requireParams)
      .then((res) => {
        // console.log(tag+" --------------------- ",res)
        return res;
      })
      .catch((err) => {
        console.log(tag+"Err --------------------- "+err)
        return err;
        // return "Error";
    });
}
export const downloadData = (REMOTE_PATH) => {
  let date = new Date();
  let image_URL = REMOTE_PATH;  
  let ext = getExtention(image_URL);
  ext = '.' + ext[0];
  const { config, fs } = RNFetchBlob;
  let PictureDir = fs.dirs.PictureDir;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      path:
        PictureDir +
        '/image_' + 
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        ext,
      description: 'Image',
    },
  };
  config(options)
    .fetch('GET', image_URL)
    .then(res => {
      console.log('res -> ', JSON.stringify(res));
      Alert.alert('Downloaded Successfully.');
    });
};

const getExtention = filename => {
  return /[.]/.exec(filename) ?
           /[^.]+$/.exec(filename) : undefined;
};
export const checkPermission = async () => {
    
  // Function to check the platform
  // If iOS then start downloading
  // If Android then ask for permission

  if (Platform.OS === 'ios') {

  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message:
            'App needs access to your storage to download Photos',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Once user grant the permission start downloading
        console.log('Storage Permission Granted.');
      } else {
        // If permission denied then show alert
        alert('Storage Permission Not Granted');
      }
    } catch (err) {
      // To handle permission related exception
      console.warn(err);
    }
  }
};
const openUrl = (url) => {
  try {
      // console.log(url)
      Linking.openURL(url);
      
  } catch (E) {

  }
}
export const checksubscription = async (navigation,Expdate) => {
  let expDate=new Date(Expdate).getTime();
  var msDiff =  expDate - new Date().getTime();    
  var daysRemain = Math.floor(msDiff / (1000 * 60 * 60 * 24));
  
  await AsyncStorage.setItem("subscriptionEndDate",Expdate);
  if(daysRemain <= 3 && daysRemain > 0){
      Alert.alert(
          "Alert",
          "Your subscription soon end on : 01-08-2023",
          [
              {
              text: "Upgrade Now",
              onPress: () => {
                  navigation.navigate("WaitingList",{isRedirect:false})
              },  
              style: "cancel",
              },
              {
                  text: "May be later",
                  onPress: () => {

                  },
                  style: "cancel",
              },
          ]
          );
  }
  else if(daysRemain <= 0){
      Alert.alert(
          "Alert",
          "Your subscription is ended on : 01-08-2023",
          [
              {
              text: "Upgrade Now",
              onPress: () => {
                  navigation.replace("WaitingList",{isRedirect:false})
              },  
              style: "cancel",
              },
          ]
          );
  }
}