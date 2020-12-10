import React from "react";
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
export default OrderSummary;