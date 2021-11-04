import * as React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

import { Image, ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

type NavigationProp = StackNavigationProp<NaviParamList, 'Start'>
interface Props {
    navigation: NavigationProp
}

const StartScreen = ({navigation}: Props) => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    StatusBar.setHidden(true);

    let [fontsLoaded] = useFonts({
        'neodgm': require('../assets/fonts/neodgm_pro.ttf'),
      });

    const StartAction = () => {
        navigation.navigate('Main');
    }
    
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <>
                <View style={styles.container}>
                    <ImageBackground style={styles.imgBackground} source={require('../assets/images/bg.png')}>
                        <TouchableOpacity onPress={StartAction}>
                            <Image source={require("../assets/images/Start.png")}/>
                        </TouchableOpacity>
                        <Text style={styles.policyText}>시작하기를 누를시 상품 발송 목적의 개인정보 수집에 동의한 것으로 간주합니다.</Text>
                    </ImageBackground>
                </View>
            </>
        );
    }
}
export default StartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    policyText: {
        marginTop:'2%',
        marginBottom:'2%',
        fontFamily: 'neodgm'
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});