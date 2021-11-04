interface ITmpImageContext {
    tmpImage: {
        background: string,
        faceNskin: string,
        body: string,
        eyeColor: string,
        lipColor: string,
        beard: string,
        eyeWear: string,
        headWear: string,
        acc: string
    };
    updateTmpImage: (_type: string, _data: string) => void;
}