import React from 'react';
import ReactDOM from 'react-dom';
import LoginScreen from './loginScreen.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserDashboard from './userDashboard.js'
import CreateAccount from './createAccount.js'
import NotFound from './NotFound.js'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
    
    <Router>
        <Switch>
            <Route path="/" exact component={LoginScreen}/>
            <Route path="/UserDashboard" exact component={UserDashboard}/>
            <Route path = "/CreateAccount" exact component = {CreateAccount}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>,
     document.getElementById("root"));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
