import axios from "../../axios-orders";

export const loadOrders = () => {
    return function(dispatch, getState){
        // server duudalt ehelsniig systemdee medegdej action tsatsna
        dispatch(loadOrdersStart())

        const userId = getState().loginSignUpReducer.userId
        const token = getState().loginSignUpReducer.token
        // serverees duudna
        axios.get(`/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
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
    return function(dispatch, getState){
        // server duudalt ehelsniig systemdee medegdej action tsatsna
        dispatch(saveOrderStart())

        const token = getState().loginSignUpReducer.token
        // serverees duudna
        axios.post(`/orders.json?auth=${token}`, obj)
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