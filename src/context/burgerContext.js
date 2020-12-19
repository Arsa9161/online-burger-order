import React, {useState} from "react"

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
}
export const BurgerStore = props => {
    const [burger, setBurger] = useState(initState)
    return (
        <BurgerContext.Provider value={{burger}}>
            {props.children}
        </BurgerContext.Provider>
    )
} 

export default BurgerContext;