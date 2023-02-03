import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, TextInput, Pressable, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, emptyimage, fulllogo, headerback, left, loginimg, logo, message, Profilepic, right, search_icon, start, user1, user2, user3, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { AppTextInputSearch, ExcusiveResource, LatestReplays, Memberdata, Replaysitem, SearchFilter, Space } from '../common/commoncomponents';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { boxShadow, COLORS, fontFamily, fontsize } from '../common/commonitem';
import DatePicker from "react-native-date-picker";
import Icon from "react-native-vector-icons/AntDesign";
import { PrimaryButton } from '../components/button/primarybutton';

const EditProfile = ({ navigation }) => {
    const [startDateTime, setstartDateTime] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [OpenStartDate, setOpenStartDate] = useState(false);

    const [UserData, setUserData] = useState({});
    const [imageDataIcone, SetimageDataIcone] = useState([]);
    const [ProfileImageData, setProfileImageData] = useState("");
    const {
        firstName,
        lastName,
        email,
        mobile,
        stateId,
        city,
        address,
        zipCode,
        aboutMe,
        mission,
        businessName,
        websiteUrl,
        aboutBusiness,
    } = UserData;
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
            setProfileImageData('data:' + image.mime + ';base64,' + image.data)
            console.log(ProfileImageData);
            // ToastAndroid.show(image+"")
            setDataPressIcone('image', temp);
          })
          .catch(error => {
            setDataPressIcone('error', error);
          });
      };
    return (
        <SafeAreaView style={allcommonstyle.safeAreaViewcontainer}>
            <MyStatusBar backgroundColor="black" barStyle={"light-content"} />
            <Header
                title='Edit Profile'
                iconleft={headerback}
                onPressLeft={() => {
                    navigation.goBack();
                }} />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={allcommonstyle.loginflex}>


                    <View style={[{ flex: 1, }]}>
                        <View style={[{ paddingHorizontal: 20, }]}>
                            <Space spacenumber={15} />
                            <View style={allcommonstyle.ImageWrapper}>
                                <View style={allcommonstyle.bgImgSection}>
                                    {
                                        imageDataIcone.length > 0 ?
                                            imageDataIcone.map((item, i) => (
                                                <Image
                                                    source={{ uri: Platform.OS === 'ios' ? item.sourceURL : item.path }}
                                                    style={allcommonstyle.bgMainImageprofile}
                                                    key={i} />
                                            ))
                                            : (UserData?.profileImage !== null && UserData?.profileImage !== undefined) ?
                                                <Image
                                                    source={{ uri: UserData?.profileImage }}
                                                    style={allcommonstyle.bgMainImageprofile}
                                                />
                                                : <Image
                                                    source={emptyimage}
                                                    style={allcommonstyle.bgMainImageprofile}
                                                />
                                    }
                                    <TouchableOpacity style={allcommonstyle.profileIconbg} onPress={onPhotoClickIcone}>
                                        <Icon name="camerao" size={24} color={COLORS.white} />
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>First Name</Text>
                                <TextInput
                                    style={allcommonstyle.simpleinput}
                                    value={firstName}
                                    onChangeText={(value) => {
                                        setUserData({ ...UserData, firstName: value });
                                    }}
                                    placeholder="Enter First Name"
                                ></TextInput>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>Last Name</Text>
                                <TextInput
                                    style={allcommonstyle.simpleinput}
                                    value={lastName}
                                    onChangeText={(value) => {
                                        setUserData({ ...UserData, lastName: value });
                                    }}
                                    placeholder="Enter Last Name"
                                ></TextInput>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>Date of birth</Text>
                                <View style={allcommonstyle.DateTimeTextInput}>
                                    <View style={[allcommonstyle.OpenDatePicker, { width: '100%' }]}>
                                        <Pressable
                                            onPress={() => {
                                                setOpenStartDate(true);
                                            }}
                                        >
                                            <TextInput
                                                style={allcommonstyle.DatePickerPlaceHolder}
                                                placeholder="Please select Start date"
                                                editable={false}
                                                value={startDateTime.toDateString()}
                                                onChangeText={(date) => setDate(date.date)}
                                            />
                                        </Pressable>
                                        {console.log(
                                            "start date ============================.",
                                            startDateTime
                                        )}
                                        <DatePicker
                                            modal
                                            mode="date"
                                            open={OpenStartDate}
                                            forma
                                            date={startDateTime}
                                            onConfirm={(date) => {
                                                console.log("date issssssssssssssssssssssssssss", date);
                                                setstartDateTime(date);
                                                setOpenStartDate(false);
                                            }}
                                            onCancel={() => {
                                                setOpenStartDate(false);
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>Phone</Text>
                                <TextInput
                                    style={allcommonstyle.simpleinput}
                                    value={mobile}
                                    onChangeText={(value) => {
                                        setUserData({ ...UserData, mobile: value });
                                    }}
                                    keyboardType='name-phone-pad'
                                    placeholder="Enter Phone Number"
                                ></TextInput>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>City</Text>
                                <TextInput
                                    style={allcommonstyle.simpleinput}
                                    value={city}
                                    onChangeText={(value) => {
                                        setUserData({ ...UserData, city: value });
                                    }}
                                    placeholder="Enter City"
                                ></TextInput>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>Address</Text>
                                <TextInput
                                    style={allcommonstyle.simpleinput}
                                    multiline={true}
                                    numberOfLines={2}
                                    value={address}
                                    onChangeText={(value) => {
                                        setUserData({ ...UserData, address: value });
                                    }}
                                    placeholder="Enter Address"
                                ></TextInput>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>ZipCode</Text>
                                <TextInput
                                    style={allcommonstyle.simpleinput}
                                    value={zipCode}
                                    onChangeText={(value) => {
                                        setUserData({ ...UserData, zipCode: value });
                                    }}
                                    placeholder="Enter ZipCode"
                                ></TextInput>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>About Me</Text>
                                <TextInput
                                    style={allcommonstyle.simpleinput}
                                    multiline={true}
                                    numberOfLines={2}
                                    value={aboutMe}
                                    onChangeText={(value) => {
                                        setUserData({ ...UserData, aboutMe: value });
                                    }}
                                    placeholder="Enter AboutMe"
                                ></TextInput>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>Mission</Text>
                                <TextInput
                                    style={allcommonstyle.simpleinput}
                                    value={mission}
                                    onChangeText={(value) => {
                                        setUserData({ ...UserData, mission: value });
                                    }}
                                    placeholder="Enter mission"
                                ></TextInput>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>Business Name</Text>
                                <TextInput
                                    style={allcommonstyle.simpleinput}
                                    placeholder="Enter businessName"
                                    value={businessName}
                                    onChangeText={(value) => {
                                        setUserData({ ...UserData, businessName: value });
                                    }}
                                ></TextInput>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>Website Url</Text>
                                <TextInput
                                    style={allcommonstyle.simpleinput}
                                    placeholder="Enter websiteUrl"
                                    value={websiteUrl}
                                    onChangeText={(value) => {
                                        setUserData({ ...UserData, websiteUrl: value });
                                    }}
                                ></TextInput>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>About Business</Text>
                                <TextInput
                                    style={allcommonstyle.simpleinput}
                                    placeholder="Add aboutBusiness"
                                    value={aboutBusiness}
                                    onChangeText={(value) => {
                                        setUserData({ ...UserData, aboutBusiness: value });
                                    }}
                                ></TextInput>
                            </View>
                            <Space spacenumber={15} />
                            <PrimaryButton btntext='Submit' />
                        </View>

                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};
export default EditProfile;
const styles = StyleSheet.create({

})