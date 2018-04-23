// Add album to User album list
export function addAlbum(album) {

    return {
        type: 'ADD_ALBUM_TO_LIST',
        payload: album
    }
}

// Remove album from user list
export function removeAlbum(album) {

    return {
        type: 'REMOVE_ALBUM_FROM_LIST',
        payload: album,
    }
}