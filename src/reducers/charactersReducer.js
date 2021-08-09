const INITIAL_STATE = {
    characters: [],
    charactersFltered: [],
};

const charactersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "charactersTraerTodos":
            return {...state, characters: action.payload}
        case "filterCharacters":
            return {...state, charactersFltered: action.payload}
        default:
            return state;
    }
}

export default charactersReducer;