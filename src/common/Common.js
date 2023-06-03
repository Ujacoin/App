import {Dimensions} from 'react-native';

export const Color = {
    themeprimary: '#560BAF',
    newthemecolor: '#560BAF',
    lightprimary: '#B27BF2',
    black: '#000',
    inputborder: '#7165E3',
    inputbg:'#EEEEEE',
    activeinput:'rgba(113, 101, 227, 0.2)',
    themeScarlet:'#00E6F0',
    themedarkblue:'#410579',
    white:'#fff',
    grayLight:'#9EA6BE',
    lightgrey:'#EEEEEE',
    success:'#0A8C08',
    border:'#D2D1D7',
    liniar1:'#3984CB',
    liniar2:'#691AB7',
    gray: '#828282',
}

export const fontFamily = {
    n900: 'Inter-Black',
    n800: 'Inter-ExtraBold',
    n700: 'Inter-Bold',
    n600: 'Inter-SemiBold',
    n500: 'Inter-Medium',
    n400: 'Inter-Regular',
    n300: 'Inter-Light',
    n200: 'Inter-ExtraLight',
    n100: 'Inter-Thin',

 
    d700: 'DMSans-Bold',
    d500: 'DMSans-Medium',
    d400: 'DMSans-Regular',
}
export const fontSize = {
    font10: 10,
    font11: 11,
    font12: 12,
    font13: 13,
    font14: 14,
    font16: 16,
    font18: 18,
    font20: 20,
    font24: 24,
    font28: 28,
    font30: 30,
    font32: 32,
    font75: 75,
}

export const windowWidth = Dimensions.get('window').width;
export const windotight = Dimensions.get('window').height;

export const boxShadow = {
    shadowColor: '#9D9D9D',
    shadowOffset: { height: -2, width: 3 },
    shadowOpacity: Platform.OS === 'android' ? 0.2 : 0.5,
    shadowRadius: Platform.OS === 'android' ? 20 : 10,
    elevation: Platform.OS === 'android' ? 4 : 0,
};
export const linehight = {
    linehight53: 51,
    font16: 16,
};