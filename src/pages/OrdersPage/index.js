import React, {useEffect} from "react";
import { connect } from "react-redux";

import Loader from "../../components/Loader";
import Order from "../../components/Order";
import * as actions from "../../redux/action/orderAction"
const OrdersPage = props => {

    useEffect(() => {
        props.servereesUnshih();
    }, [])

        return (
            <div>
                {props.loading ? <Loader /> : props.orders.map(el => <Order key={el[0]} order={el[1]} />)}
            </div>
        )

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