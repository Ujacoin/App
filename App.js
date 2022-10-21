import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert, LogBox } from "react-native";
import { RootSiblingParent } from 'react-native-root-siblings';
import Welcome from "./src/screens/welcome";
import SecondHome from "./src/screens/SecondHome";
import { navigationRef } from "./src/navigations/RootNavigation";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import SplashScreen from "react-native-splash-screen";

const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications


let screens = [
  { name: "Welcome", comp: Welcome },
  { name: "SecondHome", comp: SecondHome },
  { name: "SignUp", comp: SignUp },
  { name: "Login", comp: Login },
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
