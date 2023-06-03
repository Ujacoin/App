import React, { Component } from 'react';
import { View,Image } from 'react-native';
// import FastImage from 'react-native-fast-image';
import { Badge } from 'react-native-paper';
import { Color } from '../common/Common';
// create a component
export const Badgeimg = props => {
    const { spacenumber } = props;

    return (
        <View style={{
            height: 64,
            width: 64,
            marginRight: 30,
        }} >
            <Image
                source={props.image}
                resizeMode='contain'
                style={{
                    height: 64,
                    width: 64,
                }} />
            <Badge
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right:3,
                    borderWidth:2,
                    borderColor:Color.white,
                    backgroundColor:Color.success
                }}
                
                size={15}
            ></Badge>
        </View>
    );
};
