import React from "react";
import css from "./style.module.css";

const Order = props => {

    return <div className={css.Order}>
        <p>Нийт үнэ : {props.order.une}</p>
        <p>Орц : {Object.entries(props.order.orts).map(el => el[0] + " : " + el[1] + " ")}</p>
        <p>Хаяг : {props.order.tuhai.hayg}</p>
        </div>
}
export default Order;