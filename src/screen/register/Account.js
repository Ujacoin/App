import React, { useState,useEffect } from 'react';
import { TouchableOpacity, View, SafeAreaView, ScrollView, Text, Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Image from 'react-native-fast-image'
import { ThemeInput } from '../../components/ThemeInput';
import { Space } from '../../components/Space';
import { themeImages } from '../../data/imgedata';
import { globalstyle } from '../../style/Style';
import { registerstyle } from './style';
import { ThemeButton } from '../../components/Button';
import { Color } from '../../common/Common';
import { Lable, SubLable } from '../../components/Lable';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import LibSubmitSignup from '../../lib/Signup';
import Toast from 'react-native-root-toast';
import allcommonstyle from '../../style/allcommonstyle';
import ImagePicker from 'react-native-image-crop-picker';
import { LibGetMyAccountList, LibSaveMyAccountList } from '../../lib/Account';

function Account() {

    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Mobile, setMobile] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [AboutMe, setAboutMe] = useState("");
    const [checked, setChecked] = React.useState(false);
    const [ProfileImageData, setProfileImageData] = useState("");
    const [profileImage, setprofileImage] = useState("");
    const [imageDataIcone, SetimageDataIcone] = useState([]);
    
    useEffect(() => {
        getMyAccount();
    }, [])
    let profileData=[];
    const getMyAccount = async () =>{
        let res = await LibGetMyAccountList();
        console.log("res.result", res.status)
        if (res?.status === 200) {
            console.log("res.result", res.data.result)
            profileData=res.data.result;
            setFirstName(res.data.result.firstName);
            setEmail(res.data.result.email);
            setAboutMe(res.data.result.aboutMe);
            setprofileImage(res.data.result.profileImage);
        }
        /** Calling API End **/
    }
    

    const saveAccount = async() => {
        const fcmtoken= await messaging().getToken();
        const params=[
            {
                value:FirstName,
                validate:false,
                paramName:"firstName",
                ValidateMessage:"Name Required"

            },
            {
                value:email,
                validate:true,
                paramName:"email",
                ValidateMessage:"Email Required"

            },
            {
                value:Mobile,
                validate:false,
                paramName:"mobile",
                ValidateMessage:""

            },
            {
                value:AboutMe,
                validate:false,
                paramName:"aboutMe",
                ValidateMessage:"About Me Required"

            },
            {
                value:ProfileImageData,
                validate:false,
                paramName:"profileImage",
                ValidateMessage:"Profile image can't be blank."

            },
            {
                value:"-",
                validate:false,
                paramName:"interest",
                ValidateMessage:""

            },
            
            
        ];
        LibSaveMyAccountList(params)
        // navigation.navigate("OTP")
    }
    const onPhotoClickIcone = async () => {
        ImagePicker.openPicker({
          width: 400,
          height: 400,
          cropping: true,
          multiple: false,
          includeBase64: true,
        })
          .then(image => {
            let temp = [];
            temp.push(image);
            setProfileImageData('data:'+image.mime+';base64,'+image.data)
            console.log(ProfileImageData);
            // ToastAndroid.show(image+"")
            setDataPressIcone('image', temp);
          })
          .catch(error => {
            setDataPressIcone('error', error);
          });
    };
    const setDataPressIcone = (status, data) => {
        if (status != 'error') {
          let tempdata = [];
          if (data.length > 0) {
            for (let index = 0; index < data.length; index++) {
              tempdata.push(data[index]);
            }
          }
          SetimageDataIcone(tempdata);
    
        } else {
          if (data.message != 'User cancelled image selection') {
            Alert.alert(data.message)
          }
        }
    };
    return (
        <SafeAreaView style={globalstyle.safeAreaView}>
            <ScrollView>
                <View style={globalstyle.paddingView}>
                    <View style={registerstyle.imagecontainer}>
                        <Space spacenumber={10} />
                        <Lable title={'Edit My Account'} />
                        <Space spacenumber={20} />
                        {/* <Text style={globalstyle.simpletext}>You can edit here your details</Text> */}
                        <SubLable title={'Edit your details here.'} />
                    </View>
                    <Space spacenumber={10} />
                    <View style={allcommonstyle.profileimagecontainernew}>
                    {
                        imageDataIcone.length > 0 ?
                        imageDataIcone.map((item, i) => (
                        <Image
                            source={{ uri: Platform.OS === 'ios' ? item.sourceURL : item.path }}
                            style = {{
                                width: 130,
                                height: 130,
                                backgroundColor: "#EDECEA",
                                resizeMode: 'cover',
                                borderRadius: 15
                            }}
                        />
                        ))
                        : (profileImage !== null && profileImage !== undefined) ?
                        <Image
                            source={{ uri: profileImage }}
                            style = {{
                                width: 130,
                                height: 130,
                                backgroundColor: "#EDECEA",
                                resizeMode: 'cover',
                                borderRadius: 15
                            }}
                        />
                        : <Image
                        source={require("../../assets/img/icon/user.png")}
                        style = {{
                            width: 130,
                            height: 130,
                            backgroundColor: "#EDECEA",
                            resizeMode: 'cover',
                            borderRadius: 15
                        }}
                    />
                    }
                        <TouchableOpacity 
                            onPress={()=>{onPhotoClickIcone()}}
                        >
                            <Image
                                style={allcommonstyle.profileediticonnew}
                                source={themeImages.edit_profile}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                    </View>
                    <Space spacenumber={10} />
                    <ThemeInput
                        value={email}
                        onChangeText={(value) => {
                            console.log("valuee =", value);
                            // setEmail(value);
                        }}
                        placeholder="Enter Email"
                    />
                    <Space spacenumber={5} />
                    {/* <Text style={[globalstyle.dashedstyle,{color:Color.black}]}> -- OR -- </Text> */}
                    <Space spacenumber={5} />
                    <ThemeInput
                        value={Mobile}
                        onChangeText={(value) => {
                            console.log("valuee =", value);
                            setMobile(value);
                        }}
                        placeholder="Enter Mobile"
                    />
                    <Space spacenumber={5} />
                    <Text style={[globalstyle.dashedstyle,{color:Color.black}]}> -- Basic Details -- </Text>
                    <Space spacenumber={5} />
                    <ThemeInput
                        value={FirstName}
                        onChangeText={(value) => {
                            console.log("valuee =", value);
                            setFirstName(value);
                        }}
                        placeholder="Enter Name"
                    />
                    <Space spacenumber={5} />
                    <ThemeInput
                        value={AboutMe}
                        onChangeText={(value) => {
                            console.log("valuee =", value);
                            setAboutMe(value);
                        }}
                        placeholder="About me"
                    />
                    <Space spacenumber={15} />
                    <ThemeButton
                        backgroundColor={Color.themeScarlet}
                        title={'Save'}
                        onPress={() => { saveAccount() }}
                        color={Color.themedarkblue}
                    />
                    <Space spacenumber={20} />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

export default Account;