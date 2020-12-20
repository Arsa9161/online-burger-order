import React, {useContext} from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";
import BurgerContext from "../../context/BurgerContext"

const BuildControls = props => {
    const burgerContext = useContext(BurgerContext)
    // ortsuud ni 0 bval true buyu ter ortsnii hasah button disable hiihed hereglene, ...
    let disabledIngredients = {...burgerContext.burger.ingredients};

    for(let key in disabledIngredients){
        disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
        <div className={css.BuildControls}>
            <h5>Нийт үнэ {burgerContext.burger.totalPrice}</h5>
            {Object.keys(burgerContext.burger.ingredientsNames).map(el => (
                <BuildControl key={el} disabled={disabledIngredients} type={el} name={burgerContext.burger.ingredientsNames[el]}/>
            ))}
            <button onClick={props.show} className={css.OrderButton} disabled={!burgerContext.burger.purchasing}>Захиалах</button>
        </div>
    )
}


export default BuildControls;