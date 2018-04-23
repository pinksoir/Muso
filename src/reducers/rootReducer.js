import { combineReducers } from 'redux'

import getAlbums from './getAlbumsReducer'
import userAlbums from './userAlbumsReducer'
import filterValue from './filterAlbumsReducer'

const rootReducer = combineReducers({
    getAlbums,
    userAlbums,
    filterValue,
});

export default rootReducer;