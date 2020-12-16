import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";
import {connect} from "react-redux";

const Menu = (props) => {
    return (
        <nav className={css.Menu}>
            {props.userId ? 
                <React.Fragment>
                    <MenuItem exact link="/">ШИНЭ ЗАХИАЛГА</MenuItem>
                    <MenuItem link="/orders">ЗАХИАЛГУУД</MenuItem>
                    <MenuItem link="/logout">ГАРАХ</MenuItem>
                </React.Fragment>
            : // else
                <React.Fragment>
                    <MenuItem link="/login">НЭВТРЭХ</MenuItem>
                    <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
                </React.Fragment>
            }
        </nav>
    );
}
const mapStateToProps = state => {
    return {
      userId : state.loginSignUpReducer.userId
    }
  }
 export default connect(mapStateToProps)(Menu);
