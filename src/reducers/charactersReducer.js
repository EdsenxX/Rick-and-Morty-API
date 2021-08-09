const INITIAL_STATE = {
    characters: []
};

const charactersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "charactersTraerTodos":
            return {...state, characters: action.payload}
        default:
            return state;
    }
}

export default charactersReducer;