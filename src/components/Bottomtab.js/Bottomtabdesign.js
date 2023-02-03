//import liraries
import React from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import { Menustyles } from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import LinearGradient from "react-native-linear-gradient";
import { logo } from '../../data/Imagedata';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../common/commonitem';
import { TouchableOpacity } from 'react-native';

// create a component
export const Bottomtabdesign = props => {
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
        <View style={Menustyles.bottotabbg}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Home') }}
                style={Menustyles.centerbutton}>
                <Foundation name='home' size={20} color={COLORS.gray} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Wallet') }}
                style={Menustyles.centerbutton}>
                <FontAwesome name='credit-card-alt' size={12} color={COLORS.gray} />
            </TouchableOpacity>
            <TouchableOpacity
                style={[Menustyles.centerbutton, { backgroundColor: COLORS.primaryyellow }]}>
                <MaterialCommunityIcons name='rotate-3d-variant' size={24} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity style={Menustyles.centerbutton} onPress={() => { navigation.navigate('Notification') }}>
                <MaterialIcons name='notifications-active' size={20} color={COLORS.gray} />
            </TouchableOpacity>
            <TouchableOpacity style={Menustyles.centerbutton} onPress={() => { navigation.navigate('Profile') }}>
                <Ionicons name='ios-settings-sharp' size={20} color={COLORS.gray} />
            </TouchableOpacity>
        </View>


    );
};
