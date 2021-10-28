import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class NotFound extends Component{
    render(){
        return(
            <div>
                <h1>404 - Page Not Found!</h1>
                <Link to ="/">
                    Go To Login Page
                </Link>
            </div>
        );
    }
}
