import React, { Component } from 'react';
import styles from './css/login.module.css';
import {loginUser}  from './API/apiCalls.js'

class LoginScreen extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            role: 'a'    
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });
    }
    handleSubmit(event){
        window.confirm("username = " + this.state.username + ', password = ' + this.state.password +  ', roll = ' + this.state.role);
        event.preventDefault();

        loginUser(this.state.username, this.state.password);
        // this.props.history.push({
        //     pathname: '/UserDashboard',
        //     state: {item1: "exodus", item2: "matthew"}
        // });

    }
    
    render(){
        return (
            <div className = {styles.loginBody}>

                <div className = {styles.loginHeader}>
                    <h1 id = {styles.ftfHeader}>FOOD TRUCK FINDER</h1>
                </div>

                <form id = {styles.loginForm} onSubmit={this.handleSubmit}>
                    <div className={styles.loginWrapper}>
                        <div className = {styles.usernameField}>
                            <label for="username" id = {styles.usernameLabel}>username:</label>
                            <input type="text" id={styles.username} name="username"  value = {this.state.username} onChange={this.handleChange} required></input>
                        </div>
                        <div class = {styles.passwordField}>
                            <label for="pass" id = {styles.passwordLabel}>password:</label>
                            <input type="password" id={styles.password} name="password" value = {this.state.password} onChange={this.handleChange} required></input>
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