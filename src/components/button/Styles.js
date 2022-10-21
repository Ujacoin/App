import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import COLORS from '../../assets/color/colors';
export const Buttonstyles = StyleSheet.create({
  borderbuttonBody: {
    height: 48,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gold,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    paddingHorizontal: 32,
    flexDirection: 'row',
  },
  container: {
    width: '100%',
  },
  shadowValue: {
    shadowColor: '#000',
    shadowOffset: {height: -2, width: 3},
    shadowOpacity: Platform.OS === 'android' ? 0.4 : 0.5,
    shadowRadius: Platform.OS === 'android' ? 10 : 10,
    elevation: Platform.OS === 'android' ? 10 : 0,
  },
  buttonBody: {
    height: 50,
    backgroundColor: COLORS.white,
    // justifyContent:'center',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
  text: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '700',
  },
  borderbuttontext: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '700',
  },
  icon: {
    paddingHorizontal: 10,
    paddingBottom: 3,
  },
  btncontainer: {
    backgroundColor: "#1C1939",
    height: 48,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btntextcon: {
    color: COLORS.white,
  },
});
