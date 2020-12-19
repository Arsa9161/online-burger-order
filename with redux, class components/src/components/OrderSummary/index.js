import React from "react";
import { connect } from "react-redux";

// import css from "./style.module.css";
import Button from "../General/Button";

const OrderSummary = props => {
    return (
        <div>
            <h3>Таны захиалга</h3>
            {Object.keys(props.ingredients).map(el => <li key={el}>{props.ingredientsNames[el]} : {props.ingredients[el]}</li>)}
            <strong>Нийт үнэ : {props.price}</strong><br></br>
            <Button text={'ЦУЦЛАХ'} btnType={'Danger'} callBack={props.onCancelOrder}></Button>
            <Button text={'ҮРГЭЛЖЛҮҮЛЭХ'} btnType={'Success'} callBack={props.onContinueOrder}></Button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        ingredients : state.burgerReducer.ingredients,
        ingredientsNames : state.burgerReducer.ingredientsNames,
        price : state.burgerReducer.totalPrice
    }
}
export default connect(mapStateToProps)(OrderSummary);