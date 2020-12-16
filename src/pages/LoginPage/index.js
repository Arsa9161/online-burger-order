import React from "react";

import css from './style.module.css';
import Button from "../../components/General/Button"
import { connect } from "react-redux";
import * as actions from "../../redux/action/loginAction"
import Loader from "../../components/Loader";
import { Redirect } from "react-router-dom";

class LoginPage extends React.Component {
    state = {
        email : null,
        password : null,
    }
    changeEmail = e => {
        this.setState({email : e.target.value})
    }
    changePassword = e => {
        this.setState({password : e.target.value})
    }

    login = () => {
        // alert(this.state.email + " | " + this.state.password);
        this.props.login(this.state.email, this.state.password);
    }
    render() { // ene redirect useless bgaa shuu
        return (
            <div>
                {this.props.loginIn ? <Loader /> : 
                <div>
                    {this.props.userId && <Redirect to="/orders" />}
                    <div className={css.Login}>
                        <input onChange={this.changeEmail} type="text" name="email" placeholder="John Doe" />
                        <input onChange={this.changePassword} type="text" name="password" placeholder="123456" />
                        {this.props.error && <div style={{color: 'red'}}>{this.props.error.message}</div>}
                        <Button btnType="Success" callBack={this.login} text="НЭВТРЭХ"/>
                    </div>
                </div>}
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        loginIn : state.loginSignUpReducer.loginIn,
        error : state.loginSignUpReducer.error,
        userId : state.loginSignUpReducer.userId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login : (email, password) => dispatch(actions.login(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage) 