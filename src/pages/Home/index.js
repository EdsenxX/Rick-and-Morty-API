/* ------------------------------ Dependencies ------------------------------ */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as charactersActions from '../../actions/charactersActions';
/* ------------------------------- Components ------------------------------- */
import Child from '../../components/Home';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}

	componentDidMount = async () => {
		if (!this.props.characters.length) {
			await this.props.traerCharacters();
		}
		window.addEventListener('scroll', this.endPage);
	};

	endPage = async () => {
		if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
			let page = this.state.page;
			if (!page) {
				page = 0;
			}
			if (this.props.characters.length && this.props.characters.info.next) {
				alert('es todo wey');
				return;
			}
			page++;
			this.setState({ page });
			this.props.traerCharacters(page);
		}
	};

	changePage = (page) => {
		this.props.traerCharactersChangePage(page);
		this.props.history.replace(`/characters/page/${page}`, null);
	};

	render() {
		const { characters } = this.props;
		return <Child characters={characters} changePage={this.changePage} />;
	}
}
const mapStateToProps = ({ charactersReducer }) => charactersReducer;
export default connect(mapStateToProps, charactersActions)(index);
