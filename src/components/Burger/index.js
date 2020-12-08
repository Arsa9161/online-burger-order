import React from "react";
import css from "./style.module.css";
import BurgerIngredients from "../BurgerIngredients";

const Burger  = (props) => {
    let content = [];

    let items = Object.entries(props.ingredients);
    // burger iin ortsuudiig bugdiig gargahiin tuld array d hiine
    items.map((el,index) => {
        for(let i = 1;i<=el[1];i++){
            content.push(<BurgerIngredients key={index + "" + i} type={el[0]}/>);
        }
    })
    if(content.length == 0) content = <p>Та орцоо сонгон уу.</p>
    return (
        <div className={css.Burger}>
            <BurgerIngredients type="bread-top"/>
            {content}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
}
export default Burger;