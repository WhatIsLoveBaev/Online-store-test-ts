import { elementStateType } from './Liked'

export const getLiked = (state: { Liked: Array<elementStateType> }) => {
    return state.Liked
}