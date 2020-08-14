import { createSelector } from 'reselect'
import {CollageElementType} from './CollageState'

export const getCollageSelector = (state: {CollageState: Array<CollageElementType>}) => {
    return state.CollageState;
}
export const getCollage = createSelector(getCollageSelector, (CollageState: Array<CollageElementType>): Array<CollageElementType> => {
    return CollageState
})
