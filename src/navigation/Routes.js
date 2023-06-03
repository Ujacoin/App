import { createStackNavigator } from '@react-navigation/stack';
import { Image, Button } from 'react-native';

// ================ SCreen
import Welcome from '../screen/welcomescreens/Welcome';
import Home from '../screen/home/Home';
import Welcome2 from '../screen/welcomescreens/Welcome2';
import Login from '../screen/register/Login';
import OTP from '../screen/register/OTP';
import Email from '../screen/register/Email';
import SignUp from '../screen/register/SignUp';
import Walletview2 from '../screen/wallet/Walletview2';
import DigitalLibrary from '../screen/digitalLibrary/DigitalLibrary';
import Wallet from '../screen/wallet/Wallet';
import Sendmoney from '../screen/wallet/Sendmoney';
import Walletprofile from '../screen/wallet/Walletprofile';
import Faq from '../screen/faq/Faq';
import Messages from '../screen/messagesScreen/Messages';
import Groups from '../screen/groups/Groups';
import Discussion from '../screen/groups/Discussion';
import Groupdetail from '../screen/groups/Groupdetail';
import Forum from '../screen/forum/Forum';
import Menu from '../navigation/Menu';
import Member from '../screen/member/Member';
import Account from '../screen/register/Account';
import Coaches from '../screen/coaches/Coaches';
import Coachesprofile from '../screen/coaches/Coachesprofile';
import MemberProfile from '../screen/member/MemberProfile';

const Stack = createStackNavigator();

function MyStack() {

    let screens = [

        { name: "Welcome2", comp: Welcome2, titelename: 'Welcome2' },
        { name: "Home", comp: Home, titelename: 'Home' },
        { name: "Login", comp: Login, titelename: 'LOGIN' },
        { name: "OTP", comp: OTP, titelename: 'OTP' },
        { name: "SignUp", comp: SignUp, titelename: 'SignUp' },
        { name: "Messages", comp: Messages, titelename: 'Messages' },
        { name: "Walletview2", comp: Walletview2, titelename: 'Walletview2' },
        { name: "Email", comp: Email, titelename: 'Email' },
        { name: "Forum", comp: Forum, titelename: 'Forum' },
        { name: "Groups", comp: Groups, titelename: 'Groups' },
        { name: "Groupdetail", comp: Groupdetail, titelename: 'Groupdetail' },
        { name: "Welcome", comp: Welcome, titelename: 'Welcome' },
        { name: "Wallet", comp: Wallet, titelename: 'Wallet' },
        { name: "Sendmoney", comp: Sendmoney, titelename: 'Sendmoney' },
        { name: "Faq", comp: Faq, titelename: 'Faq' },
        { name: "Discussion", comp: Discussion, titelename: 'Discussion' },
        { name: "Menu", comp: Menu, titelename: 'Menu' },
        { name: "Walletprofile", comp: Walletprofile, titelename: 'Walletprofile' },
        { name: "DigitalLibrary", comp: DigitalLibrary, titelename: 'DigitalLibrary' },
        { name: "MemberProfile", comp: MemberProfile, titelename: 'MemberProfile' },
        { name: "Coachesprofile", comp: Coachesprofile, titelename: 'Coachesprofile' },
        { name: "Member", comp: Member, titelename: 'Member' },
        { name: "Account", comp: Account, titelename: 'Account' },
        { name: "Coaches", comp: Coaches, titelename: 'Coaches' },

    ];

    return (
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
    );
}
export default MyStack