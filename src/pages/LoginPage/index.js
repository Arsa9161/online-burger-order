import React, { useState, useContext } from "react";

import css from './style.module.css';
import Button from "../../components/General/Button"
import Loader from "../../components/Loader";
import UserContext from "../../context/UserContext"

const LoginPage = props => {
    const [form, setForm] = useState({
        email : null,
        password : null,
    })
    const userCtx = useContext(UserContext);

    const changeEmail = e => {
        setForm({email : e.target.value, password : form.password})

    }
    const changePassword = e => {
        setForm({email : form.email, password : e.target.value})
    }

    const login = () => {
        userCtx.login(form.email, form.password);
    }

        return (
            <div>
                {userCtx.state.loginIn ? <Loader /> : 
                <div>
                    <div className={css.Login}>
                        <input onChange={changeEmail} type="text" name="email" placeholder="John Doe" />
                        <input onChange={changePassword} type="text" name="password" placeholder="123456" />
                        {userCtx.state.error && <div style={{color: 'red'}}>{userCtx.state.error.message}</div>}
                        <Button btnType="Success" callBack={login} text="НЭВТРЭХ"/>
                    </div>
                </div>}
            </div>
        )

}
export default LoginPage