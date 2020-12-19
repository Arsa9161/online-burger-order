import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import HamburgerMenu from "../HamburgerMenu";

const Toolbar = (props) => {
    return (
        <header className={css.Toolbar}>
            <HamburgerMenu callBack={props.showSideBar}/>
            <Logo />
            <div className={css.HideOnMobile}>
                <Menu />
            </div>
        </header>
    );
}
export default Toolbar;