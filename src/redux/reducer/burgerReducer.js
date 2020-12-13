const initStore = {
    ingredients : {
        cheese : 0,
        meat : 0,
        salad: 0,
        bacon: 0
    },
    ingredientsNames : {
        meat: "Мах",
        cheese: "Бяслаг",
        bacon: "Хиам",
        salad: "Салад"
    },
    totalPrice : 1000,
    purchasing: false,
}
const INGREDIENTS_PRICE = {cheese:200,meat:450,salad:100,bacon:500};

const burgerReducer = (state = initStore, action) => {
    if(action.type === "ADD_INGREDIENT"){
        return {
            ...state,
            ingredients : {
                ...state.ingredients,
                [action.ortsNer] : state.ingredients[action.ortsNer] + 1
            },
            totalPrice : state.totalPrice + INGREDIENTS_PRICE[action.ortsNer],
            purchasing : true
        }
    } else if(action.type === "REMOVE_INGREDIENT"){
        let newPrice = state.totalPrice - INGREDIENTS_PRICE[action.ortsNer]
        return {
            ...state,
            ingredients : {
                ...state.ingredients,
                [action.ortsNer] : state.ingredients[action.ortsNer] - 1
            },
            totalPrice : newPrice,
            purchasing : newPrice > 1000
        }
    }
    return state
}
export default burgerReducer;