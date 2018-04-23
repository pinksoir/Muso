
export default function getAlbumsReducer(state=[], action) {

    switch(action.type) {
        case 'ADD_ALBUM_TO_LIST':
            let index = state.findIndex(album => album.title === action.payload.title);

            if(index === -1)
                return [...state, action.payload];
            return state;

        case "REMOVE_ALBUM_FROM_LIST":

            return [...state.filter(album => album.title !== action.payload.title)]
            

        default: 
            return state;
    }
}