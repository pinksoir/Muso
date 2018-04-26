import { combineReducers } from 'redux'

import getAlbums from './getAlbumsReducer'
import getComments from './getCommentsReducer'
import userAlbums from './userAlbumsReducer'
import filterValue from './filterAlbumsReducer'

const rootReducer = combineReducers({
    getAlbums,
    getComments,
    userAlbums,
    filterValue,
});

export default rootReducer;