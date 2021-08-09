/* ------------------------------ Dependencies ------------------------------ */
import React from 'react';
/* --------------------------------- Assets --------------------------------- */
import styles from '../../assets/styles/Home/index.module.scss';

const index = (props) => {
	const { characters: { results } } = props;

	if (!results) {
		return null;
	}

	return (
		<div className={styles.content}>
			{results.map((character) => (
				<div className={styles.character} key={character.id}>
					<img src={character.image} alt={character.name} />
					<div className={styles.info}>
						<p className={styles.name}>{character.name}</p>
                        <p>{character.status} - {character.species}</p>
                        <div className={styles.info__field}>
                            <p>Last Known location:</p>
                            <p>{character.location.name}</p>
                        </div>
					</div>
				</div>
			))};
		</div>
	);
};

export default index;
