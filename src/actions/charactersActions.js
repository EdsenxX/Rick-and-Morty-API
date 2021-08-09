/* ------------------------------ Dependencies ------------------------------ */
import Axios from "axios";

export const traerCharacters = (page) => async(dispatch,getState) => {
    const url = page ? 
        `https://rickandmortyapi.com/api/character/?page=${page}`
        : 'https://rickandmortyapi.com/api/character';
    const {characters} = getState().charactersReducer;
    let characters_nuevos
    await Axios.get(url).then(res=>{
        characters_nuevos = res.data
    });
    if(page){
        characters_nuevos = {
            info: characters.info,
            results: [...characters.results,...characters_nuevos.results]
        }
    }
    dispatch({
        type: "charactersTraerTodos",
        payload: characters_nuevos
    })
}