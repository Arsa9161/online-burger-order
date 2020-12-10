import React, { Component } from "react";
import css from "./style.module.css";
import Burger from "../../components/Burger"
import BuildControls from "../../components/BuildControls"
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Loader from "../../components/Loader"

const INGREDIENTS_PRICE = {cheese:200,meat:450,salad:100,bacon:500};
const INGREDIENTS_NAME = {
    meat: "Мах",
    cheese: "Бяслаг",
    bacon: "Хиам",
    salad: "Салад"
}
class BurgerBuilder extends Component{

    state = {
        // burgeriin ortsnii medeelel end hadgalagdana
        ingredients : {
            cheese : 0,
            meat : 0,
            salad: 0,
            bacon: 0
        },
        totalPrice : 1000,
        purchasing: false, // avch bnuu ugui yu
        confirmOrder: false,
        loading: false
    }
    add = (type) => {
        let obj = {...this.state.ingredients};
        obj[type]++;
        let newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        this.setState({ingredients : obj, totalPrice : newPrice,purchasing: true});
    }
    remove = (type) => {
        if(this.state.ingredients[type] > 0) {
            let obj = {...this.state.ingredients}; 
            obj[type]--;
            let newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
            this.setState({purchasing: newPrice > 1000, ingredients : obj, totalPrice : newPrice});
        }
    }
    showConfirmOrder = () => {
        this.setState({confirmOrder : true})
    }
    hideConfirmOrder = () => {
        this.setState({confirmOrder : false})
    }
    continueOrder = () => {
        this.setState({loading: true});
        let obj = {
            orts: this.state.ingredients,
            une: this.state.totalPrice,
            tuhai: {
                ner: "Arsa",
                dugaar: "99999999",
                hayg: "BZD 13"
            }
        }
        axios.post("/orders.json", obj)
        .then(res => alert("Amjilttai ilgeelee"))
        .catch(err => console.log(err))
        .finally(() => this.setState({loading: false}))
    }
    render(){
        // ortsuud ni 0 bval true buyu ter ortsnii hasah button disable hiihed hereglene, ...
        let disabledIngredients = {...this.state.ingredients};

        for(let key in disabledIngredients){
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }

        return (
            <div>
                <Modal isShow={this.state.confirmOrder} hide={this.hideConfirmOrder}>
                    {this.state.loading ? <Loader /> :
                    <OrderSummary onCancelOrder={this.hideConfirmOrder} onContinueOrder={this.continueOrder} ingredients={this.state.ingredients} ingredientsNames={INGREDIENTS_NAME} price={this.state.totalPrice}/>}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls show={this.showConfirmOrder} ingredientsNames={INGREDIENTS_NAME} purchasing={!this.state.purchasing} price={this.state.totalPrice} disabledIngredients={disabledIngredients} add={this.add} remove={this.remove}/>
            </div>
        );
    }
} 

export default BurgerBuilder;