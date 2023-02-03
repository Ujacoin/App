import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, TextInput, Pressable, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Header } from '../components/header/Header';
import MyStatusBar from "../components/myStatusBar/MyStatusBar"
import { bg, dot, emptyimage, fulllogo, left, loginimg, logo, message, Profilepic, right, search_icon, start, user1, user2, user3, userimage, users } from '../data/Imagedata';
import allcommonstyle from '../styles/allcommonstyle';
import { AppTextInputSearch, ExcusiveResource, LatestReplays, Memberdata, Replaysitem, SearchFilter, Space } from '../common/commoncomponents';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { boxShadow, COLORS, fontFamily, fontsize } from '../common/commonitem';
import DatePicker from "react-native-date-picker";
import { Dropdown } from "react-native-element-dropdown";
import { PrimaryButton } from '../components/button/primarybutton';

const AddMeeting = ({ navigation }) => {
    const [startDateTime, setstartDateTime] = useState(new Date());
    const [endDateTime, setendDateTime] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [OpenStartDate, setOpenStartDate] = useState(false);
    const [OpenEndDate, setOpenEndDate] = useState(false);
    const [meetingType, setmeetingType] = useState("");
    const [meetingPlace, setmeetingPlace] = useState("");
    const [agenda, setagenda] = useState("");
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [meetingLink, setmeetingLink] = useState("");
    const data = [
        { label: "Virtual", value: 1 },
        { label: "Physical", value: 2 },
    ];
    return (
        <SafeAreaView style={allcommonstyle.safeAreaViewcontainer}>
            <MyStatusBar backgroundColor="black" barStyle={"light-content"} />
            <Header
                title='Add Meeting'
                iconleft={left}
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
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}> Start Date</Text>
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
                                <Text style={allcommonstyle.inputlable}> End Date</Text>
                                <View style={allcommonstyle.DateTimeTextInput}>
                                    <View style={[allcommonstyle.OpenDatePicker, { width: '100%' }]}>
                                        <Pressable
                                            onPress={() => {
                                                setOpenEndDate(true);
                                            }}
                                        >
                                            <TextInput
                                                style={allcommonstyle.DatePickerPlaceHolder}
                                                placeholder="06-06-2022"
                                                editable={false}
                                                value={endDateTime.toDateString()}
                                            ></TextInput>
                                        </Pressable>
                                        <DatePicker
                                            modal
                                            mode="date"
                                            open={OpenEndDate}
                                            forma
                                            date={date}
                                            onConfirm={(date) => {
                                                setendDateTime(date);
                                                setOpenEndDate(false);
                                            }}
                                            onCancel={() => {
                                                setOpenEndDate(false);
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>Meeting Place</Text>
                                <TextInput
                                    style={allcommonstyle.simpleinput}
                                    onChangeText={(value) => {
                                        setmeetingPlace(value);
                                    }}
                                    value={meetingPlace}
                                    placeholder="Enter Meeting Place"
                                ></TextInput>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>Agenda</Text>
                                <TextInput
                                    style={allcommonstyle.simpleinput}
                                    onChangeText={(value) => {
                                        setagenda(value);
                                    }}
                                    value={agenda}
                                    placeholder="Enter Agenda"
                                ></TextInput>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>Title</Text>
                                <TextInput
                                    style={allcommonstyle.simpleinput}
                                    placeholder="Enter Title"
                                    onChangeText={(value) => {
                                        settitle(value);
                                    }}
                                    value={title}
                                ></TextInput>
                            </View>
                            <Space spacenumber={5} />
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>Description</Text>
                                <TextInput
                                    style={allcommonstyle.simpleinput}
                                    multiline={true}
                                    numberOfLines={2}
                                    onChangeText={(value) => {
                                        setdescription(value);
                                    }}
                                    value={description}
                                    placeholder="Enter Description"
                                ></TextInput>
                            </View>
                            <View style={allcommonstyle.loginTextInput}>
                                <Text style={allcommonstyle.inputlable}>Group Meeting Type </Text>
                                <Dropdown
                                    style={allcommonstyle.dropdown}
                                    placeholderStyle={allcommonstyle.placeholderStyle}
                                    selectedTextStyle={allcommonstyle.selectedTextStyle}
                                    inputSearchStyle={allcommonstyle.inputSearchStyle}
                                    iconStyle={allcommonstyle.iconStyle}
                                    data={data}
                                    search
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Select Meeting Type"
                                    searchPlaceholder="Search..."
                                    value={meetingType}
                                    onChange={(item) => {
                                        console.log("item=========================>", item.value);
                                        setmeetingType(item.value);
                                    }}
                                />
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
export default AddMeeting;
const styles = StyleSheet.create({

})