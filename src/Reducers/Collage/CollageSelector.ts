import {CollageElementType} from './CollageState'

export const getCollage = (state: {CollageState: Array<CollageElementType>}) => {
    return state.CollageState;
}