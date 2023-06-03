import React, { Component } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Color, fontFamily, fontSize } from '../common/Common';
// create a component
export const Lable = props => {
    const { title } = props;

    return (
        <Text
            style={{
                fontSize: fontSize.font32,
                fontFamily: fontFamily.n700,
                color: Color.themeprimary,
                textAlign: props.textAlign ? props.textAlign : 'center',
            }}
        >{title}</Text>
    );
};


export const SubLable = props => {

    const { title } = props;

    return (
        <Text
            style={{
                fontSize: fontSize.font18,
                fontFamily: fontFamily.n700,
                color: Color.black,
            }}
        >{title}</Text>
    );
};
