import React, {useContext} from "react";
import css from "./style.module.css";
import BurgerContext from "../../context/BurgerContext"

const BuildControl = props => {
    const burgerContext = useContext(BurgerContext)
    return (
        <div className={css.BuildControl}>
            <span className={css.Label}>{props.name}</span>
            <button className={css.More} onClick={() => burgerContext.add(props.type)}>Нэмэх</button>
            <button className={css.Less} onClick={() => burgerContext.remove(props.type)} disabled={props.disabled[props.type]}>Хасах</button>
        </div>
    )
}
export default BuildControl;