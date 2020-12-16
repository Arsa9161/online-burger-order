import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../redux/action/loginAction"


const Logout = (props) => {
    props.logout();
    return (<div> <Redirect to="/"/></div>)
}
const mapDispatchToProps = dispatch => {
    return {
        logout : () => dispatch(actions.logout())
    }
}
export default connect(null, mapDispatchToProps)(Logout);