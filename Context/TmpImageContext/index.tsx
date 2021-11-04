import * as React from 'react';
import { ImageDataList } from '../../components/Images';

interface Props {
    children: JSX.Element | Array<JSX.Element>;
};

const TmpImageContext = React.createContext<ITmpImageContext>({
    tmpImage: {
        background: ImageDataList.background[0],
        faceNskin: ImageDataList.faceNskin[0],
        body: ImageDataList.body[0],
        eyeColor: ImageDataList.eyeColor[0],
        lipColor: ImageDataList.lipColor[0],
        beard: ImageDataList.beard[0],
        eyeWear: ImageDataList.eyeWear[0],
        headWear: ImageDataList.headWear[0],
        acc: ImageDataList.acc[0]
    },
    updateTmpImage: (_type: string, _data: string): void => {},
});

const TmpImageContextProvider = ({children}: Props) => {
    const [tmpImage, setTmpImage] = React.useState({
        background: ImageDataList.background[0],
        faceNskin: ImageDataList.faceNskin[0],
        body: ImageDataList.body[0],
        eyeColor: ImageDataList.eyeColor[0],
        lipColor: ImageDataList.lipColor[0],
        beard: ImageDataList.beard[0],
        eyeWear: ImageDataList.eyeWear[0],
        headWear: ImageDataList.headWear[0],
        acc: ImageDataList.acc[0]
    });

    const updateTmpImage = (_type: string, _data: string): void => {
        let tmp = tmpImage;

        switch (_type) {
            case 'background':
                tmp.background = _data;
                break;

            case 'faceNskin':
                tmp.faceNskin = _data;
                break;

            case 'body':
                tmp.body = _data;
                break;

            case 'eyeColor':
                tmp.eyeColor = _data;
                break;

            case 'lipColor':
                tmp.lipColor = _data;
                break;
            
            case 'beard':
                tmp.beard = _data;
                break;
            
            case 'eyeWear':
                tmp.eyeWear = _data;
                break;

            case 'headWear':
                tmp.headWear = _data;
                break;

            case 'acc':
                tmp.acc = _data;
                break;
        
            default:
                break;
        }

        setTmpImage(tmp);
    };

    const initTmpImage = () => {
        setTmpImage({
            background: ImageDataList.background[0],
            faceNskin: ImageDataList.faceNskin[0],
            body: ImageDataList.body[0],
            eyeColor: ImageDataList.eyeColor[0],
            lipColor: ImageDataList.lipColor[0],
            beard: ImageDataList.beard[0],
            eyeWear: ImageDataList.eyeWear[0],
            headWear: ImageDataList.headWear[0],
            acc: ImageDataList.acc[0]
        })
    };

    React.useEffect(() => {
        initTmpImage();
    }, []);

    return (
        <TmpImageContext.Provider
            value={{
                tmpImage,
                updateTmpImage,
            }}>
            {children}
        </TmpImageContext.Provider>
    );
};

export {TmpImageContextProvider, TmpImageContext};
