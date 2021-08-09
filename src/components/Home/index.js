/* ------------------------------ Dependencies ------------------------------ */
import React from 'react';
/* --------------------------------- Assets --------------------------------- */
import styles from "../../assets/styles/Home/index.module.scss";

const index = (props) => {

    const {characters: {results}} = props;
    
    if(!results){
        return null;
    }
    return (
        <div id="charactersContainer">
            <div className={styles.content}>
                {results.map(character=>(
                    <img key={character.id} src={character.image} alt={character.name}/>
                ))}
            </div>
        </div>
    );
}

export default index;