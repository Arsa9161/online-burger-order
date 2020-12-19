import React, {useState} from "react";

import css from './style.module.css';
import Button from "../../components/General/Button"
import { connect } from "react-redux";
import * as actions from "../../redux/action/signUpAction"
import Loader from "../../components/Loader";
import { Redirect } from "react-router-dom";

const SignUpPage  = props => {
    const [email, setEmail] = useState(null);
    const [password1, setPassword1] = useState(null);
    const [password2, setPassword2] = useState(null);
    const [error, setError] = useState(null);

    const signUp = () => {

        if(password1 === password2){
            props.signUp(email, password1);
        } else {
            setError("Таны нууц үгээ буруу орууллаа")
        }
    }

        return (
            <div>
                {props.saving ? <Loader /> : 
                <div>
                    {props.userId && <Redirect to="/"/>}
                    <div className={css.SignUp}>
                        <input onChange={e => setEmail(e.target.value)} type="text" name="email" placeholder="John Doe"/>
                        <input onChange={e => setPassword1(e.target.value)} type="text" name="password1" placeholder="123456" />
                        <input onChange={e => setPassword2(e.target.value)} type="text" name="password2" placeholder="123456"/>
                        <div style={{color: 'red'}}>{error}</div>
                        {props.error && <div style={{color: 'red'}}>{props.error.message}</div>}
                        <Button btnType="Success" callBack={signUp} text="БҮРТГҮҮЛЭХ"/>
                    </div>
                </div>}
            </div>
        )
    
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