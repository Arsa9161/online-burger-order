import React, {Component} from "react";
import {Route, Link, Redirect, Switch} from "react-router-dom"
import css from './style.module.css';
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from '../../components/SideBar';
import OrdersPage from "../OrdersPage";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage"
import SignUpPage from "../SignUpPage"
import Logout from "../../components/Logout";
import { connect } from "react-redux";
import * as actions from "../../redux/action/loginAction"
class App extends Component {
  
  state = {
    showSideBar : false,
  }
  toggleSideBar = () => {
    this.setState(prevState => {
      return {showSideBar: !prevState.showSideBar}
    })
  }
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const refreshToken = localStorage.getItem("refreshToken");
    const expireDateMilliSec = new Date(localStorage.getItem("expireIn")).getTime();
    // const expireDate = new Date(expireDateMilliSec);
    if(token){
      if(new Date().getTime() < expireDateMilliSec){
        this.props.autoLogin(token, userId, refreshToken);

        this.props.autoLogoutAfterMillisec(
          expireDateMilliSec - new Date().getTime()
        );
      }
      else {
        this.props.logout();
      }
    } 
    // setInterval(() => console.log(new Date().getTime() < expireDateMilliSec), 1000) ;
  }
  render(){
    return (
          <div>
            <SideBar isShow={this.state.showSideBar} hideSideBar={this.toggleSideBar}/>
            <Toolbar showSideBar={this.toggleSideBar}/>
            <main className={css.Content}>
              {this.props.userId ? 
                <Switch>
                  <Route path="/ship" component={ShippingPage} />
                  <Route path="/orders" component={OrdersPage} />
                  <Route path="/logout" component={Logout} />
                  <Route path="/" exact component={BurgerPage} />
                  <Redirect to="/orders"/>
                </Switch> : 
                <Switch>
                  <Route path="/login" component={LoginPage} />
                  <Route path="/signup" component={SignUpPage} />
                  <Redirect to="/login"/>
                </Switch>
              }
            </main>
        </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userId : state.loginSignUpReducer.userId
  }
}
const mapDispatchToProps = dispatch => {
  return {
    autoLogin : (token, userId, refreshToken) => dispatch(actions.loginSuccess(token, userId, refreshToken)),
    logout : () => dispatch(actions.logout()),
    autoLogoutAfterMillisec : (msec) => dispatch(actions.logoutAfterMilliSec(msec))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
