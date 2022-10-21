import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../../assets/color/colors';
import globalStyle from '../../../../styles/globalStyle';
import NavButton2 from '../../buttons/navButton2';
import style from '../../style';
import RoundedShortView from '../roundedShortView';
import ShortView from '../shortView';

export const FundingView = (props, navigation) => {
  return (
    <TouchableOpacity style={style.fundingView}>
      <View style={style.topFundingView}>
        <View
          style={{
            width: '10%',
            backgroundColor:
              props.fund.type == 'Grant' && !props.fund.isFunding
                ? colors.primary
                : colors.julep,
          }}
        />
        <View style={style.topFundingContent}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {props.fund.type == 'Pitch' ? (
              <ShortView name={'PITCH'} color={colors.secondary} />
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <RoundedShortView name={'GRANT'} />
                {props.fund.isFunding ? <ShortView name={'Funding'} /> : null}
              </View>
            )}

            <Icon name={'md-bookmark-outline'} color={colors.gray} size={18} />
          </View>
          <Text style={style.fundTitle}>{props.fund.title}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: '2.5%',
            }}>
            <Image
              source={require('../../../../assets/images/time.png')}
              style={{width: 14, height: 14, resizeMode: 'contain'}}
            />
            <Text style={style.fundingDeadline}>{props.fund.deadline}</Text>
          </View>
        </View>
      </View>
      <View style={style.bottomFundingView}>
        <View style={{width: '10%'}} />
        <View style={style.bottomFundingContent}>
          <Text numberOfLines={5} style={style.fundDescription}>
            {props.fund.description}
          </Text>
          <NavButton2 text={'LEARN more'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
