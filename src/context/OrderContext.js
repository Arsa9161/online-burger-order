import React, {useState, useContext} from 'react'
import axios from "../axios-orders";
import UserContext from "./UserContext"

const OrderCtx = React.createContext();

const initState = {
    orders: [],
    loading: false,
    error : null
}

export const OrderStore = (props) => {
    const [state, setState] = useState(initState);
    const userCtx = useContext(UserContext)

    const loadOrders = () => {
            // server duudalt ehelsniig systemdee medegdej action tsatsna
            setState({...state, loading : true})
    
            const userId = userCtx.state.userId
            const token = userCtx.state.token
            // serverees duudna
            axios.get(`/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
            .then(res => setState({...state, loading : false, error : null, orders : Object.entries(res.data).reverse()}))
            .catch(error => setState({...state, loading : false, error}))
    }
    return (
        <OrderCtx.Provider value={{
            state,
            loadOrders
        }}>
            {props.children}
        </OrderCtx.Provider>
    )
}
export default OrderCtx;