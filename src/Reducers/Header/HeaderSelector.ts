import { createSelector } from 'reselect'
import { searchInputType } from './HeaderReducer'

export const getHeaderSearchSimple = (state: { HeaderReducer: searchInputType}) => {
    console.log('getHeaderSearch')
    return state.HeaderReducer.searchInput
}

export const getHeaderSearch = createSelector(getHeaderSearchSimple, (searchInput) => {
    console.log('getHeaderSearchSUPER')
    return searchInput
})