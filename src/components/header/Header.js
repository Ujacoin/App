
import React from 'react';
import { Image, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Color } from '../../common/Common';
import { themeImages } from '../../data/imgedata';
import { styles } from './Style';

const Header = props => {
    return (
        <View style={styles.profilePhoto}>
            <TouchableOpacity
                onPress={props.onLeftpress}
                style={styles.headericoncontainer}>
                {props?.removeback === undefined &&
                    <Image
                        tintColor={props.color ? props.color : Color.white}
                        source={themeImages.Backicon}
                        style={[styles.headericon,]} resizeMode='contain' />
                }
            </TouchableOpacity>
            <Text style={[styles.headertext, { color: props.color ? props.color : Color.white, paddingHorizontal: 30, textAlign: 'center' }]}>{props.title}</Text>
            <TouchableOpacity
                onPress={props.onRightpress}
                style={styles.headericoncontainer}>
                <Image
                    tintColor={props.color ? props.color : Color.white}
                    source={themeImages.menu}
                    style={styles.headericon}
                    resizeMode='contain' />
            </TouchableOpacity>
        </View>
    );
};
export default Header;