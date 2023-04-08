export const globalReducer = (state, action) => {
    switch(action.type) {
        case "ADD_FAVORITES": {
            return {
                ...state, 
                favs: [...state.favs, action.payload]
            }
        }

        case "REMOVE_FAVORITES": {
            return {
                ...state, 
                favs: state.favs.filter(favorite => favorite.id !== action.payload)
            }
        }

        case "CHANGE_THEME": {
            return {
                ...state,
                theme: action.payload 
            }
        }

    default: {
        throw new Error ("Invalid action")
    }
}
};