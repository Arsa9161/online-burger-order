import React, {useState, useEffect, Suspense, useContext} from "react";
import {Route, Redirect, Switch} from "react-router-dom"
import css from './style.module.css';
import Toolbar from "../../components/Toolbar";
import SideBar from '../../components/SideBar';
import LoginPage from "../LoginPage"
import Logout from "../../components/Logout";
import {BurgerStore} from "../../context/BurgerContext"
import UserContext from "../../context/UserContext"
import {OrderStore} from "../../context/OrderContext"

const BurgerPage = React.lazy(() => import("../BurgerPage"))

const OrdersPage = React.lazy(() => import("../OrdersPage"))

const ShippingPage = React.lazy(() => import("../ShippingPage"))

const SignUpPage = React.lazy(() => import("../SignUpPage"))

const App = (props) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const userCtx = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const refreshToken = localStorage.getItem("refreshToken");
    const expireDate = localStorage.getItem("expireIn");
    const expireDateMilliSec = new Date(localStorage.getItem("expireIn")).getTime();
    // const expireDate = new Date(expireDateMilliSec);
    if(token){
      if(new Date().getTime() < expireDateMilliSec){
        userCtx.autoLogin(token, userId, refreshToken, expireDate);

        userCtx.autoLogoutAfterMillisec(
          expireDateMilliSec - new Date().getTime()
        );
      }
      else {
        userCtx.logout();
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
                <BurgerStore>
                  {userCtx.state.userId ? 
                    <Switch>
                      <Route path="/orders">
                        <OrderStore>
                          <OrdersPage />
                        </OrderStore>
                      </Route>
                      <Route path="/logout" component={Logout} />
                      <Route path="/ship" component={ShippingPage} />
                      <Route path="/" component={BurgerPage} />
                    </Switch> : 
                    <Switch>
                      <Route path="/login" component={LoginPage} />
                      <Route path="/signup" component={SignUpPage} />
                      <Redirect to="/login"/>
                    </Switch>
                  }
                </BurgerStore>
              </Suspense>
            </main>
        </div>
    );
}

export default App;
