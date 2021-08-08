/* ------------------------------ Dependencies ------------------------------ */
import React, { Component } from 'react';
import { connect } from "react-redux";
import * as charactersActions from "../../actions/charactersActions";
/* ------------------------------- Components ------------------------------- */
import Child from "../../components/Home";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount = async() => {
        if(!this.props.characters.length){
            await this.props.traerCharacters();
        }
    }

    changePage = (page) => {
        this.props.traerCharactersChangePage(page);
        this.props.history.push({
            search: `?page=${page}`
        });
    }

    render() {
        const {characters} = this.props;
        return (
            <Child characters={characters} changePage={this.changePage}/>
        );
    }
}

const mapStateToProps = ({charactersReducer}) => charactersReducer;

export default connect(mapStateToProps,charactersActions)(index);