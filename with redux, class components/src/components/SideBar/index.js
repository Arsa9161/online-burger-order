import React from "react";
import css from "./style.module.css";
import Logo from "../Logo"
import Menu from "../Menu"
import Shadow from "../General/Shadow";

const SideBar = props => {
    const classes = [css.SideBar]
    if(props.isShow) classes.push(css.Open)
    else classes.push(css.Close);

    return (
        <div onClick={props.hideSideBar}>
            <Shadow isShow={props.isShow}/>
            <div className={classes.join(" ")}>
                <div className={css.Logo}>
                    <Logo />
                </div>
                <Menu />
            </div>
        </div>
    )
}
export default SideBar;