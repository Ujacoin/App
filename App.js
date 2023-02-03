import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert, LogBox } from "react-native";
import { RootSiblingParent } from 'react-native-root-siblings';
import Welcome from "./src/screens/welcome";
import SecondHome from "./src/screens/SecondHome";
import Profile from "./src/screens/Profile";
import DigitalLibrary from "./src/screens/DigitalLibrary";
import Message from "./src/screens/Message";
import OpenForm from "./src/screens/OpenForm";
import { navigationRef } from "./src/navigations/RootNavigation";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import Member from "./src/screens/Member";
import GoalsActivities from "./src/screens/GoalsActivities";
import Home from "./src/screens/Home";
import Goalsdetail from "./src/screens/Goalsdetail";
import Assignments from "./src/screens/Assignments";
import ReplaysList from "./src/screens/ReplaysList";
import ReplaysDetail from "./src/screens/ReplaysDetail";
import FundingList from "./src/screens/FundingList";
import FundingDetail from "./src/screens/FundingDetail";
import Bookmarked from "./src/screens/Bookmarked";
import Notification from "./src/screens/Notification";
import Onboarding from "./src/screens/Onboarding";
import FAQ from "./src/screens/FAQ";
import Group from "./src/screens/Group";
import Groupdetail from "./src/screens/Groupdetail";
import Discussion from "./src/screens/Discussion";
import AddMeeting from "./src/screens/AddMeeting";
import Privacy from "./src/screens/Privacy";
import Terms from "./src/screens/Terms";
import MemberProfile from "./src/screens/MemberProfile";
import ChangePassword from "./src/screens/ChangePassword";
import ForgotPassword from "./src/screens/ForgotPassword";
import Otp from "./src/screens/Otp";
import EditProfile from "./src/screens/EditProfile";
import MessageChatScreen from "./src/screens/MessageChatScreen";
import MyProfile from "./src/screens/MyProfile";
import Events from "./src/screens/Events";
import Completeprofile from "./src/screens/Completeprofile";
import Wallet from "./src/screens/Wallet";
import EmailSignup from "./src/screens/EmailSignup";
import Eventdetail from "./src/screens/Eventdetail";
import Sendmoney from "./src/screens/Sendmoney";
import DirectDeposit from "./src/screens/DirectDeposit";
import CustomDrawerContent from "./src/navigations/CustomDrawerContent";
import SplashScreen from "react-native-splash-screen";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications


let screens = [
  
  { name: "Welcome", comp: Welcome },
  { name: "Wallet", comp: Wallet },
  { name: "Sendmoney", comp: Sendmoney },
  { name: "DirectDeposit", comp: DirectDeposit },
  { name: "Completeprofile", comp: Completeprofile },
  
  { name: "Events", comp: Events },
  { name: "EmailSignup", comp: EmailSignup },
  { name: "MessageChatScreen", comp: MessageChatScreen },
  { name: "Eventdetail", comp: Eventdetail },
  { name: "Bookmarked", comp: Bookmarked },
  { name: "MemberProfile", comp: MemberProfile },
  { name: "MyProfile", comp: MyProfile },
  { name: "EditProfile", comp: EditProfile },
  { name: "ForgotPassword", comp: ForgotPassword },
  { name: "Otp", comp: Otp },
  { name: "ChangePassword", comp: ChangePassword },
  { name: "Terms", comp: Terms },
  { name: "Privacy", comp: Privacy },
  { name: "Group", comp: Group },
  { name: "AddMeeting", comp: AddMeeting },
  { name: "Discussion", comp: Discussion },
  { name: "Groupdetail", comp: Groupdetail },
  { name: "FAQ", comp: FAQ },
  { name: "Onboarding", comp: Onboarding },
  { name: "Notification", comp: Notification },
  { name: "FundingList", comp: FundingList },
  { name: "FundingDetail", comp: FundingDetail },
  { name: "ReplaysList", comp: ReplaysList },
  { name: "ReplaysDetail", comp: ReplaysDetail },
  { name: "Home", comp: Home },
  { name: "Assignments", comp: Assignments },
  { name: "Goalsdetail", comp: Goalsdetail },
  { name: "GoalsActivities", comp: GoalsActivities },
  { name: "SecondHome", comp: SecondHome },
  { name: "SignUp", comp: SignUp },
  { name: "Login", comp: Login },
  { name: "Profile", comp: Profile },
  { name: "DigitalLibrary", comp: DigitalLibrary },
  { name: "Message", comp: Message },
  { name: "OpenForm", comp: OpenForm },
  { name: "Member", comp: Member },
  { name: "CustomDrawerContent", comp: CustomDrawerContent },


];
//Network added
const App = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);




  return (
    <RootSiblingParent>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          {screens.map((screen, index) => {
            return (
              <Stack.Screen
                key={index}
                name={`${screen.name}`}
                component={screen.comp}
                options={{ headerShown: false }}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
};
export default App;
