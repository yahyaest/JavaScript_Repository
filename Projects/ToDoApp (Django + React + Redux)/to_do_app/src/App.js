import React, { useEffect } from "react";
import {Provider} from "react-redux"
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import store from "./store";
import { loadUser } from "./actions/auth";

import HomePage from "./component/homePage";
import MainPage from "./component/mainPage";
import Navbar from "./component/navbar";
import Login from "./component/login";
import Register from "./component/register";
import TaskForm from "./component/taskForm";
import Alerts from "./component/alerts";
import PrivateRoute from "./component/privateRoute";

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
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <div className="App">
          <Navbar />
          <Alerts />
          <Switch>
            <PrivateRoute path="/to_do" component={MainPage} />
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <PrivateRoute path="/task/new" component={TaskForm} />
            <PrivateRoute path="/task/:id" component={TaskForm} />
            <Route path="/home" component={HomePage}></Route>
          </Switch>
        </div>
      </AlertProvider>
    </Provider>
  );
}

export default App;
