import React from 'react';
import { StyleSheet, } from 'react-native';
import colors from '../../assets/color/colors';
// define your styles
export const timelinestyles = StyleSheet.create({
    btntext: {
        fontSize: 12,
        color:colors.black,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        color: colors.white,
        marginVertical: 10,
    },
    btn: {
        backgroundColor: colors.white,
        paddingHorizontal: 16,
        borderRadius: 100,
        marginRight: 6,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnrowcontainer: {
        flexDirection: 'row',
    },
    resourcescontainer: {
        height: 300,
        width: 300,
        borderRadius: 2,
        marginRight: 10,
        marginLeft:10,
        padding: 20,
        justifyContent: 'flex-end',
        shadowColor: '#000',
        shadowOffset: { height: -2, width: 3 },
        shadowOpacity: Platform.OS === 'android' ? 0.4 : 0.5,
        shadowRadius: Platform.OS === 'android' ? 10 : 10,
        elevation: Platform.OS === 'android' ? 10 : 0,
        marginBottom:20,
    },
    lightdatestyle: {
        fontSize: 12,
        color: colors.white,
        textTransform: 'uppercase',
    },
    darkdatestyle: {
        fontSize: 12,
        color: colors.black,
        textTransform: 'uppercase',
    },
    buttoncontainer: {
        marginRight: 10,
    },
    mainbuttoncontainer: {
        marginTop: 20,
        flexDirection: 'row',
    },
    ripple: {
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    grouptext: {
        fontSize: 11,
    },
    tasktext: {
        fontSize: 11,
        marginRight: 5,
    },
    arrowcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    flex: {
        flexDirection: 'row',

        alignItems: 'center',
    },
    imgsubcontainer: {
        marginLeft: -10,
    },
    imgecontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '40%',
        marginRight: 20,
        marginLeft: 15,
    },
    imgstyle: {
        height: 40,
        width: 40,
        borderRadius: 100,
    },
    descriptioncontainer: {
        marginVertical: 0,
    },
    descreptiontext: {
        fontSize: 15,
        color: 'black',
        fontWeight:"500"
    },
    btncontainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn2: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        backgroundColor: '#F8DDD9',
        marginLeft: 5,
        borderRadius: 50,

    },
    btn3: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        marginLeft: 5,
        backgroundColor: '#A38B68',
    },
    btn1: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        backgroundColor: '#5EB4AE',
    },
    buttontext: {
        fontSize: 11,
        textTransform: 'uppercase',
    },
    datecontainer: {
        left: -11,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxcontainer: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 20,
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 2,
       // width: 318,
       // height:225,
        shadowColor: '#000',
        shadowOffset: { height: -2, width: 3 },
        shadowOpacity: Platform.OS === 'android' ? 0.4 : 0.5,
        shadowRadius: Platform.OS === 'android' ? 10 : 10,
        elevation: Platform.OS === 'android' ? 10 : 0
    },
    memberboxcontainer: {
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 20,
        marginBottom: 12,
        borderRadius: 2,
        width: '100%',
    },
    completedboxcontainer: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 20,
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 2,
       // width: 318,
        shadowColor: '#ffffff',
        shadowOffset: { height: -2, width: 3 },
        shadowOpacity: Platform.OS === 'android' ? 0.4 : 0.5,
        shadowRadius: Platform.OS === 'android' ? 10 : 10,
        elevation: Platform.OS === 'android' ? 10 : 0
    },
    dotcontainer: {
        backgroundColor: 'transparent',
        height: 14,
        width: 14,
        borderRadius: 100,
        borderColor: colors.primary,
        borderWidth: 2,
    },
    circlecontainer: {
        height: 20,
        width: 20,
        backgroundColor: 'white',
        borderRadius: 100,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    highlightdotcontainer: {
        backgroundColor: 'transparent',
        height: 14,
        width: 14,
        borderRadius: 100,
        borderColor: colors.primary,
        borderWidth: 2,
    },
    highlightcirclecontainer: {
        height: 20,
        width: 20,
        backgroundColor: colors.primary,
        borderRadius: 100,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    timelinecontainer: {
        borderLeftWidth: 3,
        borderLeftColor: colors.primary,
        paddingHorizontal: 10,
        width: '100%',
        
    },
    targetedecontainer: {
        borderLeftWidth: 3,
        borderLeftColor: colors.white,
        paddingHorizontal: 10,
        width: '100%',
    },
    container: {
        paddingHorizontal: 15,
        width: '100%',
    },

});