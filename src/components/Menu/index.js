import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = (props) => {
    return (
        <nav className={css.Menu}>
            <MenuItem exact link="/">ШИНЭ ЗАХИАЛГА</MenuItem>
            <MenuItem link="/login">НЭВТРЭХ</MenuItem>
        </nav>
    );
}
export default Menu;