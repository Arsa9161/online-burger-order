import React, { Component } from "react";
import css from "./style.module.css";
import Burger from "../../components/Burger"

class BurgerBuilder extends Component{

    state = {
        // burgeriin ortsnii medeelel end hadgalagdana
        ingredients : {
            cheese : 0,
            meat : 0,
            salad: 0,
            bacon: 0
        }
    }
    render(){
        return (
            <div>
                <Burger ingredients={this.state.ingredients}/>
            </div>
        );
    }
} 

export default BurgerBuilder;