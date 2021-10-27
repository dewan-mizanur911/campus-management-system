import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import CustomNavbar from "./Pages/Common/CustomNavbar/CustomNavbar";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return <div className="App">
    <AuthProvider>
    <Router>
      <CustomNavbar></CustomNavbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
  </div>;
}

export default App;
