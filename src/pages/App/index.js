import React, {Component} from "react";
import {Route, Link} from "react-router-dom"
import css from './style.module.css';
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from '../../components/SideBar';
import OrdersPage from "../OrdersPage";
import ShippingPage from "../ShippingPage";

class App extends Component {
  
  state = {
    showSideBar : false,
  }
  toggleSideBar = () => {
    this.setState(prevState => {
      return {showSideBar: !prevState.showSideBar}
    })
  }

  render(){
    return (
          <div>
            <SideBar isShow={this.state.showSideBar} hideSideBar={this.toggleSideBar}/>
            <Toolbar showSideBar={this.toggleSideBar}/>
            <main className={css.Content}>
              <Route path="/" exact component={BurgerPage} />
              <Route path="/ship" component={ShippingPage} />
              <Route path="/orders" component={OrdersPage} />
            </main>
        </div>
    );
  }
}

export default App;
