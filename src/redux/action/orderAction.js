import axios from "../../axios-orders";

export const loadOrders = () => {
    return function(dispatch){
        // server duudalt ehelsniig systemdee medegdej action tsatsna
        dispatch(loadOrdersStart())

        // serverees duudna
        axios.get("/orders.json")
        .then(res => dispatch(loadOrdersSuccess(Object.entries(res.data).reverse())))
        .catch(err => dispatch(loadOrdersError(err)))
    }
}
export const loadOrdersStart = () => {
    return {
        type : "LOAD_ORDERS_START"
    }
}
export const loadOrdersSuccess = (orders) => {
    return {
        type : "LOAD_ORDERS_SUCCESS",
        orders
    }
}
export const loadOrdersError = (error) => {
    return {
        type : "LOAD_ORDERS_ERROR",
        error
    }
}

export const saveOrder = (obj) => {
    return function(dispatch){
        // server duudalt ehelsniig systemdee medegdej action tsatsna
        dispatch(saveOrderStart())

        // serverees duudna
        axios.post("/orders.json", obj)
        .then(res => dispatch(saveOrderSuccess())) // WithRouter ashiglasnaar high ordered compenent bolno
        .catch(err => dispatch(saveOrderError(err)))
    }
}
export const saveOrderStart = () => {
    return {
        type : "SAVE_ORDER_START"
    }
}
export const saveOrderSuccess = () => {
    return {
        type : "SAVE_ORDER_SUCCESS"
    }
}
export const saveOrderError = (error) => {
    return {
        type : "SAVE_ORDER_ERROR",
        error
    }
}