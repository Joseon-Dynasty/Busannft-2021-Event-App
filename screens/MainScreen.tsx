import * as React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

import { Alert, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, TouchableHighlight } from 'react-native';
import { Text, View } from '../components/Themed';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ImageContext } from '../Context/ImageContext';
import { ImageDataList, background, faceNskin, body, eyeColor, lipColor, beard, eyewear, headwear, acc } from '../components/Images';
import { TmpImageContext } from '../Context/TmpImageContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import prompt from 'react-native-prompt-android';


type NavigationProp = StackNavigationProp<NaviParamList, 'Start'>
interface Props {
    navigation: NavigationProp
}

const MainScreen = ({navigation}: Props) => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    StatusBar.setHidden(true);

    const {image, updateImage} = React.useContext<IImageContext>(
        ImageContext
    );

    const {tmpImage, updateTmpImage} = React.useContext<ITmpImageContext>(
        TmpImageContext
    );

    let [fontsLoaded] = useFonts({
        'neodgm': require('../assets/fonts/neodgm_pro.ttf'),
      });


    const StartAction = () => {
        navigation.navigate('Start');
    }

    const SubmitAction = () => {
        navigation.navigate('Phone');
    }

    const mix = async () => {
        await updateImage(
            tmpImage.background,
            tmpImage.faceNskin,
            tmpImage.body,
            tmpImage.eyeColor,
            tmpImage.lipColor,
            tmpImage.beard,
            tmpImage.eyeWear,
            tmpImage.headWear,
            tmpImage.acc
        );
    };

    const change = async (_type: string, _data: string) => {
        await updateTmpImage(_type, _data);
        console.log(_data)
        await mix();
    };
    
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <>
                <View style={styles.container}>
                    <ImageBackground style={styles.imgBackground} resizeMode="stretch" source={require('../assets/images/map.png')}>
                        <ScrollView style={styles.item}>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('background', ImageDataList.background[0])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/1.Background/Bexco_1000%.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('background', ImageDataList.background[1])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/1.Background/GwanganBridge_1000%.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('faceNskin', ImageDataList.faceNskin[0])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/2.FaceNSkin/Base_Face_1000%1.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('faceNskin', ImageDataList.faceNskin[1])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/2.FaceNSkin/Base_Face_1000%2.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('faceNskin', ImageDataList.faceNskin[2])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/2.FaceNSkin/Base_Face_1000%3.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('faceNskin', ImageDataList.faceNskin[3])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/2.FaceNSkin/Base_Face_1000%4.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('faceNskin', ImageDataList.faceNskin[4])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/2.FaceNSkin/Base_Face_1000%5.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('faceNskin', ImageDataList.faceNskin[5])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/2.FaceNSkin/Base_Face_1000%6.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('faceNskin', ImageDataList.faceNskin[6])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/2.FaceNSkin/Base_Face_1000%7.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('faceNskin', ImageDataList.faceNskin[7])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/2.FaceNSkin/Base_Face_1000%8.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('faceNskin', ImageDataList.faceNskin[10])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/2.FaceNSkin/Base_Face_1000%9.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('body', ImageDataList.body[0])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/3.Body/Base_Body_1000%1.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('body', ImageDataList.body[1])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/3.Body/Base_Body_1000%2.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('body', ImageDataList.body[2])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/3.Body/Base_Body_1000%3.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('body', ImageDataList.body[3])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/3.Body/Base_Body_1000%4.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('eyeColor', ImageDataList.eyeColor[0])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/4.EyeColor/Base_Eye_1000%1.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('eyeColor', ImageDataList.eyeColor[1])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/4.EyeColor/Base_Eye_1000%2.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('eyeColor', ImageDataList.eyeColor[2])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/4.EyeColor/Base_Eye_1000%3.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('eyeColor', ImageDataList.eyeColor[3])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/4.EyeColor/Base_Eye_1000%4.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('lipColor', ImageDataList.lipColor[0])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/5.LipColor/Base_Lip_1000%1.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('lipColor', ImageDataList.lipColor[1])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/5.LipColor/Base_Lip_1000%2.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('lipColor', ImageDataList.lipColor[2])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/5.LipColor/Base_Lip_1000%3.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('beard', ImageDataList.beard[0])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/6.Beard/Base_Beard_1000%1.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('beard', ImageDataList.beard[1])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/6.Beard/Base_Beard_1000%2.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('beard', ImageDataList.beard[2])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/6.Beard/Base_Beard_1000%3.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('eyeWear', ImageDataList.eyeWear[0])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/7.Eyewear/Base_Eyewear_1000%1.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('eyeWear', ImageDataList.eyeWear[1])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/7.Eyewear/Base_Eyewear_1000%2.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('eyeWear', ImageDataList.eyeWear[2])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/7.Eyewear/Base_Eyewear_1000%3.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('headWear', ImageDataList.headWear[0])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/8.Headwear/Base_Hat_1000%1.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('headWear', ImageDataList.headWear[1])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/8.Headwear/Base_Hat_1000%2.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('headWear', ImageDataList.headWear[2])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/8.Headwear/Base_Hat_1000%3.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('headWear', ImageDataList.headWear[3])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/8.Headwear/Base_Hat_1000%4.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('acc', ImageDataList.acc[0])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/9.Acc/Base_Acc_1000%1.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('acc', ImageDataList.acc[1])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/9.Acc/Base_Acc_1000%2.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('acc', ImageDataList.acc[2])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/9.Acc/Base_Acc_1000%3.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => change('acc', ImageDataList.acc[3])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/9.Acc/Base_Acc_1000%4.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                    <TouchableHighlight onPress={() => change('acc', ImageDataList.acc[4])} style={{marginLeft: 12, marginRight: 12, marginTop: 12, width: 210, height: 210, backgroundColor: 'white' }}>
                                        <Image source={require(`../assets/joseon/9.Acc/Base_Acc_1000%5.png`)} resizeMode="contain" style={{width: 210, height: 210}} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{height: 24, backgroundColor: 'transparent'}}></View>
                        </ScrollView>
                        <View style={styles.preview}>
                            <Image style={styles.imgPreview} resizeMode="contain" key={image} source={{ uri: image }}/>
                        </View>
                        <View style={{backgroundColor:'transparent', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                        <TouchableOpacity onPress={StartAction} style={{width: 50, height: 50}}></TouchableOpacity>

                        <TouchableOpacity onPress={SubmitAction} style={{width: 50, height: 50, marginBottom: 70, marginRight: 25}}>
                            <Image source={require('../assets/images/submit.png')} resizeMode="contain" style={{width: 50, height: 50}}></Image>
                        </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>            
  </>
        );
    }
}
export default MainScreen;

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
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        marginTop: '5%',
        marginRight: '1%',
        marginBottom: '5%',
        flex: 1.5,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderColor: "#3A1B07",
        borderWidth: 5,
        borderRadius: 6,
        borderStyle: 'solid'
    },
    item: {
        flex: 3,
        marginTop: '14%',
        marginRight: '2%',
        marginLeft: '3%',
        marginBottom: '5%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderColor: "#3A1B07",
        borderWidth: 5,
        borderRadius: 6,
        borderStyle: 'solid'
    },
    imgPreview: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    tt: {
        width: 600,  
height: 600,   
borderRadius: 30,            
backgroundColor: '#ee6e73',                                    
position: 'absolute',                                          
bottom: 100,                                                    
right: 100, 
    }
});