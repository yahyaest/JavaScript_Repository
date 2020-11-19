import React , { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { loadUser } from "./actions/auth";
import store from "./store";
import Admin from "./components/admin/admin";
import HardwareList from "./components/admin/hardwareList";
import UsersList from "./components/admin/usersList";
import InfoForm from "./components/admin/infoForm";
import UserInfoForm from "./components/admin/userInfoForm";
import Home from "./components/user/home";
import Components from "./components/user/components";
import Component from "./components/user/component";
import ComponentPage from './components/user/componentPage';
import Favourites from './components/user/favourites';
import Login from './components/user/login';
import Register from './components/user/register';
import Alerts from "./common/alerts";
import "./App.css";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <div className="App">
        <Alerts />
        <Switch>
          <Route
            path="/components/:component/:id/:name"
            component={ComponentPage}
          ></Route>
          <Route path="/components/:component" component={Component}></Route>
          <Route
            path="/admin-space/components/:component"
            component={HardwareList}
          ></Route>
          <Route path="/user/form/:id" component={UserInfoForm}></Route>
          <Route path="/user/form/new" component={UserInfoForm}></Route>
          <Route path="/:component/form/:id" component={InfoForm}></Route>
          <Route path="/:component/form/new" component={InfoForm}></Route>
          <Route path="/admin-space/users" component={UsersList}></Route>
          <Route path="/admin-space" component={Admin}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/components" component={Components}></Route>
          <Route path="/favourites" component={Favourites}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Redirect from="/" exact to="/home"></Redirect>
        </Switch>
      </div>
    </AlertProvider>
  );
}

export default App;
