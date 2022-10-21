import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging";

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    console.log("Authorization status:", authStatus);
    GetFCMToken();
  }
}

async function GetFCMToken() {
  let fcmtoken = await AsyncStorage.getItem("fcmtoken");
  if (!fcmtoken) {
    try {
      let token = messaging().getToken();
      if (token) {
        console.log('fcm token is ' , token)
        AsyncStorage.setItem('fcmtoken', token);
      } else {
      }
    } catch (error) {
      console.log("error in fcm token", error);
    }
  }
}
