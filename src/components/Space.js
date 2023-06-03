import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { View} from 'react-native';
// create a component
export const Space = props => {
    const { spacenumber } = props;

    return (
        <View style={{ paddingVertical: spacenumber }}></View>
    );
};
