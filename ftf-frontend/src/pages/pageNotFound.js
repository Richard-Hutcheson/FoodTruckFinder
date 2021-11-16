import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class PageNotFound extends Component{
    render(){
        return(
            <div>
<<<<<<< HEAD
                <h1 style={{textAlign: "center", fontSize: "55px", marginBottom: "0px", textDecoration: "underline"}}><b>404</b></h1>
                <h2 style={{textAlign: "center", fontSize: "40px", marginTop: "0px"}}>PAGE NOT FOUND</h2>
                <div  style={{textAlign: "center"}}><Link to ="/">Go To Login Page</Link></div>
                <footer style={{position: "fixed", width: "100%", bottom: "10px", textAlign: "center"}}>
                    <p>Ethan Robinson, Austin Blanchard, Richard Hutcheson, Noah Lambaria</p>
                </footer> 
=======
                <h1>404 - Page Not Found!</h1>
                <Link to ="/">
                    Go To Login Page
                </Link>
>>>>>>> parent of 18eefb6d... Creating new Frontend folder
            </div>
        );
    }
}
