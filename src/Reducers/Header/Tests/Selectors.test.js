import {getHeaderSearch} from "../HeaderSelector";

describe("Header selector", () => {
    const state = {
        HeaderReducer: {
            searchInput: 'apple'
        }
    }
    it("Should return search input value", () => {
        const expected = 'apple'
        const selector = getHeaderSearch
        expect(selector(state)).toEqual(expected)
    })
})
