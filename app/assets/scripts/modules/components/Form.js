import React from "react";
import { connect } from "react-redux";

import { fetchUserData } from "../actions";

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: "",
            errorMsg: null
        };

        this.handleUsernameChanges = this.handleUsernameChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChanges(event){
        this.setState({
            username: event.target.value
        });
    }

    handleSubmit(event){
        let username = this.state.username.trim();

        if(username.length == 0){
            this.setState({
                errorMsg: "Empty input",
                username: ""
            });
        }else{
            this.setState({
                username: username,
                errorMsg: null
            }, () => {
                this.props.fetchUserData(username);
            });
        }

        event.preventDefault();
    }

    render(){
        let errorMsg = this.state.errorMsg ? this.state.errorMsg : this.props.errorMsg;

        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <fieldset disabled={this.props.formDisabled}>

                    <label className="form__caption">
                        Enter your GitHub username and click "generate".
                    </label>

                    {errorMsg &&
                    <label className="form__error-message">
                        {errorMsg}
                    </label>}

                    <p className="form__body">
                        <input
                            name="username"
                            className="form__body__input-account"
                            type="text"
                            placeholder="Enter your GitHub username"
                            value={this.state.username}
                            onChange={this.handleUsernameChanges}/>
    
                        <input type="submit" className="form__body__submit-button" value="generate"/>
                    </p>

                </fieldset>
            </form>
        );
    }
}

/* Connect with Redux */

const mapStateToProps = (state, ownProps) => ({
    errorMsg: state.userData.errorMessage,
    formDisabled: state.userData.isFetching
});

const mapDispatchToProps = dispatch => ({
    fetchUserData: username => dispatch(fetchUserData(username))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);