import { adjust } from "./responsive";

export const COLORS = {
    linearGradient1:'#5313AE',
    linearGradient2:'#3972A2',
    primaryyellow: '#5313AE',
    primarydarkgreen: '#000',
    primarylightgreen: '#2EA8CF',
    primaryblack:'#1C1939',
    white: '#FFFFFF',

    grayLight: "#8A8888",
    grayMedium: "#A4A4A4",

    search_background: "#00000033",
    search_text: "#BABABA",

    purpal: "#281140",

    primary: '#FADFDA',
    secondPrimary: '#F87C1E',
    secondary: '#A2845E',
    lightGold: '#D3CCC2',
    gray: '#828282',
    lightGray: '#EDECEA',
    lightPink: '#FEF7F6',
    inputtext: '#C5C5C5',
    bordre: '#E5E5E5',
    transparentlight: 'rgba(231, 231, 231, 0.1)',

    black: '#000000',
    dark: '#0C0C0C',
    lightDark: '#4F4F4F',
    red: '#FF0000',
    julep: '#5EB4AE',
    teal: '#60BCB8',
    whiteSmoke: '#F7F7F7',
    themeblack: '#333333',
    themegreen: '#60BCB8',
    gold: '#A38B68',
    shadow: '#9D9D9D',
    searchshadow: '#F6F7FB',
    transparent: '#00000000',
    sistaPink: '#F06491',
    hotPink: '#F06491',
    green: "green",
    green_code: "#BEBB30",

    blue: "#3C82C1",
    grayNonSelected: "#67A4AB",

};


export const fontFamily = {
    black: 'Inter-Black',
    extraBold: 'Inter-ExtraBold',
    bold: 'Inter-Bold',
    semiBold: 'Inter-SemiBold',
    medium: 'Inter-Medium',
    regular: 'Inter-Regular',
    light: 'Inter-Light',
    thin: 'Inter-Thin',

    Candara: 'Candara',
    CandaraboldI: 'Candara_Bold_Italic',
    Candarabold: 'Candara_Bold',
    CandaraI: 'Candara_Italic',
};


export const fontsize = {
    font53: adjust(53),
    font16: adjust(16),
    font18: 18,
    font9: 9,
    font10: 10,
    font11: 11,
    font15: 15,
    font12: 12,
    font14: 14,
    font28: 28,
    font20: 20,
    font21: 21,
    font22: 22,
    font23: 23,
    font24: 24,
    font25: 25,
    font26: 26,
    font27: 27,
    font28: 28,
    font29: 29,
    font30: 30,
    font32: 32,
};

export const linehight = {
    linehight53: 51,
    font16: 16,
};


export const boxShadow = {
    shadowColor: '#9D9D9D',
    shadowOffset: { height: -2, width: 3 },
    shadowOpacity: Platform.OS === 'android' ? 0.2 : 0.5,
    shadowRadius: Platform.OS === 'android' ? 20 : 10,
    elevation: Platform.OS === 'android' ? 4 : 0,
};