//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Ripple from "react-native-material-ripple";
import { timelinestyles } from "./Style";
import colors from "../../assets/color/colors";
import { BorderButton } from "../../components/button/Buttons";
import { styles } from "../../screens/drawer/tabs/addtimelineitem";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DatePicker from 'react-native-date-picker'

// create a component
export const Timelineitem = (props) => {
  const { item } = props;

  return (
    <View style={timelinestyles.container}>
      <View
        style={[
          timelinestyles.timelinecontainer,
          { paddingBottom: item.paddingBottom },
        ]}
      >
        <View style={timelinestyles.datecontainer}>
          <View style={timelinestyles.circlecontainer}>
            <View style={timelinestyles.dotcontainer}></View>
          </View>
          <Text style={timelinestyles.darkdatestyle}>{item.date}</Text>
        </View>
        <View style={timelinestyles.boxcontainer}>
          <View style={timelinestyles.btncontainer}>
            <Pressable style={timelinestyles.btn1}>
              <Text style={[timelinestyles.buttontext, { color: "white" }]}>
                {item.btn1text}
              </Text>
            </Pressable>
            <Pressable style={timelinestyles.btn3}>
              <Text style={[timelinestyles.buttontext, { color: "white" }]}>
                {item.btn3text}
              </Text>
            </Pressable>
            <Pressable style={timelinestyles.btn2}>
              <Text style={[timelinestyles.buttontext, { color: "#A38B68" }]}>
                {item.btn2text}
              </Text>
            </Pressable>
          </View>
          <View style={timelinestyles.descriptioncontainer}>
            <Text style={timelinestyles.descreptiontext}>
              {item.description}
            </Text>
          </View>
          <View style={timelinestyles.flex}>
            <View style={timelinestyles.imgecontainer}>
              <View style={timelinestyles.imgsubcontainer}>
                <Image source={item.img1} style={timelinestyles.imgstyle} />
              </View>
              <View style={timelinestyles.imgsubcontainer}>
                <Image source={item.img2} style={timelinestyles.imgstyle} />
              </View>
              <View style={timelinestyles.imgsubcontainer}>
                <Image source={item.img3} style={timelinestyles.imgstyle} />
              </View>
            </View>
            <View>
              <Text style={timelinestyles.grouptext}>
                {item.membersname} members in this group
              </Text>
            </View>
          </View>
          <View style={timelinestyles.arrowcontainer}>
            <Text style={timelinestyles.tasktext}>{item.tasknumber} Tasks</Text>
            <Ripple
              rippleContainerBorderRadius={50}
              style={timelinestyles.ripple}
            >
              <Ionicons
                style={timelinestyles.icon}
                name={"arrow-forward-circle"}
                color={"black"}
                size={14}
              />
            </Ripple>
          </View>
        </View>
      </View>
    </View>
  );
};

