import React from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";
import { connect } from "react-redux";
import * as actions from "../../redux/action/burgerAction.js";
const BuildControls = props => {
    // ortsuud ni 0 bval true buyu ter ortsnii hasah button disable hiihed hereglene, ...
    let disabledIngredients = {...props.ingredients};

    for(let key in disabledIngredients){
        disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
        <div className={css.BuildControls}>
            <h5>Нийт үнэ {props.price}</h5>
            {Object.keys(props.ingredientsNames).map(el => (
                <BuildControl key={el} disabled={disabledIngredients} type={el} name={props.ingredientsNames[el]} add={props.add} remove={props.remove}/>
            ))}
            <button onClick={props.show} className={css.OrderButton} disabled={!props.purchasing}>Захиалах</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        ingredients : state.burgerReducer.ingredients,
        price : state.burgerReducer.totalPrice,
        ingredientsNames : state.burgerReducer.ingredientsNames,
        purchasing : state.burgerReducer.purchasing,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        add : (ortsNer) => dispatch(actions.addIngredients(ortsNer)),
        remove : (ortsNer) => dispatch(actions.removeIngredients(ortsNer)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);