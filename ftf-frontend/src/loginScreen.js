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
    // handleSubmit(event){
    //     window.confirm("username = " + this.state.username + ', password = ' + this.state.password +  ', roll = ' + this.state.role);
    //     event.preventDefault();

    //     loginUser(this.state.username, this.state.password);
    //     this.props.history.push({
    //         pathname: '/UserDashboard',
    //           state: {user: this.state.username} // your data array of objects
    //       })
    // }
    async handleSubmit(event){
        // window.confirm("username = " + this.state.username + ', password = ' + this.state.password +  ', roll = ' + this.state.role);
        event.preventDefault();

        let response;
        response = await fetch('http://localhost:8080/user', {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                userID: 1,
                username: this.state.username,
                password: this.state.password,
                role: "a"
            })
        }).catch(error =>{
            window.confirm("Problem encountered with fetch operation: " + error.message);
        });
        let responseJSON = await response.json();
        console.log("response = ", responseJSON);
        this.props.history.push({
            pathname: '/UserDashboard',
              state: {user: this.state.username} // your data array of objects
          })
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
                            <label htmlFor="username" id = {styles.usernameLabel}>username:</label>
                            <input type="text" id={styles.username} name="username"  value = {this.state.username} onChange={this.handleChange} required></input>
                        </div>
                        <div className = {styles.passwordField}>
                            <label htmlFor="pass" id = {styles.passwordLabel}>password:</label>
                            <input type="password" id={styles.password} name="password" value = {this.state.password} onChange={this.handleChange} required></input>
                        </div>
                    </div>
                    <div className = {styles.loginBtnClass}>
                        <input type = "submit" value = "LOGIN" id= {styles.loginBtnId}></input>
                    </div>
                </form>
                <a href="/createAccount" id = {styles.createAcntATagId}>
                    <button id = {styles.createAcntId} type = "button" action="/createAccount"> CREATE ACCOUNT </button>
                </a>

                <footer className={styles.footerClass}>
                    <p>Ethan Robinson, Austin Blanchard, Richard Hutcheson, Noah Lambaria</p>
                </footer> 
            </div>
        );
    }
}
export default LoginScreen;