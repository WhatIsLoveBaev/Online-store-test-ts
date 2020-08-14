import { createSelector } from 'reselect'
import { DataBaseType } from './DataBase';


export const getDataBaseSelector = (state: { DataBase: DataBaseType }) => {
    return state.DataBase
}

export const getDataBase = createSelector(getDataBaseSelector, (DataBase: DataBaseType): DataBaseType => {
    return DataBase
})
