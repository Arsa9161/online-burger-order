import React from "react";
import Button from "../General/Button";
import Loader from "../Loader";
import css from "./style.module.css"
import axios from "../../axios-orders";
import {withRouter} from "react-router-dom";

class ContactData extends React.Component {

    state = {
        dugaar : null,
        hayg : null,
        ner : null,
        loading : false
    }
    confirmOrder = () => {
        let newState = {...this.state}
        delete newState.loading;
        let obj = {
            orts: this.props.ingredients,
            une: this.props.totalPrice,
            tuhai: newState
        }
        this.setState({loading: true});
        axios.post("/orders.json", obj)
        .then(res => this.props.history.replace("/orders")) // WithRouter ashiglasnaar high ordered compenent bolno
        .catch(err => console.log(err))
        .finally(() => this.setState({loading: false}))
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
            {this.state.loading ? <Loader /> : 
            <div className={css.ContactData}>
                <input onChange={this.changeName} type="text" name="name" placeholder="neree oruulna uu"/>
                <input onChange={this.changeHayag} type="text" name="location" placeholder="hayagaa oruulna uu"/>
                <input onChange={this.changePhone} type="text" name="phone" placeholder="utsaa oruulna uu"/>
                <Button btnType="Success" callBack={this.confirmOrder} text="ҮРГЭЛЖЛҮҮЛЭХ"/>
            </div>}
        </div>)
    }
}
export default withRouter(ContactData); // high ordered com bolgosnoor undsen 3 object maani com d nemegdene