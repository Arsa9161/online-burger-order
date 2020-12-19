import React, { Component, useState } from "react";
import css from "./style.module.css";
import Burger from "../../components/Burger"
import BuildControls from "../../components/BuildControls"
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Loader from "../../components/Loader"

const BurgerBuilder = props => {
    const [confirmOrder, setConfirmOrder] = useState(false);
    const [loading, setLoading] = useState(false)

    const showConfirmOrder = () => {
        setConfirmOrder(true)
    }
    const hideConfirmOrder = () => {
        setConfirmOrder(false)
    }
    const continueOrder = () => {

        props.history.push({
            pathname : "/ship",
        });
        hideConfirmOrder();
    }
        return (
            <div>
                <Modal isShow={confirmOrder} hide={hideConfirmOrder}>
                    {loading ? <Loader /> :
                    <OrderSummary onCancelOrder={hideConfirmOrder} onContinueOrder={continueOrder}/>}
                </Modal>
                <Burger/>
                <BuildControls show={showConfirmOrder}/>
            </div>
        );
} 

export default BurgerBuilder;