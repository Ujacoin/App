//import liraries
import React from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import { Menustyles } from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Color } from '../../common/Common';

// create a component
export const Bottomtabdesign = props => {
    const navigation = useNavigation();
   
    return (
        <View style={Menustyles.bottotabbg}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Home') }}
                style={Menustyles.centerbutton}>
                <Foundation name='home' size={20} color={props.active === 'home' ? Color.black : Color.gray} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Wallet') }}
                style={Menustyles.centerbutton}>
                <FontAwesome name='credit-card-alt' size={12} color={props.active === 'Wallet' ? Color.black : Color.gray} />
            </TouchableOpacity>
            <TouchableOpacity
                style={[Menustyles.centerbutton, { backgroundColor: Color.themeprimary }]}>
                <MaterialCommunityIcons name='rotate-3d-variant' size={24} color={Color.white} />
            </TouchableOpacity>
            <TouchableOpacity style={Menustyles.centerbutton} onPress={() => { navigation.navigate('Notification') }}>
                <MaterialIcons name='notifications-active' size={20} color={props.active === 'notifications' ? Color.black : Color.gray} />
            </TouchableOpacity>
            <TouchableOpacity style={Menustyles.centerbutton} onPress={() => { navigation.navigate('Walletprofile') }}>
                <Ionicons name='ios-settings-sharp' size={20} color={props.active === 'Profile' ? Color.black : Color.gray} />
            </TouchableOpacity>
        </View>


    );
};
