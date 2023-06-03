import React, { useState,useEffect } from 'react';
import { Alert, View, SafeAreaView, ScrollView, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { themeImages } from '../../data/imgedata';
import { globalstyle } from '../../style/Style';
import { List } from 'react-native-paper';
import Header from '../../components/header/Header';
import { Color, fontFamily, fontSize } from '../../common/Common';
import { Space } from '../../components/Space';
import { styles } from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeButton } from '../../components/Button';
import { LibgetFAQ } from '../../lib/Faq';

function Faq() {

    const navigation = useNavigation();
    useEffect(() => {
        getFAQ();    
    }, [])
    const getFAQ = async()=>{
        let res=await LibgetFAQ();
        console.log("res",res)
        if(res?.status === 200){
            console.log("res.result",res.data.result)
            setFaq(res.data.result)
        }
    }
    const [expanded, setExpanded] = React.useState(true);
    const [faq, setFaq] = React.useState([]);

    const handlePress = () => setExpanded(!expanded);

    return (
        <SafeAreaView style={globalstyle.safeAreaView}>

            <Image
                source={themeImages.digitalbg}
                style={{
                    height: 360,
                    width: '100%',
                    position: 'absolute',
                    alignSelf: 'center',
                    top: 0,
                    zIndex: -9999999,
                }} />
            <View style={globalstyle.paddingView}>
                <Header
                    title='Frequently Asked
                            Questions'
                    onLeftpress={() => { Alert.alert('left') }}
                    onRightpress={() => { navigation.navigate('Menu') }}
                />
            </View>
            <ScrollView>
            {faq.map((result, index) => {
                return (
                    <View>
                        <Space spacenumber={20} />
                        <View style={[
                            styles.faqcard,
                            expanded === false && { borderRadius: 0, borderColor: '#E6DCF2', backgroundColor: '#E6DCF2', }]}>
                            <TouchableOpacity
                                onPress={handlePress}
                                style={styles.maintitlecontainer}>
                                <Text style={styles.faqtitle}>
                                    {result.question}
                                </Text>
                                <View style={styles.expandedicon}>
                                    <Ionicons name={expanded === false ? "chevron-down-sharp" : "chevron-up-sharp"} size={25} color={Color.themeprimary} />
                                </View>
                            </TouchableOpacity>
                            {
                                expanded === true ?
                                    <View>
                                        <Space spacenumber={10} />
                                        <Text style={globalstyle.dectext}>{result.answer}</Text>
                                        {/*
                                        <Text style={globalstyle.dectext}>1.Building Wealth: Financial Literacy for Black and Brown Youth</Text>
                                        <Text style={globalstyle.dectext}>2.Money Matters: Financial Education for Young People of Color</Text>
                                        <Text style={globalstyle.dectext}>3.From Budgeting to Investing: Financial Skills for Minority Youth</Text>
                                        <Text style={globalstyle.dectext}>4.Empowering Black and Brown Youth with Financial Knowledge</Text>
                                        <Text style={globalstyle.dectext}>5.Making Sense of Money: Financial Literacy for Minorities</Text>
                                        <Text style={globalstyle.dectext}>6.Financial Freedom for Black and Brown Youth</Text>
                                        <Text style={globalstyle.dectext}>7.Money Smarts for Minority Youth: Understanding Personal Finance</Text>
                                        <Text style={globalstyle.dectext}>8.Navigating the Financial World: A Course for Young People of Color</Text>
                                        <Text style={globalstyle.dectext}>9.Investing in Yourself: Financial Literacy for Black and Brown Youth</Text>
                                        <Text style={globalstyle.dectext}>10.Financial Empowerment for Underrepresented Youth.</Text> 
                                        */}
                                    </View>
                                    : <></>
                            }

                        </View>
                    </View>
                )})}
                <Space spacenumber={5} />
                <View style={[
                    styles.faqcard,
                    expanded === false && { borderRadius: 0, borderColor: '#E6DCF2', backgroundColor: '#E6DCF2', }]}>
                    <TouchableOpacity
                        onPress={handlePress}
                        style={styles.maintitlecontainer}>
                        <Text style={styles.faqtitle}>
                            What is the Ujamaa Financial app?
                        </Text>
                        <View style={styles.expandedicon}>
                            <Ionicons name={expanded === false ? "chevron-down-sharp" : "chevron-up-sharp"} size={25} color={Color.themeprimary} />
                        </View>
                    </TouchableOpacity>
                    {
                        expanded === true ?
                            <View>
                                <Space spacenumber={10} />
                                <Text style={globalstyle.dectext}>The Ujamaa Financial app is a financial literacy platform designed specifically for Black and Brown youth. It provides educational classes on various financial topics and tools to help users save for their future goals.</Text>
                            </View>
                            : <></>
                    }

                </View>
                <Space spacenumber={5} />
                <View style={[
                    styles.faqcard,
                    expanded === false && { borderRadius: 0, borderColor: '#E6DCF2', backgroundColor: '#E6DCF2', }]}>
                    <TouchableOpacity
                        onPress={handlePress}
                        style={styles.maintitlecontainer}>
                        <Text style={styles.faqtitle}>
                            Who can use the Ujamaa Financial app?
                        </Text>
                        <View style={styles.expandedicon}>
                            <Ionicons name={expanded === false ? "chevron-down-sharp" : "chevron-up-sharp"} size={25} color={Color.themeprimary} />
                        </View>
                    </TouchableOpacity>
                    {
                        expanded === true ?
                            <View>
                                <Space spacenumber={10} />
                                <Text style={globalstyle.dectext}>While the Ujamaa Financial app is designed with Black and Brown youth in mind, it can be beneficial for anyone seeking to improve their financial literacy and develop good money management habits.</Text>
                            </View>
                            : <></>
                    }

                </View> 
                <Space spacenumber={5} />
                <View style={[
                    styles.faqcard,
                    expanded === false && { borderRadius: 0, borderColor: '#E6DCF2', backgroundColor: '#E6DCF2', }]}>
                    <TouchableOpacity
                        onPress={handlePress}
                        style={styles.maintitlecontainer}>
                        <Text style={styles.faqtitle}>
                            What kind of educational classes does the Ujamaa Financial app offer?
                        </Text>
                        <View style={styles.expandedicon}>
                            <Ionicons name={expanded === false ? "chevron-down-sharp" : "chevron-up-sharp"} size={25} color={Color.themeprimary} />
                        </View>
                    </TouchableOpacity>
                    {
                        expanded === true ?
                            <View>
                                <Space spacenumber={10} />
                                <Text style={globalstyle.dectext}>The Ujamaa Financial app offers a range of classes covering various aspects of financial literacy. These include courses on basic money management, understanding credit, investing, and entrepreneurship, such as our "Securing the Bag: Side Hustles 101" course.</Text>
                            </View>
                            : <></>
                    }

                </View>
                
                <Space spacenumber={5} />
                <View style={[
                    styles.faqcard,
                    expanded === false && { borderRadius: 0, borderColor: '#E6DCF2', backgroundColor: '#E6DCF2', }]}>
                    <TouchableOpacity
                        onPress={handlePress}
                        style={styles.maintitlecontainer}>
                        <Text style={styles.faqtitle}>
                            How can the Ujamaa Financial app help me save for my future goals?
                        </Text>
                        <View style={styles.expandedicon}>
                            <Ionicons name={expanded === false ? "chevron-down-sharp" : "chevron-up-sharp"} size={25} color={Color.themeprimary} />
                        </View>
                    </TouchableOpacity>
                    {
                        expanded === true ?
                            <View>
                                <Space spacenumber={10} />
                                <Text style={globalstyle.dectext}>The Ujamaa Financial app provides tools to help you set financial goals, track your progress, and learn effective saving strategies. It also offers resources to educate you on different saving and investment options to help you grow your wealth.</Text>
                            </View>
                            : <></>
                    }

                </View>

                {/* <View style={{
                    paddingHorizontal: 20,
                    marginTop: 50,
                    marginBottom: 50,
                }}>
                    <ThemeButton
                        backgroundColor={Color.themeScarlet}
                        title={'Submit Your Question'}
                        color={Color.themedarkblue}
                    /></View> */}
            </ScrollView>

        </SafeAreaView>

    );
}

export default Faq;