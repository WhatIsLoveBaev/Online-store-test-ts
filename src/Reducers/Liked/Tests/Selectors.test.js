import {getLiked} from "../LikedSelector";

describe('Liked selector', () => {
    const state = {
        Liked: [{name: 'Iphone', make: 'apple', shortDescription: ['desc'], description: [], price: '15 000', img: '.jpg', id: 'iphxr', sale: '10', groupEng: 'phones',}]
    }
    it("Should return liked element (object)", () => {
        const expected = [{name: 'Iphone', make: 'apple', shortDescription: ['desc'], description: [], price: '15 000', img: '.jpg', id: 'iphxr', sale: '10', groupEng: 'phones',}]
        const selector = getLiked
        expect(selector(state)).toEqual(expected)
    })
})
