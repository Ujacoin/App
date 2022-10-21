//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, Modal } from 'react-native';
import COLORS from '../../assets/color/colors';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';

// create a component
const Loader = (props) => {

    const { visible } = props;

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType={'fade'}

        >
            <View style={styles.container}>
                <View style={styles.loaderbg}>
                    {/* <ActivityIndicator
                    size={'large'}
                    color={Color.fbBlue}
                /> */}
                    <BallIndicator color={COLORS.gold} />
                </View>
            </View>
        </Modal>
    );
};

// define your styles
const styles = StyleSheet.create({
    loaderbg: {
      
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(225, 225, 225, 0.7)',

    },
});

//make this component available to the app
export default Loader;
