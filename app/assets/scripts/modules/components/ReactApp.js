import React from "react";

import { connect } from "react-redux";

import PageFrame from "./PageFrame";
import Form from "./Form";
import Resume from "./Resume";

class ReactApp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // render page with the form
        if(!this.props.username){
            return (
                <PageFrame title="Github Resumé">
                    <Form />
                </PageFrame>
            );
        }
        
        // render resume
        else{
            return (
                <PageFrame title={this.props.name} subtitle={this.props.description}>
                    <Resume />
                </PageFrame>
            );
        }
    }
}

/* Connect with Redux */

const mapStateToProps = (state, ownProps) => {
    let data = state.userData.data;

    if(data){
        return data;
    }else{
        return {
            username: undefined,
            name: undefined,
            description: undefined
        }
    }
}

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactApp);