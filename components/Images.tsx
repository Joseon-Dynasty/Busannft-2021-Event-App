import React from "react";
import { Text } from "react-native";

/**
 * DATA FEED
 */
const ImageDataList = {
    background: [
        '1.Background/Bexco_1000%.png',
        '1.Background/GwanganBridge_1000%.png'
    ],
    faceNskin: [
        '2.FaceNSkin/Base_Face_1000%1.png',
        '2.FaceNSkin/Base_Face_1000%2.png',
        '2.FaceNSkin/Base_Face_1000%3.png',
        '2.FaceNSkin/Base_Face_1000%4.png',
        '2.FaceNSkin/Base_Face_1000%5.png',
        '2.FaceNSkin/Base_Face_1000%6.png',
        '2.FaceNSkin/Base_Face_1000%7.png',
        '2.FaceNSkin/Base_Face_1000%8.png',
        '2.FaceNSkin/Base_Face_1000%9.png',
        '2.FaceNSkin/Base_Face_1000%10.png',
        '2.FaceNSkin/Base_Face_1000%11.png',
        '2.FaceNSkin/Base_Face_1000%12.png'],
    body: [
        '3.Body/Base_Body_1000%1.png',
        '3.Body/Base_Body_1000%2.png',
        '3.Body/Base_Body_1000%3.png',
        '3.Body/Base_Body_1000%4.png'
    ],
    eyeColor: [
        '4.EyeColor/Base_Eye_1000%1.png',
        '4.EyeColor/Base_Eye_1000%2.png',
        '4.EyeColor/Base_Eye_1000%3.png',
        '4.EyeColor/Base_Eye_1000%4.png'
    ],
    lipColor: [
        '5.LipColor/Base_Lip_1000%1.png',
        '5.LipColor/Base_Lip_1000%2.png',
        '5.LipColor/Base_Lip_1000%3.png'
    ],
    beard: [
        '6.Beard/Base_Beard_1000%1.png',
        '6.Beard/Base_Beard_1000%2.png',
        '6.Beard/Base_Beard_1000%3.png'
    ],
    eyeWear: [
        '7.Eyewear/Base_Eyewear_1000%1.png',
        '7.Eyewear/Base_Eyewear_1000%2.png',
        '7.Eyewear/Base_Eyewear_1000%3.png'
    ],
    headWear: [
        '8.Headwear/Base_Hat_1000%1.png',
        '8.Headwear/Base_Hat_1000%2.png',
        '8.Headwear/Base_Hat_1000%3.png',
        '8.Headwear/Base_Hat_1000%4.png'
    ],
    acc: [
        '9.Acc/Base_Acc_1000%1.png',
        '9.Acc/Base_Acc_1000%2.png',
        '9.Acc/Base_Acc_1000%3.png',
        '9.Acc/Base_Acc_1000%4.png',
        '9.Acc/Base_Acc_1000%5.png'
    ],
}

const background = {
    BEXCO: ['1.Background/Bexco_1000%.png', '../assets/joseon/1.Background/Bexco_1000%.png'],
    GWANGANBRIDGE: ['1.Background/GwanganBridge_1000%.png', '../assets/joseon/1.Background/GwanganBridge_1000%.png']
};

const faceNskin = {
    ONE: [, '../assets/joseon/2.FaceNSkin/Base_Face_1000%1.png'],
    TWO: ['2.FaceNSkin/Base_Face_1000%2.png', '../assets/joseon/2.FaceNSkin/Base_Face_1000%2.png'],
    THREE: ['2.FaceNSkin/Base_Face_1000%3.png', '../assets/joseon/2.FaceNSkin/Base_Face_1000%3.png'],
    FOUR: ['2.FaceNSkin/Base_Face_1000%4.png', '../assets/joseon/2.FaceNSkin/Base_Face_1000%4.png'],
    FIVE: ['2.FaceNSkin/Base_Face_1000%5.png', '../assets/joseon/2.FaceNSkin/Base_Face_1000%5.png'],
    SIX: ['2.FaceNSkin/Base_Face_1000%6.png', '../assets/joseon/2.FaceNSkin/Base_Face_1000%6.png'],
    SEVEN: ['2.FaceNSkin/Base_Face_1000%7.png', '../assets/joseon/2.FaceNSkin/Base_Face_1000%7.png'],
    EIGHT: ['2.FaceNSkin/Base_Face_1000%8.png', '../assets/joseon/2.FaceNSkin/Base_Face_1000%8.png'],
    NINE: ['2.FaceNSkin/Base_Face_1000%9.png', '../assets/joseon/2.FaceNSkin/Base_Face_1000%9.png'],
    TEN: ['2.FaceNSkin/Base_Face_1000%10.png', '../assets/joseon/2.FaceNSkin/Base_Face_1000%10.png'],
    ELEVEN: ['2.FaceNSkin/Base_Face_1000%11.png', '../assets/joseon/2.FaceNSkin/Base_Face_1000%11.png'],
    TWELVE: ['2.FaceNSkin/Base_Face_1000%12.png', '../assets/joseon/2.FaceNSkin/Base_Face_1000%12.png'],
};

