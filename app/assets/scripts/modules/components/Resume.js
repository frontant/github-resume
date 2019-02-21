import React from "react";
import { connect } from "react-redux";

import Repositories from "./Repositories";
import {
    fetchRepositories,
    resetUserData,
    resetRepositories,
    resetLanguages
} from "../actions";

class Resume extends React.Component{
    constructor(props){
        super(props);

        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentDidMount(){
        if(this.props.username){
            this.props.fetchRepositories(this.props.username);
        }
    }

    handleBackButtonClick(event){
        this.props.resetUserData();
        this.props.resetRepositories();
        this.props.resetLanguages();

        event.preventDefault();
    }

    render(){
        return (
            <div>
                {this.props.errorMsg ? (
                    // show error message
                    <div className="generic--color-red">
                        {this.props.errorMsg}
                    </div>
                ) : (
                    // show the resume
                    <div>
                        <h3>Repositories</h3>
                        <Repositories />
                    </div>
                )}
                    
                <a  href="#"
                    className="button generic--margin-t-3em"
                    onClick={this.handleBackButtonClick}>back</a>
            </div>
        );
    }
}

/* Connect with Redux */

const mapStateToProps = (state, ownProps) => ({
    errorMsg: state.repositories.errorMessage,
    username: state.userData.data ? state.userData.data.username : ""
});

const mapDispatchToProps = dispatch => ({
    fetchRepositories: username => dispatch(fetchRepositories(username)),
    resetUserData: () => dispatch(resetUserData()),
    resetRepositories: () => dispatch(resetRepositories()),
    resetLanguages: () => dispatch(resetLanguages())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Resume);