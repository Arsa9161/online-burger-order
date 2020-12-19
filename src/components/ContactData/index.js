import React, {useState, useEffect} from "react";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";

import css from "./style.module.css"
import Button from "../General/Button";
import Loader from "../Loader";
import * as actions from "../../redux/action/orderAction";

const initState = {
    dugaar : null,
    hayg : null,
    ner : null,
}

const ContactData = props => {
    const [user, setUser] = useState(initState)

    useEffect(() =>{
        if(props.finished && !props.error) {
            props.cancelOrder();
            props.history.replace("/orders")
        }
    })

    const confirmOrder = () => {
        let obj = {
            orts: props.ingredients,
            une: props.totalPrice,
            tuhai: user,
            userId : props.userId
        }
        props.saveOrder(obj);
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
            {props.loading ? <Loader /> : 
            <div className={css.ContactData}>
                <input onChange={changeName} type="text" name="name" placeholder="neree oruulna uu"/>
                <input onChange={changeHayag} type="text" name="location" placeholder="hayagaa oruulna uu"/>
                <input onChange={changePhone} type="text" name="phone" placeholder="utsaa oruulna uu"/>
                <Button btnType="Success" callBack={confirmOrder} text="ҮРГЭЛЖЛҮҮЛЭХ"/>
            </div>}
        </div>)

}
const mapStateToProps = state => {
    return {
        ingredients : state.burgerReducer.ingredients,
        totalPrice : state.burgerReducer.totalPrice,
        loading : state.orderReducer.newOrder.loading,
        error : state.orderReducer.newOrder.error,
        finished : state.orderReducer.newOrder.finished,
        userId : state.loginSignUpReducer.userId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        saveOrder : (obj) => dispatch(actions.saveOrder(obj)),
        cancelOrder : () => dispatch(actions.cancelOrder())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData)); 
