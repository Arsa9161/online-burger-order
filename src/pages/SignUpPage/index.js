import React from "react";

import css from './style.module.css';
import Button from "../../components/General/Button"
import { connect } from "react-redux";
import * as actions from "../../redux/action/signUpAction"
import Loader from "../../components/Loader";
import { Redirect } from "react-router-dom";

class SignUpPage extends React.Component {
    state = {
        email : null,
        password1 : null,
        password2 : null,
        error : null
    }
    changeEmail = e => {
        this.setState({email : e.target.value})
    }
    changePassword1 = e => {
        this.setState({password1 : e.target.value})
    }
    changePassword2 = e => {
        this.setState({password2 : e.target.value})
    }
    signUp = () => {
        // alert(this.state.email + " | " + this.state.password1 + " | " + this.state.password2 + " | ");
        if(this.state.password1 === this.state.password2){
            this.props.signUp(this.state.email, this.state.password1);
            this.setState({error : null})
        } else {
            this.setState({error : "Таны нууц үгээ буруу орууллаа"})
        }
    }
    // componentDidUpdate = () => {
    //     this.props.error && this.setState({error : this.props.error.message})
    // }
    render() {
        return (
            <div>
                {this.props.saving ? <Loader /> : 
                <div>
                    {this.props.userId && <Redirect to="/"/>}
                    <div className={css.SignUp}>
                        <input onChange={this.changeEmail} type="text" name="email" placeholder="John Doe"/>
                        <input onChange={this.changePassword1} type="text" name="password1" placeholder="123456" />
                        <input onChange={this.changePassword2} type="text" name="password2" placeholder="123456"/>
                        <div style={{color: 'red'}}>{this.state.error}</div>
                        {this.props.error && <div style={{color: 'red'}}>{this.props.error.message}</div>}
                        <Button btnType="Success" callBack={this.signUp} text="БҮРТГҮҮЛЭХ"/>
                    </div>
                </div>}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        saving : state.loginSignUpReducer.saving,
        error : state.loginSignUpReducer.error,
        userId : state.loginSignUpReducer.userId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signUp : (email, password) => dispatch(actions.signUp(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage) 