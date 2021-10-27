import React, { Component } from 'react';
import styles from './css/login.module.css'

class LoginScreen extends Component{
    render(){
        return (
            <div className = {styles.loginBody}>

                <div className = {styles.loginHeader}>
                    <h1 id = {styles.ftfHeader}>FOOD TRUCK FINDER</h1>
                </div>

                <form id = {styles.loginForm} action="/dashboard" method="POST">
                    <div className={styles.loginWrapper}>
                        <div className = {styles.usernameField}>
                            <label for="username" id = {styles.usernameLabel}>username:</label>
                            <input type="text" id={styles.username} name="username"  required></input>
                        </div>
                        <div class = {styles.passwordField}>
                            <label for="pass" id = {styles.passwordLabel}>password:</label>
                            <input type="password" id={styles.password} name="password"  required></input>
                        </div>
                    </div>
                    <div class = {styles.loginBtnClass}>
                        <input type = "submit" value = "LOGIN" id= {styles.loginBtnId}></input>
                    </div>
                </form>
                <a href="/createAccount" id = {styles.createAcntATagId}>
                    <button id = {styles.createAcntId} type = "button" action="/createAccount"> CREATE ACCOUNT </button>
                </a>
                {/* <div class = 'login-btn-class'>
                    <Link href="/dashboard">
                        <a id = 'login-btn-id'>login</a>
                    </Link>
                </div> */}
                <footer className={styles.footerClass}>
                    <p>Ethan Robinson, Austin Blanchard, Richard Hutcheson, Noah Lambaria</p>
                </footer> 
            </div>
        );
    }
}
export default LoginScreen;