const body = {
    ONE: ['3.Body/Base_Body_1000%1.png', '../assets/joseon/3.Body/Base_Body_1000%1.png'],
    TWO: ['3.Body/Base_Body_1000%2.png', '../assets/joseon/3.Body/Base_Body_1000%2.png'],
    THREE: ['3.Body/Base_Body_1000%3.png', '../assets/joseon/3.Body/Base_Body_1000%3.png'],
    FOUR: ['3.Body/Base_Body_1000%4.png', '../assets/joseon/3.Body/Base_Body_1000%4.png'],
};

const eyeColor = {
    ONE: ['4.EyeColor/Base_Eye_1000%1.png', '../assets/joseon/4.EyeColor/Base_Eye_1000%1.png'],
    TWO: ['4.EyeColor/Base_Eye_1000%2.png', '../assets/joseon/4.EyeColor/Base_Eye_1000%2.png'],
    THREE: ['4.EyeColor/Base_Eye_1000%3.png', '../assets/joseon/4.EyeColor/Base_Eye_1000%3.png'],
    FOUR: ['4.EyeColor/Base_Eye_1000%4.png', '../assets/joseon/4.EyeColor/Base_Eye_1000%4.png'],
};

const lipColor = {
    ONE: ['5.LipColor/Base_Lip_1000%1.png', '../assets/joseon/5.LipColor/Base_Lip_1000%1.png'],
    TWO: ['5.LipColor/Base_Lip_1000%2.png', '../assets/joseon/5.LipColor/Base_Lip_1000%2.png'],
    THREE: ['5.LipColor/Base_Lip_1000%3.png', '../assets/joseon/5.LipColor/Base_Lip_1000%3.png'],
};

const beard = {
    ONE: ['6.Beard/Base_Beard_1000%1.png', '../assets/joseon/6.Beard/Base_Beard_1000%1.png'],
    TWO: ['6.Beard/Base_Beard_1000%2.png', '../assets/joseon/6.Beard/Base_Beard_1000%2.png'],
    THREE: ['6.Beard/Base_Beard_1000%3.png', '../assets/joseon/6.Beard/Base_Beard_1000%3.png'],
};

const eyewear = {
    ONE: ['7.Eyewear/Base_Eyewear_1000%1.png', '../assets/joseon/7.Eyewear/Base_Eyewear_1000%1.png'],
    TWO: ['7.Eyewear/Base_Eyewear_1000%2.png', '../assets/joseon/7.Eyewear/Base_Eyewear_1000%2.png'],
    THREE: ['7.Eyewear/Base_Eyewear_1000%3.png', '../assets/joseon/7.Eyewear/Base_Eyewear_1000%3.png'],
};

const headwear = {
    ONE: ['8.Headwear/Base_Hat_1000%1.png', '../assets/joseon/8.Headwear/Base_Hat_1000%1.png'],
    TWO: ['8.Headwear/Base_Hat_1000%1.png', '../assets/joseon/8.Headwear/Base_Hat_1000%1.png'],
    THREE: ['8.Headwear/Base_Hat_1000%1.png', '../assets/joseon/8.Headwear/Base_Hat_1000%1.png'],
    FOUR: ['8.Headwear/Base_Hat_1000%1.png', '../assets/joseon/8.Headwear/Base_Hat_1000%1.png'],
};

const acc = {
    ONE: ['9.Acc/Base_Acc_1000%1.png', '../assets/joseon/9.Acc/Base_Acc_1000%1.png'],
    TWO: ['9.Acc/Base_Acc_1000%2.png', '../assets/joseon/9.Acc/Base_Acc_1000%2.png'],
    THREE: ['9.Acc/Base_Acc_1000%3.png', '../assets/joseon/9.Acc/Base_Acc_1000%3.png'],
    FOUR: ['9.Acc/Base_Acc_1000%4.png', '../assets/joseon/9.Acc/Base_Acc_1000%4.png'],
    FIVE: ['9.Acc/Base_Acc_1000%5.png', '../assets/joseon/9.Acc/Base_Acc_1000%5.png'],
}

/**
 * Image Mixer Component
 */
type ImageMixerProps = {
    background?: string;
    faceNskin?: string;
    body?: string;
    eyeColor?: string;
    lipColor?: string;
    beard?: string;
    eyewear?: string;
    headwear?: string;
    acc?: string;
}

const ImageMixer = (props: ImageMixerProps) => {
    return <Text>asdf</Text>
}

export { ImageDataList, background, faceNskin, body, eyeColor, lipColor, beard, eyewear, headwear, acc };
