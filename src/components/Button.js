import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color, fontFamily, fontSize } from '../common/Common';

// create a component
export const ThemeButton = props => {

    return (
        <TouchableOpacity
            style={{
                height: 51,
                borderRadius: 5,
                backgroundColor: props.backgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginBottom:10,
                paddingHorizontal:15,
            }}
            onPress={props.onPress}
        >
            {props.icon ?
                <Icon name={props.icon} size={15} color={props.color ? props.color : Color.white} style={{ marginRight: 5, }} /> : null}
            <Text
                style={{
                    fontSize: fontSize.font14,
                    fontFamily: fontFamily.n600,
                    color: props.color ? props.color : Color.white,
                }}
            >{props.title}</Text>
        </TouchableOpacity>
    );
};
