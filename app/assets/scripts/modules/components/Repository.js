import React from "react";
import { connect } from "react-redux";

import { fetchLanguages } from "../actions";

class Repository extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchLanguages(this.props.id);
    }

    render(){
        return (
            <li className="resume__repository">
                <h4><a href={this.props.website} target="_blank">{this.props.name}</a></h4>
                <h5>{this.props.description}</h5>
                {this.props.languages.errorMessage ? (
                    <span className="generic--color-red">
                        {this.props.languages.errorMessage}
                    </span>
                ) : (
                    <div className="resume__repository__languages">
                        {this.props.languages.data.join(", ")}
                    </div>
                )}
            </li>
        );
    }
}

/* Connect to Redux */

const mapStateToProps = (state, ownProps) => {
    let repository = state.repositories.data.find(repos => repos.id == ownProps.id);
    let languages = state.languages.find(item => item.repositoryId == repository.id);

    return {
        name: repository.name,
        description: repository.description,
        website: repository.website,
        languages: (languages ? languages : { data: [] })
    };
};

const mapDispatchToProps = dispatch => ({
    fetchLanguages: repositoryId => dispatch(fetchLanguages(repositoryId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Repository);