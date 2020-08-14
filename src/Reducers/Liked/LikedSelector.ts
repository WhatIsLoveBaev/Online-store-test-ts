import { createSelector } from 'reselect'
import { elementStateType } from './Liked'

export const getLikedSelector = (state: { Liked: Array<elementStateType> }) => {
    return state.Liked
}
export const getLiked = createSelector(getLikedSelector, (Liked: Array<elementStateType>): Array<elementStateType> => {
    return Liked
})
