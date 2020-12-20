import React, {useState, useEffect, useContext} from "react";
import {useHistory} from "react-router-dom";

import css from "./style.module.css"
import Button from "../General/Button";
import Loader from "../Loader";
import BurgerContext from "../../context/BurgerContext";
import UserContext from "../../context/UserContext";

const initState = {
    dugaar : null,
    hayg : null,
    ner : null,
}

const ContactData = props => {
    const [user, setUser] = useState(initState)
    const burgerCtx = useContext(BurgerContext)
    const userCtx = useContext(UserContext)
    const history = useHistory();

    useEffect(() =>{
        if(burgerCtx.burger.finished && !burgerCtx.burger.error) {
            burgerCtx.cancelOrder();
            history.replace("/orders")
        }
    })

    const confirmOrder = () => {
        let obj = {
            orts: burgerCtx.burger.ingredients,
            une: burgerCtx.burger.totalPrice,
            tuhai: user,
            userId : userCtx.state.userId
        }
        burgerCtx.saveOrder(obj);
    }
    const changeName = (e) => {
        setUser({ner : e.target.value,hayg : user.hayg, dugaar : user.dugaar})
    }
    const changeHayag = (e) => {
        setUser({ner : user.ner, hayg : e.target.value, dugaar : user.dugaar})
    }
    const changePhone = (e) => {
        setUser({ner : user.ner, hayg : user.hayg, dugaar : e.target.value})
    }

        return (
        <div>
            {burgerCtx.burger.saving ? <Loader /> : 
            <div className={css.ContactData}>
                <input onChange={changeName} type="text" name="name" placeholder="neree oruulna uu"/>
                <input onChange={changeHayag} type="text" name="location" placeholder="hayagaa oruulna uu"/>
                <input onChange={changePhone} type="text" name="phone" placeholder="utsaa oruulna uu"/>
                <Button btnType="Success" callBack={confirmOrder} text="ҮРГЭЛЖЛҮҮЛЭХ"/>
            </div>}
        </div>)

}

export default ContactData; 
