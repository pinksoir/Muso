export function filterAlbums(filter) {
    return {
        type: 'FILTER_ALBUMS',
        payload: filter
    }
}