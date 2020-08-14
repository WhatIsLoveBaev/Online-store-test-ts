import { createSelector } from 'reselect'
import { searchInputType } from './HeaderReducer'

export const getHeaderSearchSimple = (state: { HeaderReducer: searchInputType}) => {
    return state.HeaderReducer.searchInput
}

export const getHeaderSearch = createSelector(getHeaderSearchSimple, (searchInput: string): string => {
    return searchInput
})
