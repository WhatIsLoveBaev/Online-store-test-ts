import {getCollage, getCollageSelector} from "../CollageSelector";


describe("Collage selector", () => {
    const state = {
        CollageState: [{
            img: 'https://title.jpg',
            video: "video",
            idGroup: 'cameras',
            product: 'nikon',
            label: 'Nikon',
            id: 'NikonPh156'}]
    }
    it('Should return get collage selector', () => {
        const expected = [{
            img: 'https://title.jpg',
            video: 'video',
            idGroup: 'cameras',
            product: 'nikon',
            label: 'Nikon',
            id: 'NikonPh156'}]
        const selector = getCollage
        expect(selector(state)).toEqual(expected)
    })
})
