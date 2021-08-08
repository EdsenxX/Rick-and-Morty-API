/* ------------------------------ Dependencies ------------------------------ */
import React from 'react';
/* --------------------------------- Assets --------------------------------- */
import styles from "../../assets/styles/Home/index.module.scss";
/* ------------------------------- Components ------------------------------- */
import Pagination from '@material-ui/lab/Pagination';

const index = (props) => {

    const {characters: {info, results}} = props;
    
    if(!results){
        return null;
    }
    return (
        <div>
            <div className="d-flex justify-content-center py-3">
                <Pagination count={info.pages} onChange={(event, page) => props.changePage(page)}/>
            </div>
            <div className={styles.content}>
                {results.map(character=>(
                    <img key={character.id} src={character.image} alt={character.name}/>
                ))}
            </div>
        </div>
    );
}

export default index;