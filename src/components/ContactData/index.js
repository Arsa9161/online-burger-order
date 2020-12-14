import React from "react";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";

import css from "./style.module.css"
import Button from "../General/Button";
import Loader from "../Loader";
import * as actions from "../../redux/action/orderAction";

class ContactData extends React.Component {

    state = {
        dugaar : null,
        hayg : null,
        ner : null,
    }
    componentDidUpdate = () => {
        if(this.props.finished && !this.props.error) {
            this.props.history.replace("/orders")
        }
    }
    confirmOrder = () => {
        let newState = {...this.state}
        delete newState.loading;
        let obj = {
            orts: this.props.ingredients,
            une: this.props.totalPrice,
            tuhai: newState
        }
        this.props.saveOrder(obj);
        // this.setState({loading: true});
        // axios.post("/orders.json", obj)
        // .then(res => this.props.history.replace("/orders")) // WithRouter ashiglasnaar high ordered compenent bolno
        // .catch(err => console.log(err))
        // .finally(() => this.setState({loading: false}))
    }
    changeName = (e) => {
        this.setState({ner : e.target.value});
    }
    changeHayag = (e) => {
        this.setState({hayg : e.target.value});
    }
    changePhone = (e) => {
        this.setState({dugaar : e.target.value});
    }
    render() {

        return (
        <div>
            {this.props.loading ? <Loader /> : 
            <div className={css.ContactData}>
                <input onChange={this.changeName} type="text" name="name" placeholder="neree oruulna uu"/>
                <input onChange={this.changeHayag} type="text" name="location" placeholder="hayagaa oruulna uu"/>
                <input onChange={this.changePhone} type="text" name="phone" placeholder="utsaa oruulna uu"/>
                <Button btnType="Success" callBack={this.confirmOrder} text="ҮРГЭЛЖЛҮҮЛЭХ"/>
            </div>}
        </div>)
    }
}
const mapStateToProps = state => {
    return {
        ingredients : state.burgerReducer.ingredients,
        totalPrice : state.burgerReducer.totalPrice,
        loading : state.orderReducer.newOrder.loading,
        error : state.orderReducer.newOrder.error,
        finished : state.orderReducer.newOrder.finished
    }
}
const mapDispatchToProps = dispatch => {
    return {
        saveOrder : (obj) => dispatch(actions.saveOrder(obj))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData)); 
