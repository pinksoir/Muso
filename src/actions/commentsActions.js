
import base from '../base'

const commentModel = (author, comment) => {
    return {
      user: author,
      text: comment,
    }
}

export const addComment = (index, author, comment) => {

    return new Promise((resolve, reject) => {
        base.ref(`/albums/${index}`).once('value').then((album) => {

            let comments = album.val().comments || [];
            // let key = base.ref(`/albums/${index}`).push().key;

            comments.push(commentModel(author, comment))
            base.ref(`/albums/${index}/comments`).set(comments)

                .then( res => {resolve(res)})
                .catch( error => {reject(error)})
        })
    })
}


