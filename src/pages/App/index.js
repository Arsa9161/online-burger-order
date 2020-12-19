import React, {useState, useEffect, Suspense} from "react";
import {Route, Redirect, Switch} from "react-router-dom"
import css from './style.module.css';
import Toolbar from "../../components/Toolbar";
import SideBar from '../../components/SideBar';
import LoginPage from "../LoginPage"
import Logout from "../../components/Logout";
import { connect } from "react-redux";
import * as actions from "../../redux/action/loginAction"
import {BurgerStore} from "../../context/burgerContext"

const BurgerPage = React.lazy(() => import("../BurgerPage"))

const OrdersPage = React.lazy(() => import("../OrdersPage"))

const ShippingPage = React.lazy(() => import("../ShippingPage"))

const SignUpPage = React.lazy(() => import("../SignUpPage"))

const App = (props) => {
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const refreshToken = localStorage.getItem("refreshToken");
    const expireDateMilliSec = new Date(localStorage.getItem("expireIn")).getTime();
    // const expireDate = new Date(expireDateMilliSec);
    if(token){
      if(new Date().getTime() < expireDateMilliSec){
        props.autoLogin(token, userId, refreshToken);

        props.autoLogoutAfterMillisec(
          expireDateMilliSec - new Date().getTime()
        );
      }
      else {
        props.logout();
      }
    } 
  }, [])

  const toggleSideBar = () => {
    setShowSideBar(prevShowSideBar => !prevShowSideBar)
  }
  // Suspense  - ene dotor bga componentuudad lazy g ashiglasan shuu gedgiig helne
  // fallback - js tataj bh hoorond spinner zergiig haruulah component oo damjuulj ugdug
    return (
          <div>
            <SideBar isShow={showSideBar} hideSideBar={toggleSideBar}/>
            <Toolbar showSideBar={toggleSideBar}/>
            <main className={css.Content}>
              <Suspense fallback={<div>Түр хүлээнэ үү...</div>}> 
                {props.userId ? 
                  <Switch>
                    <Route path="/orders" component={OrdersPage} />
                    <Route path="/logout" component={Logout} />
                    <BurgerStore>
                      <Route path="/ship" component={ShippingPage} />
                      <Route path="/" component={BurgerPage} />
                    </BurgerStore>
                  </Switch> : 
                  <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignUpPage} />
                    <Redirect to="/login"/>
                  </Switch>
                }
              </Suspense>
            </main>
        </div>
    );
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
