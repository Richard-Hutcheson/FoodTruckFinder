import React from 'react';
import Link from '@material-ui/core/Link';


require('dotenv').config();

function HomePage() {
    return (
        <body class = 'login-body'>
            
            <div class = "login-header">
                <h1 id = 'ftf-header'>FOOD TRUCK FINDER</h1>
            </div>


            <div class = "login-wrapper">
                <div class = "username-field">
                    <label for="username" id = "username-label">username:</label>
                    <input type="text" id="username" name="username"></input>
                </div>
                <div class = "password-field">
                    <label for="pass" id = "password-label">password:</label>
                    <input type="password" id="pass" name="password" minlength="8" required></input>
                </div>
            </div>

            <div class = 'login-btn-class'>
                <Link href="/dashboard">
                    <a id = 'login-btn-id'>login</a>
                </Link>
            </div>
            <footer>
                <p>Ethan Robinson, Austin Blanchard, Richard Hutcheson, Noah Lambaria</p>
            </footer> 
        </body>

    )
}

export default HomePage