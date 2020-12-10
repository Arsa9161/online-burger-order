import React from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = props => {
    return (
        <div className={css.BuildControls}>
            <h5>Нийт үнэ {props.price}</h5>
            {Object.keys(props.ingredientsNames).map(el => (
                <BuildControl key={el} disabled={props.disabledIngredients} type={el} name={props.ingredientsNames[el]} add={props.add} remove={props.remove}/>
            ))}
            <button onClick={props.show} className={css.OrderButton} disabled={props.purchasing}>Захиалах</button>
        </div>
    )
}

export default BuildControls;