export const TimelineitemNew = (props) => {
  const { item } = props;

  let categoryList = item.lstGoalCategory ? item.lstGoalCategory : [];

  let lstGoalMaches = item.lstGoalMaches ? item.lstGoalMaches : [];

  let count = lstGoalMaches.length;

  return (
    <View key={item.goalId} style={timelinestyles.container}>
      <View
        style={[
          timelinestyles.timelinecontainer,
          { paddingBottom: item.paddingBottom },
        ]}
      >
        <View style={timelinestyles.datecontainer}>
          <View style={timelinestyles.circlecontainer}>
            <View style={timelinestyles.dotcontainer}></View>
          </View>
          <Text style={timelinestyles.darkdatestyle}>
            {new Date(item.startDate).toDateString()}
          </Text>
        </View>
        <View style={timelinestyles.boxcontainer}>
          <View style={timelinestyles.btncontainer}>
            {categoryList.map((res) => {
              return (
                <Pressable style={timelinestyles.btn1}>
                  <Text style={[timelinestyles.buttontext, { color: "white" }]}>
                    {res.categoryName}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <View style={timelinestyles.descriptioncontainer}>
            <Text style={timelinestyles.descreptiontext}>{item.title}</Text>
          </View>
          <View style={timelinestyles.flex}>
            <View style={timelinestyles.imgecontainer}>
              {lstGoalMaches.map((_, i) => {
                if (i <= 2) {
                  count -= 1;
                  return (
                    <View style={timelinestyles.imgsubcontainer}>
                      <Image
                        source={{ uri: _.profileImage }}
                        style={timelinestyles.imgstyle}
                      />
                    </View>
                  );
                }
              })}
            </View>
            <View>
              <Text style={timelinestyles.grouptext}>
                {count <= 0 ? 0 : count} members in this group
              </Text>
            </View>
          </View>
          <View style={timelinestyles.arrowcontainer}>
            <Text style={timelinestyles.tasktext}>{item.tasknumber} Tasks</Text>
            <Ripple
              rippleContainerBorderRadius={50}
              style={timelinestyles.ripple}
            >
              <Ionicons
                style={timelinestyles.icon}
                name={"arrow-forward-circle"}
                color={"black"}
                size={14}
              />
            </Ripple>
          </View>
        </View>
      </View>
    </View>
  );
};

export const Targetedtimeline = (props) => {
  console.log("------",props)
  const { item, onGetNewDate, onDoneGoal } = props;

  let categoryList = item.lstGoalCategory ? item.lstGoalCategory : [];

  let lstGoalMaches = item.lstGoalMaches ? item.lstGoalMaches : [];

  let count = lstGoalMaches.length;

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const [Visible, setVisible] = useState(false);
  return (
    <View style={timelinestyles.container}>
      <View style={timelinestyles.targetedecontainer}>
        <View style={timelinestyles.datecontainer}>
          <View style={timelinestyles.circlecontainer}>
            <View
              style={[
                timelinestyles.dotcontainer,
                { backgroundColor: colors.primary },
              ]}
            ></View>
          </View>
          <Text style={timelinestyles.darkdatestyle}>
          {new Date(item.startDate).toISOString()}
          
          </Text>
        </View>
        <View style={timelinestyles.boxcontainer}>
          <View style={timelinestyles.btncontainer}>
            {categoryList.map((res) => {
              return (
                <Pressable style={timelinestyles.btn1}>
                  <Text style={[timelinestyles.buttontext, { color: "white" }]}>
                    {res.categoryName}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <View style={timelinestyles.descriptioncontainer}>
            <Text style={timelinestyles.descreptiontext}>{item.title}</Text>
          </View>
          <View style={timelinestyles.flex}>
            <View style={timelinestyles.imgecontainer}>
              {lstGoalMaches.map((_, i) => {
                if (i <= 2) {
                  count -= 1;
                  return (
                    <View style={timelinestyles.imgsubcontainer}>
                      <Image
                        source={{ uri: _.profileImage }}
                        style={timelinestyles.imgstyle}
                      />
                    </View>
                  );
                }
              })}
            </View>
            <View>
              <Text style={timelinestyles.grouptext}>
                {item.membersname} members in this group
              </Text>
            </View>
          </View>
          <View style={timelinestyles.mainbuttoncontainer}>
            <View style={timelinestyles.buttoncontainer}>
              <BorderButton
                title={"Done!"}
                backgroundColor={"white"}
                color={colors.gold}
                onPress={() => onDoneGoal(item.goalId)}
              />
            </View>
            <View style={timelinestyles.buttoncontainer}>
            <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              console.log("Date isssssssssssssssssssssssssss" ,date);
              setOpen(false)
              setDate(date)
                    onGetNewDate(date ,item.goalId )
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
              <BorderButton
                title={"Set new target date"}
                backgroundColor={"white"}
                color={colors.gold} 
                onPress={() => {
                    // onGetNewDate('' ,item.goalId )
                    setOpen(true)
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export const CompletedTimelineitem = (props) => {
  const { item } = props;

  let categoryList = item.lstGoalCategory ? item.lstGoalCategory : [];

  let lstGoalMaches = item.lstGoalMaches ? item.lstGoalMaches : [];

  let count = lstGoalMaches.length;

  return (
    <View style={timelinestyles.container}>
      <View
        style={[
          timelinestyles.timelinecontainer,
          { paddingBottom: item.paddingBottom },
        ]}
      >
        <View style={timelinestyles.datecontainer}>
          <View
            style={[
              timelinestyles.circlecontainer,
              { backgroundColor: colors.primary },
            ]}
          >
            <View
              style={[
                timelinestyles.dotcontainer,
                {
                  backgroundColor: colors.themeblack,
                  borderColor: colors.themeblack,
                },
              ]}
            ></View>
          </View>
          <Text style={timelinestyles.lightdatestyle}>
            {new Date(item.startDate).toDateString()}
          </Text>
        </View>
        <View style={[timelinestyles.completedboxcontainer]}>
          <View style={timelinestyles.btncontainer}>
            {categoryList.map((res) => {
              return (
                <Pressable style={timelinestyles.btn1}>
                  <Text style={[timelinestyles.buttontext, { color: "white" }]}>
                    {res.categoryName}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <View style={timelinestyles.descriptioncontainer}>
            <Text style={timelinestyles.descreptiontext}>{item.title}</Text>
          </View>
          <View style={timelinestyles.flex}>
            {lstGoalMaches.map((_, i) => {
              if (i <= 2) {
                count -= 1;
                return (
                  <View style={timelinestyles.imgsubcontainer}>
                    <Image
                      source={{ uri: _.profileImage }}
                      style={timelinestyles.imgstyle}
                    />
                  </View>
                );
              }
            })}
            <View>
              <Text style={timelinestyles.grouptext}>
                {count <= 0 ? 0 : count} members in this group
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export const Resourcesitem = (props) => {
  const { item } = props;

  return (
    <Pressable
      style={[
        timelinestyles.resourcescontainer,
        { backgroundColor: item.backgroundColor },
      ]}
    >
      <View style={timelinestyles.btnrowcontainer}>
        <Ripple rippleContainerBorderRadius={100} style={timelinestyles.btn}>
          <Text style={timelinestyles.btntext}>{item.btn1}</Text>
        </Ripple>
        <Ripple rippleContainerBorderRadius={100} style={timelinestyles.btn}>
          <Text style={timelinestyles.btntext}>{item.btn2}</Text>
        </Ripple>
      </View>
      <View>
        <Text style={timelinestyles.title}>{item.title}</Text>
      </View>
    </Pressable>
  );
};

export const Memberitem = (props) => {
  const { item } = props;

  return (
    <View style={timelinestyles.container}>
      <View style={[timelinestyles.timelinecontainer]}>
        <View style={timelinestyles.datecontainer}>
          {item.date == "Aug 01 2020" ? (
            <View style={timelinestyles.highlightcirclecontainer}>
              <View style={timelinestyles.highlightdotcontainer}></View>
            </View>
          ) : (
            <View style={timelinestyles.circlecontainer}>
              <View style={timelinestyles.dotcontainer}></View>
            </View>
          )}
          <Text style={timelinestyles.darkdatestyle}>{item.date}</Text>
        </View>
        <View style={timelinestyles.memberboxcontainer}>
          <View style={timelinestyles.descriptioncontainer}>
            <Text style={timelinestyles.descreptiontext}>
              {item.description}
            </Text>
          </View>
          {item.smiley != "" ? (
            <View
              style={{
                alignSelf: "flex-start",
                marginTop: 5,
                flexDirection: "row",
                paddingVertical: 5,
              }}
            >
              <Icon
                name="emoticon-happy-outline"
                color={colors.gold}
                size={15}
              />
              <Text
                style={{
                  fontSize: 11,
                  textAlignVertical: "center",
                  marginHorizontal: 10,
                  color: colors.gold,
                }}
              >
                {item.comment}
              </Text>
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </View>
    </View>
  );
};
