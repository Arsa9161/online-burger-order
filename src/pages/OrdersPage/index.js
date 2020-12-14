import React from "react";
import css from './style.module.css';
import axios from "../../axios-orders";
import Loader from "../../components/Loader";
import Order from "../../components/Order";
import { connect } from "react-redux";
import * as actions from "../../redux/action/orderAction"
class OrdersPage extends React.Component {

    componentDidMount = () => {
        this.props.servereesUnshih();
    }
    render() {
        return (
            <div>
                {this.props.loading ? <Loader /> : this.props.orders.map(el => <Order key={el[0]} order={el[1]} />)}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loading : state.orderReducer.loading,
        orders : state.orderReducer.orders,
        error : state.orderReducer.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        servereesUnshih : () => dispatch(actions.loadOrders())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);