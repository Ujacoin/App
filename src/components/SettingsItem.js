import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Color, fontFamily, fontSize } from '../common/Common';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// create a component
export const SettingsItem = props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 20,
                justifyContent: 'space-between',
                paddingVertical: 20,
                borderBottomColor: Color.inputbg,
                borderBottomWidth: 1,
            }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>
                <View style={{
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: "center",
                    marginRight: 15,
                }}>
                    {
                        props.MaterialIcons ?
                            <MaterialIcons name={props.lefticon} size={25} color={Color.white} /> :
                            <Ionicons name={props.lefticon} size={25} color={Color.white} />
                    }

                </View>
                <Text style={{
                    fontSize: fontSize.font14,
                    fontFamily: fontFamily.n400,
                    color: Color.white,
                }}>{props.name}</Text>
            </View>
            <Ionicons name="ios-chevron-forward" size={25} color={Color.white} />
        </TouchableOpacity>
    );
};
