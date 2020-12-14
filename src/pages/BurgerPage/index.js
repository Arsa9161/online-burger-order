import React, { Component } from "react";
import css from "./style.module.css";
import Burger from "../../components/Burger"
import BuildControls from "../../components/BuildControls"
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Loader from "../../components/Loader"

class BurgerBuilder extends Component{

    state = {
        confirmOrder: false,
        loading: false
    }
    showConfirmOrder = () => {
        this.setState({confirmOrder : true})
    }
    hideConfirmOrder = () => {
        this.setState({confirmOrder : false})
    }
    continueOrder = () => {

        // let arr = [];
        // for(let property in this.state.ingredients){
        //     arr.push(property + "=" + this.state.ingredients[property]);
        // }
        // arr.push("dun=" + this.state.totalPrice)

        this.props.history.push({
            pathname : "/ship",
            // search : arr.join("&")
        });
        this.hideConfirmOrder();
    }
    render(){

        return (
            <div>
                <Modal isShow={this.state.confirmOrder} hide={this.hideConfirmOrder}>
                    {this.state.loading ? <Loader /> :
                    <OrderSummary onCancelOrder={this.hideConfirmOrder} onContinueOrder={this.continueOrder}/>}
                </Modal>
                <Burger/>
                <BuildControls show={this.showConfirmOrder}/>
            </div>
        );
    }
} 

export default BurgerBuilder;