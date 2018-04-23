export default function filterAlbumsReducer(state={
    filterValue: '',
}, action) {

    switch(action.type) {
        case 'FILTER_ALBUMS':

            var currVal = state.filterValue;
            var newVal = action.payload;

            console.log(action.payload);

            return {
                ...state,
                filterValue: state.filterValue.replace(currVal, newVal)
            }
            

        default:
            return state;
    }    
}