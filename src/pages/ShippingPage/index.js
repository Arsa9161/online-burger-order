import React from "react";
import css from "./style.module.css"
import { Route } from "react-router-dom";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from "../../components/ContactData";


class ShippingPage extends React.Component {
    // ene page maani umnu BurgerPage deerh burgeriin ortsiig damjuulan avch uurdeeree dahij haruulj bga
    // state ={
    //     ingredients : {},
    //     totalPrice : null
    // }
    // componentDidMount() {
    //     //  props oor damjin irdeg 3 undsen object iin history goos Url hayagaa avch instance uusgej bn
    //     const params = new URLSearchParams(this.props.location.search)

    //     let ingredients = {} // shine ingredients
    //     let totalPrice;
    //     for( let param of params.entries()) { // params.entries eer Iterable bolgono, Iterable deer for of davtalt ashiglan element bur luu handaj bolno. element ni ["meat", 1] array bn
    //         if(param[0] !== "dun") ingredients[param[0]] = param[1]; 
            
    //         totalPrice = param[1];
    //     }
    //     // {ingredients : ingredients}
    //     this.setState({ingredients,totalPrice}); // herev key : value ijil nertei bval zuvhun neg udaa bichij boldog
    // }
    cancelOrder = () => {
        this.props.history.goBack();
    }
    showContuctData = () => {
        this.props.history.replace("/ship/contuct");
    }
    render() {
        return (
            <div className={css.ShippingPage}>
                <Burger/>
                <Button btnType="Danger" text="ЗАХИАЛГЫГ ЦУЦЛАХ" callBack={this.cancelOrder}/>
                <Button btnType="Success" text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ" callBack={this.showContuctData}/>
                <Route path="/ship/contuct">
                    <ContactData/>
                </Route>
            </div>
        )
    }
}

export default ShippingPage; 