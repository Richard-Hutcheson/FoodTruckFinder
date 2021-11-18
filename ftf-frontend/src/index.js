import React from 'react';
import ReactDOM from 'react-dom';
import LoginScreen from './pages/loginScreen.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserDashboard from './pages/userDashboard.js'
import CreateAccount from './pages/createAccount.js'
import PageNotFound from './pages/pageNotFound.js'
import UserManageAccount from './pages/userManageAccnt'
import ManageFoodTrucks from './pages/manageFoodTrucks.js';
import SearchResult from './pages/searchResult.js';
import EditTruck from './pages/editFoodTruck.js';
import AddTruck from './pages/addFoodTruck.js';

ReactDOM.render(
    
    <Router>
        <Switch>
            <Route path="/" exact component={LoginScreen}/>
            <Route path="/UserDashboard" exact component={UserDashboard}/>
            <Route path = "/CreateAccount" exact component = {CreateAccount}/>
            <Route path = "/ManageAccount" exact component = {UserManageAccount}/>
            <Route path = "/ManageFoodTrucks" exact component={ManageFoodTrucks}/>
            <Route path = "/SearchResult" exact component = {SearchResult}/>
            <Route path = "/EditTruck" exact component = {EditTruck}/>
            <Route path = "/AddTruck" exact component = {AddTruck}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>,
     document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
