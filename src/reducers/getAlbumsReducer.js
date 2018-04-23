
export default function getAlbumsReducer (state = [], action) {
    switch (action.type) {
        case 'FETCH_ALBUMS':
            return action.payload

        default:
            return state
    }
}