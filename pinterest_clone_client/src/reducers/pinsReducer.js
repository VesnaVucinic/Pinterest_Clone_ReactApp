export const pinsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PINS':
            return {hits: action.payload}
        default:
                return state
    }
}