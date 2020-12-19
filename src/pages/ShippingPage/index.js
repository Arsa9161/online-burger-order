import React from "react";
import css from "./style.module.css"
import { Route } from "react-router-dom";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from "../../components/ContactData";


const ShippingPage = props => {
    // ene page maani umnu BurgerPage deerh burgeriin ortsiig damjuulan avch uurdeeree dahij haruulj bga
    // state ={
    //     ingredients : {},
    //     totalPrice : null
    // }
    // componentDidMount() {
    //     //  props oor damjin irdeg 3 undsen object iin history goos Url hayagaa avch instance uusgej bn
    //     const params = new URLSearchParams(props.location.search)

    //     let ingredients = {} // shine ingredients
    //     let totalPrice;
    //     for( let param of params.entries()) { // params.entries eer Iterable bolgono, Iterable deer for of davtalt ashiglan element bur luu handaj bolno. element ni ["meat", 1] array bn
    //         if(param[0] !== "dun") ingredients[param[0]] = param[1]; 
            
    //         totalPrice = param[1];
    //     }
    //     // {ingredients : ingredients}
    //     setState({ingredients,totalPrice}); // herev key : value ijil nertei bval zuvhun neg udaa bichij boldog
    // }
    const cancelOrder = () => {
        props.history.goBack();
    }
    const showContuctData = () => {
        props.history.replace("/ship/contuct");
    }

        return (
            <div className={css.ShippingPage}>
                <Burger/>
                <Button btnType="Danger" text="ЗАХИАЛГЫГ ЦУЦЛАХ" callBack={cancelOrder}/>
                <Button btnType="Success" text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ" callBack={showContuctData}/>
                <Route path="/ship/contuct">
                    <ContactData/>
                </Route>
            </div>
        )
    
}

export default ShippingPage; 