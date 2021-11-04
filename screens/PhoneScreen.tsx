import * as React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

import { Image, ImageBackground, StatusBar, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import axios from 'axios';
import { ImageContext } from '../Context/ImageContext';

type NavigationProp = StackNavigationProp<NaviParamList, 'Start'>
interface Props {
    navigation: NavigationProp
}

const PhoneScreen = ({navigation}: Props) => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    StatusBar.setHidden(true);

    const {image, updateImage} = React.useContext<IImageContext>(
        ImageContext
    );

    let [fontsLoaded] = useFonts({
        'neodgm': require('../assets/fonts/neodgm_pro.ttf'),
      });
    const [number, onChangeNumber] = React.useState(null);

    const StartAction = async () => {
        if (number !== null) {
            alert('커뮤니티에서 실시간으로 11/5(금)부터 투표를 진행하여\n상위 5인 선정될 경우 500KLAY 상당의 NFT를 제공합니다!\n\n오픈 카톡: Joseon Dynasty (비밀번호 10000)');
            await axios.post('https://api.joseonnft.com/event/busannft/image', {
                phone: number,
                image: image
            });
            navigation.navigate('Start');
        } else {
            alert('[Joseon Dynasty] 전화번호를 입력해 주세요!\n\n전화번호 제출시 이벤트 운영 및 상품 제공 목적으로만 사용 후 즉시 삭제합니다 :)');
        }
    }

    
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <>
                <View style={styles.container}>
                    <ImageBackground style={styles.imgBackground} source={require('../assets/images/bg.png')}>
                        <View style={{flex:7}}></View>
                        <TextInput onChangeText={onChangeNumber} keyboardType='phone-pad' textContentType="telephoneNumber" style={styles.item} placeholder="01012345678" placeholderTextColor="gray"></TextInput>
                        <TouchableOpacity onPress={StartAction}>
                            <Image source={require("../assets/images/ss.png")}/>
                        </TouchableOpacity>
                        <Text style={styles.policyText}>전화번호 제출시 이벤트 운영 및 상품 제공 목적으로만 사용 후 즉시 삭제합니다.</Text>
                    </ImageBackground>
                </View>
            </>
        );
    }
}
export default PhoneScreen;

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
    },
    item: {
        flex: 2,
        marginBottom: '3%',
        width: '50%',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderColor: "#3A1B07",
        fontFamily: 'neodgm',
        color: 'white',
        fontSize: 50,
        borderWidth: 5,
        borderRadius: 6,
        borderStyle: 'solid'
    },
});