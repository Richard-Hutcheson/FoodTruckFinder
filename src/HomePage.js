import React, { Component } from 'react';
import './App.css';
class HomePage extends Component {
  
/*
Now the HomePage Component just acts as an entry point for other components/pages
*/
   render() {
       return (
         <div>
           <h2>Food Truck Finder Home Page</h2>
           <div>
             <nav>
                 <a href = "\guest">Guest</a>
                 <br/>
                 <a href = "\truck_owner">Truck Owner</a>
                 <br/>
                 <a href = "\authorized_user">Authorized User</a>

             </nav>
           </div>
         </div>
           );
   }
}
export default HomePage;

