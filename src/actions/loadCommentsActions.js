
import base from '../base'

/**
* ACTION CREATORS
*/
export const fetchComments = (payload) => ({
  type: 'FETCH_COMMENTS', 
  payload
})


/**
* THUNKS
*/
export function fetchCommentsThunk() {
  return dispatch => {
    const comments = [];

    base.ref(`/comments`).once('value', snap => {

      snap.forEach(data => {
        let comment = data.val();
        comments.push(comment)
      })

    })
    .then(() => dispatch(fetchComments(comments)))
  }
}