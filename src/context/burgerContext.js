import React, {useState, useContext} from "react"
import axios from "../axios-orders";
import UserContext from "./UserContext"

const BurgerContext = React.createContext();

const initState = {
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
    
    saving : false,
    finished : false,
    error : null
}
const INGREDIENTS_PRICE = {cheese:200,meat:450,salad:100,bacon:500};

export const BurgerStore = props => {
    const [burger, setBurger] = useState(initState)
    const userCtx = useContext(UserContext)

    const add = (ortsNer) => {
        setBurger({
            ...burger,
            ingredients : {
                ...burger.ingredients,
                [ortsNer] : burger.ingredients[ortsNer] + 1
            },
            totalPrice : burger.totalPrice + INGREDIENTS_PRICE[ortsNer],
            purchasing : true
        })
    }
    const remove = (ortsNer) => {
        const newPrice = burger.totalPrice - INGREDIENTS_PRICE[ortsNer]
        setBurger({
            ...burger,
            ingredients : {
                ...burger.ingredients,
                [ortsNer] : burger.ingredients[ortsNer] - 1
            },
            totalPrice : newPrice,
            purchasing : newPrice > 1000
        })
    }

    const saveOrder = (obj) => {
            // server duudalt ehelsniig systemdee medegdej action tsatsna
            setBurger({...burger, saving : true, finished : false});
    
            const token = userCtx.state.token

            // serverees duudna
            axios.post(`/orders.json?auth=${token}`, obj)
            .then(res => setBurger({...burger, saving : false, finished : true, error : null})) 
            .catch(error => setBurger({...burger, saving : false, finished : false, error}))

    }
    const cancelOrder = () => {
        setBurger(initState)
    }
    return (
        <BurgerContext.Provider value={{
            burger,
            add,
            remove,
            saveOrder,
            cancelOrder
        }}>
            {props.children}
        </BurgerContext.Provider>
    )
} 

export default BurgerContext;