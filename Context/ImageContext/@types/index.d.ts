interface IImageContext {
    image: string;
    updateImage: (_background: string, _faceNskin: string, _body: string, _eyeColor: string, _lipcolor: string, _beard: string, _eyewear: string, _headwear: string, _acc: string) => Promise<void>;
}