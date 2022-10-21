import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../../assets/color/colors';
import style from '../../style';

const QuestionContainer = (props, navigation) => {
  return (
    <TouchableOpacity style={style.questionContainer} onPress={() => {}}>
      <View style={style.questionImg}>
        <Image source={props.question.img} style={style.qImg} />
      </View>
      <View style={style.qContainer}>
        <Text style={style.qTitle}>{props.question.title}</Text>
        <Text style={style.qText}>{props.question.question}</Text>
        <TouchableOpacity
          style={[style.navContainer2, {justifyContent: 'flex-start'}]}
          onPress={() => {}}>
          <Text style={style.navText}>{'See Question'.toUpperCase()}</Text>
          <Icon name="arrow-right-circle" color={colors.black} size={15} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default QuestionContainer;
