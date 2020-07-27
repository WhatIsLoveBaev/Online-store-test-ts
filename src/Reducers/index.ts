import { combineReducers } from 'redux'

import DataBase from './DataBase/index'
import Basket from './Basket/index'
import HeaderReducer from './Header/index'
import CollageState from './Collage/index'
import Liked from './Liked/index'

export default combineReducers({
    DataBase,
    HeaderReducer,
    CollageState,
    Basket,
    Liked
})
export type RootReducer = ReturnType<typeof combineReducers>