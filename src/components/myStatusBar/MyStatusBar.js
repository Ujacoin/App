//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import COLORS from '../../assets/color/colors';
const STATUSBAR_HEIGHT = StatusBar.currentHeight;
// create a component
const MyStatusBar = (props) => {

    const { backgroundColor } = props;

    return (
        <View style={[ { backgroundColor ,height:STATUSBAR_HEIGHT}]}>
        <SafeAreaView>
          <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </SafeAreaView>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
  
});

//make this component available to the app
export default MyStatusBar;
