/* ------------------------------ Dependencies ------------------------------ */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as charactersActions from '../../actions/charactersActions';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

/* --------------------------------- Assets --------------------------------- */
import styles from '../../assets/styles/global/Menu.module.scss';
import Logo from '../../assets/images/Logo.png';
import SearchIcon from '../../assets/icons/bx-search.svg';

const Menu = (props) => {
	useEffect(() => {
		const menu = document.getElementById('menu');
		const alturaMenu = menu.offsetHeight;

		window.addEventListener('scroll', () => {
			if (window.scrollY > alturaMenu) {
				if (!menu.classList.contains(styles.nav__fixes)) {
					menu.classList.add(styles.nav__fixes);
				}
			} else {
				if (menu.classList.contains(styles.nav__fixes)) {
					menu.classList.remove(styles.nav__fixes);
				}
			}
		});
	}, []);

	const handleInputChange = (e) => {
		const { value } = e.target;
		props.filterCharacters(value);
	};

	return (
		<nav className={styles.nav} id="menu">
			<div className={styles.nav__logo}>
				<img src={Logo} alt="Rick and Morty logo" />
			</div>
			<div className={styles.nav__search}>
				<input type="text" placeholder="Buscar..." onChange={handleInputChange} />
				<img src={SearchIcon} alt="Icono de buscar" />
				<List class={styles.nav__search__results}>
					{props.charactersFltered.results &&
						props.charactersFltered.results.map((character) => (
							<ListItem alignItems="flex-start" key={character.id}>
								<ListItemAvatar>
									<Avatar alt={character.name} src={character.image} />
								</ListItemAvatar>
								<ListItemText
									className="text-dark"
									primary={character.name}
									secondary={
										<p>
											{character.status} - {character.species}
										</p>
									}
								/>
							</ListItem>
						))}
					<Divider variant="inset" component="li" />
				</List>
			</div>
		</nav>
	);
};

const mapStateToProps = ({ charactersReducer }) => charactersReducer;

export default connect(mapStateToProps, charactersActions)(Menu);
