import React, {useEffect, useContext} from "react";
import Loader from "../../components/Loader";
import Order from "../../components/Order";
import OrderContext from "../../context/OrderContext"

const OrdersPage = props => {
    const orderCtx = useContext(OrderContext);
 
    useEffect(() => {
        orderCtx.loadOrders();
    }, [])

        return (
            <div>
                {orderCtx.state.loading ? <Loader /> : orderCtx.state.orders.map(el => <Order key={el[0]} order={el[1]} />)}
            </div>
        )

}

export default OrdersPage;