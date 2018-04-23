import axios from 'axios'

export function fetchComments() {
  return function(dispatch) {
    dispatch({ type: "FETCH_COMMENTS" });

    axios.get('https://api.myjson.com/bins/169x9n')
    .then(response => {
      dispatch({ type: "FETCH_COMMENTS_FULFILLED", payload: response.data });
    })
    .catch(err => {
      dispatch({ type: "FETCH_COMMENTS_REJECTED", payload: err });
    });
  }
}

export function addComment(albumId, author, comment) {
  return {
      type: 'ADD_COMMENT',
      albumId,
      author,
      comment,
  }
}

export function updateComments() {
    return {
        type: 'UPDATE_COMMENTS',
    }
}
