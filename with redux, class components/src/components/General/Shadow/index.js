import React from "react";
import css from "./style.module.css";

const Shadow = props => props.isShow ? <div className={css.Shadow}  onClick={props.hide}></div> : null;
    
export default Shadow;