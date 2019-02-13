import React from "react";
import { connect } from "react-redux";

import { fetchLanguages } from "../actions";
import Repository from "./Repository";

class Repositories extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let repoComponents = [];

        this.props.repositories.forEach(repo => {
            repoComponents.push(<Repository key={repo.id} id={repo.id}/>);
        });
    
        return (
            <ul className="resume">
                {repoComponents}
            </ul>
        );
    }
}

/* Connect with Redux */

const mapStateToProps = (state, ownProps) => ({
    repositories: state.repositories.data
});

const mapDispatchToProps = dispatch => ({
    fetchLanguages: repositoryId => dispatch(fetchLanguages(repositoryId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Repositories);