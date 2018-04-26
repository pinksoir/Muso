
import base from '../base'

///// FETCH COMMENTS


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
    const albumComments = [];

    base.ref(`/comments`).once('value', snap => {

      snap.forEach(data => {
        let comments = data.val();
        albumComments.push(comments)
      })

    })
    .then(() => dispatch(fetchComments(albumComments)))
  }
}

const commentModel = (author, comment) => {
    return {
      user: author,
      text: comment,
    }
}

export function addComment(commentsIndex, author, comment) {
    return dispatch => {
        base.ref(`/comments/${commentsIndex}`).once('value', snap => {

            let comments = snap.val().comments || [];

            comments.push(commentModel(author, comment))
            base.ref(`/comments/${commentsIndex}/comments`).set(comments)

        })
        .then(() => dispatch(fetchCommentsThunk()))
    }
}


