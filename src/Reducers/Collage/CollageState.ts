/* import videoIphone from './iphone_video.mp4'
import videoSamsung from './samsung_video.mp4' */

export interface CollageElementType {
    img?: string,
    video? : string
    idGroup?: string,
    product?: string,
    label?: string,
    id?: string
}

const Collage: Array<CollageElementType> = [
    {
        img: 'https://3dnews.ru/assets/external/illustrations/2019/01/26/981772/title.jpg',
        idGroup: 'cameras',
        product: 'nikon',
        label: 'Nikon',
        id: 'NikonPh156'
    },
    {
        video: '',
        idGroup: 'phones',
        product: 'samsung',
        label: 'Samsung',
        id: 'PSam'
    },
    {
        video: '',
        idGroup: 'phones',
        product: 'apple',
        label: 'Iphone',
        id: 'APho'
    },
    {
        img: 'https://nanoreview.net/uploads/posts/2015-08/1438873427_8masgd.jpg',
        idGroup: 'smart_watch',
        product: 'samsung',
        label: 'Samsung',
        id: 'Swatch'
    }
]

const CollageState = (state: Array<CollageElementType> = Collage) => {
    return state
}

export default CollageState