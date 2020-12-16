const initState = {
    orders: [],
    loading: false,
    errors : null,

    newOrder : {
        loading : false,
        finished : false,
        error : null
    }
}

const orderReducer = (state = initState, action) => {
    switch(action.type) {
        case "LOAD_ORDERS_START" :
            return {
                ...state,
                loading : true
            };
        case "LOAD_ORDERS_SUCCESS" :
            return {
                ...state,
                loading : false,
                orders : action.orders
            };
        case "LOAD_ORDERS_ERROR" :
            return {
                ...state,
                loading : false,
                errors : action.errors
            };
            case "SAVE_ORDER_START" :
                return {
                    ...state,
                    newOrder : {
                        ...state.newOrder,
                        loading : true,
                        finished : false
                    }
                };
            case "SAVE_ORDER_SUCCESS" :
                return {
                    ...state,
                    newOrder : {
                        ...state.newOrder,
                        loading : false,
                        finished : true,
                        error : null
                    }
                };
            case "SAVE_ORDER_ERROR" :
                return {
                    ...state,
                    newOrder : {
                        ...state.newOrder,
                        loading : false,
                        finished : false,
                        error : action.error
                    }
                };
            case "LOGOUT" : 
                return {
                    ...initState
                }
        default : return state;
    }
}

export default orderReducer;