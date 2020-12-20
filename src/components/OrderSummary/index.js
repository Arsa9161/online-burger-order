import React, {useContext} from "react";
import BurgerContext from "../../context/BurgerContext"
import Button from "../General/Button";

const OrderSummary = props => {
    const burgerContext = useContext(BurgerContext);

    return (
        <div>
            <h3>Таны захиалга</h3>
            {Object.keys(burgerContext.burger.ingredients).map(el => <li key={el}>{burgerContext.burger.ingredientsNames[el]} : {burgerContext.burger.ingredients[el]}</li>)}
            <strong>Нийт үнэ : {burgerContext.burger.totalPrice}</strong><br></br>
            <Button text={'ЦУЦЛАХ'} btnType={'Danger'} callBack={props.onCancelOrder}></Button>
            <Button text={'ҮРГЭЛЖЛҮҮЛЭХ'} btnType={'Success'} callBack={props.onContinueOrder}></Button>
        </div>
    )
}

export default OrderSummary;