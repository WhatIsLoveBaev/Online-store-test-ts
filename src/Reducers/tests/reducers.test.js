import { search } from '../../Actions/HeaderActions'
import headerReducer from '../Header/HeaderReducer'

describe('Reducer', () => {

    const initial = { searchInput: '' }

    it('Should return search input value', () => {
        const expected = {
            searchInput: 'galaxy'
        }

        expect(headerReducer(initial, search('galaxy'))).toEqual(expected)
    })
});
