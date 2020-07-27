import { SEARCH_INPUT } from '../HeaderActions'
import { ADD_TO_LIKED, DELETE_LIKE } from '../LikedActions'
import { addLike, deleteLike} from '../LikedActions'
import { search } from '../HeaderActions'

describe('Header actions', () => {
    it('Should take input value', () => {
        const expected = {
            type: SEARCH_INPUT,
            payload: 'iphone'
        }
        expect(search('iphone')).toEqual(expected)
    })
    it('Should take liked object', () => {
        const element = {name: 'iphone xr',make: 'apple',shortDescription: ['desc'],description: [],price: '12 000',img: '../img',id: 'iphxr',sale: 'sale',groupEng: 'phones'}

        const expected = {
            type: ADD_TO_LIKED,
            payload: element
        }
        expect(addLike(element)).toEqual(expected)
    })
    it('Should take id elem for delete', () => {
        const expected = {
            type: DELETE_LIKE,
            payload: 'iphoneXrId'
        }
        expect(deleteLike('iphoneXrId')).toEqual(expected)
    })
});
