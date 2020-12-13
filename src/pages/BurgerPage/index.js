import React, { Component } from "react";
import css from "./style.module.css";
import Burger from "../../components/Burger"
import BuildControls from "../../components/BuildControls"
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Loader from "../../components/Loader"


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
    // add = (type) => {
    //     let obj = {...this.state.ingredients};
    //     obj[type]++;
    //     let newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
    //     this.setState({ingredients : obj, totalPrice : newPrice,purchasing: true});
    // }
    // remove = (type) => {
    //     if(this.state.ingredients[type] > 0) {
    //         let obj = {...this.state.ingredients}; 
    //         obj[type]--;
    //         let newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
    //         this.setState({purchasing: newPrice > 1000, ingredients : obj, totalPrice : newPrice});
    //     }
    // }
    showConfirmOrder = () => {
        this.setState({confirmOrder : true})
    }
    hideConfirmOrder = () => {
        this.setState({confirmOrder : false})
    }
    continueOrder = () => {

        let arr = [];
        for(let property in this.state.ingredients){
            arr.push(property + "=" + this.state.ingredients[property]);
        }
        arr.push("dun=" + this.state.totalPrice)

        this.props.history.push({
            pathname : "/ship",
            search : arr.join("&")
        });
        this.hideConfirmOrder();
    }
    render(){

        return (
            <div>
                <Modal isShow={this.state.confirmOrder} hide={this.hideConfirmOrder}>
                    {this.state.loading ? <Loader /> :
                    <OrderSummary onCancelOrder={this.hideConfirmOrder} onContinueOrder={this.continueOrder} ingredients={this.state.ingredients} ingredientsNames={INGREDIENTS_NAME} price={this.state.totalPrice}/>}
                </Modal>
                <Burger/>
                <BuildControls show={this.showConfirmOrder}/>
            </div>
        );
    }
} 

export default BurgerBuilder;