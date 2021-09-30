import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./HomePage"
import Guest from "./Guest"
import TruckOwner from "./TruckOwner"
import AuthorizedUser from "./AuthorizedUser"


export default function RouterConfig() {

/*
Here we define the route path and its corresponding components
*/
   return (
       //do not delete <Route exact path="/" component={HomePage} />  line
       <BrowserRouter>
           <Switch>
               <Route exact path="/" component={HomePage} />
               <Route path="/guest" component={Guest}/>
               <Route path="/truck_owner" component={TruckOwner}/>
               <Route path="/authorized_user" component={AuthorizedUser}/>

           </Switch>
       </BrowserRouter>
   );

}
