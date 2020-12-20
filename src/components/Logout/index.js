import React, {useContext} from "react";
import { Redirect } from "react-router-dom";
import * as actions from "../../redux/action/loginAction"
import UserContext from "../../context/UserContext"

const Logout = (props) => {
    const userCtx = useContext(UserContext)
    userCtx.logout();
    return (<div> <Redirect to="/"/></div>)
}
const mapDispatchToProps = dispatch => {
    return {
        logout : () => dispatch(actions.logout())
    }
}
export default Logout;