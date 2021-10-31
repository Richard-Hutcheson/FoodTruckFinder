import React, { Component } from 'react';
import {getUserID} from '../API/apiCalls';
import {Link} from "react-router-dom";
import styles from '../css/userDashboard.module.css';
import downArrowImg from '../assets/down_arrow.svg';


class UserDashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: '<unknown>',
            userID: 'fetching...'
        }
        if (this.props.location.state != null){
            this.state.user = this.props.location.state.user;
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount(){
        // const requestOptions = {
        //     method: "GET",
        //     headers:{
        //         "Content-Type": "application/json",
        //         "Accept": "application/json",
        //         "Access-Control-Allow-Origin": "*"
        //     }
        // };
        // const response = await fetch(`http://localhost:8080/findUser/${this.state.user}`, requestOptions).catch(error =>{
        //     window.confirm("Problem encountered with fetch operation: " + error.message);
        // });
        // const data = await response.json();
        // if (data != null){
        //     this.setState({userID: data.id})
        // }else{
        //     this.setState({userID: "could not be found"})    
        // }
        let response = await getUserID(this.state.user);
        if (response == null){
            response = "unable to retrieve";
        }
        this.setState({userID: response});
    }

    render(){  
        return (
            <div>
                <div className = {styles.navbar}>
                    <div className={styles.dropdownDiv}>
                        <button className={styles.dropbtn}>{this.state.user}</button>
                        <div className={styles.dropdownContent}>
                            <a href="#">Manage Account</a>
                        </div>
                    </div>
                    <a href="/" className = {styles.logout}>logout</a>
                </div>
                <p>your user id = {this.state.userID}</p>
            </div>
        );

    }
}
export default UserDashboard;