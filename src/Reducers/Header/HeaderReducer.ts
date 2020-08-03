import { SEARCH_INPUT } from '../../Actions/HeaderActions'
import { searchActionType } from '../../Actions/HeaderActions'

export type searchInputType = { searchInput: string }

const initial: searchInputType = { searchInput: '' }


const headerReducer = (state = initial, {type, payload}: searchActionType): searchInputType => {
    switch (type) {

        case SEARCH_INPUT: return {
            searchInput: payload
        }

        default:
            return state
    }
}

export default headerReducer