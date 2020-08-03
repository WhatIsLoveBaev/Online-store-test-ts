import { createSelector } from 'reselect'
import { DataBaseType } from './DataBase';


export const getDataBaseSelector = (state: { DataBase: DataBaseType }): any => {
    console.log('getDataBase')
    return state.DataBase
}

export const getDataBase = createSelector(getDataBaseSelector, (DataBase) => {
    console.log('getDataBaseSUPER')
    return DataBase
})
