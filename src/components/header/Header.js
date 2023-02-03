//import liraries
import React from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import { Menustyles } from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ripple from 'react-native-material-ripple';
import LinearGradient from "react-native-linear-gradient";
import { logo, user, user1 } from '../../data/Imagedata';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../common/commonitem';

// create a component
export const Header = props => {
  const navigation = useNavigation();
  const {
    title,
    textAlign = 'left',
    iconleft,
    addlogo,
    iconRight,
    onPressLeft,
    onRightPress,
    userimage,
  } = props;

  return (
    <LinearGradient
      colors={[COLORS.linearGradient2 , COLORS.linearGradient1]} rightitemContainer
      start={{ x: 0.3, y: 0.15 }} end={{ x: 0.9, y: 2 }}
      locations={[0, 0.8, 0.6]}
      style={Menustyles.container}
    >

      <View style={Menustyles.leftcontainer}>
        {
          addlogo ? <Ripple
            rippleContainerBorderRadius={100}
            onPress={() => { navigation.navigate('Home') }}
            style={Menustyles.logoContainer}>
            <Image
              style={Menustyles.logoicon}
              source={logo}
              resizeMode='contain'
            />
          </Ripple> :
            <Ripple
              rippleContainerBorderRadius={100}
              onPress={onPressLeft}
              style={Menustyles.itemContainer}>
              <Image
                style={Menustyles.lefticon}
                source={iconleft}
                resizeMode='contain'
              />
            </Ripple>
        }

        <Text style={[Menustyles.title, { textAlign: textAlign }]}>{title}</Text>
      </View>
      <View style={Menustyles.leftcontainer}>
        {
          userimage ? <Ripple
          onPress={() => { navigation.navigate('MyProfile') }}
            rippleContainerBorderRadius={100}
            style={Menustyles.userimagContainer}>
            <Image
              style={Menustyles.userproimage}
              source={user1}
              resizeMode='cover'
            />
          </Ripple> : <></>
        }

        {
          iconRight ? <Ripple
            rippleContainerBorderRadius={100}
            onPress={iconRight ? onRightPress : null}
            style={Menustyles.rightitemContainer}>
            <Entypo name={iconRight} size={18} color={COLORS.white} />

          </Ripple> : <></>
        }

      </View>

    </LinearGradient>
  );
};
