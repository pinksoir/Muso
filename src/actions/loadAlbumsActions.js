// import axios from "axios"
import base from '../base'
import firebase from 'firebase'

/**
* ACTION CREATORS
*/
export const fetchAlbums = (payload) => ({
  type: 'FETCH_ALBUMS', 
  payload
})

export const fetchComments = (payload) => ({
  type: 'FETCH_COMMENTS', 
  payload
})


/**
* THUNKS
*/
export function fetchAlbumsThunk() {
  return dispatch => {
    const albums = [];

    base.ref(`/albums`).once('value', snap => {

      snap.forEach(data => {
        let album = data.val();
        albums.push(album)
      })

    })
    .then(() => dispatch(fetchAlbums(albums)))
  }
}