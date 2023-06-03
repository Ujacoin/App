import { Image, StyleSheet } from 'react-native';
import { Color, fontFamily, fontSize } from '../../common/Common';

export const styles = StyleSheet.create({
  headericoncontainer: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headericon: {
    height: 20,
    width: 20
  },
  headertext: {
    fontFamily: fontFamily.n600,
    fontSize: fontSize.font20,
    color: Color.white
  },
  profilePhoto: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
