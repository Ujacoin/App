import React, { Component } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color, fontFamily } from '../common/Common';


// create a component
export const ThemeInput = props => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                height: 51,
                borderWidth: 1,
                borderColor: props.value ? Color.inputborder : Color.inputbg,
                backgroundColor: props.value ? Color.activeinput : Color.inputbg,
                paddingHorizontal: 10,
                marginVertical: 7,
                borderRadius: 3,
            }}
        >

            <TextInput
                style={{
                    flex: 1,
                    fontFamily: fontFamily.n600,

                    color: Color.black,
                }}
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder}
                // placeholderTextColor={Color.themegray}
                placeholderTextColor={Color.black}
                onChangeText={props.onChangeText}
                value={props.value}
            />
            {
                props.icon ?
                    <TouchableOpacity
                        onPress={props.iconPress}
                        style={{
                            height: 30,
                            width: 30,
                            alignItems: "center",
                            justifyContent: 'center',
                        }}
                    >
                        <Icon name={props.icon} size={15} color={Color.themeorange} />
                    </TouchableOpacity> : <></>
            }

        </View>
    );
};
