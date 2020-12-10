import React from "react";
import css from './style.module.css';
import axios from "../../axios-orders";
import Loader from "../../components/Loader";
import Order from "../../components/Order";

class OrdersPage extends React.Component {
    state = {
        orders: [],
        loading: false
    }
    componentDidMount = () => {
        this.setState({loading : true})
        axios.get("/orders.json")
        .then(res => this.setState({orders : Object.entries(res.data).reverse()}))
        .catch(err => console.log(err))
        .finally(() => this.setState({loading : false}))
    }
    render() {
        return (
            // this.state.loading && <Loader /> 
            <div>
                {this.state.loading ? <Loader /> : this.state.orders.map(el => <Order key={el[0]} order={el[1]} />)}
            </div>
        )
    }
}
export default OrdersPage;