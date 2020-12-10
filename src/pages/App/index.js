import React, {Component} from "react";
import {Route, BrowserRouter , Link} from "react-router-dom"
import css from './style.module.css';
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from '../../components/SideBar';
import OrdersPage from "../OrdersPage";

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
      <BrowserRouter>
          <div>
            <SideBar isShow={this.state.showSideBar} hideSideBar={this.toggleSideBar}/>
            <Toolbar showSideBar={this.toggleSideBar}/>
            <main className={css.Content}>
              <Route path="/" exact component={BurgerPage} />
              <Route path="/orders" exact component={OrdersPage} />
              {/* <BurgerPage /> */}
              {/* <OrdersPage /> */}
            </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
