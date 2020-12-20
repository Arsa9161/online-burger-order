import React, {useState, useContext} from "react";

import css from './style.module.css';
import Button from "../../components/General/Button"
import Loader from "../../components/Loader";
import { Redirect } from "react-router-dom";
import UserContext from "../../context/UserContext"

const SignUpPage  = props => {
    const [email, setEmail] = useState(null);
    const [password1, setPassword1] = useState(null);
    const [password2, setPassword2] = useState(null);
    const [error, setError] = useState(null);

    const userCtx = useContext(UserContext)

    const signUp = () => {

        if(password1 === password2){
            userCtx.signUp(email, password1);
        } else {
            setError("Таны нууц үгээ буруу орууллаа")
        }
    }

        return (
            <div>
                {userCtx.state.savingUser ? <Loader /> : 
                <div>
                    {userCtx.state.userId && <Redirect to="/"/>}
                    <div className={css.SignUp}>
                        <input onChange={e => setEmail(e.target.value)} type="text" name="email" placeholder="John Doe"/>
                        <input onChange={e => setPassword1(e.target.value)} type="text" name="password1" placeholder="123456" />
                        <input onChange={e => setPassword2(e.target.value)} type="text" name="password2" placeholder="123456"/>
                        <div style={{color: 'red'}}>{error}</div>
                        {userCtx.state.error && <div style={{color: 'red'}}>{userCtx.state.error.message}</div>}
                        <Button btnType="Success" callBack={signUp} text="БҮРТГҮҮЛЭХ"/>
                    </div>
                </div>}
            </div>
        )
    
}

export default SignUpPage 