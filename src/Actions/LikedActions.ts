import { elementType } from '../Reducers/Liked'
export const ADD_TO_LIKED = 'ADD_TO_LIKED'
export const DELETE_LIKE = 'DELETE_LIKE'

export interface addLikeActionType {
    type: typeof ADD_TO_LIKED,
    payload: elementType
}
export interface deleteLikeActionType {
    type: typeof DELETE_LIKE,
    payload: string
}

export const addLike = (payload: elementType): addLikeActionType => {
    return {
        type: ADD_TO_LIKED,
        payload
    }
}

export const deleteLike = (payload: string): deleteLikeActionType => {
    return {
        type: DELETE_LIKE,
        payload
    }
}
