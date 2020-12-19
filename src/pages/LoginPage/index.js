import React, { useState } from "react";

import css from './style.module.css';
import Button from "../../components/General/Button"
import { connect } from "react-redux";
import * as actions from "../../redux/action/loginAction"
import Loader from "../../components/Loader";
import { Redirect } from "react-router-dom";

const LoginPage = props => {
    const [form, setForm] = useState({
        email : null,
        password : null,
    })

    const changeEmail = e => {
        setForm({email : e.target.value, password : form.password})

    }
    const changePassword = e => {
        setForm({email : form.email, password : e.target.value})
    }

    const login = () => {
        props.login(form.email, form.password);
    }

        return (
            <div>
                {props.loginIn ? <Loader /> : 
                <div>
                    <div className={css.Login}>
                        <input onChange={changeEmail} type="text" name="email" placeholder="John Doe" />
                        <input onChange={changePassword} type="text" name="password" placeholder="123456" />
                        {props.error && <div style={{color: 'red'}}>{props.error.message}</div>}
                        <Button btnType="Success" callBack={login} text="НЭВТРЭХ"/>
                    </div>
                </div>}
            </div>
        )

}
const mapStateToProps = state => {
    console.log( "=============="  + state.loginSignUpReducer.userId);
    return {
        loginIn : state.loginSignUpReducer.loginIn,
        error : state.loginSignUpReducer.error,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login : (email, password) => dispatch(actions.login(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage) 