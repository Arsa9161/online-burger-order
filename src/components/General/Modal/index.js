import React from "react";
import css from "./style.module.css";
import Shadow from "../Shadow";

const Modal = props => {
    return (
        <div>
            <Shadow isShow={props.isShow} hide={props.hide}/>
            <div className={css.Modal} style={ {transform : props.isShow ? 'translateY(0)' : 'translateY(-100vh)', opacity : props.isShow ? 1 : 0} }>{props.children}</div>
        </div>
    )
}
export default Modal;
