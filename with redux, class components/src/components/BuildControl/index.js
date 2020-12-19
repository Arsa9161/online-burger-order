import React from "react";
import css from "./style.module.css";

const BuildControl = props => {

    return (
        <div className={css.BuildControl}>
            <span className={css.Label}>{props.name}</span>
            <button className={css.More} onClick={() => props.add(props.type)}>Нэмэх</button>
            <button className={css.Less} onClick={() => props.remove(props.type)} disabled={props.disabled[props.type]}>Хасах</button>
        </div>
    )
}
export default BuildControl;