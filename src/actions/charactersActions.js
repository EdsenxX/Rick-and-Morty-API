/* ------------------------------ Dependencies ------------------------------ */
import Axios from "axios";

export const traerCharacters = () => async(dispatch) => {
    let characters
    await Axios.get('https://rickandmortyapi.com/api/character').then(res=>{
        characters = res.data
    });
    dispatch({
        type: "charactersTraerTodos",
        payload: characters
    })
}

export const traerCharactersChangePage = (page) => async(dispatch) => {
    let characters
    await Axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`).then(res=>{
        characters = res.data
    });
    dispatch({
        type: "charactersChangePage",
        payload: characters
    })
}